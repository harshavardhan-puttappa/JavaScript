function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
}

User.prototype.login = function() {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function() {
  this.online = false;
  console.log(this.email, "has logged out");
};

function Admin(...args) {
  User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
  users = users.filter(user => {
    return u.email != user.email;
  });
};

var userOne = new User("harshavardhan", "harsha.v006@gmail.com");
var userTwo = new User("aarush", "aaru@gmail.com");
var admin = new Admin("admin user", "admin@gmail.com");

var users = [userOne, userTwo, admin];

console.log(admin);
