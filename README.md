# EMI Calculator Automation Project

## Project Overview

This project contains the test plan, test cases, automation scripts, and reports for the EMI Calculator web application.

The EMI Calculator helps users calculate monthly EMI by changing:

- Home Loan Amount  
- Interest Rate  
- Loan Tenure  

The application also shows a payment schedule table, a chart, and allows users to download an Excel report.

The main purpose of this project is to validate financial calculation logic and ensure the application works correctly without errors.

---

## Scope of Testing

The following areas are covered in automation:

### Functional Testing

- Sliders update values correctly  
- EMI is calculated correctly using formula  
- Principal and Interest values are correct  
- Balance reduces year by year  
- Final balance becomes zero  

### Chart Validation

- Chart values match table values  
- Principal, Interest, and Balance are consistent  
- Year wise data is validated  

### Excel Download Validation

- Excel file downloads successfully  
- Home Loan amount in Excel matches UI  
- Interest rate in Excel matches UI  
- Loan tenure in Excel matches UI  

---

## Project Structure


<pre> ## Project Structure ``` EMI-Automation/ │ ├── tests/ │ └── emiCalculator.spec.js │ ├── pages/ │ └── EmiCalculator.page.js │ ├── test-plan/ │ └── Test_Plan_Document.md │ ├── test-cases/ │ └── TestCases.md │ ├── test-summary-report/ │ └── Test_Summary_Report.md │ └── README.md ``` </pre>


---

## Framework and Architecture

This project is developed using:

- Playwright for automation  
- JavaScript as programming language  
- Page Object Model design pattern  
- XLSX library to read Excel files  

### Architecture Explanation

The project follows Page Object Model structure.

- Test files contain test scenarios only  
- Page files contain UI interaction methods  
- Business validation logic is written inside page methods  
- Excel handling logic is implemented using XLSX library  

This structure keeps the framework clean, readable, and easy to maintain.

If new features are added in future, new methods can be added inside page files without changing test structure.

---

## Regression Strategy

EMI calculation is the core financial logic of this application. Even a small change in calculation can create serious errors. Because of this, regression testing is very important.

The regression suite is designed in the following way:

### 1. Core EMI Calculation Validation

- Validate EMI using financial formula recalculation  
- Test with different loan amounts  
- Test with different interest rates  
- Test with different loan tenures  
- Validate rounding behavior  

These tests ensure that the calculation logic remains correct after any code change.

### 2. Boundary and Edge Case Testing

The regression suite includes:

- Minimum loan amount  
- Maximum loan amount  
- Minimum tenure  
- Maximum tenure  
- Low and high interest rates  

Boundary values are important because calculation issues often happen at extreme values.

### 3. Data Consistency Validation

EMI calculation affects table, chart, and Excel file. Regression suite validates:

- Principal values match between chart and table  
- Interest values match between chart and table  
- Principal + Interest equals Total Payment  
- Balance reduces year by year  
- Final balance becomes zero  

This ensures that all dependent components remain correct.

### 4. Excel Report Validation

Since Excel report uses the same calculation logic, regression suite verifies:

- File downloads successfully  
- Loan amount in Excel matches UI  
- Interest rate in Excel matches UI  
- Loan tenure in Excel matches UI  
- Basic values inside Excel are correct  

This ensures reporting functionality is stable.

### 5. Execution Strategy

- Core EMI tests run on every execution  
- Full regression suite runs before release  
- Regression can be integrated into CI pipeline  
- Failures are reviewed immediately  

This approach ensures stability and accuracy of financial logic.

### 6. Continuous Integration (CI)

This project is integrated with GitHub Actions for automated test execution.

A CI pipeline is configured to run automatically on:

- Push to main branch  
- Pull request to main branch  

### What the CI Pipeline Does

- Installs project dependencies  
- Installs Playwright browsers  
- Executes all tests in headless mode  
- Generates test report  
- Uploads report as artifact  

If any test fails, the pipeline fails automatically.

This ensures that EMI calculation logic and related features remain stable after every code change.

---

## How to Run the Project

### Step 1: Install Dependencies


npm install


### Step 2: Run Tests


npm run open:test:runner for headed mode
npm run run:test:runner  for headless mode


### Step 3: View Test Report


npx playwright show-report


---

## Conclusion

This automation project validates both UI behavior and financial business logic. It ensures EMI calculation accuracy, data consistency, and correct Excel export functionality.

