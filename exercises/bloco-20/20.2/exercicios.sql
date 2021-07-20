-- 1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT "This is SQL Exercise, Practice and Solution";
-- 2. Escreva uma query para exibir três números em três colunas.
SELECT 10 AS coluna_1, 20 AS coluna_2, 30 AS coluna_3;
-- 3. Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15 AS resultado;
-- 4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 25 * 5 AS resultado;
-- 5. Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists;
-- 5. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;