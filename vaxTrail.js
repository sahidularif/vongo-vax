const user = [
    { name: 'arif', age: 21, temperature: 98 },
    { name: 'sorif', age: 30, temperature: 98 },
    { name: 'rohim', age: 32, temperature: 98 },
    { name: 'korim', age: 40, temperature: 98 },
    { name: 'forid', age: 50, temperature: 98 },
    { name: 'roshid', age: 45, temperature: 98 },
    { name: 'korim', age: 40, temperature: 98 },
    { name: 'forid', age: 25, temperature: 100 },
    { name: 'roshid', age: 45, temperature: 100 },
];

function vaxTrail(user) {
    user.sort(function(a, b){
        return a.age % 2 - b.age % 2 || a.age - b.age
    })
    if(!user){
        throw new Error("Function parameter can't be empty! please input array of object.")
    }
    let vax = {
        A: [],
        B: [],
        C: [],
        D: [],
    };
    user.map((user) => {
        console.log(user.age)
        if ((user.age >= 20 && user.age <= 30) && user.temperature < 100) {
            vax.A.push(user)
        }
        else if ((user.age >= 30 && user.age <= 40) && user.temperature < 100) {
            vax.B.push(user)
        }
        else if ((user.age >= 40 && user.age <= 50) && user.temperature < 100) {
            vax.C.push(user)
        }
        else {
            vax.D.push(user)
        }
    })
    return vax
}

console.log(vaxTrail(user))