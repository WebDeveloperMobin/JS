/* eslint-disable import/prefer-default-export */
 export const BMIcalculator = (weight, height) => {
    const bmi = (weight / (height * height)) * 10000;
    return bmi;
  };
  