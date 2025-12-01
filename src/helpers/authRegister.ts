// helpers/verifyOtpApi.ts
import axios from 'axios';

const API_BASE = process.env.EKYC_API_BASE || 'https://api.test.myapp.local';

export interface AuthRegister {
    status: string;
    message_id: string;
    message_en: string;
    data: {
        id_user: string;
        email: string;
        token: string;
        [key: string]: any;
    }
}

export async function authRegister(email: string, otp: string): Promise<AuthRegister> {
    try {
        const response = await axios.post(
            `${API_BASE}/v2/auth/register`,
            {
                email: email,
                otp: otp
            },
            { timeout: 15000 }
        );

        return response.data as AuthRegister;

    } catch (err: any) {
        console.error("Failed to verify OTP:", err?.response?.data || err);
        throw new Error(
            `verifyOtpApi failed: ${err?.response?.data?.message_en || err.message}`
        );
    }
}
