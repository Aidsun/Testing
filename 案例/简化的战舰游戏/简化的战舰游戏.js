//创建战舰部分占据的三个单元格
var ship_center = Math.floor(Math.random() * 7);
var ship_head = ship_center - 1;
var ship_end = ship_center + 1;
// 记录战舰部分被击中的次数
var head = 0, center = 0, end = 0;
// 声明一个存储用户猜测的变量
var guess;
// 声明一个存储击中次数的变量
var hits = 0;
// 声明一个存储猜测次数的变量
var guesses = 0;
// 声明一个记录战舰是否被击沉的变量
var isSunk = false;
// 利用弹出框介绍游戏玩法
alert("浏览器将提示你猜测位置，然后你输入网格位置。你猜测后，将显示“击中”,“未击中”或“你消灭了所有战舰”。所有战舰都被击沉之后，游戏结束并显示结果。");

//对随机生成的战舰部分进行限定
var notInRange = true;
while (notInRange) {
    if (ship_head < 0 || ship_end > 6) {
        ship_center = Math.floor(Math.random() * 7);
    }
    else {
        notInRange = false;
    }
}

// 循环进行战舰游戏
while (isSunk == false) {
    guess = Number(prompt("请输入0-6的数字进行攻击:"));
    // 判断输入的数字是否有效
    if (guess < 0 || guess > 6) {
        guess = Number(prompt("请重新输入0-6之间有效的数字:"));
    }
    // 若有效
    else {
        // 猜测次数加一
        guesses = guesses + 1;
        // 判断是否击中船舰
        if (guess == ship_head || guess == ship_center || guess == ship_end) {
            // 不允许击中同一部分战舰三次
            switch (guess) {
                case ship_head:
                    {
                        head += 1;
                        if (head == 1) {
                            hits = hits + 1;
                            alert("击中!");
                        }
                        else {
                            alert("这部分战舰已经被消灭了！")
                        }
                        break
                    }
                case ship_center:
                    {
                        center += 1;
                        if (center == 1) {
                            hits = hits + 1;
                            alert("击中!");
                        }
                        else {
                            alert("这部分战舰已经被消灭了！")
                        }
                        break
                    }
                case ship_end:
                    {
                        end += 1;
                        if (end == 1) {
                            hits = hits + 1;
                            alert("击中!");
                        }
                        else {
                            alert("这部分战舰已经被消灭了！")
                        }
                        break
                    }
            }
            // 判断是否击沉了所有战舰
            if (hits == 3) {
                isSunk = true;
                alert("恭喜你，消灭了所有战舰，其中猜测了" + guesses + "次，击中了" + hits + "次");
            }
        }
        else {
            alert("未击中");
        }
    }
}
