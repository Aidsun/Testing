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
// 实现方法indexOf()
// function foundIndex(arr, num) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return i;
//         }
//     }
//     return -1;
// }
// var ls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write(foundIndex(ls, 6));
// 实现函数去重
// function onlyarr(arr) {
//     var newarr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (newarr.includes(arr[i]) == false) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// var arr = [1, 1, 2, 3, 4, 4, 5, 5, 6, 7];
// document.write(onlyarr(arr));
// 写一个二分算法
// function hrefSearch(arr, num) {
//     var low = 0;
//     var high = arr.length - 1;
//     while (low <= high) {
//         var mid = Math.floor((low + high) / 2);
//         if (arr[mid] === num) {
//             return mid;
//         } else if (arr[mid] > num) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return -1;
// }
// 用递归的方法实现二分查找
// function hrefSearch(arr,target,left=0,right=arr.length-1){
//     // 如果左指针大于右指针代表没找到
//     if(left>right){
//         return -1;
//     }
//     // 设置中间值
//      var mid=Math.floor((left+right)/2);
//     //进行中间值判断
//     if(arr[mid]===target){
//         return mid;
//     }
//     else if(arr[mid]<target){
//         return hrefSearch(arr,target,mid+1,right)
//     }
//     else if(arr[mid]>target){
//         return hrefSearch(arr,target,left,mid-1)
//     }
// }
// 创建对象
// var person = {
//     name: 'giaogiao',
//     age: 18,
//     sex: '男',
//     hobbby: function () {
//         document.write("爱好是打游戏");
//     }
// }
// for(var i in person){
//     document.write(i+":"+person[i]+"<br>");
// }
// 挑选颜色为红色的汽车出来并计算所有汽车的价格总和
// var cars = [
//     {
//         name: '本田CRV', color: 'red', price: 220000
//     }, {
//         name: '奥迪A4', color: 'black', price: 300000
//     }, {
//         name: '法拉利F500', color: 'red', price: 500000
//     }, {
//         name: '保时捷911', color: 'orange', price: 450000
//     }, {
//         name: '红旗H5', color: 'blue', price: 400000
//     }
// ]
// redCars = []
// totalprice=0
// for (var i = 0; i < cars.length; i++) {
//     if (cars[i].color === 'red') {
//         redCars.push(cars[i])
//     }
//     totalprice+=cars[i].price;
// }
// console.log(redCars,"总价:",totalprice)
// var dog = {
//     name: '小灰灰',
//     action: function () {
//         console.log(this.name + "喜欢吃香蕉")
//     }
// }
// var action2 = dog.action;
// console.log(action2())
// 实现广布优先算法
// function breadthFirstSearch(graph, start) {
//     var queue = [start];
//     var seen = {};
//     while (queue.length) {
//         var vertex = queue.shift();
//         if (seen[vertex]) continue;
//         seen[vertex] = true;
//         queue.push.apply(queue, graph[vertex]);
//     }
//     return seen;
// }
// 实现冒泡排序算法
// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// var arr=[1,4,23,56,7,11,10]
// document.write(bubbleSort(arr));
//实现快速选择排序
// 排序原理：在数组中任选一个数字，判断左右两边大小，小的放左边，大的放右边，然后运用递归实现
// var ls = [1, 2, 5, 4, 6, 15, 14, 18, 55, 24, 34, 42, 61, 58, 77]
// function randomSelect(arr) {
//     // 创建左右子数组
//     var left = []
//     var right = []
//     // 函数跳出情况
//     if (arr.length <= 1) {
//         return arr
//     }
//     // 选取随机下标
//     var num = Math.floor(Math.random() * arr.length);
//     for (var i = 0; i < arr.length; i++) {
//         // 比中间数小的加入左子组
//         if (arr[i] < arr[num]) {
//             left.push(arr[i])
//         }
//         // 跳过中间值
//         if (i == num) {
//             continue
//         }
//         // 比中间数大的加入右子组
//         if (arr[i] > arr[num]) {
//             right.push(arr[i])
//         }
//     }
//     // 利用递归实现所有元素排序
//     return randomSelect(left).concat(arr[num], randomSelect(right))

