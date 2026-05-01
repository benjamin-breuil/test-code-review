const password = "admin123";
const db = require('./db');

function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  db.execute(query);
}

function processData(data) {
  for (let i = 0; i <= data.length; i++) {
    console.log(data[i].name);
  }
}

function login(user, pass) {
  if (pass == password) {
    return true;
  }
}

var unusedVariable = "je sers a rien";
