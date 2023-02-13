import { rest } from 'msw'

export const handlers = [
  rest.post('/user', (_req, res, ctx) => {
    return res(
      ctx.json<{user: {first_name: string, last_name: string}; token: string}>(
        {
          user: {
            first_name: 'John',
            last_name: 'Doe',
          },
          token: 'test_ token'
        },
      )
    )
  }),
]
