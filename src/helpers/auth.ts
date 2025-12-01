import axios from 'axios';

const API_BASE = process.env.EKYC_API_BASE || 'https://api.test.myapp.local';

export type RegisterApiResponse = {
  status: string;
  message_id?: string;
  message_en?: string;
  data: {
    id_user: string;
    nik?: string;
    email: string;
    no_hp?: string;
    name?: string;
    dob?: string;
    pob?: string;
    address?: string;
    pin?: string;
    is_ocr?: boolean;
    sq_1a?: string;
    is_liveness?: boolean;
    sq_2a?: string;
    is_dukcapil?: boolean;
    sq_3a?: string;
    rcv_otp?: string;
    entry_on?: string;
    img_user?: string;
    bid?: string;
    sid?: string;
    attempt_login?: string,
    is_otp?: boolean,
    is_google?: boolean,
    sh?: string;
    is_fc?: boolean;
    reg_id?: string;
    is_claim?: boolean;
    is_if?: boolean;
    id_jns_otp?: boolean;
    cod?: string;
    did?: string;
    notif_sh?: string;
    otp_time?: string;
    recov_code_time?: string;
    notif_id?: string;
    is_ekyc?: string;
    is_ext?: string;
    is_pin?: string;
    pin_time?: string;
    is_active?: string;
    version?: string;
    is_signature?: string;
    signature_id?: string;
    profile_picture?: string;
    is_credit_notif?: string;
    is_credit_complaint_notif?: string;
    is_promo_notif?: string;
    is_article_notif?: string;
    is_system_setting_notif?: string;
    send_to_partner?: string;
    last_login_time?: string;
    attempt_pin?: string;
    id: string;
    token: string; 
  };
};

/**
 * Setelah UI registration selesai (OTP + PIN),
 * kita panggil API register menggunakan email & password yang sama
 * untuk mendapatkan token autentikasi.
 */
export async function registerUserApi(
  email: string,
  password: string
): Promise<RegisterApiResponse> {
  const resp = await axios.post(
    `${API_BASE}/v2/auth/register`,
    {
      email,
      password,   // <--- sesuai flow backend Anda
    },
    { timeout: 20000 }
  );

  return resp.data as RegisterApiResponse;
}

/**
 * Helper untuk hanya mengambil token dari API register
 */
export async function getTokenFromRegister(
  email: string,
  password: string
): Promise<string> {
  const body = await registerUserApi(email, password);
  return body.data.token;
}
