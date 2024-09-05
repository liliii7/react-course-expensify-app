import { login, startLogin, logout, startLogout } from "../../actions/auth";

test("sould generate login action object", () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})
