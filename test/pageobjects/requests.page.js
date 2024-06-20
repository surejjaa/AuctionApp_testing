import axios from "axios";
import Page from './page.js';

class RequestsPage extends Page {
    async getRequest(url){
        try {
            const response = await axios.get(`${url}`);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getRequestWithParams(url, data){
        try {
            const response = await axios.get(`${url}`, data, {
                headers: { 'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json' }
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async postRequest(url, data){
        try {
            const response = await axios.post(url, data, {
                headers: { 'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json' }
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async putRequest(url, data){
        try {
            const response = await axios.put(`${url}`, data, {
                headers: { 'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json' }
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async deleteRequest(url){
        try {
            const response = await axios.delete(`${url}`, {
                headers: { 'Authorization': `Bearer ${this.token}` }
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default new RequestsPage();
