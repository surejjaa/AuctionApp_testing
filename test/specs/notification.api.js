import requestsPage from '../pageobjects/requests.page.js'
import dataGenerator from '../pageobjects/data.generator.js';

describe('API notification test for Auction App', () => {
    it('makes a GET request for all notifications', async () => {
        const url = await requestsPage.buildUrl('notifications/latest?userId=49d2f5e3-2f00-479f-9e5b-84d19ad201c0&productId=c51a5a2e-c653-42a9-9bc1-ca40f4e56832');
        const data = await dataGenerator.getNotifications();
        const response = await requestsPage.getRequestWithParams(url, data);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });

})