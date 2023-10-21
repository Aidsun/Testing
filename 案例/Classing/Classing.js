// 判断2-100之间的质数
// console.log(1);
// for (let num = 2; num <= 100; num++) {
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       console.log(num);
//     }
//   }
// 每圈喝两口水
// for (var i = 1; i <= 10; i++) {
//     console.log("******这是第" + i + "圈******");
//     for(var j = 1; j <= 2; j++){
//         console.log("喝了第" + j + "口水");
//     }
// }
// 用“*”画出三角形
// for (var i = 5; i > 0; i--) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// } 
// 九九乘法表
// for (var i = 1; i <= 9; i++) {

//     for (var j = 1; j <= i; j++) {
//         document.write("<div>" + j + "x" + i + "=" + i * j + "</div>");
//     }  
//     document.write("<br>");
// }
// 数组中所有偶数的和
// var one=[1,2,3,4,5,6,7,8,9,10];
// sum=0;
// for(var i=0;i<=one.length;i++){
//     if(one[i]%2==0){
//         sum+=one[i];
//     }
// }
// console.log(sum);
// // 
// var one=[1,2,3,4,5,6,7,8,9,10];
// sum=0;
// for(var i=0;i<=one.length;i++){
//     if(one[i]%3==0){
//         console.log(one[i]);
//     }
// }
// 求数组最大值
// var s=[1,4,3,5,55,9];
// max=0;
// for(var i=0;i<=s.length;i++){
//     if(s[i]>max){
//         max=s[i];
//     }
// }
// console.log("最大值为"+max);
// 循环遍历二维数组
// var name=[
//     ['老王','九江','29'],
//     ['老李','广州','34'],
//     ['老罗','深圳','39'],
// ]
// for(var i=0;i<name.length;i++){
//     for(var j=0;j<name[i].length;j++)
//     {
//         console.log(name[i][j]);
//     }
// }
// 计算等差数列的和
// function getChaSum(num1,num2,cha){
//     sum=0;
//     for(var i=num1;i<=num2;i=i+cha){
//         sum+=i;
//     }
//     return sum;
// }
// a=Number(prompt("请输入一个数字"));
// b=Number(prompt("请输入一个数字"));
// c=Number(prompt("请输入差："))
// alert(getChaSum(a,b,c));
// 实现数组元素反转
// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function Reverse(num) {
//     var lis = new Array[num.length];
//     for (var i = num.length; i >= 0; i--) {
//         lis[num.length-i] = num[i];
//     }
//     return lis;
// }
// console.log("结果为"+Reverse(num));
// 实现选择排序
// function Select(ls) {
//     for (var i = 0; i < ls.length; i++) {
//         for (var j = i + 1; j < ls.length; j++) {
//             if (ls[i] > ls[j]) {
//                 var temp = ls[i];
//                 ls[i] = ls[j];
//                 ls[j] = temp;
//             }
//         }
//     }
//     document.write(ls);
// }
// arr = [43, 9, 65, 72, 21, 154, 783, 2, 22, 77];
// Select(arr);
// 计算实参的总和
// function fovert() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum
// }
// document.write(fovert(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// 获取形参的个数
// function sum(num1,num2,num3){
//     return num1+num2+num3;
// }
// document.write(sum.length)
