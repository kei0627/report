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

server.get('/', function( req, res ) {
    let sorting = req.query.sorting || 'year';
    let number = req.query.number || 10;
    let query = 'select final.year,team.team_name,player.player_name,final.King,final.win,final.lose,' + sorting + ' from final inner join team on final.team_id = team.id inner join player on final.player_id = player.id order by ' + sorting + ' desc limit ' + number + ';';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql2.ejs', { content: rows });
    });
});

server.listen( 80, function() {
    console.log( 'listening on port 80' );
});
