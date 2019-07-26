const express = require('express');
const server = express();
const ejs = require('ejs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'node',
    password: 'websystem',
    database: 'web'
});
//select id, year, team_id from final inner join team on final.team_id = team.name
server.get('/', function( req, res ) {
    connection.query('select final.id, final.year, team.teamname from final inner join team on final.team_id = team.id;', (error, rows, fields) => {
        if( error ) {
            console.log( error );
            console.log('Query Error');
        }
        console.log( rows );
        res.render( 'sql.ejs', { content: rows });
    });
});

server.listen( 80, function() {
    console.log( 'listening on port 80' );
});
