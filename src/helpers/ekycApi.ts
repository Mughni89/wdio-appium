import axios from 'axios';

const API_BASE = process.env.EKYC_API_BASE;
if (!API_BASE) {
    throw new Error("ENV EKYC_API_BASE belum diset! Contoh: EKYC_API_BASE=https://api.test.myapp.local");
}

export async function registerUser({
    nik,
    email,
    no_hp,
    name,
    dob,
    pob,
    address,
    pin,
    password
}: any) {
    try {
        const payload = {
            nik,
            email,
            no_hp,
            name,
            dob,
            pob,
            address,
            pin,
            password
        };

        console.log("[EKYC API] Register payload:", payload);

        const response = await axios.post(
            `${API_BASE}/v2/auth/register`,
            payload,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        const data = response.data;

        // Data response yang Anda sebutkan:
        // status, message_id, message_en, data {id_user, nik, ... , token}

        if (!data?.data?.token) {
            throw new Error("Register berhasil tapi token tidak ditemukan!");
        }

        return data.data; // return {id_user, nik, email, ..., token}

    } catch (err: any) {
        console.error("[EKYC API] Register error:", err.response?.data || err.message);
        throw err;
    }
}