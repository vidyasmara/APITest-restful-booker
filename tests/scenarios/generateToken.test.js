import { assert } from "chai";
import RestfulAPI from "$root/pages/restfulBooker.api";
import * as data from "$root/data/user.data";

describe('As an admin, i want to generate token', () => {
    it('Should successfully generate token', async ()=> {
        const response = await RestfulAPI.generatetoken(data.VALID_ADMIN);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["token"]);
        assert.isString(response.data.token);
    });
});

describe('As an admin, i can not generate token without password', () => {
    it('Ensure admin can not generate token without password', async ()=> {
        const response = await RestfulAPI.generatetoken(data.INVALID_ADMIN);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["reason"]);
        assert.isString(response.data.reason);
    });
});

describe('As an admin, i can not generate token with invalid credentials', () => {
    it('Ensure admin can not generate token with invalid credentials', async ()=> {
        const response = await RestfulAPI.generatetoken(data.INVALID_CREDENTIALS);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["reason"]);
        assert.isString(response.data.reason);
    });
});

describe('As an admin, i can not generate token with blank credentials', () => {
    it('Ensure admin can not generate token with blank credentials', async ()=> {
        const response = await RestfulAPI.generatetoken(data.BLANK_CREDENTIALS);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["reason"]);
        assert.isString(response.data.reason);
    });
});