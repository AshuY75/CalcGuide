import React from 'react';
import BodyFatUI from '../components/calculators/BodyFatUI';
import CalculatorContent from '../components/CalculatorContent';

const BodyFatCalculator = () => {
    const calculatorProps = {
        title: "Body Fat Percentage Calculator",
        description: "Estimate your body fat percentage using the clinically-validated US Navy Circumference Method. Learn about body composition categories and calculate your lean body mass vs fat mass.",
        formula: "Men (Metric) = 495 / (1.0324 - 0.19077 × log10(waist - neck) + 0.15456 × log10(height)) - 450",
        example: "A male with 175cm height, 38cm neck, and 85cm waist has an estimated body fat of ~16.8%. This falls in the 'Fitness' category.",
        mistakes: [
            "Measuring the waist at the narrowest point instead of the navel (standard for this method).",
            "Measuring after a large meal (distends the waist).",
            "Measuring with clothes on (leads to significant inaccuracy).",
            "Pulling the measuring tape too tight (indents the skin)."
        ],
        faqs: [
            {
                question: "How accurate is the US Navy method?",
                answer: "The US Navy method is accurate within +/- 3-4% for most people. While not as accurate as a DEXA scan, it is significantly more reliable than standard BMI for individuals with higher muscle mass."
            },
            {
                question: "Where should I take the measurements?",
                answer: "For men: Measure neck below the larynx and waist at the navel. For women: Measure neck below larynx, waist at the narrowest point, and hips at the widest point."
            },
            {
                question: "What is a healthy body fat percentage?",
                answer: "For men, 14-24% is considered healthy/average. For women, 21-31% is considered healthy/average. 'Essential fat' levels are 2-5% for men and 10-13% for women."
            },
            {
                question: "Does the calculator distinguish between visceral and subcutaneous fat?",
                answer: "No, this method estimates total body fat. It cannot distinguish between visceral fat (around organs) and subcutaneous fat (under skin), though a high waist circumference often correlates with visceral fat."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <BodyFatUI />
        </CalculatorContent>
    );
};

export default BodyFatCalculator;
