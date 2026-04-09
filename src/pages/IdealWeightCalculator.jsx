import React from 'react';
import IdealWeightUI from '../components/calculators/IdealWeightUI';
import CalculatorContent from '../components/CalculatorContent';

const IdealWeightCalculator = () => {
    const calculatorProps = {
        title: "Ideal Body Weight Calculator",
        description: "Calculate your ideal body weight based on clinically validated formulas such as Devine, Robinson, and Miller. Understand your healthy weight range according to Asian BMI standards.",
        formula: "Devine (Male) = 50kg + 2.3kg per inch over 5ft\nDevine (Female) = 45.5kg + 2.3kg per inch over 5ft",
        example: "A 5'7\" male has an Ideal Body Weight (Devine) of ~66.1 kg. His healthy BMI range (18.5-22.9) is ~59kg to ~73kg.",
        mistakes: [
            "Confusing ideal weight with aesthetic goals (bodybuilding).",
            "Not accounting for extreme height (formulas work best for 5ft - 7ft).",
            "Comparing weight without considering body fat percentage.",
            "Using Western BMI standards (Normal up to 25) for Asian body types."
        ],
        faqs: [
            {
                question: "Which formula is the most accurate?",
                answer: "The Devine formula is the most widely used in clinical settings for medicinal dosing. However, the Miller and Robinson formulas are also respected and provide localized statistical averages."
            },
            {
                question: "Why is the Ideal Weight based on height?",
                answer: "Height is the strongest structural predictor of the mass an individual's frame can support while maintaining low metabolic risk."
            },
            {
                question: "What if I am heavier than my ideal weight but have low body fat?",
                answer: "These formulas do not distinguish between muscle and fat. If you have significant muscle mass (e.g., an athlete), your 'ideal' weight will be higher than what these formulas suggest."
            },
            {
                question: "Are these standards different for Indians?",
                answer: "Yes. While the Devine formula is global, the health 'range' provided here follows the Asian BMI standard (Normal: 18.5 - 22.9) because Indians have a higher risk of metabolic disease at lower weights compared to Westerners."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <IdealWeightUI />
        </CalculatorContent>
    );
};

export default IdealWeightCalculator;
