const student = [
    {id: 12, Name: 'Muskan Jannat'},
    {id: 13, Name: 'Ashik E Elahi'},
    {id: 14, Name: 'Dilruba'},
    {id: 15, Name: 'Ahosan Habib'}
];

// const nameList = [];
// for(let i = 0; i < student.length; i++){
//     const getStudent = student[i];
//     const findName = getStudent.Name;
//     nameList.push(findName);
// }
// console.log(nameList);

// const names = student.map( s => s.Name);
// console.log(names);

// const bigger = student.filter(s=> s.id > 13);
// const biggerName = bigger.map(s=> s.Name);
// console.log(biggerName);

// const bigger = student.find(s=> s.id > 13);
// console.log(bigger);

const bigger = student.findIndex(s=> s.id > 13);
console.log(bigger);