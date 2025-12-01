export interface TestWorld {
    email?: string;
    phone?: string;
    password?: string;
    otp?: string;
    token?: string;
    userId?: string;
    registrationPayload?: any;
}

/** Menyimpan state untuk 1 scenario */
let world: TestWorld = {};

/** Return instance world */
export function getWorld(): TestWorld {
    return world;
}

/** Reset world untuk scenario baru */
export function resetWorld() {
    world = {};
}
