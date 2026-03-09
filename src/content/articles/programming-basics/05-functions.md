# 函数 - 程序的积木块

## 引言：从"复制粘贴"到"模块化"

想象一下，如果你每次想喝水都要重新学习如何拿杯子、如何倒水、如何喝水，生活会多么低效！

编程也是一样。如果我们每次需要完成某个任务时，都要重新写一遍相同的代码，那该多浪费时间。

**函数**就是解决这个问题的神器——把常用的代码打包成可重用的"积木块"。

## 什么是函数？

**函数**是一段完成特定任务的代码块，可以重复使用。就像生活中的工具：

- **锤子**：专门用来敲钉子
- **剪刀**：专门用来剪纸
- **计算器**：专门用来计算

每个工具都有明确的用途，函数也一样。

## 为什么需要函数？

### 1. 代码复用：一次编写，多次使用
```python
# 没有函数：每次都要重复写
print("=== 欢迎使用计算器 ===")
print("1 + 2 =", 1 + 2)
print("=== 计算完成 ===")

print("=== 欢迎使用计算器 ===")
print("3 + 4 =", 3 + 4)
print("=== 计算完成 ===")

# 有函数：定义一次，使用多次
def calculator(a, b):
    print("=== 欢迎使用计算器 ===")
    print(f"{a} + {b} =", a + b)
    print("=== 计算完成 ===")

calculator(1, 2)
calculator(3, 4)
```

### 2. 模块化：复杂问题分解成小问题
把大象放进冰箱需要几步？
1. 打开冰箱门
2. 把大象放进去
3. 关上冰箱门

每个步骤都可以是一个函数！

### 3. 易于维护：修改一处，处处生效
如果计算器的欢迎语需要修改，只需要改函数定义，所有使用的地方都会自动更新。

## 函数的组成部分

一个完整的函数包含四个部分：

### 1. 函数定义（def）
```python
def 函数名(参数):
    # 函数体
```

### 2. 函数名
给函数起一个描述性的名字，说明它的功能。

### 3. 参数（输入）
函数需要的数据，就像工具的原材料。

### 4. 返回值（输出）
函数处理后的结果。

## 创建你的第一个函数

### 无参数无返回值的函数
```python
def say_hello():
    """打招呼的函数"""
    print("你好！")
    print("欢迎学习编程！")

# 使用函数
say_hello()  # 输出：你好！欢迎学习编程！
say_hello()  # 可以重复使用
```

### 带参数的函数
```python
def greet(name):
    """向指定的人打招呼"""
    print(f"你好，{name}！")
    print("很高兴认识你！")

# 使用函数
greet("小明")  # 输出：你好，小明！很高兴认识你！
greet("小红")  # 输出：你好，小红！很高兴认识你！
```

### 带返回值的函数
```python
def add(a, b):
    """计算两个数的和"""
    result = a + b
    return result  # 返回计算结果

# 使用函数
sum1 = add(3, 5)      # sum1 = 8
sum2 = add(10, 20)    # sum2 = 30
print(f"3+5={sum1}, 10+20={sum2}")
```

## 函数的参数详解

### 位置参数
最常见的参数类型，按位置传递：
```python
def introduce(name, age, city):
    print(f"我叫{name}，今年{age}岁，来自{city}")

introduce("小明", 18, "北京")  # 正确：按位置传递
```

### 默认参数
给参数设置默认值，调用时可以省略：
```python
def greet(name, greeting="你好"):
    print(f"{greeting}，{name}！")

greet("小明")           # 输出：你好，小明！
greet("小红", "早上好")  # 输出：早上好，小红！
```

### 关键字参数
按参数名传递，顺序不重要：
```python
def create_student(name, age, grade):
    print(f"学生：{name}，年龄：{age}，年级：{grade}")

# 关键字参数调用
create_student(age=18, grade="高三", name="小明")
```

## 实际应用场景

### 场景1：用户注册验证
```python
def validate_user(username, password):
    """验证用户名和密码是否符合要求"""
    errors = []
    
    # 验证用户名
    if len(username) < 3:
        errors.append("用户名至少3个字符")
    if " " in username:
        errors.append("用户名不能包含空格")
    
    # 验证密码
    if len(password) < 6:
        errors.append("密码至少6个字符")
    
    return errors

# 使用验证函数
username = input("请输入用户名：")
password = input("请输入密码：")

errors = validate_user(username, password)
if errors:
    print("注册失败：")
    for error in errors:
        print(f"- {error}")
else:
    print("注册成功！")
```

