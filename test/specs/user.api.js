import { expect } from '@wdio/globals'
import requestsPage from '../pageobjects/requests.page.js'
import dataGenerator from '../pageobjects/data.generator.js';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('API users test for Auction App', () => {  
    it('makes a GET request for a specific user', async () => {
        const url = await requestsPage.buildUrl('users/b3e3e063-c418-4633-a071-3b0d573aa422');
        const mock = new MockAdapter(axios);
        mock.onGet(url).reply(403);

        try {
            const response = await requestsPage.getRequest(url);
            fail('Expected request to fail with a 403 status, but it succeeded.');
        } catch (error) {
            expect(error.response.status).toEqual(requestsPage.forbiddenStatus);
        }
        mock.restore();
    });

    it('makes a PUT request for a product', async () => {
        const url = await requestsPage.buildUrl('users/8889626a-523d-4b09-9b22-fa6e0a7a5d61');
        const data = await dataGenerator.putUserData();
        const response = await requestsPage.putRequest(url, data);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });
})