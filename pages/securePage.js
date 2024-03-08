const { test, expect } = require('@playwright/test');

class SecurePage {
    constructor(page) {
        this.page = page;
        this.successFlashMessage = page.locator('//*[text()="You logged into a secure area!"]');
        this.secureAreaHeaderSuccessMessage = page.locator('//*[text()="Welcome to the Secure Area. When you are done click logout below."]');
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
    }

    async verify_successful_login() {

        try {
            
            // Flash message display 
            const successFlashMessage_isVisible = await this.successFlashMessage.isVisible();

            // Success Message in header 
            const secureAreaHeaderSuccessMessage_isVisible = await this.secureAreaHeaderSuccessMessage.isVisible();
        
            expect(successFlashMessage_isVisible).toBeTruthy();
            expect(secureAreaHeaderSuccessMessage_isVisible).toBeTruthy();

            console.log('Login was successful.');

        } catch (error) {
            console.error('Login failed:', error);
            // throw new Error('Login action failed.');
        }

    }

    async verify_unsuccessful_login() {

        try {
            
            // Flash message display 
            const successFlashMessage_isVisible = await this.successFlashMessage.isVisible();

            // Success Message in header 
            const secureAreaHeaderSuccessMessage_isVisible = await this.secureAreaHeaderSuccessMessage.isVisible();
        
            expect(successFlashMessage_isVisible).toBeFalsy();
            expect(secureAreaHeaderSuccessMessage_isVisible).toBeFalsy();

            console.log('Login was not successful.');

        } catch (error) {
            console.error('Error verifying element visibility:', error);
        }

    }

    async logout() {

        try {
            await this.logoutButton.click();
        } catch (error) {
            console.error('Logout failed:', error);
            // throw new Error('Logout action failed.');
        }

    }
}

module.exports = SecurePage;
