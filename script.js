
// var a=22;
// var b="21";
// var c=true;
// var d=null;
// var e;
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// //conditional statement
// if(a<b){
// console.log("b is greater");
// }
// else if(a<c){
//     console.log("c is greater");
// }
// else{
//     console.log("a is greater");
// }
// var a=0;
// switch(a){
//     case 0:
//         console.log("a is zero");
//         break;
//     case 1:
//      console.log("a is +ve");
//      break;
//      default:
//          console.log("a is -ve");
//          break;

// }
//looping statement
// var n=5;
// for(i=0;i<n;i++)
// {
//     if(i===2 || i===3){
//         continue;
//     }
//     console.log(i);

// }
// var i=0;
// while (i < 10) {
//     console.log(i);
//     i++;
//   }
// var i=0;
// do {
//     console.log(i);
//     i++;
//   }
//   while (i <=10);
//Function
// function add(){
// console.log("hi");

// }
// add();
//scope of varible 
// var name="khan";
// function first(){
//     var a=" raquib ";
//     second();
//     var x=a + name;
//     console.log(x);
    
// }
// function second(){
//     var b=" suban ";
//     third();
//     var y=b + name;
//     console.log(y);
    
// }
// function third(){
//     var c=" yahiya ";
//     var z=c + name;
//     console.log(z);
    
// }
// first();


//Array
var Array=["amir","raquib","sauban","ihtisham","rasik",4,6,7];
function assign(){
  for(i=0;i<Array.length;i++)
  console.log(Array[i]+ " ");
  
}
assign();
