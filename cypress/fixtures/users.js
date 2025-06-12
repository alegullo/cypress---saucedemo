const users = [
  { username: 'standard_user', password: 'secret_sauce', success: true },
  { username: 'invalid_user', password: 'invalid_password', error: 'Epic sadface: Username and password do not match any user in this service' },
  { username: 'locked_out_user', password: 'secret_sauce', error: 'Epic sadface: Sorry, this user has been locked out.' },
  { username: 'problem_user', password: 'secret_sauce', success: true },
  { username: 'performance_glitch_user', password: 'secret_sauce', url: '/inventory.html' }
];

module.exports = users;