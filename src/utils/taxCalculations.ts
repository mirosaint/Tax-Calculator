
export const calculateRyczaltTax = (income: number, ryczaltRate: number): number => {
	
	const ryczaltTax = income * ryczaltRate;
	let healthContribution = 0;

	if(ryczaltTax <= 60000) {
		healthContribution = 12 * 419.46;
	}
	if(ryczaltTax > 60000 && ryczaltTax <= 300000) {
		healthContribution = 12 * 699.11;
	}
	if(ryczaltTax > 300000) {
		healthContribution = 12 * 1258.39;
	}

	return ryczaltTax + healthContribution;
}

export const calculateFlatTax = (income: number, costs: number): number => {
	let flatIncome = income - costs;
	let flatTax = flatIncome * 0.19;
	let flatHealthContribution = Math.max(flatIncome * 0.049, 12 * 381.78);

	if(flatIncome < 0) {
		flatTax = 0;	
	}
	if(flatIncome > 1000000) {
		flatTax += (income - 1000000) * 0.04;
	}

	return flatTax + flatHealthContribution;
}

export const calculateScaleTax = (income: number, costs: number): number => {
	
	let scaleTax = 0;
	let scaleIncome = (income - costs) - 30000;
	let scaleHealthContribution = Math.max(scaleIncome * 0.09, 12 * 381.78);

	if(scaleIncome < 0) {
		scaleTax = 0;
	}	
	if(scaleIncome > 0 && scaleIncome <= 120000) {
		scaleTax = scaleIncome * 0.12;
	}	
	if(scaleIncome > 120000 && income <= 1000000) {
		scaleTax = ((scaleIncome - 120000) * 0.32) + 90000 * 0.12;
	} 
	if(scaleIncome > 1000000) {
		scaleTax = ((scaleIncome - 120000) * 0.32) + 90000 * 0.12 + ((scaleIncome - 1000000) * 0.04);
	}

	return scaleTax + scaleHealthContribution;
}