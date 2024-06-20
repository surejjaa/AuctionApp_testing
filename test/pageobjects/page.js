import { browser, expect } from '@wdio/globals';
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs/promises';
import path from 'path';

export default class Page {
    constructor() {
        this.status = 200;
        this.url = 'http://localhost:8080/api/v1';
        this.productsUrl = 'http://localhost:8080/api/v1/products';
        this.failedStatus = 400;
        this.forbiddenStatus = 403;
        this.userId = "49d2f5e3-2f00-479f-9e5b-84d19ad201c0";
        this.token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsImlkIjoiNDlkMmY1ZTMtMmYwMC00NzlmLTllNWItODRkMTlhZDIwMWMwIiwic3ViIjoibGVqbGFtdXJhdG92aWNAZ21haWwuY29tIiwiaWF0IjoxNzE4NzQyMTcyLCJleHAiOjE3MTk5NTE3NzJ9.G0imlEoUtWdQChmpuJ3mNWTYEGzXcpPYGjeUkPToad0";
        //this.token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsImlkIjoiNDlkMmY1ZTMtMmYwMC00NzlmLTllNWItODRkMTlhZDIwMWMwIiwic3ViIjoibGVqbGFtdXJhdG92aWNAZ21haWwuY29tIiwiaWF0IjoxNzE4MTI5NDA4LCJleHAiOjE3MTg3MzQyMDh9.n81Rlmk-Y6s2VmcI28_oQ6yGNMAxPnvt8YyyPE1VvEc";
    }

    async generateData(){
        const product = {
            "name": "Winter Coat",
            "description": "Women's Waterproof Coat",
            "startPrice": 10,
            "startDate": "2024-05-10T11:10:07",
            "endDate": "2024-09-10T11:10:07",
            "status": "ACTIVE",
            "categoryId": "646baf8b-9095-4393-ac55-5e43fa9f24bf",
            "cardNumber": "123456789",
            "userId": "49d2f5e3-2f00-479f-9e5b-84d19ad201c0",
            "nameOnCard": "Some Name",
            "expirationDate": "2024-09-10",
            "zipCode": "1234",
            "city": "Oslo",
            "address": "123 Main St",
            "country": "Norway",
            "useExistingPaymentInfo": false 
        }
        const images = {
            "imageUrl": './test/utils/coat.jpg'
        }
        return await {product, images};
    }
    
    async postProduct(){
        const { product, images } = await this.generateData();
        const formData = new FormData();
        formData.append('product', JSON.stringify(product), { contentType: 'application/json' });

        const imagePath = path.resolve(images.imageUrl);
        const imageBuffer = await fs.readFile(imagePath);
        formData.append('images', imageBuffer, path.basename(imagePath));

        const headers = {
            'Authorization': `Bearer ${this.token}`,
            ...formData.getHeaders()
        };

        try {
            const response = await axios.post(this.productsUrl, formData, { headers });
            console.log('Response:', response.data);
            return response;
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            throw error;
        }
    }

    async buildUrl(data){
        return(`${this.url}/${data}`);
    }

    /**
    @param path 
    */
    open (path) {
        return browser.url(`http://localhost:8080/api/v1/${path}`)
    }

    async matchingData(response, providedData){
        await expect(response).toEqual(providedData);
    }
}