// }
// document.write(randomSelect(ls))
// 用filter()+concat()实现快速选择排序
// function quicklySelect(arr) {
//     // 判断跳出条件
//     if (arr.length <= 1) {
//         return arr
//     }
//     // 随机定义基准值    
//     var mid = Math.floor(Math.random() * arr.length)
//     // 创建左右子数组
//     var left = arr.filter(num => num < arr[mid])
//     var right = arr.filter(num => num > arr[mid])
//     return quicklySelect(left).concat(arr[mid], quicklySelect(right))
// }
// var arr=[1,4,23,56,7,11,10]
// document.write(quicklySelect(arr))
// 选择排序并且保留重复值
// function quicklySelect(arr) {
//     // 判断跳出条件
//     if (arr.length <= 1) {
//         return arr;
//     }
//     // 随机定义基准值
//     var midIndex = Math.floor(Math.random() * arr.length);
//     var midValue = arr[midIndex];
//     // 创建左右子数组
//     var left = [];
//     var right = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (i === midIndex) {
//             continue;
//         }
//         if (arr[i] < midValue) {
//             left.push(arr[i]);
//         } else if (arr[i] > midValue) {
//             right.push(arr[i]);
//         } else {
//             // 相等的值放入左边或右边都可以，这里选择放入右边
//             right.push(arr[i]);
//         }
//     }

//     return quicklySelect(left).concat(midValue, quicklySelect(right));
// }

// var ls = [1,1,2,2,3,3,14,5];
// console.log(quicklySelect(ls));
// // 实现隐藏手机号码中间四位
// function FackNumber(num){
//     if(num.length!=11){
//         alert("手机号码格式出错，请重试")
//     }
//     return num.replace(num.slice(3,7),"****")
// }
// var Number=prompt("请输入您的手机号:")
// alert(FackNumber(Number))
// //实现对一个字符串首字母大写，其余小写
// function title(string){
//     return string.toLowerCase().replace(string.charAt(0),string.charAt(0).toUpperCase())
// }
// document.write(title('aidsun_552'))
// 实现集合去重
// var seting=new Set([1,29,13,44,51,24,8,8,91,91])
// var num= Array.from(seting)
// document.write(num,"<br>",typeof(num))
// 掩耳盗铃的偷钱
// var balance=10500;
// var cameraOn=true;
// function steal(balance,amount){
//     cameraOn=false;
//     if(amount<balance){
//         balance=balance-amount;
//     }
//     return amount;
//     cameraOn=true;
// }
// var amount=steal(balance,1250);
// alert("Criminal:you stole "+amount+"! ");
// 获取当前时间
// function getTimeNow(){
//     var currentDate = new Date();
//     var year = currentDate.getFullYear();
//     var month = currentDate.getMonth() + 1; // 月份从0开始，所以要加1
//     var day = currentDate.getDate();
//     var hour=currentDate.getHours();
//     var minutes=currentDate.getMinutes();
//     var second=currentDate.getSeconds();
//     return year + "年" + month + "月" + day+"日 "+hour+":"+minutes+":"+second
// }
// document.write("现在是 "+getTimeNow())
// 定时器
// setInterval(
//     function(){
//         document.write("睡大觉！")
//     },3000
// )
// 广度优先遍历算法
// function wideSerch(start, end, map) {
//     //用数组存放正在遍历的地图元素
//     let items = [];
//     // 记录已经访问的节点元素
//     let visted = {};
//     // 判断是否找到目标值
//     let found = false;

//     // 初始操作，将起点元素放入遍历数组
//     items.push(start);
//     // 标记节点元素已被访问
//     visted[start] = true;

//     // 循环主体，当遍历数组中存有元素的时候一直循环
//     while (items.length > 0) {
//         // 弹出一个元素节点
//         let item = items.shift();
//         // 显示弹出的元素节点
//         document.write(item,"->");

//         // 如果弹出元素等于目标元素
//         if(item===end){
//             found=true;
//             break;
//         }
//         // 正常循环体就是访问当前弹出元素的下一个元素节点
//         let nexts=map[item];
//         for(let i=0;i<nexts.length;i++)
//         {
//             var next=nexts[i];
//             // 如果下一个元素没有被访问过的话
//             if(!visted[next]){
//                 // 加入遍历数组
//                 items.push(next);
//                 visted[next]=true;
//             }
//         }
//     }
//     if(found){
//         document.write("找到目标节点")
//     }
//     else{
//         document.write("未找到目标元素")
//     }
// }
// // 广度优先算法
// function wideSerch(start, end, map) {
//     // 遍历队伍
//     let queue = [];
//     // 元素是否被访问
//     let visted = {};
//     // 是否找到目标值
//     let found = false;

//     // 入队初始元素
//     queue.push(start);
//     // 标记该元素已被访问
//     visted[start] = true;
//     // 循环主体
//     while (queue.length > 0) {
//         var value = queue.shift();
//         document.write(value + "->");
//         if (value === end) {
//             found = true
//             document.write("元素已找到");
//             break;
//         }
//         for (let item of  map[value]) {

