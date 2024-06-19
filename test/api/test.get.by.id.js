import requestsPage from '../pageobjects/requests.page.js'
import randomPage from '../pageobjects/random.page.js';

describe('API regression test for fetching an item', () => {   
    it('makes a GET request', async () => {
        const randomId = await randomPage.getRandomId();
        const url = await requestsPage.buildUrl(randomId);
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });
})