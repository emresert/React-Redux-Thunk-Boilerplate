import axios from "axios";
import { API_URL, getUserInfoToken, getUserLang } from "../../helper/Utils";

const token = getUserInfoToken();

const check401Error = (error: any, url: string) => {

    let isUserAuth: boolean = false
    if (error.response.status === 401) {
        window.open(window.location.origin + "/login?sessionEnded=true", "_self");
        isUserAuth = false
        console.error(url, "atılan istek 401 döndü")
    } else {
        isUserAuth = true
    }

    return isUserAuth
}

export const postMethod = (url: string, data: any, contentType: any = null) => {
    const lang = getUserLang();

    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}` + url, data, {
                headers: {
                    Authorization: `Basic ${token}`,
                    "Content-Type": contentType ? contentType : "application/json",
                    Token: getUserInfoToken() ? getUserInfoToken() : "",
                    "Content-Language": lang

                },
            })
            .then((response: any) => {
                if (response.status === 200 || response.status === 100) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            })
            .catch((error: any) => {
                let isUserAuth: boolean = check401Error(error, `${API_URL}` + url)

                if (isUserAuth) {
                    reject(error.response);
                }
            });
    });
};

export const updateMethod = (url: string, data: any) => {
    const lang = getUserLang()
    return new Promise((resolve, reject) => {
        axios
            .put(`${API_URL}` + url, data, {
                headers: {
                    Authorization: `Basic ${token}`,
                    "Content-Type": "application/json",
                    "Content-Language": lang
                },
            })
            .then((response: any) => {
                if (response.status === 200 || response.status === 100) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            })
            .catch((error: any) => {
                let isUserAuth: boolean = check401Error(error, `${API_URL}` + url)

                if (isUserAuth) {
                    reject(error.response);
                }
            });
    });
};

export const deleteMethod = (url: string, uniqueKey: any) => {
    const lang = getUserLang()
    return new Promise((resolve, reject) => {
        axios
            .delete(`${API_URL}` + url, {
                headers: {
                    Authorization: `Basic ${token}`,
                    "Content-Type": "application/json",
                    "Content-Language": lang
                },
                data: {
                    id: uniqueKey,
                },
            })
            .then((response: any) => {
                if (response.status === 200 || response.status === 100) {
                    resolve(response.data);
                } else {
                    reject();
                }
            })
            .catch((error: any) => {
                let isUserAuth: boolean = check401Error(error, `${API_URL}` + url)

                if (isUserAuth) {
                    reject(error.response);
                }
            });
    });
};

export const getMethod = (url: string, tokenData?: string, apiUrl?: string) => {
    const lang = getUserLang()

    return new Promise((resolve, reject) => {
        axios
            .get(`${API_URL}` + url, {
                headers: {
                    Token: getUserInfoToken(),
                    "Content-Type": "application/json",
                    "Content-Language": lang
                },
            }
            )
            .then((response: any) => {
                if (response.status === 200 || response.status === 100) {
                    resolve(response.data);
                } else {
                    reject();
                }
            })
            .catch((error: any) => {
                let isUserAuth: boolean = check401Error(error, `${API_URL}` + url)

                if (isUserAuth) {
                    reject(error.response);
                }
            });
    });
};


