# 13 Python 高频词汇（100）

> Python 语法、标准库、生态工具、错误信息常见词汇

| 英文单词 / 短语 | 中文释义 | 场景记忆 |
|---|---|---|
| ⭐ interpreter | 解释器 | `Python interpreter` Python 逐行执行代码的程序 |
| ⭐ script | 脚本 | `run a script` 运行一个 .py 文件 |
| ⭐ module | 模块 | `import a module` 导入模块；一个 .py 文件就是一个模块 |
| ⭐ package | 包 | 含 `__init__.py` 的目录，多个模块的集合 |
| ⭐ pip | 包管理工具 | `pip install requests` 安装第三方包 |
| ⭐ virtual environment | 虚拟环境 | `python -m venv .venv` 隔离项目依赖 |
| ⭐ requirements.txt | 依赖清单 | `pip freeze > requirements.txt` 导出依赖 |
| ⭐ import | 导入 | `import os` / `from pathlib import Path` |
| ⭐ def | 定义函数 | `def func(args):` Python 函数定义关键字 |
| ⭐ lambda | 匿名函数 | `lambda x: x * 2` 单行匿名函数 |
| ⭐ class | 类 | `class MyClass:` 定义类 |
| ⭐ instance | 实例 | `obj = MyClass()` 创建类的实例 |
| ⭐ self | 自身引用 | 类方法第一个参数，代表实例本身 |
| ⭐ __init__ | 构造方法 | 类实例化时自动调用的初始化方法 |
| ⭐ __str__ / __repr__ | 字符串表示 | `__str__` 用于打印，`__repr__` 用于调试 |
| ⭐ dunder / magic method | 魔法方法 | 双下划线方法，如 `__len__` / `__iter__` |
| ⭐ decorator | 装饰器 | `@property` / `@staticmethod` / `@functools.wraps` |
| ⭐ generator | 生成器 | `yield` 关键字产生的惰性序列，节省内存 |
| ⭐ yield | 产出；暂停 | `yield value` 生成器函数中返回值并暂停 |
| ⭐ comprehension | 推导式 | `[x for x in list]` 列表/字典/集合推导式 |
| ⭐ iterable | 可迭代对象 | 可以用 `for` 遍历的对象，如 list / dict / str |
| ⭐ iterator | 迭代器 | 实现 `__iter__` 和 `__next__` 的对象 |
| ⭐ context manager | 上下文管理器 | `with open('file') as f:` 自动管理资源 |
| ⭐ exception | 异常 | `try / except / finally` 处理运行时错误 |
| ⭐ raise | 抛出异常 | `raise ValueError("invalid")` 主动抛出异常 |
| ⭐ traceback | 错误堆栈 | 报错时打印的调用链信息 |
| ⭐ assertion | 断言 | `assert x > 0, "must be positive"` |
| ⭐ type hint | 类型注解 | `def foo(x: int) -> str:` 静态类型提示 |
| ⭐ annotation | 注解 | 函数参数和返回值的类型声明 |
| ⭐ dataclass | 数据类 | `@dataclass` 自动生成 `__init__` 等方法的类 |
| ⭐ Enum | 枚举类型 | `from enum import Enum` 定义常量集合 |
| ⭐ ABC / abstract | 抽象基类 | `from abc import ABC, abstractmethod` |
| ⭐ mixin | 混入类 | 通过多继承复用功能的设计模式 |
| ⭐ slot | 槽（内存优化） | `__slots__` 限制实例属性，减少内存占用 |
| ⭐ pickle | 序列化 | `pickle.dump/load` 将对象序列化为字节流 |
| ⭐ json | JSON 处理 | `import json` / `json.dumps / json.loads` |
| ⭐ pathlib | 路径操作 | `from pathlib import Path` 面向对象的路径处理 |
| ⭐ os / sys | 系统接口 | `os.path` 路径操作；`sys.argv` 命令行参数 |
| ⭐ subprocess | 子进程 | `subprocess.run(["ls", "-l"])` 执行系统命令 |
| ⭐ threading | 多线程 | `import threading` Python 线程模块 |
| ⭐ multiprocessing | 多进程 | 绕过 GIL 实现真并行，CPU 密集型任务 |
| ⭐ GIL | 全局解释器锁 | Global Interpreter Lock，Python 多线程的主要限制 |
| ⭐ asyncio | 异步 IO | `async def` / `await` Python 协程框架 |
| ⭐ coroutine | 协程 | `async def` 定义的异步函数，可被 `await` |
| ⭐ event loop | 事件循环 | asyncio 的调度核心，`asyncio.run()` |
| ⭐ logging | 日志模块 | `import logging` / `logging.info("msg")` |
| ⭐ argparse | 命令行参数解析 | `import argparse` 解析 CLI 参数 |
| ⭐ pytest | 测试框架 | `pytest test_foo.py` Python 主流测试工具 |
| ⭐ fixture | 测试夹具 | pytest 中预置测试环境的装饰器 `@pytest.fixture` |
| ⭐ mock | 模拟对象 | `from unittest.mock import MagicMock` |
| ⭐ coverage | 测试覆盖率 | `pytest --cov` 统计代码被测试覆盖的比例 |
| ⭐ linter | 代码检查 | `flake8` / `pylint` 检查代码风格和错误 |
| ⭐ formatter | 格式化工具 | `black` / `ruff` 自动格式化 Python 代码 |
| ⭐ type checker | 类型检查器 | `mypy` / `pyright` 静态类型检查工具 |
| ⭐ ruff | 快速 linter | 用 Rust 写的极速 Python linter，替代 flake8 |
| ⭐ uv | 新一代包管理 | 用 Rust 写的极速 pip 替代品，`uv install` |
| ⭐ poetry | 依赖管理 | `pyproject.toml` 管理项目依赖和发布 |
| ⭐ pyproject.toml | 项目配置 | Python 项目的现代配置文件，替代 setup.py |
| ⭐ wheel | 分发格式 | `.whl` Python 包的二进制分发格式 |
| ⭐ PyPI | Python 包索引 | Python Package Index，`pip` 下载包的来源 |
| ⭐ namespace | 命名空间 | 变量/函数名的作用域，`global` / `local` / `builtin` |
| ⭐ scope | 作用域 | LEGB 规则：Local → Enclosing → Global → Built-in |
| ⭐ closure | 闭包 | 内层函数捕获外层函数变量的机制 |
| ⭐ mutable / immutable | 可变 / 不可变 | `list` 可变；`tuple / str / int` 不可变 |
| ⭐ shallow copy | 浅拷贝 | `list.copy()` 只复制一层，嵌套对象共享引用 |
| ⭐ deep copy | 深拷贝 | `copy.deepcopy()` 完全独立复制，包括嵌套 |
| ⭐ unpacking | 解包 | `a, b = (1, 2)` / `*args, **kwargs` |
| ⭐ walrus operator | 海象运算符 | `:=` 在表达式内赋值，Python 3.8+ |
| ⭐ f-string | 格式化字符串 | `` f"Hello {name}" `` Python 3.6+ 字符串模板 |
| ⭐ slice | 切片 | `list[1:3]` / `str[::-1]` 反转字符串 |
| ⭐ dict comprehension | 字典推导式 | `{k: v for k, v in items}` |
| ⭐ set | 集合 | `{1, 2, 3}` 无序不重复，`set.intersection()` |
| ⭐ frozenset | 不可变集合 | 可作为字典 key 的不可变集合 |
| ⭐ defaultdict | 默认值字典 | `from collections import defaultdict` |
| ⭐ Counter | 计数器 | `from collections import Counter` 统计频次 |
| ⭐ namedtuple | 具名元组 | `from collections import namedtuple` 轻量数据类 |
| ⭐ heapq | 堆队列 | `import heapq` 实现优先队列 |
| ⭐ functools | 函数工具 | `@functools.lru_cache` 缓存；`functools.reduce` |
| ⭐ itertools | 迭代工具 | `itertools.chain / product / combinations` |
| ⭐ numpy | 数值计算 | `import numpy as np` 矩阵运算，AI/数据科学基础 |
| ⭐ pandas | 数据分析 | `import pandas as pd` DataFrame 数据处理 |
| ⭐ matplotlib | 可视化 | `import matplotlib.pyplot as plt` 绘图 |
| ⭐ requests | HTTP 客户端 | `import requests` 最流行的 HTTP 库 |
| ⭐ FastAPI | 异步 Web 框架 | 基于类型注解的现代 API 框架，自动生成文档 |
| ⭐ Flask | 轻量 Web 框架 | 微框架，适合小型 API 和原型开发 |
| ⭐ Django | 全栈 Web 框架 | `convention over configuration` 的重量级框架 |
| ⭐ SQLAlchemy | ORM 框架 | Python 最流行的数据库 ORM |
| ⭐ Pydantic | 数据验证库 | 基于类型注解的数据校验，FastAPI 核心依赖 |
| ⭐ celery | 异步任务队列 | 分布式任务调度，配合 Redis/RabbitMQ 使用 |
| ⭐ redis-py | Redis 客户端 | `import redis` Python 连接 Redis |
| ⭐ httpx | 现代 HTTP 客户端 | 支持 async 的 requests 替代品 |
| ⭐ typer | CLI 框架 | 基于类型注解快速构建命令行工具 |
| ⭐ rich | 终端美化库 | 彩色输出、进度条、表格，`from rich import print` |
| ⭐ Jupyter | 交互式笔记本 | `jupyter notebook` 数据科学常用开发环境 |
| ⭐ REPL | 交互式解释器 | Read-Eval-Print Loop，`python` 命令进入 |
| ⭐ CPython | 官方 Python 实现 | 用 C 写的参考实现，最常用的 Python 版本 |
| ⭐ PyPy | JIT 加速实现 | 比 CPython 快数倍的 Python 替代实现 |
