const value =10;

// const handleValue = () => {
//     setTimeout(() => {
//         value  +10;
//     }, 3000);
// }
const handleValue = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(value +20);
    }, 3000);

})

handleValue.then((res)=>{
    console.log(res);
   
})