drop table if exists `desenhos`;
drop table if exists `subcategorias`;
drop table if exists `categorias`;
drop table if exists `usuarios`;

create table `categorias` (
    `id` int(11) not null auto_increment,
    `nome` varchar(120) not null,
    primary key (`id`)
);


create table `subcategorias` (
    `id` int(11) not null auto_increment,
    `nome` varchar(120) not null,
    `id_categoria` int(11) not null,
    primary key(`id`, `id_categoria`),
    key `id_categoria_fk_idx` (`id_categoria`),
    constraint `id_categoria_fk` foreign key (`id_categoria`) references `categorias`(`id`)
);


create table `desenhos` (
    `id` int(11) not null auto_increment,
    `nome` varchar(120) not null,
    `id_subcategoria` int not null,
    primary key (`id`,`nome`, `id_subcategoria`),
    key `objeto_subcategoria_fk_idx` (`id_subcategoria`),
    constraint `objeto_subcategoria_fk` foreign key (`id_subcategoria`) references `subcategorias` (`id`)
);


create table `usuarios` (
    `id` int(11) not null auto_increment,
    `login` varchar(120) not null,
    `senha` varchar(120) not null,
    `nickname` varchar(120) not null,
    primary key (`id`)
);

/* inserts */

lock tables `categorias` write;
insert into `categorias` values (1, 'Anime'),(2, 'Alimento'),(3, 'Filme'),(4, 'Veiculo');
unlock tables;

lock tables `subcategorias` write;
insert into `subcategorias` values (1,'Naruto',1),(2,'Fruta',2),(3,'Filmes Geeks',3),(4,'Terrestre',4),(5,'Dragon Ball',1),(6,'Verdura',2),(7,'Marítmo',4),(8,'Legume',2),(9,'Áereo',4),(10,'Bebidas',2);
unlock tables;


lock tables `desenhos` write;
insert into `desenhos` values (null,'Sasuke',1),(null,'Maçã',2),(null,'Uva',2),(null,'Laranja',2),(null,'Abacate',2),(null,'Melancia',2),(null,'Manga',2),(null,'Alface',6),(null,'Cebolinha',6),(null,'Couve',6),(null,'Repolho',6),(null,'Brócolis',6),(null,'Abóbora',8),(null,'Abobrinha',8),(null,'Beterraba',8),(null,'Pepino',8),(null,'Quiabo',8),(null,'Berinjela',8),(null,'Gandalf',3),(null,'Gollum',3),(null,'Frodo',3),(null,'Harry',4),(null,'Voldemort',3),(null,'Snape',3),(null,'Yoda',4),(null,'Luke Skywalker',3),(null,'Darth Vader',3),(null,'Carro',4),(null,'Moto',4),(null,'Ônibus',4),(null,'Navio',1),(null,'Lancha', 7),(null,'JetSki',7),(null,'Avião',9),(null,'Helicóptero',9),(null,'Mochila a Jato',9),(null,'Naruto',1),(null,'Sakura',1),(null,'Kakashi',1),(null,'Madara',1),(null,'Pain',1),(null,'Goku',5),(null,'Cell',5),(null,'Vegeta',5),(null,'Mr Satan',5),(null,'Majin Boo',5),(null,'Videl',5),(null,'Yamcha',5),(null,'Tio do Ramen',5);
unlock tables;