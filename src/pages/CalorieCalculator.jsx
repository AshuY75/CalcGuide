import React from 'react';
import CalorieCalculatorUI from '../components/calculators/CalorieCalculatorUI';
import CalculatorContent from '../components/CalculatorContent';

const CalorieCalculator = () => {
    const calculatorProps = {
        title: "Calorie & TDEE Calculator",
        description: "Estimate your Total Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR) accurately. Plan your weight loss or muscle gain goals with precise calorie and macro targets.",
        formula: "BMR (Men) = (10 × weight) + (6.25 × height) - (5 × age) + 5\nBMR (Women) = (10 × weight) + (6.25 × height) - (5 × age) - 161\nTDEE = BMR × Activity Multiplier",
        example: "A 30-year-old male weighing 80kg at 180cm height has a BMR of ~1,780 kcal. With moderate exercise (1.55x), his TDEE is ~2,760 kcal/day. To lose weight safely, he should target ~2,260 kcal/day.",
        mistakes: [
            "Overestimating activity level (most common error).",
            "Not accounting for small snacks and liquid calories.",
            "Assuming TDEE remains constant as weight drops.",
            "Confusing BMR (resting) with TDEE (total daily burn)."
        ],
        faqs: [
            {
                question: "What is TDEE?",
                answer: "TDEE stands for Total Daily Energy Expenditure. It represents the total amount of calories you burn in a 24-hour period, accounting for your Basal Metabolic Rate (BMR), exercise, and non-exercise movement."
            },
            {
                question: "How accurate is the Calorie Calculator?",
                answer: "The Mifflin-St Jeor equation used here is considered the gold standard for healthy adults. However, factors like body fat percentage and metabolic health can cause slight variations."
            },
            {
                question: "Should I eat below my BMR?",
                answer: "Generally, no. Eating below your BMR for extended periods can slow your metabolism and cause nutritional deficiencies. It's safer to target a deficit from your TDEE while staying near your BMR."
            },
            {
                question: "How many calories are in 1kg of fat?",
                answer: "Consuming a deficit of ~7,700 calories roughly equates to 1kg of fat loss. A daily deficit of 500-1000 calories is usually recommended for sustainable weight loss of 0.5kg to 1kg per week."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <CalorieCalculatorUI />
        </CalculatorContent>
    );
};

export default CalorieCalculator;
