const testlist =[1,2,3,4,5,6,7,8,9,10];
const clist = [];

const count = 0;
// const list2 = list.map((li2) => {
//     return li2 *2;
// })

testlist.forEach((list)=>{
    if(list%2 == 1){
        clist.push(list)
    }
});
console.log(clist);

const mlist = [];
const ccc = testlist.map((h)=>{
    if(h%2 == 1){
        return h;
    }
})

console.log(ccc);

const findUser = (id, fn) =>{
    const user = {
        id: id,
        name : id + "user",
        email : id+ "@mail.com",
    }
    if(fn){
        fn(user)
    }
}

findUser(5,(e)=>{
    console.log(e)
})



const addfn = (a,b,cb) =>{
    const add = a+b;
    cb(add);
}
addfn(1,2,(e)=>{
    console.log(e);
})