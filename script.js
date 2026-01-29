var g = ["yu","bhai","hop", "jio","hui"]
g.splice(2,2)
console.log(g)
var f = {
    name: "satysa",
    class: "sex",
    profession: "teacher"
}
var g = JSON.stringify(f)
 localStorage.setItem('bur',g)
 var c = localStorage.getItem('bur')
 console.log(JSON.parse(c))
 const gh= ["sat","bhai","sat","jio","tyu"]
const pm = gh.filter(function(ep){
  return  ep.includes("sat")

})
console.log(pm)


