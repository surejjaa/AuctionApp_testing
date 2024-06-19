import { $ } from '@wdio/globals'
import Page from "./page.js";

class LoginPage extends Page {
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

export default new LoginPage();