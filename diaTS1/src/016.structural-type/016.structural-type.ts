type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };
// No typescript o tipo User não precisa ser necessáriamente do tipo 'User', basta apenas q cumpra as regras do User (username e pasword)

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'ana', password: '123456' };
const sentUser = { username: 'ana', password: '123456', permissions: '' };
// Como o User em "verifyUser() não precisa ser necessáriamente do tipo User, isso é possivel:
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
