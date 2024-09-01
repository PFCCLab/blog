
# 项目收官 | 为 Paddle 框架 API 添加类型提示（Type Hints）

34 位开发者参与，16 项主任务，337 个子任务，2191 个 API，340+ 个 PR，自 2024 年 4 月起，至 8 月 30 日主体项目完结，近 5 个月 SAN 值归零的夜晚，Type Hints 总归算是有始有终、小有成果，这里就简单回顾与总结一下。

## 项目介绍

此次项目是第六期飞桨黑客松引入 Fundable Projects 中的一个：[为 Paddle 框架 API 添加类型提示（Type Hints）](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_6th/%E3%80%90Hackathon%206th%E3%80%91FundableProject%E4%BB%BB%E5%8A%A1%E5%90%88%E9%9B%86.md#%E4%B8%80%E4%B8%BA-paddle-%E6%A1%86%E6%9E%B6-api-%E6%B7%BB%E5%8A%A0%E7%B1%BB%E5%9E%8B%E6%8F%90%E7%A4%BAtype-hints)。

> Fundable Projects 本身定位具有一定的挑战性，有兴趣的同学可以移步 [【Hackathon 6th】Fundable Projects](https://github.com/PaddlePaddle/Paddle/issues/62908)

Python 在 3.5 版本通过 [PEP 484 – Type Hints](https://peps.python.org/pep-0484/) 正式规范了 "类型提示" 功能。之后随着相关规范和工具的逐渐完善，类型提示逐渐成为 Python 代码中的标准实践，如今较新的主流库也基本都提供了类型提示。由于 Python 本身类型高度动态化，类型提示的存在可以帮助开发者更快地了解代码的类型信息，提高代码的可读性和可维护性，结合工具还可以提供静态类型检查，在开发阶段就能发现一些潜在的类型错误。Paddle 框架由于历史原因尚未提供类型提示，本项目希望引入尽可能多的对 Paddle 有利的类型提示。

以一段简单的 Python 代码为例：

``` python
def greeting(name):
    return 'Hello' + name
```

添加上类型提示之后：

``` python
def greeting(name: str) -> str:
    return 'Hello' + name
```

正如前文所讲，类型提示功能有诸多好处，如：

- 帮助开发者了解代码类型信息
- 提高代码的可读性和可维护性
- 结合工具在开发阶段发现错误

而最直观的反映就是，我们在诸如 VSCode 等 IDE 中，能够获取到接口的类型提示，并进行连续推导了：

<!-- IDE 中使用类型提示 -->
<div style="display: flex; justify-content: center">
    <figure style="width: 80%;">
        <img src="../images/type-hints-project/typing_ide.png"/>
        <figcaption>IDE 中使用类型提示</figcaption>
    </figure>
</div>

项目的 RFC [【Hackathon 6th】为 Paddle 框架 API 添加类型提示（Type Hints）](https://github.com/PaddlePaddle/community/pull/858) 经过大家讨论之后，将此次项目的目标最终标定为：

- **正确完成 Paddle 公开 API 的类型标注，但不声明 Paddle 类型标注的完备性。**

这里需要单独说明一下 "标注的完备性" 。类型标注是个循序渐进的过程，Paddle 是个相对较大且复杂的项目，除了公开 API 之外，还存在较多非公开 API 与 C++ 接口，此次项目无法保证完成以上所有接口的类型标注，故此，不做 Paddle 类型标注的完备性说明。或者，换个说法，如果熟悉 Python 的类型标注和相关工具的使用，那么，此次项目不保证完成 Paddle 这个项目本身通过类型工具的检查，但是，需要保证外部项目使用 Paddle 时，能够正确识别、提示与检查 Paddle 所提供的公开 API 。

项目中的任务，以任务模块的角度，分解为：

- `_typing` 模块的引入
- 公开 API 的类型标注
- CI 流水线的建设
- 文档建设

具体的执行过程，通过 [Tracking Issue](https://github.com/PaddlePaddle/Paddle/issues/63597) 跟踪项目进展，分解为：

- 第一阶段的前置任务
- 第二阶段的代码标注主体任务
- 第三阶段的补充测试
- 第四阶段的收尾与总结

## 项目实施

### 方案总揽

Python 官方提出了三种支持类型提示的 [包分发方式](https://typing.readthedocs.io/en/latest/spec/distributing.html#packaging-typed-libraries)：

- `inline` ，行内
- `stubs` ，文件
- `third party` ，第三方

结合 Paddle 项目本身的接口，本项目采用:

- **Inline type annotation + Stub files in package**

的方案实施类型提示，具体为：

- Python 接口，使用 `inline` 方式标注
- 非 Python 接口，提供 `stub` 标注文件，并打包在 Paddle 中

所谓 `inline` ，是将类型直接标注在源文件的接口定义中，如：

``` python
def log(x, name=None):
    ...
```

直接修改接口代码为：

``` python
def log(x: Tensor, name: str | None = None) -> Tensor:
    ...
```

而有些接口，Paddle 是通过 pybind 或 patch 的方式提供，则需要增加对应的 `stub` 文件。最基本的，如 `Tensor` 类，需要提供 `tensor.pyi` 文件：

<!-- tensor.pyi -->
<div style="display: flex; justify-content: center">
    <figure style="width: 80%;">
        <img src="../images/type-hints-project/tensor_pyi.png"/>
        <figcaption>tensor.pyi</figcaption>
    </figure>
</div>

`stub` 文件的写法与 Python 代码的写法相同，只是不需要写具体的实现部分。

另外，由于 Python 的类型标注特性一直在不断完善的过程之中，初期的一些特性很难支撑 Paddle 如此体量的项目，因此，我们提出项目实施过程中的一项基本原则：

- **在不违背 Paddle 最低支持版本 3.8 语法的基础上，尽可能使用新版本 typing 特性**

所谓 `不违背 Paddle 最低支持版本 3.8 语法`，一个典型的例子是，Python 3.8 版本不能使用 `|` 进行类型别名的创建，如：

``` python
from typing_extensions import TypeAlias
from typing import Union
t: TypeAlias = Union[str, int]
```

在 Python 3.8 的语法中无法转写为：

``` python
from typing_extensions import TypeAlias
t: TypeAlias = str | int
```

但，我们希望 `尽可能使用新版本 typing 特性`，因此，通过 [PEP 563 – Postponed Evaluation of Annotations](https://peps.python.org/pep-0563/) ，我们可以在函数签名中使用 Python 3.10 的语法特性，如：

``` python
from __future__ import annotations
def foo(bar: str | int) -> None:
    ...
```

以上，为本项目实施的总体方案与基本原则，接下来，则以前文所讲的 `以任务模块的角度` 对各个分项进行阐述。

### _typing 模块的引入

### 公开 API 的类型标注

### CI 流水线的建设

### 文档建设





[【Hackathon 6th】为 Paddle 框架 API 添加类型提示（Type Hints） RFC community#858](https://github.com/PaddlePaddle/community/pull/858)

[为 Paddle 框架 API 添加类型提示（Type Hints）Tracking Issue](https://github.com/PaddlePaddle/Paddle/issues/63597)

[[Type Hints] 为公开 API 标注类型提示信息](https://github.com/PaddlePaddle/Paddle/issues/65008)



@zrr1999
@gouzil
@Asthestarsfalll
@SigureMo
@ooooo-create
@megemini
@liyongchao911
@DrRyanHuang
@enkilee
@gsq7474741
@sunzhongkai588
@Liyulingyue
@86kkd
@NKNaN
@tlxd
@Luohongzhige
@Fripping
@crazyxiaoxi
@Caogration
@BHmingyang
@Lans1ot
@Whsjrczr
@uanu2002
@MikhayEeer
@Jeff114514
@haoyu2022
@Betelgeu
@Turingg
@inaomIIsfarell
@Wizard-ZP
@Sekiro-x
@successfulbarrier
@MufanColin
@luotao1