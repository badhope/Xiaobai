# 循环结构 - 让程序学会重复劳动

## 引言：程序的"永动机"

想象一下，如果有人能不知疲倦地重复做同一件事：
- 每天24小时不停地数钱
- 一遍又一遍地检查产品质量
- 永不停止地监控系统状态

这就是**循环结构**的威力——让程序成为你的"永动机"，完成那些重复、枯燥但必要的工作。

## 什么是循环？

**循环**就是让程序重复执行某段代码的能力。就像我们生活中的重复行为：

```
重复 10 次：
    做俯卧撑
```

在编程中，我们用循环语句来实现这种重复执行。

## 两种主要的循环类型

### 1. for 循环：知道次数的循环
当你知道要重复多少次时，使用 for 循环。

```python
for 变量 in 序列:
    # 重复执行的代码
```

**生活例子**：
```python
# 做10个俯卧撑
for i in range(10):
    print(f"第{i+1}个俯卧撑")
```

### 2. while 循环：不知道次数的循环
当你不确定要重复多少次，只知道重复条件时，使用 while 循环。

```python
while 条件:
    # 条件成立时重复执行
```

**生活例子**：
```python
# 一直喝水直到不渴
is_thirsty = True
while is_thirsty:
    print("喝一口水")
    # 检查是否还渴
    if 检查是否解渴():
        is_thirsty = False
```

## for 循环详解

### 基本语法
```python
for 变量 in 序列:
    循环体
```

### 使用 range() 函数
`range()` 函数生成一个数字序列，常用于 for 循环。

```python
# 从0到4（不包含5）
for i in range(5):
    print(i)  # 输出：0,1,2,3,4

# 从1到5
for i in range(1, 6):
    print(i)  # 输出：1,2,3,4,5

# 从1到10，步长为2
for i in range(1, 11, 2):
    print(i)  # 输出：1,3,5,7,9
```

### 遍历列表
```python
# 遍历水果列表
fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(f"我喜欢吃{fruit}")

# 输出：
# 我喜欢吃苹果
# 我喜欢吃香蕉
# 我喜欢吃橙子
```

## while 循环详解

### 基本语法
```python
while 条件:
    循环体
```

### 计数器控制的 while 循环
```python
# 用计数器控制循环次数
count = 0
while count < 5:
    print(f"这是第{count+1}次循环")
    count = count + 1  # 计数器加1
```

### 条件控制的 while 循环
```python
# 根据用户输入决定是否继续
user_input = ""
while user_input != "退出":
    user_input = input("请输入内容（输入'退出'结束）：")
    print(f"你输入了：{user_input}")
```

## 循环控制语句

有时候我们需要在循环中做出特殊控制。

### break：立即退出循环
```python
# 找到第一个大于5的数字就退出
numbers = [1, 3, 7, 2, 9, 4]
for num in numbers:
    if num > 5:
        print(f"找到第一个大于5的数字：{num}")
        break  # 立即退出循环
    print(f"检查数字：{num}")
```

### continue：跳过本次循环
```python
# 只打印奇数
for i in range(10):
    if i % 2 == 0:  # 如果是偶数
        continue    # 跳过本次循环
    print(i)        # 只打印奇数
```

## 实际应用场景

### 场景1：批量处理数据

```python
# 批量计算学生成绩总分
scores = [85, 92, 78, 96, 88]
total_score = 0

# 使用for循环计算总分
for score in scores:
    total_score = total_score + score

print(f"总分：{total_score}")
print(f"平均分：{total_score / len(scores)}")
```

### 场景2：用户输入验证

```python
# 要求用户输入有效的年龄
age = 0
while True:  # 无限循环，直到break
    try:
        age = int(input("请输入你的年龄："))
        if age < 0 or age > 150:
            print("年龄必须在0-150之间，请重新输入")
            continue  # 跳过本次循环，重新输入
        break  # 输入有效，退出循环
    except ValueError:
        print("请输入有效的数字")

print(f"你的年龄是：{age}")
```

### 场景3：游戏循环

```python
# 简单的猜数字游戏
import random

secret_number = random.randint(1, 100)
guess_count = 0

print("猜数字游戏开始！数字在1-100之间")

while True:
    guess = int(input("请输入你的猜测："))
    guess_count += 1
    
    if guess < secret_number:
        print("太小了！")
    elif guess > secret_number:
        print("太大了！")
    else:
        print(f"恭喜你！猜对了！用了{guess_count}次")
        break
```

## 嵌套循环：循环中的循环

有时候我们需要在循环内部再使用循环。

### 例子：打印乘法表

```python
# 打印9x9乘法表
for i in range(1, 10):  # 外层循环：控制行
    for j in range(1, i + 1):  # 内层循环：控制列
        print(f"{j}×{i}={i*j}", end="\t")
    print()  # 换行
```

### 例子：遍历二维数组

```python
# 遍历学生成绩表
students_scores = [
    [85, 92, 78],  # 学生1的成绩
    [76, 88, 95],  # 学生2的成绩
    [90, 87, 82]   # 学生3的成绩
]

for i, scores in enumerate(students_scores):
    total = 0
    for score in scores:
        total += score
    print(f"学生{i+1}的总分：{total}")
```

## 循环的优化技巧

### 1. 避免在循环内做重复计算

```python
# 不好：每次循环都计算len(list)
for i in range(len(students)):
    print(students[i])

# 更好：先计算长度
n = len(students)
for i in range(n):
    print(students[i])

# 最好：直接遍历
for student in students:
    print(student)
```

### 2. 使用列表推导式

```python
# 传统方法
squares = []
for i in range(10):
    squares.append(i * i)

# 列表推导式（更简洁）
squares = [i * i for i in range(10)]
```

## 常见错误与调试

### 错误1：无限循环
```python
# 错误：条件永远不会改变
count = 0
while count < 5:  # 忘记增加count
    print("无限循环！")
```
**解决方法**：确保循环条件会改变

### 错误2：错误的缩进
```python
for i in range(5):
print(i)  # 错误：没有缩进
```
**正确**：
```python
for i in range(5):
    print(i)  # 正确：有缩进
```

### 错误3：修改正在遍历的列表
```python
# 错误：在循环中修改列表
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)  # 危险操作！
```
**解决方法**：创建新列表或使用索引遍历

## 循环的思维模式

学会循环后，你会发现很多问题都可以用循环解决：

### 1. 模式识别
识别问题中的重复模式，用循环代替手动重复。

### 2. 批量思维
从处理单个数据到处理批量数据。

### 3. 自动化思维
让程序完成重复性工作，解放人力。

## 循环的威力

循环让程序具备了处理大规模数据的能力：

- **数据处理**：批量处理成千上万条记录
- **科学计算**：进行数百万次模拟计算
- **游戏开发**：实时更新所有游戏对象
- **网络爬虫**：自动抓取大量网页数据

## 总结

循环结构是编程中的"重复劳动专家"：

- **for循环**：适合知道次数的重复任务
- **while循环**：适合根据条件重复的任务
- **break**：立即退出循环
- **continue**：跳过本次循环
- **嵌套循环**：处理复杂的数据结构

记住这个比喻：**循环就像工厂的流水线，可以不知疲倦地重复生产**。

---

**下一篇文章预告**：我们将学习函数——程序的积木块。想象一下，如果能将常用的代码打包成可重用的模块，编程效率会提升多少倍？