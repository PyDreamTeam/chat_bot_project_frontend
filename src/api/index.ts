import { CreateUserResponse } from "../types/user";

const BASE_URL = "http://python.twnsnd.online:31080";

const post = (url: string, body: Record<string, unknown>) => {
     const fullUrl = new URL(url, BASE_URL);
     return fetch(fullUrl, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json;charset=utf-8" },
     }).then((data) => {
          if (data.ok) {
               return data.json();
          }
          throw new Error("oops");
     });
};

export const createUser = (body: Record<string, unknown>): Promise<CreateUserResponse> => post("/api/auth/users/", body);



export const loginUser = (body: Record<string, unknown>) => post("/api/auth/jwt/create/", body);
// export const logoutUser = (body: Record<string, unknown>) => post("/api/auth/logout/", body);

const postToken = (url: string, access: string, body: Record<string, unknown>) => {
     const fullUrl = new URL(url, BASE_URL);
     return fetch(fullUrl, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
               Authorization: `JWT ${access}`,
               "Content-Type": "application/json",
          },
     }).then((data) => {
          if (data.ok) {
               return data.json();
          }
          throw new Error("oops");
     });
};

export const logoutUser = (access: string, body: Record<string, unknown>) => postToken("/api/auth/logout/", access, body);
