# 条件判断 - 程序如何做决策

## 引言：程序也需要"思考"

想象一下，如果一个人只会按照固定指令行动，不会根据情况调整，那该多可怕！

- 下雨了还坚持去野餐
- 天黑了还不开灯
- 吃饱了还继续吃

幸好，程序可以像人一样"思考"和"决策"，这就是**条件判断**的作用。

## 什么是条件判断？

**条件判断**就是让程序根据不同的情况做出不同的选择。就像我们每天做的决策：

```
如果 下雨：
    带伞
否则：
    戴帽子
```

在编程中，我们用 `if-else` 语句来实现这种决策。

## 基本的条件判断结构

### if 语句：最简单的决策
```python
if 条件:
    # 条件成立时执行的代码
```

**生活例子**：
```python
# 如果下雨，就带伞
if is_raining:
    take_umbrella()
```

### if-else 语句：二选一
```python
if 条件:
    # 条件成立时执行
else:
    # 条件不成立时执行
```

**生活例子**：
```python
# 如果下雨带伞，否则戴帽子
if is_raining:
    take_umbrella()
else:
    wear_hat()
```

### if-elif-else 语句：多选一
```python
if 条件1:
    # 条件1成立时执行
elif 条件2:
    # 条件2成立时执行
else:
    # 所有条件都不成立时执行
```

**生活例子**：
```python
# 根据温度选择衣服
if temperature > 30:
    wear_t_shirt()
elif temperature > 20:
    wear_sweater()
else:
    wear_coat()
```

## 比较运算符：决策的依据

要让程序做决策，我们需要告诉它如何比较。就像裁判需要知道比赛规则一样。

### 常用的比较运算符

| 运算符 | 含义 | 例子 | 结果 |
|--------|------|------|------|
| `==` | 等于 | `5 == 5` | `True` |
| `!=` | 不等于 | `5 != 3` | `True` |
| `>` | 大于 | `10 > 5` | `True` |
| `<` | 小于 | `3 < 8` | `True` |
| `>=` | 大于等于 | `5 >= 5` | `True` |
| `<=` | 小于等于 | `3 <= 5` | `True` |

### 实际应用

```python
# 检查年龄是否成年
age = 18
if age >= 18:
    print("你是成年人")
else:
    print("你是未成年人")

# 检查密码是否正确
input_password = "123456"
correct_password = "123456"
if input_password == correct_password:
    print("登录成功")
else:
    print("密码错误")
```

## 逻辑运算符：组合多个条件

有时候我们需要同时满足多个条件，或者满足其中一个条件。

### 三种逻辑运算符

| 运算符 | 含义 | 例子 | 说明 |
|--------|------|------|------|
| `and` | 并且 | `A and B` | A和B都成立 |
| `or` | 或者 | `A or B` | A或B成立 |
| `not` | 非 | `not A` | A不成立 |

### 实际应用

```python
# 检查是否适合看电影（年龄合适且有时间）
age = 20
has_time = True

if age >= 18 and has_time:
    print("可以去看电影")
else:
    print("不能去看电影")

# 检查是否打折（学生或老人）
is_student = True
is_elderly = False

if is_student or is_elderly:
    print("享受折扣")
else:
    print("原价购买")

# 检查是否不是周末
is_weekend = False
if not is_weekend:
    print("今天是工作日")
else:
    print("今天是周末")
```

## 嵌套条件判断：决策中的决策

有时候决策很复杂，需要在决策内部再做决策。

### 例子：餐厅点餐系统

```python
# 检查是否饿了
is_hungry = True

if is_hungry:
    # 饿了，继续判断想吃什么
    want_pizza = True
    want_burger = False
    
    if want_pizza:
        print("点披萨")
    elif want_burger:
        print("点汉堡")
    else:
        print("点面条")
else:
    print("不饿，不点餐")
```

## 实际应用场景

### 场景1：用户登录系统

```python
# 用户登录验证
username = input("请输入用户名：")
password = input("请输入密码：")

# 正确的用户信息
correct_username = "admin"
correct_password = "123456"

if username == correct_username and password == correct_password:
    print("登录成功！")
    # 进一步检查用户权限
    if username == "admin":
        print("欢迎管理员")
    else:
        print("欢迎普通用户")
else:
    print("用户名或密码错误")
```

### 场景2：成绩评级系统

```python
# 根据分数给出评级
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"你的成绩是：{grade}")
```

### 场景3：天气预报应用

```python
# 根据天气给出建议
temperature = 25
is_raining = False
is_sunny = True

if is_raining:
    print("今天下雨，记得带伞")
    if temperature < 15:
        print("天气较冷，多穿衣服")
    else:
        print("温度适宜")
elif is_sunny:
    print("今天晴天，适合户外活动")
    if temperature > 30:
        print("天气炎热，注意防晒")
    else:
        print("天气舒适")
else:
    print("天气一般，按平常准备")
```

## 常见错误与调试

### 错误1：忘记冒号
```python
if age >= 18  # 错误：缺少冒号
    print("成年人")
```
**正确**：`if age >= 18:`

### 错误2：缩进不一致
```python
if age >= 18:
print("成年人")  # 错误：没有缩进
```
**正确**：
```python
if age >= 18:
    print("成年人")  # 正确：有缩进
```

### 错误3：使用单个等号
```python
if age = 18:  # 错误：应该是 ==
    print("刚好18岁")
```
**正确**：`if age == 18:`

## 条件判断的思维模式

学会条件判断后，你的思维方式会发生改变：

### 1. 问题分解
把复杂问题分解成多个简单的"是/否"问题。

### 2. 逻辑清晰
学会用逻辑运算符组合多个条件。

### 3. 考虑全面
思考所有可能的情况，避免遗漏。

## 条件判断的威力

条件判断让程序从"机械执行"变成"智能决策"：

- **游戏**：根据玩家操作决定游戏进程
- **网站**：根据用户权限显示不同内容
- **APP**：根据设备状态调整功能
- **机器人**：根据环境做出反应

## 总结

条件判断是编程中的"决策大脑"：

- **if语句**：处理单一情况
- **if-else语句**：处理两种情况
- **if-elif-else语句**：处理多种情况
- **比较运算符**：提供决策依据
- **逻辑运算符**：组合多个条件

记住这个比喻：**条件判断就像交通信号灯，根据不同的情况给出不同的指示**。

---

**下一篇文章预告**：我们将学习循环结构——让程序学会重复劳动。想象一下，如果程序能不知疲倦地重复工作，能完成多少惊人的任务？