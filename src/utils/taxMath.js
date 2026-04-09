/**
 * Centralized Indian Tax Calculation Engine (FY 2024-25 / 2025-26)
 * Based on Budget 2024 Amendments
 */

export const TAX_CONSTANTS = {
    STD_DEDUCTION_NEW: 75000,
    STD_DEDUCTION_OLD: 50000,
    REBATE_LIMIT_NEW: 700000,
    REBATE_LIMIT_OLD: 500000,
    CESS_RATE: 0.04
};

/**
 * Calculates tax based on the New Regime (Post-Budget 2024)
 * @param {number} grossIncome 
 * @returns {object} { taxableIncome, taxBeforeCess, cess, totalTax }
 */
export const calculateNewRegimeTax = (grossIncome) => {
    const taxableIncome = Math.max(0, grossIncome - TAX_CONSTANTS.STD_DEDUCTION_NEW);
    let tax = 0;

    // Budget 2024 New Slabs
    if (taxableIncome <= 300000) {
        tax = 0;
    } else if (taxableIncome <= 700000) {
        tax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 1000000) {
        tax = 20000 + (taxableIncome - 700000) * 0.10;
    } else if (taxableIncome <= 1200000) {
        tax = 50000 + (taxableIncome - 1000000) * 0.15;
    } else if (taxableIncome <= 1500000) {
        tax = 80000 + (taxableIncome - 1200000) * 0.20;
    } else {
        tax = 140000 + (taxableIncome - 1500000) * 0.30;
    }

    // Section 87A Rebate for New Regime
    if (taxableIncome <= TAX_CONSTANTS.REBATE_LIMIT_NEW) {
        tax = 0;
    }

    const cess = tax * TAX_CONSTANTS.CESS_RATE;
    return {
        taxableIncome,
        taxBeforeCess: tax,
        cess,
        totalTax: tax + cess
    };
};

/**
 * Calculates tax based on the Old Regime
 * @param {number} grossIncome 
 * @param {number} totalDeductions (80C, 80D, HRA etc) 
 * @returns {object} { taxableIncome, taxBeforeCess, cess, totalTax }
 */
export const calculateOldRegimeTax = (grossIncome, totalDeductions = 0) => {
    const taxableIncome = Math.max(0, grossIncome - TAX_CONSTANTS.STD_DEDUCTION_OLD - totalDeductions);
    let tax = 0;

    // Old Regime Slabs
    if (taxableIncome <= 250000) {
        tax = 0;
    } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.20;
    } else {
        tax = 112500 + (taxableIncome - 1000000) * 0.30;
    }

    // Section 87A Rebate for Old Regime
    if (taxableIncome <= TAX_CONSTANTS.REBATE_LIMIT_OLD) {
        tax = 0;
    }

    const cess = tax * TAX_CONSTANTS.CESS_RATE;
    return {
        taxableIncome,
        taxBeforeCess: tax,
        cess,
        totalTax: tax + cess
    };
};
