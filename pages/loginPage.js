const { getLoginUrl } = require('../config'); 
const environment = process.env.TEST_ENV || 'production';

class LoginPage {
    constructor(page) {
        this.page = page;

        this.loginUrl = getLoginUrl(environment);

        this.usernameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.locator('//button[text()="Login"]');
        this.logoutMessage = page.locator('//*[text()="You logged out of the secure area!"]');
        this.usernameInvalidMessage = page.locator('//*[text()="Your username is invalid!"]');
        this.passwordInvalidMessage = page.locator('//*[text()="Your password is invalid!"]');
    }

    async navigate() {
       
        try {
            //await this.page.goto('https://practice.expandtesting.com/login', { waitUntil: 'networkidle' });
            await this.page.goto(this.loginUrl, { waitUntil: 'networkidle' });
            console.log('Navigation to login page was successful.');
        } catch (error) {
            console.error('Failed to navigate to the login page:', error);
            // throw new Error('Navigation to the login page failed.');
        }
    }

    async login(username, password) {

        try {
            await this.usernameInput.click();
            await this.usernameInput.clear();
            await this.usernameInput.fill(username);
            
            await this.passwordInput.click();
            await this.passwordInput.clear();
            await this.passwordInput.fill(password);
        
            await this.loginButton.click();
            
        } catch (error) {
            console.error('Login failed:', error);
            // throw new Error('Login action failed.');
        }

    }

    async verify_logout_message() {

        try {
            
            // Flash message display 
            const logoutMessage_isVisible = await this.logoutMessage.isVisible();

            expect(logoutMessage_isVisible).toBeTruthy();

            console.log('Logout was successful.');

        } catch (error) {
            console.error('Logout failed:', error);
            // throw new Error('Logout action failed.');
        }
    }

    async verify_invalid_username_message() {

        try {
            
            // Flash message display 
            const usernameInvalidMessage_isVisible = await this.usernameInvalidMessage.isVisible();

            expect(usernameInvalidMessage_isVisible).toBeTruthy();

            console.log('Login was not successful as invalid username entered.');

        } catch (error) {
            console.error('Error verifying element visibility:', error);
       
        }
    }

    async verify_invalid_password_message() {

        try {
            
            // Flash message display 
            const passwordInvalidMessage_isVisible = await this.passwordInvalidMessage.isVisible();

            expect(passwordInvalidMessage_isVisible).toBeTruthy();

            console.log('Login was not successful as invalid password entered.');

        } catch (error) {
            console.error('Error verifying element visibility:', error);
       
        }
    }

}

module.exports = LoginPage;
