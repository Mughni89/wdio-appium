import { When} from '@wdio/cucumber-framework';
//import { driver } from '@wdio/globals';
// import { createVarRegister } from '../helpers/varRegister';
// import type {UserData} from '../types/registerType';
// import { swipeLeft } from '../helpers/gestures';
import LoginPage from '../pages/loginPage';
import dataUserJson from '../../fixtures/DataRegUser.json';

let dataUser = dataUserJson;

When('user enters credentials', async () => {
    await LoginPage.entersEmail(dataUser.emailUser);
    await LoginPage.entersPassword(dataUser.passwordUser);
    await LoginPage.clickLogin();
});