import requestsPage from '../pageobjects/requests.page.js'

describe('API regression test for validating object attributes of items', () => {   
    it('makes a GET request', async () => {
        const response = await requestsPage.getRequest(requestsPage.url);
        const data = await response.data;
        await requestsPage.matchingData(response.status, requestsPage.status);
        await requestsPage.validatingObjectAttributes(data);
    });
})