# Test Plan  
**Project:** EMI Calculator Web Application  

---

## 1. Introduction  

This document describes the test plan for the EMI Calculator web application.  

The EMI Calculator allows users to calculate the Equated Monthly Installment (EMI) by entering:  

- Loan Amount  
- Interest Rate  
- Loan Tenure  

The application also displays Total Interest, Total Payment, graphical charts, and downloadable reports.  

The purpose of this test plan is to ensure that the application functions correctly, provides accurate calculations, and operates without errors.

---

## 2. Objective  

The main objectives of testing are:  

- To verify that EMI is calculated correctly.  
- To ensure values update when the user changes inputs.  
- To check that sliders and manual input fields work properly.  
- To verify that charts and reports display correct data.  
- To confirm that the system handles invalid inputs correctly.  
- To ensure the application works across supported browsers and devices.  

---

## 3. Scope of Testing  

### 3.1 In Scope  

The following features will be tested:  

- Home Loan, Personal Loan, and Car Loan tabs  
- Loan Amount input field and slider  
- Interest Rate input field and slider  
- Loan Tenure input field and slider  
- EMI calculation  
- Total Interest calculation  
- Total Payment calculation  
- Chart display (Principal vs. Interest)  
- Report download functionality  
- Input validation  

### 3.2 Out of Scope  

The following items are not part of this testing:  

- Loan approval process  
- Payment transactions  
- User account management  
- Backend banking integrations  

---

## 4. Testing Approach  

The following types of testing will be performed:  

### 4.1 Functional Testing  
To verify that all features work as expected and calculations are accurate.  

### 4.2 Validation Testing  
To ensure the system handles invalid inputs such as letters, negative numbers, or empty fields appropriately.  

### 4.3 Boundary Testing  
To verify system behavior at the minimum and maximum allowed values.  

### 4.4 UI Testing  
To check labels, layout, formatting, and overall user interface consistency.  

### 4.5 Compatibility Testing  
To ensure the application works correctly across different browsers and devices.  

### 4.6 Basic Performance Testing  
To verify that EMI updates quickly and the application does not freeze or lag during interaction.  

---

## 5. Test Environment  

Testing will be performed in the following environment:  

- **Browsers:** Google Chrome, Mozilla Firefox, Microsoft Edge  
- **Devices:** Desktop and Mobile  
- **Operating Systems:** Windows and macOS  

---

## 6. Test Data  

The following types of data will be used:  

- Valid input values  
- Minimum allowed values  
- Maximum allowed values  
- Invalid inputs (letters, symbols, negative numbers, blank fields)  

---

## 7. Entry Criteria  

Testing will begin when:  

- The application is deployed in the test environment.  
- All input fields and sliders are functional.  
- The EMI calculation logic is fully implemented.  

---

## 8. Exit Criteria  

Testing will be completed when:  

- All major and critical defects are resolved.  
- EMI and related calculations are verified as accurate.  
- Charts display correct values.  
- Report downloads function correctly.  
- The application works properly in all supported browsers.  

---

## 9. Risks and Assumptions  

### Risks  

- Incorrect EMI calculation formula implementation  
- Mismatch between slider values and manual input values  
- Charts displaying incorrect data  
- Reports containing incorrect values  

### Assumptions  

- The EMI formula and calculation rules are clearly defined and approved.  
- Minimum and maximum input limits are properly specified.  