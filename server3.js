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
    let sorting = req.query.sorting || 'King';
    let number = req.query.number || 10;
    let query = 'select final.year,team.team_name,final.win,final.lose,team2.team2_name,player.player_name,' + sorting + ' from final inner join team on final.team_id = team.id inner join team2 on final.team2_id = team2.id inner join player on final.player_id = player.id order by ' + sorting + ' desc limit ' + number + ';';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql3.ejs', { content: rows });
    });
});

server.listen( 80, function() {
    console.log( 'listening on port 80' );
});
