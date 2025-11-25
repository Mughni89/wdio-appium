import {Client} from 'pg';
import dataUser from '../../fixtures/DataRegUser.json';
// , { RowDataPacket }

// interface OtpRow extends RowDataPacket{
//     message: string;
//     created_at: string;
// }

// export async function getLatestOtp(email: string): Promise<string | null> {

//     const client = new Client({
//         host: '103.196.154.5',
//         port: '5432',
//         user: 'suitmedia',
//         password: 'zKAA^M2LwLd7^peDv@oK9d9p5X!xfi&@$8TnRfuf',
//         database: 'suitmedia_cbi'
//     });

//     await client.connect();

//     const query =
//         `SELECT message 
//          FROM public.mbl_l_otp
//          WHERE target = $1
//          ORDER BY trx_date DESC
//          LIMIT 1`
//     ;

//     const result = await client.query(query, [email]);

//     await client.end();

//     if (result.rows.length === 0) {
//         throw new Error("OTP not found in database!");
//     }

//     return result.rows[0].message;

// }

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
