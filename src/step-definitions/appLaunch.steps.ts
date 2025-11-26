import { Given, When} from '@wdio/cucumber-framework';
import { createVarRegister } from '../helpers/varRegister';
import type {UserData} from '../types/registerType';
import { swipeLeft } from '../helpers/gestures';
import OnBoardPage from '../pages/onBoardPage';
import dataUserJson from '../../fixtures/DataRegUser.json';

let dataUser: UserData;

Given('the app is launched', async () => {
    await createVarRegister();
        dataUser = dataUserJson;
});

When('the app should open successfully', async () => {
    const activity = await driver.getCurrentActivity();
    console.log('Current activity:', activity);
    await driver.pause(8000);

    await swipeLeft();
    await driver.pause(2000);

    await swipeLeft();
    await driver.pause(2000);
});

When('the user click mulai', async () => { 
    await OnBoardPage.clickMulai();
});