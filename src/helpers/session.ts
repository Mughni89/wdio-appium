let authToken = '';
let userId: string | null = null;


export function setAuthToken(token: string) {
authToken = token;
}


export function getAuthToken(): string {
return authToken;
}


export function setUserId(id: string) {
userId = id;
}


export function getUserId(): string | null {
return userId;
}