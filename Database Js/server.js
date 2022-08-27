const express = require("express")
const mysql = require("mysql")
const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs")
app.set("views","views")

const db = mysql.createConnection({
    host:"localhost",
    database:"db_mhs",
    user:"root",
    password:"",
})

db.connect((err)=>{
    if(err) throw err
    console.log("Database aman..")
    
    app.get("/", (req,res)=>{
        const sql = "SELECT * FROM infor21"
        db.query(sql, (err, result)=>{
        const users = JSON.parse(JSON.stringify(result))
        res.render("index",{users: users, title: "IBNU MAHASISWA INFORMATIKA 21 "})
    })
    })
         
    app.post("/tambah", (req,res) => {
        const insertSql = `INSERT INTO infor21 (Nama, NIM, Kelas) VALUES ('${req.body.nama}', '${req.body.nim}', '${req.body.kelas}');`
        db.query(insertSql, (err,result) => {
        if (err) throw err 
        res.redirect("/");
        })
    })
})


app.listen(8000, () => {
    console.log("Server Ready")
})