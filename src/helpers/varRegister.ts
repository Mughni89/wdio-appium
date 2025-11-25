import * as env from '../../wdio.env.json';
import type { UserData } from '../types/registerType';
import { writeFile } from 'fs/promises';

const { domainEmail } = env;

function getUniqueNumber(n: number) {
  return new Date().getTime().toString().substring(n);
}

function getUniqueStringFromTime() {
  return Date.now().toString(36).replace(/[0-9]/g, '');
}

function getUniquePhone() {
  return "8" + Date.now().toString().substring(4); 
}

function getUserMail() {
  return 'skorkuser' + getUniqueNumber(7);
}

function getRandomName() {
  return 'skorkuser' + getUniqueStringFromTime() ;
}

// const emailUser = `${getUserMail()}@${domainEmail}`;

// let userData: UserData = {
//     emailUser
// };
  
export async function createVarRegister() {
    const userData: UserData = {
        emailUser: `${getUserMail()}@${domainEmail}`,
        nameUser: getRandomName(),
        phoneUser: getUniquePhone(),
        passwordUser: `Test@123`,
        pinUser: `123456`
    };

    await writeFile(
        './fixtures/DataRegUser.json',
        JSON.stringify(userData, null, 2)
    );

    return userData;
}