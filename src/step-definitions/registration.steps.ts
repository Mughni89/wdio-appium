import { When, Then } from '@wdio/cucumber-framework';
import RegistrationPage from '../pages/registrationPage';
import { getLatestOtp } from '../helpers/getOtp';
import dataUserJson from '../../fixtures/DataRegUser.json';
import { getWorld } from '../world/testWorld';
import { authRegister } from '../helpers/authRegister';

let dataUser = dataUserJson;

When('user allow SkorKu to send notif', async () => {
    await RegistrationPage.allowNotif();
});

When('user clicks create account', async () => {
    await RegistrationPage.clickCreateAccount();
});

When('user completes registration form', async () => {
    const world = getWorld();

    // Simpan ke world untuk API nanti
    world.email = dataUser.emailUser;
    world.password = dataUser.passwordUser;
    world.phone = dataUser.phoneUser;

    await RegistrationPage.entersName(dataUser.nameUser);
    await RegistrationPage.entersEmail(dataUser.emailUser);
    await RegistrationPage.entersPhone(dataUser.phoneUser);
    await RegistrationPage.entersPassword(dataUser.passwordUser);
    await RegistrationPage.entersConfirmPassword(dataUser.passwordUser);
    await RegistrationPage.clickSendForm();
});

When('user agrees term and condition', async () => {
    await RegistrationPage.readFwd();
    await RegistrationPage.agreesAgreement();
    await RegistrationPage.clickLanjutkan();
});

When('user agrees privacy policy', async () => {
    await RegistrationPage.readFwd();
    await RegistrationPage.agreesAgreement();
    await RegistrationPage.clickLanjutkan();
});

When('user enters OTP', async () => {
    const world = getWorld();
    const otp = await getLatestOtp();
    world.otp = otp;
        for (let i = 0; i < otp.length; i++) {
            const field = await $(`id=com.kbij.skorku:id/pin${i + 1}`);
            await field.waitForDisplayed({ timeout: 5000 });
            await field.setValue(otp[i]);
    }
    const tokenResponse = await authRegister(world.email!, otp);

    world.token = tokenResponse.data.token;
    world.userId = tokenResponse.data.user_id;
});

When('user creates PIN', async () => {
    await RegistrationPage.createPIN();
    await RegistrationPage.entersPIN(dataUser.pinUser);
    await RegistrationPage.entersConfirmPIN(dataUser.pinUser);
});

Then('user successfully created account', async () => {
    await RegistrationPage.successCreateAccount();
    await RegistrationPage.skipToHomepage();
    await RegistrationPage.hoever();
});