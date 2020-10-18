CREATE TABLE usuario (
    usu_id INT NOT NULL AUTO_INCREMENT,
    usu_nome VARCHAR(50) NOT NULL,
    usu_login VARCHAR(30) NOT NULL,
    usu_senha VARCHAR(40) NOT NULL,
    PRIMARY KEY (usu_id)
);

CREATE TABLE post (
    pst_id INT NOT NULL AUTO_INCREMENT,
    pst_texto VARCHAR(100) NULL,
    pst_imagem LONGBLOB NULL,
    usu_id INT NOT NULL,
    PRIMARY KEY (pst_id)
);