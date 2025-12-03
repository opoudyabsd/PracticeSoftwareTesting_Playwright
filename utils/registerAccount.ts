import { Page, expect } from "@playwright/test";
import { SignUPPage } from "../pom/SignIn/signUp.page";

interface Data {
    firstName: string,
    lastName: string,
    birthDate: string,
    street: string,
    postal_code: string,
    city: string,
    state: string,
    country: string,
    phone: string,
    email: string,
    password: string
}

export async function registerAccount(page: Page, data: Data) {
    const signUpPage = new SignUPPage(page)
    await signUpPage.firstName.fill(data.firstName)
    await signUpPage.lastName.fill(data.lastName)
    await signUpPage.birthDate.fill(data.birthDate)
    await signUpPage.street.fill(data.street)
    await signUpPage.postal_code.fill(data.postal_code)
    await signUpPage.city.fill(data.city)
    await signUpPage.state.fill(data.state)
    await signUpPage.country.selectOption(data.country)
    await signUpPage.phone.fill(data.phone)
    await signUpPage.email.fill(data.email)
    await signUpPage.password.fill(data.password)

    await expect(signUpPage.passwordStrength).toHaveClass('active')

    await signUpPage.registerButton.click()
}