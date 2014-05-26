Accounts.onCreateUser(function(options, user) {
  user.intercomHash = IntercomHash(user, 'defb0a6f02dbc40ffbc423408555d8c033671095');

  if (options.profile)
    user.profile = options.profile;

  return user;
});
