import Page from "./page.js";

class DataGenerator extends Page{
    async getRandomId() {
        return Math.floor(Math.random() * 100) + 1;
    }
    
    async getRandomInt(num) {
        return Math.floor(Math.random() * num);
    }

    async getRandomIntFromRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
        return {product, images};
    }

    async putUserData (){
        return {
            "firstName": "Testing",
            "lastName": "Profile",
            "email": "unknown@gmail.com",
            "password": "testing123",
            "dateOfBirth": "2000-01-01",
            "address": "Address 123",
            "city": "Istanbul",
            "zipCode": "123456",
            "country": "Turkey",
            "state": "Turkey",
            "nameOnCard": "unknown",
            "cardNumber": "1234567898765432",
            "expirationDate": "2030-06-18"
        }
    }

    async getExpectedResponse (){ 
        return {
            userId: '8889626a-523d-4b09-9b22-fa6e0a7a5d61',
            firstName: 'Testing',
            lastName: 'Profile',
            email: 'unknown@gmail.com',
            role: 'USER',
            dateOfBirth: '2000-01-01',
            active: false,
            profilePicture: null,
            paymentInfoEntity: {
                paymentInfoId: '8889626a-523d-4b09-9b22-fa6e0a7a5d61',
                address: 'Address 123',
                city: 'Istanbul',
                country: 'Turkey',
                state: 'Turkey',
                zipCode: '123456',
                creditCardEntity: {
                    creditCardId: 'ae9de066-6deb-452b-970d-14ad1b22e81e',
                    nameOnCard: 'unknown',
                    cardNumber: '1234567898765432',
                    expirationDate: '2030-06-18',
                    stripeToken: null
                }
            }
        };
    }
}

export default new DataGenerator();