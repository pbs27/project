let value = 10;

const syncFunc = async() =>{
    value = await handleSum(1,2);
}

const handleSum =(a,b) =>{
    setTimeout(() => {
        return a+b;
    }, 3000);
}
syncFunc();
console.log(value);