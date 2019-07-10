create table player ( id int auto_increment not null primary key, name varchar(100), country varchar(100) );
create table team ( id int auto_increment not null primary key, name varchar(100) );
create table final ( id int auto_increment not null primary key, year int, team_id int, score of win int, team_id int, score of lose int, player_id int, King's score int, Man Of the Match int );
load data local infile 'player.csv' into table player fields terminated by ',' enclosed by '"';
load data local infile 'team.csv' into table team fields terminated by ',' enclosed by '"';
load data local infile 'final.csv' into table batting fields terminated by ',' enclosed by '"';
