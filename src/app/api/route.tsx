export async function GET(request: Request) {
  if (request.headers.get('x-api-key') !== 'my-secret') {
    return new Response('Unauthorized', { status: 401 })
  }
}
