const list = [
    {
        key : 1,
        name : "오경우",
        age : 27,
        birth : '941116'
    },
    {
        key : 2,
        name : "박범석",
        age : 26,
        birth : '951024'
    },
    {
        key : 3,
        name : "오진우",
        age : 27,
        birth : '941116'
    },
];

// const newList = list.map((list) => {
//     list.year = list.birth.slice(0,2)
//      return list;
// });
// const newList = list.filter((item) => {
//     return item.year = item.birth.slice(0,2) === '94';
// });

// const newList = list.sort((a,b) => {
//     //return a.age - b.age;
//     return a.key - b.key;
// })

const newList = list.map((item) => {
     
     return item.key == 1;;
})
console.log(newList);