import { expect } from '@wdio/globals'
import requestsPage from '../pageobjects/requests.page.js'
import dataGenerator from '../pageobjects/data.generator.js';

describe('API auth test for Auction App', () => { 
    it('makes a POST request for registration', async () => {
        const url = await requestsPage.buildUrl('auth/register');
        const data = await dataGenerator.register();
        const response = await requestsPage.postRequest(url, data);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a POST request for login', async () => {
        const url = await requestsPage.buildUrl('auth/login');
        const data = await dataGenerator.login();
        const response = await requestsPage.postRequest(url, data);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });
})