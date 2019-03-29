import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'foo322'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: 'foo322'
  });
});

test('should clear uid for logout', () => {
  const user = {
    uid: 'foo322'
  };
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer(user, action);
  expect(state).toEqual({});
})