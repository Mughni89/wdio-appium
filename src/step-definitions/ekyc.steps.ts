import { When, Then} from '@wdio/cucumber-framework';
import EkycPage from '../pages/ekycPage';
import { uploadKtpBypass, pollEkycStatus } from '../helpers/ekycApi';
import { getWorld } from '../world/testWorld';

const world = getWorld();

When('user uploads eKTP', async () => {
    await EkycPage.clickMulaiVerifikasiSekarang();
    await EkycPage.clickAmbilFoto();
    await EkycPage.allowTakePicture();
    // await EkycPage.captureKtp();
    const result = await uploadKtpBypass(
        './fixtures/ktp_dummy.jpg',  
        world.nik,                  
        world.userId                
    );
    world.referenceId = result.referenceId;
    const ocrStatus = await pollEkycStatus(world.referenceId);
    world.ocrResult = ocrStatus;
    // await EkycPage.previewEktp();
    await EkycPage.confirmOcr();
});

When('user does liveness detection', async () => {
    await EkycPage.startLiveness();
    // await EkycPage.captureLiveness();
});

Then('user successfully complete ekyc', async () => {
    await PurchasePage.clickKOLmuAman();
    await PurchasePage.clickSayaTertarik();
});