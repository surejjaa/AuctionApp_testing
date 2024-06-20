import { expect } from '@wdio/globals'
import requestsPage from '../pageobjects/requests.page.js'
import dataGenerator from '../pageobjects/data.generator.js';

describe('API products test for Auction App', () => {  
    it('makes a GET request for all listed products', async () => {
        const url = await requestsPage.buildUrl('products');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for bid details of a specific product', async () => {
        const url = await requestsPage.buildUrl('products/a76373c6-e639-4346-95f6-018e5b89cc9f/bid-details');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for a specific product', async () => {
        const url = await requestsPage.buildUrl('products/76d56c70-ed72-47b5-8028-7f92cae80c65');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for random products', async () => {
        const url = await requestsPage.buildUrl('products/random');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for featured products', async () => {
        const url = await requestsPage.buildUrl('products/featured-products?count=5');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for featured products posted by a specific user', async () => {
        const url = await requestsPage.buildUrl('products/featured-products/f9510b5e-2f0c-4194-843f-8762df097b0a?count=2');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for new arrivals', async () => {
        const url = await requestsPage.buildUrl('products/criteria?page=0&size=8&type=newArrivals');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a POST request for a product', async () => {
        await requestsPage.postProduct();
    });

    // it('makes a DELETE request for a specific product', async () => {
    //     const url = await await requestsPage.buildUrl('products/3a92d478-8772-4ce4-a99e-04d291f6ed68');
    //     const response = await requestsPage.deleteRequest(url);
    //     await expect(response.status).toEqual(requestsPage.status);
    // });
})