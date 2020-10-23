const mysql = require('mysql');
const crypto = require('crypto');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST_DB, 
    port: process.env.PORT_DB,
    user: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB
});

connection.connect(function(err) {
    if (err) return console.log(err);
    console.log('Database connected');

    loadFirstUser(connection);
});

function loadFirstUser(conn) {
    const senhaCriptografada = crypto.createHmac(process.env.ALGORITMO_CRYPTO, process.env.SEGREDO_CRYPTO)
                                     .update(process.env.SENHA_PRIMEIRO_USUARIO)
                                     .digest(process.env.TIPO_CRIPTOGRAFIA);
    
    const sql = `INSERT INTO heroku_bae55b9d7239c94.usuario
                (usu_nome, usu_login, usu_senha)
                VALUES('Olivia', 'olivia', '${senhaCriptografada}');`;

    conn.query(sql, function(error, results, fields){
        if (error) return console.log(error);

        console.log('Primeiro usuario adicionado com sucesso');
        conn.end();
    });
}