/* eslint-disable no-undef */
import { BMIcalculator } from "./BMIcalculator";

test("Testing BMI Calculator", () => {
    const calculatedBMI = BMIcalculator(68, 156);
    expect(calculatedBMI.toFixed(1)).toEqual("27.9");
})