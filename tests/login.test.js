const { test, expect } = require('@playwright/test');

// Define a fixture for the login process
test.describe('User login and logout scenarios', () => {
    let loginPage;
    let securePage;

    // Use beforeEach to navigate and instantiate page objects
    test.beforeEach(async ({ page }) => {
        const LoginPage = require('../pages/loginPage');
        const SecurePage = require('../pages/securePage');
        
        loginPage = new LoginPage(page);
        securePage = new SecurePage(page);

        await loginPage.navigate();
    });

    test('user can login successfully', async ({ page }) => {
        await loginPage.login('practice', 'SuperSecretPassword!');
        await securePage.verify_successful_login();
    });

    test('user can logout successfully', async ({ page }) => {
        await loginPage.login('practice', 'SuperSecretPassword!');
        await securePage.logout();
        await loginPage.verify_logout_message();
    });

    test('user login with invalid username', async ({ page }) => {
        await loginPage.login('practice1', 'SuperSecretPassword!');
        await loginPage.verify_invalid_username_message();
        await securePage.verify_unsuccessful_login();
    });

    test('user login with invalid password', async ({ page }) => {
        await loginPage.login('practice', 'SuperSecretPassword!11');
        await loginPage.verify_invalid_password_message();
        await securePage.verify_unsuccessful_login();
    });
});
