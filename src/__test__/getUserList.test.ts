import app from '../app'
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

describe('List User', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    })
    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });
    test('get registered user', async () => {
        const res = await request(app)
            .get('/api/user')
        expect(res.body.data).toHaveLength(0)

    })


})