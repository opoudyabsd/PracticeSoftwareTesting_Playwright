import { expect, type Locator, type Page } from '@playwright/test';

export class SignUPPage {
    readonly page: Page
    readonly registrationUrl: string
    readonly firstName: Locator
    readonly lastName: Locator
    readonly birthDate: Locator
    readonly street: Locator
    readonly postal_code: Locator
    readonly city: Locator
    readonly state: Locator
    readonly country: Locator
    readonly phone: Locator
    readonly email: Locator
    readonly password: Locator
    readonly passwordStrength: Locator
    readonly registerButton: Locator

    constructor(page: Page) {
        this.page = page
        this.registrationUrl = '/auth/register'
        this.firstName = page.locator("#first_name")
        this.lastName = page.locator('#last_name')
        this.birthDate = page.locator("#dob")
        this.street = page.locator("#street")
        this.postal_code = page.locator("#postal_code")
        this.city = page.locator("#city")
        this.state = page.locator('#state')
        this.country = page.locator("#country")
        this.phone = page.locator('#phone')
        this.email = page.locator("#email")
        this.password = page.locator("#password")
        this.passwordStrength = page.getByText("Excellent")
        this.registerButton = page.locator('[data-test="register-submit"]')
    }
}