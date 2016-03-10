module.exports = function(app) {
  var User = app.models.account;
  var Org = app.models.company;

  // Create an organization named as 'Google'
  Org.create({name: 'Google'}, function(err, org) {
    console.log(err, org);
    // Create a user within the organization
    org.members.create(
      {
        username: 'e12345',
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@gmail.com',
        password: '123'
      },
      function(err, user) {
        console.log(err, user);

        // Now try to login with realm
        User.login({username: 'Google:e12345', password: '123'},
          function(err, result) {
            console.log(err, result);
          })
      });



  });

  // Create an organization named as 'Facebook'
  Org.create({name: 'Facebook'}, function(err, org) {
    console.log(err, org);
    // Create a user within the organization
    org.members.create(
      {
        username: 'e12345',
        firstName: 'John',
        lastName: 'Barlow',
        email: 'john@gmail.com',
        password: '123'
      },
      function(err, user) {
        console.log(err, user);

        // Now try to login with realm
        User.login({username: 'Facebook:e12345', password: '123'},
          function(err, accessToken) {
            console.log(err, accessToken);
          })
      });

  });

};