function createLoginTracker(user) {
  let failedAttempts = 0;
  const maxAttempts = 3;

  const login = (password) => {
    if (failedAttempts >= maxAttempts) {
      return 'Account locked due to too many failed login attempts';
    }

    if (password === user.password) {
      return 'Login successful';
    }

    failedAttempts++;

    return `Attempt ${failedAttempts}: Login failed`;
  };

  return login;
}

module.exports = {
  createLoginTracker
};