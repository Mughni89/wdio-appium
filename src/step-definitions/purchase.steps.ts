import { When, Then} from '@wdio/cucumber-framework';
//import { driver } from '@wdio/globals';
// import { createVarRegister } from '../helpers/varRegister';
// import type {UserData} from '../types/registerType';
// import { swipeLeft } from '../helpers/gestures';
import PurchasePage from '../pages/purchasePage';
// import dataUserJson from '../../fixtures/DataRegUser.json';

// let dataUser = dataUserJson;

When('user chose SkorKu Pro', async () => {
    await PurchasePage.clickKOLmuAman();
    await PurchasePage.clickSayaTertarik();
});

When('user applies promo code', async () => {
    await PurchasePage.clickBanner();
    await PurchasePage.entersPromo('JWOM3BYZ');
    await PurchasePage.clickLanjut();
});

When('user does subscription', async () => {
    await PurchasePage.clickSubscribe();
    await PurchasePage.clickPay();
});

Then('user success purchase package', async () => {
    await PurchasePage.successPurchase();
});