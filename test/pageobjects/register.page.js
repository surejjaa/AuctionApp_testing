import { $ } from '@wdio/globals'
import Page from "./page.js";

class RegisterPage extends Page {
    get inputFirstName(){
        return $('//input[@id="firstName"]');
    }

    get inputLastName(){
        return $('//input[@id="lastName"]');
    }

    get inputEmail(){
        return $('//input[@id="email"]');
    }

    get inputPassword(){
        return $('//input[@id="password"]');
    }
    
    get loginButton(){
        return $('//button[@class="btn body-bold  filled"]');
    }
}

export default new RegisterPage();