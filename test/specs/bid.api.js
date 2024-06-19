import { expect } from '@wdio/globals'
import requestsPage from '../pageobjects/requests.page.js'
import dataGenerator from '../pageobjects/data.generator.js';

describe('API bids test for Auction App', () => {    
    it('makes a GET request for listed bids', async () => {
        const url = await requestsPage.buildUrl('bids');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

})