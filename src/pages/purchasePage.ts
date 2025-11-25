import {$} from '@wdio/globals';

class PurchasePage {
    async clickKOLmuAman() {
        await $('id=com.kbij.skorku:id/btnCheck').click();
    }
    async clickSayaTertarik() {
        await $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async clickBanner() {
        await $('id=com.kbij.skorku:id/ivBanner').click();
    }
    async entersPromo(value: string) {
        await $('id=com.kbij.skorku:id/inputEditText').setValue(value);
    }
    async clickLanjut() {
        await $('id=com.kbij.skorku:id/btnSave').click();
    }
    async clickSubscribe() {
        await $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async clickPay() {
        await $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async successPurchase() {
        return $('id=com.kbij.skorku:id/tvTitle');
    }
}

export default new PurchasePage();