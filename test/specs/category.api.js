import { expect } from '@wdio/globals'
import requestsPage from '../pageobjects/requests.page.js'
import dataGenerator from '../pageobjects/data.generator.js';

describe('API categories test for Auction App', () => {    
    it('makes a GET request for all listed categories', async () => {
        const url = await requestsPage.buildUrl('categories');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for a secific category', async () => {
        const url = await requestsPage.buildUrl('categories/2ry5e063-c418-4633-a071-5if89');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a POST request for a category', async () => {
        const url = await requestsPage.buildUrl('categories');
        const data = await requestsPage.categoriesData;
        const response = await requestsPage.postRequest(url, data);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a PUT request for a category', async () => {
        const url = await requestsPage.buildUrl('categories/2ry5e063-c418-4633-a071-5if89');
        const data = await requestsPage.categoryPutData();
        const response = await requestsPage.putRequest(url, data);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a DELETE request for a category', async () => {
        const url = await requestsPage.buildUrl('categories/2ry5e063-c418-4633-a071-5if89');
        const response = await requestsPage.deleteRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });
})