"use strict";
const colfilms = +prompt("Сколько фильмов Вы просмотрели?", "Укажите цифру");

const persDB = {
  count: colfilms,
  movies: {},
  actors: {},
  generes: [],
  privat: false,
};

const a = prompt("Последний просмотренный фильм?", "Введите название фильма");
const b = prompt("Поставьте офенку этому фильму?", "Укажите оценку от 0 до 10");
const a2 = prompt("Последний просмотренный фильм?", "Введите название фильма");
const b2 = prompt(
  "Поставьте офенку этому фильму?",
  "Укажите оценку от 0 до 10"
);

persDB.movies[a] = b;
persDB.movies[a2] = b2;

console.log(persDB);
