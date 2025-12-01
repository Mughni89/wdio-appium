import {$} from '@wdio/globals';

class EkycPage {
    async clickMulaiVerifikasiSekarang() {
        await $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async clickAmbilFoto() {
        await $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async allowTakePicture() {
        await $('id=com.android.permissioncontroller:id/permission_allow_foreground_only_button').click();
    }
    async captureKtp() {

    }
    async previewEktp() {
        await $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async confirmOcr() {
        await $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async startLiveness() {
        await $('id=com.kbij.skorku:id/btnContinue').click();
    }
    async captureLiveness() {
        
    }
    // async () {
    //     await $('id=com.kbij.skorku:id/inputEditText').setValue(value);
    // }
}

export default new EkycPage();