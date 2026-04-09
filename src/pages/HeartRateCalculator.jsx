import React from 'react';
import HeartRateUI from '../components/calculators/HeartRateUI';
import CalculatorContent from '../components/CalculatorContent';

const HeartRateCalculator = () => {
    const calculatorProps = {
        title: "Target Heart Rate Zones Calculator",
        description: "Calculate your optimal heart rate zones for fat loss, cardio, and performance training. Use the Karvonen Formula to customize zones based on your age and fitness level.",
        formula: "Max Heart Rate = 220 - Age\nTraining Intensity = ((MaxHR - RestingHR) × %Intensity) + RestingHR",
        example: "A 30-year-old with a resting HR of 60 BPM has a Max HR of 190. For Zone 2 (60-70% intensity), the target heart rate is ~138 to 151 BPM.",
        mistakes: [
            "Using the simple 220-age formula without considering resting heart rate.",
            "Trying to stay in Zone 5 (Max) for longer than 30-60 seconds.",
            "Not adjusting for medical conditions or medications (beta-blockers).",
            "Confusing 'Fat Burn Zone' with total calorie burn (higher zones burn more fat total)."
        ],
        faqs: [
            {
                question: "What is the best zone for weight loss?",
                answer: "While Zone 2 (60-70%) is known as the 'fat-burn zone' because it burns the highest percentage of fat, higher intensity zones (Zone 3 and 4) burn more total calories and fat overall in a shorter time."
            },
            {
                question: "What is a normal Resting Heart Rate?",
                answer: "A normal resting heart rate for adults ranges from 60 to 100 BPM. Highly trained athletes often have resting heart rates between 40 and 60 BPM."
            },
            {
                question: "How should I measure my heart rate during exercise?",
                answer: "Heart rate monitors or smartwatches are the most accurate. You can also do it manually by counting pulses on your wrist for 15 seconds and multiplying by 4."
            },
            {
                question: "Is the 220-age formula accurate?",
                answer: "It is a standard estimation but can vary by +/- 10 BPM. The Karvonen formula used here is more personalized as it accounts for your baseline fitness through Resting Heart Rate."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <HeartRateUI />
        </CalculatorContent>
    );
};

export default HeartRateCalculator;
