import path from 'path';
import { config as sharedConfig } from './wdio.shared.conf.ts';

export const config = {
  ...sharedConfig,
  specs: [
    path.resolve(__dirname, '../../features/**/*.feature')
],
cucumberOpts: {
    require: [path.resolve(__dirname, '../step-definitions/*.ts')],
    timeout: 60000
},
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'RRCY4020NVT',
      'appium:platformVersion': '15',
      'appium:appPackage': 'com.kbij.skorku',
      // 'appium:appActivity': '.ui.splash.SplashActivity',
      'appium:automationName': 'UiAutomator2'
    }
  ],
  before: async () => {
    try {
        const startBtn = await $('id=com.kbij.skorku:id/buttonStart');
        if (await startBtn.isDisplayed()) {
            console.log('Skipping onboarding...');
            await startBtn.click();
        }
    } catch {}
}
};