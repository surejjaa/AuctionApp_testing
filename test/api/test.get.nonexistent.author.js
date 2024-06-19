import randomPage from '../pageobjects/random.page.js';
import requestsPage from '../pageobjects/requests.page.js';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('API regression test for fetching non-existent author', () => {   
    it('makes a GET request and expects a 404 status', async () => {
        const randomId = await randomPage.getRandomIntFromRange(600, 999);
        const url = await requestsPage.buildUrl(randomId);

        const mock = new MockAdapter(axios);
        mock.onGet(url).reply(400);

        try {
            const response = await requestsPage.getRequest(url);
            fail('Expected request to fail with a 400 status, but it succeeded.');
        } catch (error) {
            expect(error.response.status).toEqual(requestsPage.failedStatus);
        }

        mock.restore();
    });
})