const sql = require("mysql");

let con = sql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "MyDataBase"
});

con.connect((err)=>{
    if(err) throw err;
/*    con.query("CREATE DATABASE MyDataBase", (err, result)=>{
        if(err) throw err;
        console.log("Database create successfully "+ result);
    })*/
/*    con.query("CREATE TABLE student(id int primary key auto_increment not null, " +
        "name varchar(30) not null default(''), age int(2) not null default(0));", (err)=>{
        if(err) throw err;
    });*/
/*    con.query("INSERT INTO student(name, age) values('Abughalib', 19)", (err)=>{
        if(err) throw err;
    });
    con.query("INSERT INTO student(name, age) values('Abugh', 21)", (err)=>{
        if(err) throw err;
    });*/
/*    con.query("SELECT * FROM student", (err, result)=>{
        if(err) throw err;
        console.log("ID ---Name----Age");
        for(let values of result){
            console.log(`${values.id} ${values.name} ${values.age}`);
        }
    })*/
/*    con.query("select * from student where id=1", (err, result)=>{
        if(err) throw err;
        console.log("ID ---Name----Age");
        for(let values of result) {
            console.log(`${values.id} ${values.name} ${values.age}`);

        }
        });*/
/*    con.query("UPDATE student set age=20 where name='Abughalib'", (err, result)=>{
        console.log(result.affectedRows+" records(s) updated");
    })*/
})