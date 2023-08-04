class Database {
  constructor(data) {

    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
const mongo = new Database("MongoDB");
console.log(mongo.getData());
const mysql = new Database("MySQL");
const mysql2 = new Database("MySQL2");
console.log(mysql.getData());
console.log(mysql2.getData());
