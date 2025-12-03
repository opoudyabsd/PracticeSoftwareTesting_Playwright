import { test, expect } from "@playwright/test";


test.describe("Positive testing", () => {
    const email = 'Test_Email_For_Pl@gmail.com'
    const password = 'SuperPassword_123'
    test("Sign Up", async ({ page }) => {
        await test.step("Navigate to the login page", async () => {
            await page.goto('https://practicesoftwaretesting.com/')
            await page.locator('[data-test="nav-sign-in"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login')
        })
        await test.step('Navigate to the registration page', async () => {
            await page.locator('[data-test="register-link"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/register')
        })
        await test.step('Enter credentials', async () => {
            await page.locator("#first_name").fill("TestFirstName")
            await page.locator('#last_name').fill("TestLastName")
            await page.locator('#dob').fill("2000-10-10")
            await page.locator("#street").fill("Michael Jackson Test Streen")
            await page.locator("#postal_code").fill("80010")
            await page.locator("#city").fill("Denver")
            await page.locator('#state').fill('Colorado')
            await page.locator('#country').selectOption('US')
            await page.locator('#phone').fill("321678258")
            await page.locator('#email').fill(email)
            await page.locator("#password").fill(password)

            await expect(page.getByText("Excellent")).toHaveClass("active")
        })
        await test.step("Register account", async () => {
            await page.locator('[data-test="register-submit"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login')
        })
    })

    test("Login to already created account", async ({ page }) => {
        await test.step("Navigate to the login page", async () => {
            await page.goto("https://practicesoftwaretesting.com/")
            await page.locator('[data-test="nav-sign-in"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login')
        })
        await test.step("Enter valid account credentials", async () => {
            await page.locator('#email').fill(email)
            await page.locator("#password").fill(password)
            await page.locator('[data-test="login-submit"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/account')
        })
    })

    test('Create account from scracth and login into the created account', async ({ page }) => {
        const scratchEmail = 'testEmailForPlaywright@gmail.com'
        const scratchPassword = 'SuperPassword_123'
        await test.step("Navigate to the login page", async () => {
            await page.goto('https://practicesoftwaretesting.com/')
            await page.locator('[data-test="nav-sign-in"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login')
        })
        await test.step('Navigate to the registration page', async () => {
            await page.locator('[data-test="register-link"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/register')
        })
        await test.step('Enter credentials', async () => {
            await page.locator("#first_name").fill("TestFirstName")
            await page.locator('#last_name').fill("TestLastName")
            await page.locator('#dob').fill("2000-10-10")
            await page.locator("#street").fill("Michael Jackson Test Streen")
            await page.locator("#postal_code").fill("80010")
            await page.locator("#city").fill("Denver")
            await page.locator('#state').fill('Colorado')
            await page.locator('#country').selectOption('US')
            await page.locator('#phone').fill("321678258")
            await page.locator('#email').fill(scratchEmail)
            await page.locator("#password").fill(scratchPassword)

            await expect(page.getByText("Excellent")).toHaveClass("active")
        })
        await test.step("Register account", async () => {
            await page.locator('[data-test="register-submit"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login')
        })

        await test.step("Navigate to the login page", async () => {
            await page.goto("https://practicesoftwaretesting.com/")
            await page.locator('[data-test="nav-sign-in"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login')
        })
        await test.step("Enter valid account credentials", async () => {
            await page.locator('#email').fill(scratchEmail)
            await page.locator("#password").fill(scratchPassword)
            await page.locator('[data-test="login-submit"]').click()
            await expect(page).toHaveURL('https://practicesoftwaretesting.com/account')
        })
    })
})

// test.describe("Negative testing", () => {

// })