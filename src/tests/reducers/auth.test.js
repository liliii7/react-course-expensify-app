import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    }
    const state = authReducer({}, action)
    expect(state.uid).toEqual(action.uid)
})

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT',
        uid: ''
    }
    const state = authReducer({}, action)
    expect(state).toEqual({})
})