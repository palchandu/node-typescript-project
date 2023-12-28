import app from '../app'
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

describe('Register User', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    })
    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });
    test('should register user', async () => {
        const res = await request(app)
            .post('/api/user')
            .send({ name: "test", email: "test@example", password: "test123", age: 30, address: "test address" })
        expect(res.statusCode).toEqual(200);

    })

    
})