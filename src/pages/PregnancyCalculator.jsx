import React from 'react';
import PregnancyCalculatorUI from '../components/calculators/PregnancyCalculatorUI';
import CalculatorContent from '../components/CalculatorContent';

const PregnancyCalculator = () => {
    const calculatorProps = {
        title: "Pregnancy Due Date Calculator",
        description: "Estimate your baby's due date using Naegele's Rule. Track your pregnancy progress, calculate your current trimester, and discover key fetal development milestones.",
        formula: "Due Date = LMP + 9 Months + 7 Days\nTrimester 1: Week 1 - 12\nTrimester 2: Week 13 - 26\nTrimester 3: Week 27 - Birth",
        example: "If your last period started on January 1st and you have a 28-day cycle, your estimated due date is October 8th. You are in your 1st Trimester.",
        mistakes: [
            "Assuming every pregnancy lasts exactly 40 weeks (most are 38-42).",
            "Not adjusting for longer or shorter menstrual cycles.",
            "Confusing the 'Conception Date' with the 'LMP' (pregnancy math starts from the period).",
            "Obsessing over the specific date; only about 4% of babies are born on their due date."
        ],
        faqs: [
            {
                question: "What is Naegele's Rule?",
                answer: "Naegele's Rule is a standard way of calculating the due date for a pregnancy when the LMP (last menstrual period) is known. It assumes a gestational age of 280 days from the start of the LMP."
            },
            {
                question: "Can my due date change?",
                answer: "Yes. Your doctor might adjust your due date based on an early ultrasound (dating scan), which is more accurate if your cycles are irregular or if you aren't sure of your LMP."
            },
            {
                question: "How is the cycle length used in the calculation?",
                answer: "The standard 40-week estimate assumes a 28-day cycle where ovulation happens on Day 14. If your cycle is 32 days, your due date will likely be 4 days later."
            },
            {
                question: "What is the most accurate way to find the due date?",
                answer: "An ultrasound performed in the first trimester (around weeks 8–12) is generally considered the most accurate method for establishing a child's estimated due date."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <PregnancyCalculatorUI />
        </CalculatorContent>
    );
};

export default PregnancyCalculator;
