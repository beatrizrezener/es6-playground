class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  isAdmin() {
    return !!this.admin;
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
    this.admin = true;
  }
}

const User1 = new User('email@email.com', 'pass123');
const Adm1 = new Admin('email@email.com', 'pass123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());