import { expect } from '@wdio/globals'
import requestsPage from '../pageobjects/requests.page.js'
import dataGenerator from '../pageobjects/data.generator.js';

describe('API notification test for Auction App', () => {
    it('makes a GET request for all notifications', async () => {
        const url = await requestsPage.buildUrl('notification');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

})