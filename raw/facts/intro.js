var a =10;
console.log(a);

let obj={
    name:"Steve",
    lastName:"Rogers",
    address: {
        city: "Manhatten"
        state: "NewYork"
    },
    isAvenger:false,
    age:35,
    movies :["acsc","sdzcz","fvd"]
    sayhi:function(param){
        consolde.log("cap say's hi",param);
        return "return blessings";
    }
}
for(let itr in obj){
    console.log(itr, obj[itr]);
    console.log(itr,obj.itr);
}
console.log(obj.abc);


//get

let key="address";
console.log(obj[key]);
console.log(obj.address);
console.log(obj.movies[1]);
console.log(obj.moovies[1]);

console.log(obj);

obj.friends = ["pr","re","erv"];







































