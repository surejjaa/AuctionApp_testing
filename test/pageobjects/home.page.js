import { $ } from '@wdio/globals'
import Page from "./page.js";

class HomePage extends Page {
    get registerButton(){
        return $('//*[@id="root"]/div[1]/div[2]/div/a[2]');
    }

    get bidNowButton(){
        return $('//button[@class="btn body-bold  "]');
    }

    
}

export default new HomePage();