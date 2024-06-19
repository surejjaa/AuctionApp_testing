import { expect } from '@wdio/globals'
import requestsPage from '../pageobjects/requests.page.js'
import dataGenerator from '../pageobjects/data.generator.js';

describe('API auth test for Auction App', () => { 
    it('makes a GET request for listed logins', async () => {
        const url = await requestsPage.buildUrl('auth');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for a specific login', async () => {
        const url = await requestsPage.buildUrl('auth/b3e3e063-c418-4633-a071-3b0d57');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

})