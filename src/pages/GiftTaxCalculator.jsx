import React from 'react';
import GiftTaxUI from '../components/calculators/GiftTaxUI';
import CalculatorContent from '../components/CalculatorContent';

const GiftTaxCalculator = () => {
    const calculatorProps = {
        title: "Gift Tax Calculator India (Section 56)",
        description: "Calculate the tax liability on gifts received from relatives and non-relatives. Understand the ₹50,000 threshold, wedding exemptions, and how 'relatives' are defined under the Income Tax Act.",
        formula: "Taxable Gift = If (Sum of Non-Relative Gifts > ₹50,000) Then (Full Amount) Else (0)",
        example: "If you receive a ₹60,000 cash gift from a friend on your birthday, the entire ₹60,000 is added to your taxable income. If received from your sister, it is 100% exempt.",
        mistakes: [
            "Assuming individual gifts below ₹50,000 are safe (the limit is cumulative for the year).",
            "Not maintaining a gift deed or bank record for high-value gifts from relatives.",
            "Assuming cousins are 'relatives' under the Income Tax Act (they are NOT exempt).",
            "Failing to report taxable gifts under 'Income from Other Sources' in your ITR."
        ],
        faqs: [
            {
                question: "Who is considered a 'Relative' for tax-free gifts?",
                answer: "The IT Act defines relatives as: Spouse, Brother or Sister (and their spouses), Brother or Sister of either parent, Lineal ascendants/descendants (Parents, Grandparents, Children), and Lineal ascendants/descendants of the spouse."
            },
            {
                question: "Is gift tax applicable on wedding gifts?",
                answer: "No. Gifts received by an individual on the occasion of their marriage are 100% tax-exempt, regardless of the person giving the gift or the amount."
            },
            {
                question: "Do I have to pay tax if I receive a gift through a Will?",
                answer: "No. Any property or money received under a will or by way of inheritance, or in contemplation of the death of the donor, is fully exempt from gift tax."
            },
            {
                question: "Is there a limit on gifts from non-relatives?",
                answer: "Yes. You can receive up to an aggregate of ₹50,000 in a financial year from all non-relatives combined. If the total exceeds ₹50,001, the entire amount becomes taxable."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <GiftTaxUI />
        </CalculatorContent>
    );
};

export default GiftTaxCalculator;
