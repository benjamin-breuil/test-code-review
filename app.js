const password = "admin123";

function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  db.execute(query);
}

function processData(data) {
  for (let i = 0; i <= data.length; i++) {
    console.log(data[i].name);
  }
}
