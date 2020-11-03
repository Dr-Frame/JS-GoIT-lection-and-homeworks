/* const oldStaff = ['Bruse', 'John', 'Elsa'];
const newStaff = ['Dwayne', 'Armstrong'];

const currentStaff = oldStaff.concat(newStaff);
console.log(currentStaff); */

//------------------------------------------------------------------------
// SPLICE() - удалить, добавить, заменить в произвольном месте ,

//Удалить---------------------------------------------

/* const topPorn = ['Bangbros', 'Brazzers', '21senctury', 'Mylf'];
console.log(topPorn);

const deleteFrom = 'Brazzers';
const indexToDelete = topPorn.indexOf(deleteFrom);
console.log(indexToDelete)

topPorn.splice(indexToDelete, 1);
console.log(topPorn); */

//добавить-----------------------------------

/* const topPorn = ['Bangbros', 'Brazzers', '21senctury', 'Mylf'];
const index = 2;
const addedTop = topPorn.splice(index, 0, 'Home', 'DDF');
console.log(topPorn); */

// заменить
const topPorn = ['Bangbros', 'Brazzers', '21senctury', 'Mylf'];
const index = 2;
const addedTop = topPorn.splice(2, 1, 'DDF');
console.log(topPorn);