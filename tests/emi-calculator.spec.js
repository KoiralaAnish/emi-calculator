
import { test } from '@playwright/test';
import { Calculator } from '../pages/EmiCalculator.page';

test.describe('EMI Calculator Test', () => {
	test.beforeEach("should update home loan amount, interest rate and loan tenure using slider", async ({ page }) => {
  const CalculatorPage = new Calculator(page);
  await CalculatorPage.visitURL();
  await CalculatorPage.moveSlider(0, 50); //Home Loan Amount
  await CalculatorPage.moveSlider(1, 50); //Interest Rate
  await CalculatorPage.moveSlider(2, 50); //Loan Tenure
 }); 
 test ('should validate EMI using formula-based recalculation', async ({ page }) => {
  const CalculatorPage = new Calculator(page);
  const loanAmount = await CalculatorPage.getLoanAmount(); 
  const interestRate = await CalculatorPage.getInterestRate();
  const loanTenure = await CalculatorPage.getLoanTenure();
  const capturedUiEMI = await CalculatorPage.getCapturedEMI();
  await CalculatorPage.verifyEMICalculation(loanAmount, interestRate, loanTenure, capturedUiEMI);
 });
 test('should validate chart and table year-wise consistency', async ({ page }) => {
  const CalculatorPage = new Calculator(page);
  await CalculatorPage.validateChartAndTableYearWise();

});
test('should download excel file and add checks',async ({ page }) => {
  const CalculatorPage = new Calculator(page);
  const loanAmount = await CalculatorPage.getLoanAmount(); 
  const interestRate = await CalculatorPage.getInterestRate();
  const loanTenure = await CalculatorPage.getLoanTenure();
  await CalculatorPage.downloadAndValidateExcel(loanAmount, interestRate, loanTenure);	
});
});


