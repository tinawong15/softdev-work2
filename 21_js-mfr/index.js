// Tina Wong
// SoftDev2 pd7
// K21 -- Onions, Bell Peppers, and Celery, Oh My!  JS and the Holy Trinity
// 2019-04-29

// x=[1,2,3,4]
// x.reduce(function(a,b) {return a+b});
//
// var x =[1,2,3,4];
// var newX=x.map(function(n) {
//   return n * 2;
// });
// console.log("The doubled numbers are", newX); // [2,4,6,8] will double elements of x (does not modify original list)
//
// //filter in JS:
// var x = [1,2,3,4];
// var newX = x.filter(function(n) {
//   return (n % 2 == 0)
// });
// // will create a list with only the even elements of x
// // newX: [2,4]

// schools where the percentage of blacks and hispanics in the school year 2011-2012 is each less than 15%
var population = data.filter(function(school) {
    return (school.black_per < 15 && school.hispanic_per < 15 && school.schoolyear == 20112012);
  }
);
var first_twenty = '';
var i;
for(i = 0; i < 20; i++) {
  first_twenty += population[i].Name + "<br>";
}
document.getElementById('count').innerHTML = document.getElementById('count').innerHTML + population.length+".";
document.getElementById('a').innerHTML = document.getElementById('a').innerHTML + first_twenty;

console.log(population.length);

// average percentage of asians in nyc schools
var asians = data.reduce(function(x, y) {
  return x + parseFloat(y['asian_per']); }, 0);
asians = asians / data.length;
// console.log(asians);
document.getElementById('b').innerHTML = document.getElementById('b').innerHTML + asians.toString() + "%.";

// the percentage of schools where the male to female ratio in the school year 2011-2012 is less than 2%
var gender = data.filter(function(school) {
    return (Math.abs(school.male_per - school.female_per) < 2 && school.schoolyear == 20112012)
  }
);
var year = data.filter(function(school) {
    return (school.schoolyear == 20112012)
  }
);
var countGender = gender.length / year.length * 100;
console.log(gender);
document.getElementById('c').innerHTML = document.getElementById('c').innerHTML + countGender + "%.";
