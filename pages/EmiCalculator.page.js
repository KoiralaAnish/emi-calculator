import {  expect } from '@playwright/test';
import * as XLSX from 'xlsx';

export class Calculator {
		constructor(page) {
			this.page = page;
			this.sliders = page.locator(".ui-slider-handle");
			this.sliderTracks = page.locator(".ui-slider");
      this.monthsToggle = page.locator("#loanmonths");
		}
		async visitURL() {
			await this.page.goto("/");
			await expect(this.page).toHaveURL("/");
			await expect(
				this.page.locator(
					'h1:has-text("EMI Calculator for Home Loan, Car Loan & Personal Loan in India")',
				),
			).toBeVisible();
		}

		async moveSlider(index, percentage) {
			const track = this.sliderTracks.nth(index);
			const handle = this.sliders.nth(index);
			const box = await track.boundingBox();
			const targetX = box.x + box.width * (percentage / 100);
			const centerY = box.y + box.height / 2;
			await handle.hover();
			await this.page.mouse.down();
			await this.page.mouse.move(targetX, centerY);
			await this.page.mouse.up();
		}

		async getCapturedEMI() {
			const capturedEMI = await this.page
				.locator("#emiamount span")
				.textContent();
			console.log("capturedEMI", capturedEMI);
			return capturedEMI;
		}
		async getLoanAmount() {
			const loanAmount = await this.page.locator("#loanamount").inputValue();
			console.log("loan amount", loanAmount);
			return loanAmount;
		}
		async getInterestRate() {
			const interestRate = await this.page
				.locator("#loaninterest")
				.inputValue();
			console.log("loan interest rate", interestRate);
			return interestRate;
		}
		async getLoanTenure() {
     
			const loanTenure = await this.page.locator("#loanterm").inputValue();
			console.log("loan tenure", loanTenure);
			return loanTenure;
		}
		async verifyEMICalculation(loanAmount, interestRate, loanTenure, capturedUiEMI) {
     const p = Number(loanAmount.replace(/,/g, ''));
      const r = parseFloat(interestRate) / (12 * 100);
      const n = parseFloat(loanTenure) * 12;
     const calculatedEMI =
     (p * r * (1 + r) ** n) /
     ((1 + r) ** n - 1);
      expect(Math.round(calculatedEMI)).toBe(Number(capturedUiEMI.replace(/,/g, '')));
    }
 async getChartData() {

  await this.page.waitForSelector('#emibarchart svg');

  return await this.page.evaluate(() => {

    const chart = window.Highcharts?.charts?.find(c => c);

    if (!chart) {
      throw new Error("Highcharts chart not found");
    }

    return {
      interest: chart.series[0]?.data?.map(p => Math.round(p.y)) || [],
      principal: chart.series[1]?.data?.map(p => Math.round(p.y)) || [],
      balance: chart.series[2]?.data?.map(p => Math.round(p.y)) || []
    };
  });
}
async getTableData() {

  await this.page.waitForSelector("table tbody tr");

  return await this.page.$$eval("table tbody tr", rows =>
    rows
      .map(row => {
        const cells = row.querySelectorAll("td");

        if (cells.length < 5) return null;

        return {
          year: cells[0].innerText.trim(),
          principal: Number(cells[1].innerText.replace(/[₹,]/g, "")),
          interest: Number(cells[2].innerText.replace(/[₹,]/g, "")),
          totalPayment: Number(cells[3].innerText.replace(/[₹,]/g, "")),
          balance: Number(cells[4].innerText.replace(/[₹,]/g, ""))
        };
      })
      .filter(Boolean)
  );
}
async validateChartAndTableYearWise() {

  const chartData = await this.getChartData();
  const tableData = await this.getTableData();

  if (!tableData.length) {
    throw new Error("Table data not found");
  }

  const length = Math.min(
    chartData.principal.length,
    tableData.length
  );

  for (let i = 0; i < length; i++) {

    expect(chartData.principal[i]).toBe(tableData[i].principal);
    expect(chartData.interest[i]).toBe(tableData[i].interest);
    expect(chartData.balance[i]).toBe(tableData[i].balance);

    expect(
      tableData[i].principal + tableData[i].interest
    ).toBe(tableData[i].totalPayment);

    if (i > 0) {
      expect(tableData[i].balance)
        .toBeLessThan(tableData[i - 1].balance);
    }
  }

  expect(
    tableData[tableData.length - 1].balance
  ).toBe(0);
}
async downloadAndValidateExcel(expectedLoan, expectedRate, expectedTenure) {
 const downloadButton = this.page.locator('.ecaldownloadexcel');
  const downloadPromise = this.page.waitForEvent('download');
  await downloadButton.click();
  const download = await downloadPromise;

  const filePath = await download.path();
  expect(filePath).toBeTruthy();

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const loanAmount = sheet['B2']?.v;
  const interestRate = sheet['B3']?.v;
  const loanTenure = sheet['B4']?.v;

expect(Number(loanAmount)).toBe(
  Number(String(expectedLoan).replace(/,/g, ''))
);
expect(Number(interestRate).toFixed(1)).toBe(
  Number(String(expectedRate).replace(/,/g, '')).toFixed(1)
);
expect(Number(loanTenure)).toBe(
  Number(String(expectedTenure).replace(/,/g, '')*12)
);
}
	}

  