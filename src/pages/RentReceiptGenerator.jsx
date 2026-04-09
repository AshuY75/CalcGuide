import React from 'react';
import RentReceiptUI from '../components/calculators/RentReceiptUI';
import CalculatorContent from '../components/CalculatorContent';

const RentReceiptGenerator = () => {
    const calculatorProps = {
        title: "Rent Receipt Generator",
        description: "Generate professional, print-ready rent receipts for HRA tax exemption. Automatic formatting for Landlord PAN and Revenue Stamp requirements for FY 2025-26 compliance.",
        formula: "HRA Exemption = Min(Actual HRA, Rent - 10% Salary, 50% Salary for Metro)",
        example: "If your monthly rent is ₹20,000, you can generate a monthly receipt here. If your annual rent exceeds ₹1,00,000, ensure you include the Landlord's PAN for valid HRA claims.",
        mistakes: [
            "Failing to mention the Landlord's PAN if annual rent exceeds ₹1 lakh.",
            "Not affixing a ₹1 revenue stamp for cash payments exceeding ₹5,000.",
            "Generating receipts for a property owned by a spouse (in most cases not allowed).",
            "Mating the 'Period of Rent' and 'Property Address' fields inconsistent with the rental agreement."
        ],
        faqs: [
            {
                question: "Is it mandatory to have a Landlord's PAN?",
                answer: "Yes, if your annual rent exceeds ₹1,00,000 (roughly ₹8,333/month), the Income Tax department requires the landlord's PAN to allow HRA deduction."
            },
            {
                question: "Do I need a Revenue Stamp?",
                answer: "According to the Indian Stamp Act, a revenue stamp is required if you pay more than ₹5,000 in cash. For online transfers, the digital record is often sufficient, but many companies still ask for stamped receipts for compliance."
            },
            {
                question: "Can I claim HRA if I pay rent to my parents?",
                answer: "Yes, you can pay rent to your parents and claim HRA, provided they own the property, you actually transfer the money (bank record), and they declare this rent in their income tax returns."
            },
            {
                question: "How many receipts do I need to submit?",
                answer: "Most employers in India require rent receipts for at least the last 3 months of the financial year or for every month if you just joined. Check with your HR policy."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <RentReceiptUI />
        </CalculatorContent>
    );
};

export default RentReceiptGenerator;