### 场景2：数学工具包
```python
def calculate_area(shape, *args):
    """计算不同形状的面积"""
    if shape == "circle":
        radius = args[0]
        return 3.14 * radius * radius
    elif shape == "rectangle":
        length, width = args
        return length * width
    elif shape == "triangle":
        base, height = args
        return 0.5 * base * height
    else:
        return "不支持的形状"

# 使用面积计算函数
circle_area = calculate_area("circle", 5)
rect_area = calculate_area("rectangle", 4, 6)
triangle_area = calculate_area("triangle", 3, 8)

print(f"圆面积：{circle_area}")
print(f"矩形面积：{rect_area}")
print(f"三角形面积：{triangle_area}")
```

### 场景3：游戏角色系统
```python
def create_character(name, character_class):
    """创建游戏角色"""
    characters = {
        "warrior": {"health": 100, "attack": 20, "defense": 15},
        "mage": {"health": 80, "attack": 30, "defense": 10},
        "archer": {"health": 90, "attack": 25, "defense": 12}
    }
    
    if character_class in characters:
        stats = characters[character_class]
        return {
            "name": name,
            "class": character_class,
            "health": stats["health"],
            "attack": stats["attack"],
            "defense": stats["defense"]
        }
    else:
        return None

def display_character(character):
    """显示角色信息"""
    if character:
        print(f"角色名：{character['name']}")
        print(f"职业：{character['class']}")
        print(f"生命值：{character['health']}")
        print(f"攻击力：{character['attack']}")
        print(f"防御力：{character['defense']}")
    else:
        print("角色创建失败")

# 创建和显示角色
player1 = create_character("勇士", "warrior")
player2 = create_character("法师", "mage")

display_character(player1)
print("---")
display_character(player2)
```

## 函数的嵌套调用

函数可以调用其他函数，就像积木可以组合成更大的结构：

```python
def calculate_tax(price):
    """计算税费（10%）"""
    return price * 0.1

def calculate_total(price, quantity):
    """计算总价（含税）"""
    subtotal = price * quantity
    tax = calculate_tax(subtotal)  # 调用另一个函数
    total = subtotal + tax
    return total

def print_receipt(item, price, quantity):
    """打印收据"""
    total = calculate_total(price, quantity)  # 调用计算函数
    print(f"商品：{item}")
    print(f"单价：{price}元")
    print(f"数量：{quantity}")
    print(f"总价：{total}元（含税）")

# 使用函数
print_receipt("笔记本电脑", 5000, 1)
```

## 函数的文档字符串

好的函数应该有清晰的文档说明：

```python
def calculate_bmi(weight, height):
    """
    计算身体质量指数(BMI)
    
    参数:
        weight: 体重（千克）
        height: 身高（米）
    
    返回:
        BMI值（浮点数）
    """
    bmi = weight / (height ** 2)
    return round(bmi, 2)

def interpret_bmi(bmi):
    """
    根据BMI值判断体重状况
    
    参数:
        bmi: BMI值
    
    返回:
        体重状况描述（字符串）
    """
    if bmi < 18.5:
        return "偏瘦"
    elif bmi < 24:
        return "正常"
    elif bmi < 28:
        return "超重"
    else:
        return "肥胖"

# 使用函数
bmi = calculate_bmi(70, 1.75)
status = interpret_bmi(bmi)
print(f"你的BMI是{bmi}，体重状况：{status}")
```

## 常见错误与调试

### 错误1：忘记调用函数
```python
def say_hello():
    print("Hello!")

say_hello  # 错误：缺少括号，没有调用函数
say_hello()  # 正确：调用函数
```

### 错误2：参数数量不匹配
```python
def greet(name, age):
    print(f"{name}今年{age}岁")

greet("小明")  # 错误：缺少一个参数
greet("小明", 18)  # 正确
```

### 错误3：忘记返回值
```python
def add(a, b):
    result = a + b  # 忘记return

sum = add(3, 5)  # sum会是None
```

## 函数的思维模式

学会使用函数后，你的编程思维会发生变化：

### 1. 抽象思维
从具体实现中抽象出通用功能。

### 2. 模块化思维
把大问题分解成小函数，逐个解决。

### 3. 复用思维
思考哪些代码可以复用，避免重复造轮子。

## 函数的威力

函数让编程从"手工作坊"变成"现代化工厂"：

- **代码组织**：逻辑清晰，易于理解
- **团队协作**：不同人负责不同函数
- **测试维护**：可以单独测试每个函数
- **代码复用**：避免重复编写相同功能

## 总结

函数是编程中的"积木块"：

- **定义函数**：创建可重用的代码块
- **参数传递**：给函数提供输入数据
- **返回值**：函数处理后的结果
- **文档说明**：让函数更易理解和使用
- **嵌套调用**：组合函数完成复杂任务

记住这个比喻：**函数就像乐高积木，单个简单但组合起来能创造无限可能**。

---

**下一篇文章预告**：我们将学习面向对象编程——从个体到世界的思维方式。想象一下，如果能用现实世界的思维方式来组织代码，编程会变得多么直观！