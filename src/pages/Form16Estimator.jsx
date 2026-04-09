import React from 'react';
import Form16EstimatorUI from '../components/calculators/Form16EstimatorUI';
import CalculatorContent from '../components/CalculatorContent';

const Form16Estimator = () => {
    const calculatorProps = {
        title: "Form 16 Tax Estimator & Refund Calculator",
        description: "Reconstruct your Form 16 Part B to estimate your tax refund or final liability. Compare Old vs New regimes, calculate HRA and standard deductions, and verify if your employer has deducted the correct TDS.",
        formula: "Net Tax = (Gross Salary - Exemptions - Deductions) x Tax Rate + 4% Cess",
        example: "If your Gross Salary is ₹15L and TDS deducted is ₹1.2L, you can use this tool to see if you should have chosen the New Regime to get a refund or if you owe more tax.",
        mistakes: [
            "Wait for the actual Form 16 release in June to plan your tax-saving investments (it's too late).",
            "Not checking your Form 26AS/AIS to ensure the TDS matches your pay slips.",
            "Choosing the wrong regime at the start of the year and not optimizing before the March deadline.",
            "Assuming your company accounts for all your external income (Rent, Dividend, etc.) in Form 16."
        ],
        faqs: [
            {
                question: "What is the difference between Part A and Part B of Form 16?",
                answer: "Part A is a summary of the quarterly tax deducted (TDS) by your employer and deposited with the government. Part B is the detailed computation of your taxable income, exemptions, and final tax liability."
            },
            {
                question: "When do I get my Form 16 from my employer?",
                answer: "By law, employer must issue Form 16 by June 15th of the assessment year (the year following the financial year)."
            },
            {
                question: "How do I calculate HRA exemption for Form 16?",
                answer: "HRA exemption is the minimum of: 1. Actual HRA received, 2. Rent paid minus 10% of basic salary, 3. 50% of basic salary (for metro cities) or 40% (non-metro)."
            },
            {
                question: "Can I claim deductions not mentioned in my Form 16?",
                answer: "Yes. While filing your Income Tax Return (ITR), you can claim deductions (like 80G for donations or 80D for medical insurance) even if you didn't declare them to your HR department earlier."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <Form16EstimatorUI />
        </CalculatorContent>
    );
};

export default Form16Estimator;
