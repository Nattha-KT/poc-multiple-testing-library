import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/logout', async () => {
    return HttpResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    )
  }),
]

