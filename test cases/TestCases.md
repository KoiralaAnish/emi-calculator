# Test Cases – EMI Calculator

## 1. Functional Testing

| Test Case ID | Test Case | Steps | Expected Result |
|--------------|-----------|-------|-----------------|
| TC_FUNC_001 | Verify EMI updates when Home Loan Amount changes | 1. Open EMI Calculator page <br> 2. Move Home Loan Amount slider <br> 3. Observe EMI | EMI updates automatically based on new loan amount |
| TC_FUNC_002 | Verify EMI updates when Interest Rate changes | 1. Change Interest Rate using slider <br> 2. Observe EMI | EMI updates correctly |
| TC_FUNC_003 | Verify EMI updates when Loan Tenure changes | 1. Change Loan Tenure using slider <br> 2. Observe EMI | EMI updates correctly |
| TC_FUNC_004 | Validate EMI using formula calculation | 1. Enter Loan Amount <br> 2. Enter Interest Rate <br> 3. Enter Loan Tenure <br> 4. Calculate EMI manually <br> 5. Compare with UI EMI | UI EMI matches calculated EMI |
| TC_FUNC_005 | Verify Total Interest updates correctly | 1. Enter valid loan details <br> 2. Observe Total Interest | Total Interest updates correctly |
| TC_FUNC_006 | Verify Total Payment equals Principal + Interest | 1. Enter valid loan details <br> 2. Observe Total Payment | Total Payment equals Loan Amount + Total Interest |

---

## 2. Input Validation Testing

| Test Case ID | Test Case | Steps | Expected Result |
|--------------|-----------|-------|-----------------|
| TC_INPUT_001 | Verify minimum loan amount handling | 1. Enter minimum loan amount <br> 2. Observe EMI | EMI calculates correctly |
| TC_INPUT_002 | Verify maximum loan amount handling | 1. Enter maximum loan amount <br> 2. Observe EMI | EMI calculates correctly |
| TC_INPUT_003 | Verify decimal interest rate handling | 1. Enter decimal interest rate <br> 2. Observe EMI | EMI handles decimal correctly |
| TC_INPUT_004 | Verify negative loan amount is not accepted | 1. Enter negative value in loan field | System does not accept negative value |
| TC_INPUT_005 | Verify non numeric input is not accepted | 1. Enter text in loan field | System does not accept text input |
| TC_INPUT_006 | Verify Years and Months toggle works correctly | 1. Select Years option <br> 2. Switch to Months <br> 3. Observe EMI | EMI updates correctly based on tenure type |

---

## 3. Table Validation Testing

| Test Case ID | Test Case | Steps | Expected Result |
|--------------|-----------|-------|-----------------|
| TC_TABLE_001 | Validate Principal + Interest equals Total Payment | 1. Enter loan details <br> 2. Open payment table <br> 3. Check any row | Principal + Interest equals Total Payment |
| TC_TABLE_002 | Verify balance reduces year wise | 1. Enter loan details <br> 2. Observe Balance column | Balance reduces every year |
| TC_TABLE_003 | Verify final balance becomes zero | 1. Enter loan details <br> 2. Scroll to last row | Final balance is zero |
| TC_TABLE_004 | Verify number of rows matches loan tenure | 1. Enter loan tenure <br> 2. Count table rows | Rows equal number of years selected |

---

## 4. Chart Validation Testing

| Test Case ID | Test Case | Steps | Expected Result |
|--------------|-----------|-------|-----------------|
| TC_CHART_001 | Verify chart updates when inputs change | 1. Change loan amount <br> 2. Observe chart | Chart updates dynamically |
| TC_CHART_002 | Verify chart principal matches table principal | 1. Enter loan details <br> 2. Compare chart and table | Values match |
| TC_CHART_003 | Verify chart interest matches table interest | 1. Enter loan details <br> 2. Compare chart and table | Values match |
| TC_CHART_004 | Verify chart balance reduces correctly | 1. Enter loan details <br> 2. Observe balance line | Balance decreases to zero |

---

## 5. Excel Download Testing

| Test Case ID | Test Case | Steps | Expected Result |
|--------------|-----------|-------|-----------------|
| TC_EXCEL_001 | Verify Excel file downloads successfully | 1. Enter loan details <br> 2. Click Download Excel | Excel file downloads successfully |
| TC_EXCEL_002 | Verify loan amount in Excel matches UI | 1. Open Excel file <br> 2. Check loan amount | Loan amount matches UI |
| TC_EXCEL_003 | Verify interest rate in Excel matches UI | 1. Open Excel file <br> 2. Check interest rate | Interest rate matches UI |
| TC_EXCEL_004 | Verify loan tenure in Excel matches UI | 1. Open Excel file <br> 2. Check tenure | Loan tenure matches UI |
| TC_EXCEL_005 | Verify Excel contains payment schedule data | 1. Open Excel file <br> 2. Check payment table | Excel contains correct yearly payment data |