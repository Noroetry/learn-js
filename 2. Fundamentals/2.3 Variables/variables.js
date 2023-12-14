let texto = 'Hello';

let valor;
valor = 23;

let uno = 1,
    dos = 2;

console.log(texto, valor, uno, dos);

/* 
    LET == VAR
    With a subtle differences
*/

let texto2 = texto;

/* 
    RULES:
    The name must contain only letters, digits, or the symbols $ and _.
    The first character must not be a digit.
    Case matters
    Non-Latin letters are allowed, but not recommended
    There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
    Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.
*/

// CONSTANTES
const myBirthday = '18.04.1982';