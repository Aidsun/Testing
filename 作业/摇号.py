import random

start = eval(input("请输入开始号码:"))
end = eval(input("请输入结束号码:"))
print("随机抽选号码为:",random.randint(start, end))