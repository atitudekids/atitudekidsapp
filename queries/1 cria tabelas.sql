create table voluntarios (id_voluntarios int(11) not null auto_increment,
    telefone_vol int(11) not null Unique key,
    nome_vol varchar(60) not null,
    foto_vol longblob,
    primary key(id_voluntarios)
) ENGINE = innodb;

create table responsaveis (
	id_responsavel int(11) not null auto_increment,
    telefone_resp int(11) not null Unique key,
    nome_resp varchar(60) not null,
    foto_resp longblob,
    primary key(id_responsavel)
) ENGINE = innodb;
    
CREATE TABLE criancas (
	id_criancas int(11) not null auto_increment,
    responsavel_id int(11),
	nome_cria varchar(60) not null,
	dt_nascimento date not null,
	foto_crianca longblob not null,
	alergia bit not null,
	tp_alergia varchar(50),
    primary key (id_criancas),
    constraint fk_responsavel_id foreign key (responsavel_id) references responsaveis (id_responsavel)
) ENGINE = innodb;

create table sala (
	id_sala int(11) not null auto_increment,
    nome_sala varchar(20) not null,
    idade_permit TINYINT not null,
    turno bit not null,
    primary key (id_sala)
) ENGINE = innodb;

create table culto (
	id_culto int(11) not null auto_increment,
    sala_id int(11),
    crianca_id int(11),
    responsavel_id int(11),
    voluntario_id int(11),
    data_culto date not null,
    matriculado bit not null,
    presente bit not null,
    saiu bit not null,
	primary key (id_culto),
    constraint fk_sala_id foreign key (sala_id) references sala (id_sala),
    constraint fk_crianca_id foreign key (crianca_id) references criancas (id_criancas),
    constraint fk_respons_id foreign key (responsavel_id) references responsaveis (id_responsavel),
    constraint fk_voluntario_id foreign key (voluntario_id) references voluntarios (id_voluntarios)
) ENGINE = innodb;

commit;

show tables;
