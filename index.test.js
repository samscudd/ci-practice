const { expect } = require("@jest/globals");
const supertest = require("supertest");
const rewire = require("rewire");
const app = rewire("./index");
const request = supertest(app)


describe('get_hello', () => {
    test('returns hello world', () => {
        const get_hello = app.__get__('get_hello');     // Use rewire to access private function
        expect(get_hello()).toEqual('hello world');
    });
});

describe('api/hello', () => {
    test('returns hello world', () => {
        return request.get("/api/hello").then(res => {
            expect(res.statusCode).toBe(200);
            expect(res.body.text).toBe('hello world');
        });
    });
});

afterAll(done => {
    app.close();        // Be sure to close the server
    done();
});