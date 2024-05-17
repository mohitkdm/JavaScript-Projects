let random =Math.random()
let a =prompt("Enter Your First Number")
let b =prompt("Enter Your Second Number")
let c =prompt("Enter Your Operation")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*"
}

if(random>0.1)
{
    alert(`The result is ${eval(`${a}${c}${b}`)}`)
}

else
{
    c=obj[c]

}
