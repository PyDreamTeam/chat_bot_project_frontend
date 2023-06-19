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

export const createUser = (body: Record<string, unknown>): Promise<CreateUserResponse> => post("/user/", body);
export const loginUser = (body: Record<string, unknown>): Promise<CreateUserResponse> => post("/auth/token/create/", body);

const postToken = (url: string, token: string) => {
     const fullUrl = new URL(url, BASE_URL);
     return fetch(fullUrl, {
          method: "POST",
          headers: {
               Authorization: `Token ${token}`,
               "Content-Type": "application/json",
          },
     }).then((data) => {
          if (data.ok) {
               return data.json();
          }
          throw new Error("oops");
     });
};

export const logoutUser = (token: string) => postToken("/auth/token/destroy/", token);
