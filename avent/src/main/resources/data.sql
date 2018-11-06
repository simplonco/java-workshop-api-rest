Insert into user (id, email, first_name, last_name) 
values (HIBERNATE_SEQUENCE.nextval, 'jgrand@simplon.co', 'Jules', 'Grand');

insert into link (id, date, topic, url, user_id) 
values (HIBERNATE_SEQUENCE.nextval, '2018-11-06', 'WEB', 'http://google.fr', 1);