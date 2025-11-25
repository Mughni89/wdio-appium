import {$} from '@wdio/globals';

class LoginPage {
    async entersEmail(value: string) {
        return $('id=com.kbij.skorku:id/et_email').setValue(value);
    }
    async entersPassword(value: string) {
        return $('id=com.kbij.skorku:id/et_password').setValue(value);
    }
    async clickLogin() {
        return $('id=com.kbij.skorku:id/btnLogin').click();
    }
}

export default new LoginPage();