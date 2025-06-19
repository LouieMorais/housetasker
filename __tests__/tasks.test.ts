import request from 'supertest'

console.log('API URL:', process.env.SUPABASE_URL)
console.log('Anon Key:', process.env.SUPABASE_ANON_KEY?.slice(0, 10)) // for sanity check

const API = `${process.env.SUPABASE_URL}/rest/v1`
const headers = {
  apikey: process.env.SUPABASE_ANON_KEY!,
  Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY!}`,
}

describe('Tasks API', () => {
  it('should return a list of tasks', async () => {
    const res = await request(API).get('/tasks?select=*').set(headers)

    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it('should reject task creation with missing fields', async () => {
    const res = await request(API)
      .post('/tasks')
      .set(headers)
      .send({ title: 'Broken task' }) // intentionally incomplete

    expect(res.statusCode).toBeGreaterThanOrEqual(400)
  })
})
