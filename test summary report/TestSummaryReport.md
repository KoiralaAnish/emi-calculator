# Test Summary Report  
Project: EMI Calculator Web Application  

---

## 1. Introduction  

This document provides a summary of the testing activities performed on the EMI Calculator web application.

The objective of testing was to validate EMI calculation accuracy, ensure data consistency across UI components, and verify that the application works correctly without functional issues.

Testing was performed using manual testing and automation testing with Playwright.

---

## 2. Scope of Testing  

The following areas were covered:

- Loan Amount input and slider  
- Interest Rate input and slider  
- Loan Tenure input and slider  
- EMI calculation logic validation  
- Total Interest and Total Payment validation  
- Payment schedule table validation  
- Chart validation  
- Excel report download validation  
- Input validation and boundary testing  

---

## 3. Test Execution Summary  

- Total Test Cases Designed: 25  
- Total Test Cases Executed: 25  
- Passed: 25  
- Failed: 0  
- Blocked: 0  

All automated tests were executed successfully in both headed and headless modes.

In addition, the test suite was integrated with GitHub Actions for automated execution.

---

## 4. Automation and CI Execution  

The automation suite is integrated with GitHub Actions CI pipeline.

On every push to the main branch:

- Dependencies are installed  
- Playwright browsers are installed  
- All tests are executed in headless mode  
- Test report is generated and uploaded  

If any test fails, the CI pipeline fails automatically.

This ensures that EMI calculation logic remains stable after any change.

---

## 5. Key Validations Performed  

### EMI Calculation Validation  
- EMI recalculated using standard formula  
- UI EMI matched calculated value  
- Multiple loan scenarios tested  
- Rounding behavior verified  

### Table Validation  
- Principal + Interest equals Total Payment  
- Balance reduces correctly year by year  
- Final balance becomes zero  

### Chart Validation  
- Chart values match table values  
- Principal and Interest are consistent  
- Balance decreases correctly  

### Excel Validation  
- Excel file downloads successfully  
- Loan Amount, Interest Rate, and Tenure match UI  
- Payment schedule exists in Excel  

---

## 6. Risks Identified  

- Any future change in EMI formula may affect multiple components  
- Rounding precision differences may occur with certain decimal values  
- Excel format changes may impact automation  

---

## 7. Recommendations  

- Keep CI pipeline active for all future changes  
- Add more boundary scenarios for extreme financial values  
- Perform cross browser testing regularly  
- Add scheduled regression execution  
- Consider adding unit tests for EMI calculation logic  

---

## 8. Conclusion  

Based on executed test cases and CI execution results, the EMI Calculator application is stable and functionally correct.

The financial calculation logic is accurate and consistent across UI, table, chart, and Excel report.

The application is ready for release from a functional testing perspective.