//             if(!visted[item]){
//                 queue.push(item);
//                 visted[item] = true;
//             }            
//         }
//     }
//     if(found){
//         document.write("未找到目标！")
//     }
// }
// var map = {
//     'A': ['B', 'C'],
//     'B': ['A', 'D'],
//     'C': ['A', 'E'],
//     'D': ['B'],
//     'E': ['C']
// }
// console.log(wideSerch('A', 'C', map))
// 自定义随机函数
// function (min = 0, max = 1) {
//     log = true;
//     while (log) {
//         let value = Math.floor(Math.random() * (max + 1))
//         if (value >= min && value <= max) {
//             log = false;
//             return value;
//         }
//     }
// }
// 显示绑定
// function person(a,b){
//     const name=this.name;
//     const age=this.age;
//     const sex=this.sex;
//     console.log(name+" "+age+" "+sex);
//     console.log("a:"+a,"b:"+b);
// }
// var giao={
//     name:'周嘉俊',
//     age:21,
//     sex:'男'
// }
// // call传入对象，参数一个一个传入
// person.call(giao,1,2)
// // apply传入对象，参数按数组传入
// person.apply(giao,[3,4])
// // bind绑定对象，只绑定不实现，后面加上（）才算实现
// person.bind(giao)(5,6)

// arr=[1,4,6,23,11,63,22,56]
// console.log(Math.max.apply(null,arr))
// 实现阶乘
// function Jiecheng(num) {
//     if (num === 1) {
//         return 1
//     }
//     return num * Jiecheng(num - 1)
// }
// document.write(Jiecheng(10))
// 实现斐波那契数列
// function FeiboArry(arr) {
//     if (n <= 1) {
//         return 1
//     }
//     return FeiboArry(arr - 1) + FeiboArry(arr - 2)
// }
// document.write()
// 迷宫
// function wideSerch([startX, startY], [endX, endY], map) {
//     // 遍历队伍
//     let queue = [];
//     // 元素是否被访问
//     let visted = {};
//     // 是否找到目标值
//     let found = false;

//     // 入队初始元素
//     queue.push([startX, startY]);
//     // 标记该元素已被访问
//     visted[[startX, startY]] = true;

//     // 循环主体
//     while (queue.length > 0) {
//         // 存放弹出的当前坐标
//         let current = queue.shift()
//         // 当前坐标的x,y
//         let Cx = current[0];
//         let Cy = current[1];
//         console.log(`${[Cx,Cy]}->`);
//         // 当前坐标的值
//         var value = map[Cx][Cy];

//         if (value === map[endX][endY]) {
//             found = true;
//             console.log("元素已找到");
//             break;
//         }
//         // 上
//         else if (map[Cx][Cy - 1] == 0) {
//             // 如果上边为通道（0），则判断是否拜访过
//             if (!visted[[Cx, Cy - 1]]) {
//                 // 如果没有拜访过，就加入队伍，并标记已拜访
//                 queue.push([Cx, Cy - 1]);
//                 visted[[Cx, Cy - 1]] = true;
//             }
//         }
//         // 下
//         else if (map[Cx][Cy + 1] == 0) {
//             if (!visted[[Cx, Cy + 1]]) {
//                 queue.push([Cx, Cy + 1]);
//                 visted[[Cx, Cy + 1]] = true;
//             }
//         }
//         // 左
//         else if (map[Cx - 1][Cy] == 0) {
//             if (!visted[[Cx - 1, Cy]]) {
//                 queue.push([Cx - 1, Cy]);
//                 visted[[Cx - 1, Cy]] = true;
//             }
//         }
//         // 右
//         else if (map[Cx + 1][Cy] == 0) {
//             if (!visted[[Cx + 1, Cy]]) {
//                 queue.push([Cx + 1, Cy]);
//                 visted[[Cx + 1, Cy]] = true;
//             }
//         }
//     }
//     if (!found) {
//         console.log("未找到目标！");
//     }
// }
// var map = [
//     [0, 1, 1, 1, 1],
//     [0, 0, 0, 1, 1],
//     [1, 1, 0, 1, 1],
//     [1, 1, 0, 0, 1],
//     [1, 1, 1, 0, 0]
// ]
// function SearchPath(map, start, end) {
//     // 获取行列
//     const rows = map.length;
//     const cols = map[0].length;
//     // 获取行列偏移量
//     const rowoffsets = [-1, 0, 1, 0];
//     const coloffsets = [0, 1, 0, -1];
//     // 准备工作
//     const queue = [start];
//     const visted = new Set([start.toString()]);
//     prev = {};

