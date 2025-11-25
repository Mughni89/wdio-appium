import {$} from '@wdio/globals';

class OnBoardPage {
    get btnMulai() {
        return $('id=com.kbij.skorku:id/buttonStart');
    }

    async clickMulai() {
        await this.btnMulai.waitForDisplayed({ timeout: 5000 });
        await this.btnMulai.click();
    }
}

export default new OnBoardPage();
