import axios from "axios";
import Page from './page.js';
import FormData from 'form-data';
import fs from 'fs/promises';
import path from 'path';

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

    // async constructFormData(data) {
    //     const formData = new FormData();
    //     if (data.jsonData) {
    //         for (const key in data.jsonData) {
    //             if (data.jsonData.hasOwnProperty(key)) {
    //                 formData.append(key, JSON.stringify(data.jsonData[key]), { contentType: 'application/json' });
    //             }
    //         }
    //     }
    //     if (data.files) {
    //         for (const key in data.files) {
    //             if (data.files.hasOwnProperty(key)) {
    //                 const filePath = path.resolve(data.files[key]);
    //                 const fileBuffer = fs.readFileSync(filePath);
    //                 formData.append(key, fileBuffer, path.basename(filePath));
    //             }
    //         }
    //     }
    //     return formData;
    // }

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
