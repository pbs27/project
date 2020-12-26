concat = (a,b,callback) => {
    const result = a+""+b;
    if(callback){
        callback(result);
    }
    
    
};

 concat(10,200, (r) => {
   console.log(r);
});






// const cooncat = (a,b,call) => {
//     const res = a+b;
//     call(res);
//     return res;
// }

// const b = cooncat(10,10,(e) => {console.log(e)})