//     while (queue.length > 0) {
//         const current = queue.shift();
//         // 当前节点等于目标节点时
//         if (current[0] === end[0] && current[1] === end[1]) {
//             const path = [end];
//             let node = end;
//             while (node) {
//                 node = prev[node.toString()];
//                 path.unshift(node);
//             }
//             console.log(path);
//             return;
//         }
//         for (let i = 0; i < 4; i++) {
//             const newRow = current[0] + rowoffsets[i];
//             const newCol = current[1] + coloffsets[i];
//             const neighboor = [newRow, newCol];
//             if (
//                 newRow >= 0 && newRow < rows
//                 && newCol >= 0 && newCol < cols
//                 && map[newRow][newCol]
//                 && !visted.has(neighboor.toString())) {
//                 queue.push(neighboor);
//                 visted.add(neighboor.toString());
//                 prev[neighboor.toString()] = current;
//             }
//         }

//     }
//     console.log("未找到！")
// }
// SearchPath(map,[0, 0], [4, 4]);
// 模拟类的使用
// function Person(name,age){
//     this.name = name
//     this.age = age
//     this.hobby = function(){
//         console.log(this.name+"喜欢狗叫")
//     }
// }
// var giao=new Person('giao',23)
// giao.hobby()
// 深度遍历算法
// function UntilSearch(map,start, end){
//     // 当前访问队伍
//     var queue = [];
//     // 记录拜访过的节点
//     var visted = {};
//     // 判断是否找到终点
//     var found=false;

//     // 加入初始点
//     queue.push(start);
//     visted[start] = true;

//     // 进入循环
//     while(queue.length>0){
//         // 存放当前存放的坐标
//         var current = queue.shift();
//         console.log(current+"->");
//         // 如果当前节点等于终点节点
//         if(end === current){
//             found = true;
//             console.log("达到终点!")
//             break;
//         }
//         // 如果当前节点不等于终点节点
//         else{
//             // 获取当前节点的坐标，以便拜访周边节点
//             var Cx = current[0];
//             var Cy = current[1];

//             // 上
//             if(map[Cx][Cy-1] ===0 && !visted[[Cx,Cy-1]])
//             {
//                 queue.push([Cx,Cy-1]);
//                 visted[[Cx,Cy-1]] =true;
//             }
//             // 右
//             if(map[Cx+1][Cy] ===0 && !visted[[Cx+1,Cy]])
//             {
//                 queue.push([Cx+1,Cy])
//                visted[[Cx+1,Cy]] = true;
//             }
//             // 下
//             if(map[Cx][Cy+1] === 0 && !visted[[Cx,Cy+1]])
//             {
//                 queue.push([Cx,Cy+1]);
//               visted[[Cx,Cy+1]] = true;
//             }
//             // 左
//             if(map[Cx-1][Cy] === 0 && !visted[[Cx-1,Cy]])
//             {
//                 queue.push([Cx-1,Cy]);
//               visted[[Cx-1,Cy]] = true;
//             }
//         }
//     }
//     if( found === false){
//         console.log('未找到！')
//     }
// }
// var map = [
//     [0, 1, 1, 1, 1],
//     [0, 0, 0, 1, 1],
//     [1, 1, 0, 1, 1],
//     [1, 1, 0, 0, 1],
//     [1, 1, 1, 0, 0]
// ]
// UntilSearch(map,[0,0],[4,4])
function DFS(map, current, end, visited) {
    console.log(current + "->");

    if (JSON.stringify(end) === JSON.stringify(current)) {
        console.log("达到终点！");
        return true;
    }

    var Cx = current[0];
    var Cy = current[1];

    visited[[Cx, Cy]] = true;

    // 上
    if (map[Cx][Cy - 1] === 0 && !visited[[Cx, Cy - 1]]) {
        if (DFS(map, [Cx, Cy - 1], end, visited)) {
            return true;
        }
    }
    // 右
    if (map[Cx + 1][Cy] === 0 && !visited[[Cx + 1, Cy]]) {
        if (DFS(map, [Cx + 1, Cy], end, visited)) {
            return true;
        }
    }
    // 下
    if (map[Cx][Cy + 1] === 0 && !visited[[Cx, Cy + 1]]) {
        if (DFS(map, [Cx, Cy + 1], end, visited)) {
            return true;
        }
    }
    // 左
    if (map[Cx - 1][Cy] === 0 && !visited[[Cx - 1, Cy]]) {
        if (DFS(map, [Cx - 1, Cy], end, visited)) {
            return true;
        }
    }

    return false;
}

function UntilSearch(map, start, end) {
    var visited = {};
    var found = DFS(map, start, end, visited);

    if (!found) {
        console.log('未找到！');
    }
}

var map = [
    [0, 1, 1, 1, 1],
    [0, 0, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 1, 0, 0]
];

UntilSearch(map, [0, 0], [4, 4]);
