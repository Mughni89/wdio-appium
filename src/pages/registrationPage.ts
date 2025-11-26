import {$} from '@wdio/globals';

class RegistrationPage {
    async allowNotif() {
        return $('id=com.android.permissioncontroller:id/permission_allow_button').click();
    }
    async clickCreateAccount() {
        return $('id=com.kbij.skorku:id/btnSignIn').click();
    }
    async entersName(value: string) {
        await $('id=com.kbij.skorku:id/et_name').setValue(value);
    }
    async entersEmail(value: string) {
        return $('id=com.kbij.skorku:id/et_email').setValue(value);
    }
    async entersPhone(value: string) {
        return $('id=com.kbij.skorku:id/et_phone').setValue(value);
    }
    async entersPassword(value: string) {
        return $('id=com.kbij.skorku:id/et_password').setValue(value);
    }
    async entersConfirmPassword(value: string) {
        return $('id=com.kbij.skorku:id/et_confirm_password').setValue(value);
    }
    async clickSendForm() {
        return $('id=com.kbij.skorku:id/btn_verify_otp').click();
    }
    async readFwd() {
        return $('id=com.kbij.skorku:id/btnScrollDown').click();
    }
    async agreesAgreement() {
        return $('id=com.kbij.skorku:id/cbxAgreement').click();
    }
    async clickLanjutkan() {
        return $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async enterOtp(otp: string) {
        await $('id=com.kbij.skorku:id/pin1').click();
            for (const digit of otp){
                await driver.pressKeyCode(Number(digit));
            }
    }
    async createPIN() {
        return $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async entersPIN(pin: string) {
        for (const digit of pin) {
            const btn = $(`id=com.kbij.skorku:id/btn${digit}`);
            await btn.waitForDisplayed({ timeout: 5000 });
            await btn.click();
    }
    }
    async entersConfirmPIN(pin: string) {
        for (const digit of pin) {
            const btn = $(`id=com.kbij.skorku:id/btn${digit}`);
            await btn.waitForDisplayed({ timeout: 5000 });
            await btn.click();
    }
    }
    async successCreateAccount() {
        return $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async skipToHomepage() {
        return $('id=com.kbij.skorku:id/skipText').click();
    }
    async hoever() {
        await $('id=com.kbij.skorku:id/btnNext').click();
        await $('id=com.kbij.skorku:id/btnNext').click();
        await $('id=com.kbij.skorku:id/btnDone').click();
    }
}

export default new RegistrationPage();
