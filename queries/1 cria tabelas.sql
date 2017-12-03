/*
create table pais (
	id_pais int (11) not null auto_increment,
    nome varchar(60) not null,
    sigla varchar(10),
    primary key (id_pais)
) ENGINE = innodb;

create table estado (
	id_estado int (2) not null auto_increment,
    nome varchar(60) not null,
    sigla varchar(2) not null,
    id_pais int(11),
	primary key(id_estado),
    constraint fk_pais foreign key (id_pais) references pais (id_pais)
) ENGINE = innodb;

create table cidade (
	id_cidade int (11) not null auto_increment,
    nome varchar(120) not null,
    id_estado int (2),
    primary key (id_cidade),
    constraint fk_estado foreign key (id_estado) references estado (id_estado)
) ENGINE = innodb;

create table cor (
	id_cor int(2) not null auto_increment,
    valor_cor varchar(7) not null,
    nome varchar(20) not null,
    primary key (id_cor)
) ENGINE = innodb;

create table salas (
	id_sala int(2) not null auto_increment,
    nome_sala varchar(20) not null,
    idade_permitida int(2) not null,
    id_cor  int(2),
    primary key (id_sala),
    constraint fk_cor foreign key (id_cor) references cor (id_cor)
) ENGINE = innodb;

create table voluntarios (
	id int(11) not null auto_increment,
    identificacao varchar(20) unique,
    telefone int(14) not null,
    nome varchar(60) not null,
    email varchar(100) not null,
    rua varchar(150),
    numero int(5),
    complemento varchar(30),
    bairro varchar(50),
    cep varchar(9),
    id_cidade int(2),
    id_estado int(11),
    id_pais int(11),
    foto longblob,
    administrador int(1) not null,
    validado int (1) not null,
    primary key(id),
    constraint fk_voluntario_pais foreign key (id_pais) references pais (id_pais),
    constraint fk_voluntario_estado foreign key (id_estado) references estado (id_estado),
    constraint fk_voluntario_cidade foreign key (id_cidade) references cidade (id_cidade)
) ENGINE = innodb;

CREATE TABLE criancas (
	id_crianca int(11) not null auto_increment,
	nome varchar(60) not null,
	dt_nascimento date not null,
    identificacao varchar(20) unique,
	foto_crianca longblob not null,
	observacao varchar(50),
    validado int (1) not null,
    primary key (id_crianca)
) ENGINE = innodb;

create table responsaveis (
	id_responsavel int(11) not null auto_increment,
    identificacao varchar(20) unique,
    telefone int(14) not null,
    nome varchar(60) not null,
    email varchar(100) not null,
    rua varchar(150),
    numero int(5),
    complemento varchar(30),
    bairro varchar(50),
    cep varchar(9),
    id_cidade int(2),
    id_estado int(11),
    id_pais int(11),
    foto longblob,
    administrador int(1) not null,
    validado int (1) not null,
    primary key(id_responsavel),
    constraint fk_responsavel_pais foreign key (id_pais) references pais (id_pais),
    constraint fk_responsavel_estado foreign key (id_estado) references estado (id_estado),
    constraint fk_responsavel_cidade foreign key (id_cidade) references cidade (id_cidade)
) ENGINE = innodb;

create table crianca_responsavel (
	id_crianca int(11) not null,
    id_responsavel int(11) not null,
    primary key (id_crianca, id_responsavel),
    constraint fk_idcrianca foreign key (id_crianca) references criancas (id_crianca),
    constraint fk_idresponsavel foreign key (id_responsavel) references responsaveis (id_responsavel)
) ENGINE = innodb;

create table culto (
	id_culto int(11) not null auto_increment,
	id_voluntario int(11),
    id_sala int(2) not null,
    data_culto date not null,
    turno int(1) not null,
	primary key (id_culto),
    constraint fk_culto_voluntario foreign key (id_voluntario) references voluntarios (id),
    constraint fk_culto_sala foreign key (id_sala) references salas (id_sala)
) ENGINE = innodb;

create table escala_voluntarios (
	id_voluntario int(11) not null,
    id_culto int(2),
    data_culto date not null,
    primary key (id_voluntario, id_culto, data_culto),
    constraint fk_idvoluntario foreign key (id_voluntario) references voluntarios (id),
    constraint fk_idculto foreign key (id_culto) references culto (id_culto)
) ENGINE = innodb;

create table culto_crianca (
	id_culto int(11) not null,
    id_crianca int(11) not null,
    entrada date,
    saida date,
	primary key (id_culto,id_crianca),
    constraint fk_idculto_crianca foreign key (id_culto) references culto (id_culto),
    constraint fk_idcrianca_culto foreign key (id_crianca) references criancas (id_crianca)
) ENGINE = innodb;


commit;
*/

show tables;

select * from salas;

drop table cor;