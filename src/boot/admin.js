module.exports = function(app) {
  var Account = app.models.account;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  Account.create({email: 'jane@doe.com', password: 'opensesame'}, function(err, user) {
    if (err) throw err;

    // console.log('Created accounts:', user);

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;

      // console.log('Created role:', role);

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: user.id
      }, function(err, principal) {
        if (err) throw err;

        // console.log('Created principal:', principal);


      });
    });
  });
};