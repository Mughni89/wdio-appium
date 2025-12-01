import {Client} from 'pg';
import dataUser from '../../fixtures/DataRegUser.json';

export async function getLatestOtp() {
    const email = dataUser.emailUser;
    const client = new Client({
        host: '103.196.154.5',
        port: '5432',
        user: 'suitmedia',
        password: 'zKAA^M2LwLd7^peDv@oK9d9p5X!xfi&@$8TnRfuf',
        database: 'suitmedia_cbi'
});
    await client.connect();

    for (let i = 0; i < 5; i++) {
        const res = await client.query(
            `SELECT message 
             FROM mbl_l_otp
             WHERE target = $1
             ORDER BY id_log_otp DESC
             LIMIT 1`,
            [email]
        );

        if (res.rows.length > 0) {
            await client.end();
            return res.rows[0].message;
        }

        await new Promise(r => setTimeout(r, 1000)); // retry tiap 1 detik
    }

    await client.end();
    throw new Error("OTP not found in database!");
}
