import { rest } from "msw";

export const handlers = [
    // rest.post("http://python.twnsnd.online:31080/api/auth/jwt/create/", (req, res, ctx) => {
    //      return res(
    //           ctx.json<{
    //                "refresh": string,
    //                "access": string
    //           }>({
    //                "refresh": "K510cJLR1BRg0rTI",
    //                "access": "EEARZx7-"
    //           })
    //      );
    // }),
    // rest.get("https://python.twnsnd.online/api/solution/solutions/:numberId/", (req, res, ctx) => {
    //     const { solutionId } = req.params;
    //     const numberId = Number(solutionId);
    //     return res(
    //         ctx.json({
    //             id: numberId,
    //             firstName: "John",
    //             lastName: "Maverick",
    //         }),
    //     );
    // }),
];
