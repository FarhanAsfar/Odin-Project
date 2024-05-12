let user = {
    name: "John",
    age: 30,
    isAdmin: true,
}

for(let key in user){
    console.log(key+": "+user[key]+"\n");
    //console.log(user[key]);
    //Also variable name 'prop' can be used instead of 'key'
}