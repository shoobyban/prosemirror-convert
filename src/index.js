'use strict'
const mysql = require('mysql')
const pmmd = require('prosemirror-markdown')
const dotenv = require('dotenv')
dotenv.config()

var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
})

db.connect(function(err) {
  if (err) throw err;
  db.query("SELECT id,body FROM articles", function (err, result, fields) {
    if (err) throw err
    for(let i = 0, len = result.length; i < len; i++){
      let p = pmmd.defaultMarkdownParser.parse(result[i].body)
      let json = JSON.stringify(p.toJSON())
      db.query('update articles set json=? where id=?',[json, result[i].id])
    }
    db.end()
  })
})
