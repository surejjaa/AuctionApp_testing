import requestsPage from '../pageobjects/requests.page.js'

describe('API categories test for Auction App', () => {    
    it('makes a GET request for all listed categories', async () => {
        const url = await requestsPage.buildUrl('categories');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for a secific category', async () => {
        const url = await requestsPage.buildUrl('categories/ef56a177-7061-467e-b244-dd877ece6b78');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

    it('makes a GET request for top level categories', async () => {
        const url = await requestsPage.buildUrl('categories/top-level');
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });
})