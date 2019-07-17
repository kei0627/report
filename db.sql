create table player ( id int auto_increment not null primary key, name varchar(100), country varchar(100) );
create table team ( id int auto_increment not null primary key, team_name varchar(100) );
create table final ( id int auto_increment not null primary key, year int, team_id int, win int, team2_id int, lose int, player_id int, King int, MOM int );
load data local infile 'player.csv' into table player fields terminated by ',' enclosed by '"';
load data local infile 'team.csv' into table team fields terminated by ',' enclosed by '"';
load data local infile 'final.csv' into table final fields terminated by ',' enclosed by '"';
