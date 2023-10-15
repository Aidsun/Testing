def maoapao(nums):
    for i in range(len(nums)-1):
        for j in range(len(nums)-1-i):
            if nums[j] > nums[j+1]:
                nums[j], nums[j+1] = nums[j+1], nums[j]
    return nums


question = list(map(int, input("请输入数字进行排序：").split()))
print("结果为:", maoapao(question))
