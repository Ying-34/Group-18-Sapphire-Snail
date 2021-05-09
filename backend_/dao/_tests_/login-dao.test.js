require("../../db/dbconnection");
const loginDao = require('../login-dao');

beforeEach(async() => {
    await loginDao.deleteAllUsers();
});

it("Create a user (success)", async() => {
    const response = await loginDao.register("test", "12345678");
    expect(response.success).toBeTruthy();

    const findUser = await loginDao.getUserByUsername("test");
    expect(findUser.username).toBe("test");
    expect(findUser.password).toBe("12345678");
});

it("Create a user with empty username (failed)", async() => {
    const response = await loginDao.register("", "12345678");
    expect(response.success).toBeFalsy();
    expect(response.errorMessage).toBe(" Username should not be empty ");
})

it("Create a user with password less than 6 digits (failed)", async() => {
    const response = await loginDao.register("test", "");
    expect(response.success).toBeFalsy();
    expect(response.errorMessage).toBe(" Password length should more than 6 digits ");
})

it("Create a user that username exists (failed)", async() => {
    const response = await loginDao.register("test", "12345678");
    expect(response.success).toBeTruthy();

    const response1 = await loginDao.register("test", "12345678");
    expect(response1.success).toBeFalsy();
    expect(response1.errorMessage).toBe(" Username exists, please try another one ");
});

it("Login in (success)", async() => {
    const response = await loginDao.register("test", "12345678");
    expect(response.success).toBeTruthy();

    const response1 = await loginDao.login("test", "12345678");
    expect(response1.success).toBeTruthy();
});

it("Login in with not exist username (failed)", async() => {
    const response = await loginDao.register("test", "12345678");
    expect(response.success).toBeTruthy();

    const response1 = await loginDao.login("test1", "12345678");
    expect(response1.success).toBeFalsy();
    expect(response1.errorMessage).toBe(" Username not exist ");
});

it("Login in with wrong password (failed)", async() => {
    const response = await loginDao.register("test", "12345678");
    expect(response.success).toBeTruthy();

    const response1 = await loginDao.login("test", "123456789");
    expect(response1.success).toBeFalsy();
    expect(response1.errorMessage).toBe(" Password not match ");
});