const users = [
  { name: 'Mariah', age: 26, company: 'XPTO' },
  { name: 'John', age: 14, company: 'XPTO' },
  { name: 'Gabriel', age: 40, company: 'ABC' },
];

const ages = users.map(usr => usr.age);
console.log(ages);

const xptoMoreThan21 = users.filter(usr => usr.age >= 21 && usr.company === 'XPTO' );
console.log(xptoMoreThan21);

const isThereWYZ = users.find(usr => usr.company === 'WYZ');
console.log(!!isThereWYZ);

const usersOlder = users.map(usr => ({ ...usr, age: usr.age * 2 }));
console.log(usersOlder.filter(usr => usr.age > 50));