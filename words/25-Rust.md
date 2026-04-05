# 25 Rust 语言

> Rust 专属词汇，所有权、生命周期、并发安全等核心概念

| 英文单词 / 短语 | 中文释义 | 场景记忆 |
|---|---|---|
| ⭐ Rust | Rust 语言 | 注重安全和性能的系统编程语言 |
| ⭐ ownership | 所有权 | 每个值有且只有一个所有者 |
| ⭐ borrowing | 借用 | 临时使用值而不获取所有权 |
| ⭐ reference | 引用 | `&T` 借用值，`&mut T` 可变借用 |
| ⭐ lifetime | 生命周期 | `'a` 确保引用有效性的编译时检查 |
| ⭐ move | 移动 | 所有权转移，原变量失效 |
| ⭐ copy | 复制 | 位复制，原变量仍可用 |
| ⭐ clone | 克隆 | 深度复制，显式调用 `.clone()` |
| ⭐ drop | 释放 | 值离开作用域时自动调用 |
| ⭐ trait | 特质 | 定义共享行为的接口 |
| ⭐ impl | 实现 | 为类型实现方法或 trait |
| ⭐ struct | 结构体 | 自定义复合数据类型 |
| ⭐ enum | 枚举 | 变体类型的枚举 |
| ⭐ match | 匹配 | 模式匹配表达式 |
| ⭐ pattern | 模式 | 匹配值的结构 |
| ⭐ Option | 可选值 | `Some(T)` 或 `None`，避免 null |
| ⭐ Result | 结果 | `Ok(T)` 或 `Err(E)`，错误处理 |
| ⭐ Some | 有值 | Option 的 Some 变体 |
| ⭐ None | 无值 | Option 的 None 变体 |
| ⭐ Ok | 成功 | Result 的成功变体 |
| ⭐ Err | 错误 | Result 的错误变体 |
| ⭐ unwrap | 解包 | 获取值，失败则 panic |
| ⭐ expect | 期望 | 带错误消息的 unwrap |
| ⭐ unwrap_or | 解包或默认值 | 失败时返回默认值 |
| ⭐ unwrap_or_else | 解包或计算 | 失败时执行闭包 |
| ⭐ ? operator | 问号运算符 | 传播错误的简写 |
| ⭐ cargo | Cargo | Rust 的构建系统和包管理器 |
| ⭐ crate | 包/箱 | Rust 的库或二进制包 |
| ⭐ module | 模块 | 代码组织单元，`mod` 声明 |
| ⭐ use | 使用 | 引入模块或项 |
| ⭐ pub | 公开 | public，公开访问 |
| ⭐ fn | 函数 | function 关键字 |
| ⭐ let | 绑定 | 变量绑定 |
| ⭐ mut | 可变 | mutable，可变绑定 |
| ⭐ const | 常量 | 编译时常量 |
| ⭐ static | 静态 | 静态生命周期或变量 |
| ⭐ type | 类型 | 类型别名 |
| ⭐ where | 约束 | trait bound 的 where 子句 |
| ⭐ generic | 泛型 | `<T>` 类型参数 |
| ⭐ turbofish | 涡轮鱼 | `::<>` 显式指定泛型 |
| ⭐ iterator | 迭代器 | 遍历集合的 trait |
| ⭐ IntoIterator | 可迭代 | 转为迭代器的 trait |
| ⭐ map | 映射 | 迭代器方法，转换元素 |
| ⭐ filter | 过滤 | 迭代器方法，筛选元素 |
| ⭐ collect | 收集 | 迭代器方法，转为集合 |
| ⭐ fold | 折叠 | 迭代器归约操作 |
| ⭐ closure | 闭包 | `\|x\| x + 1` 匿名函数 |
| ⭐ Fn | 闭包 trait | 不可变借用捕获 |
| ⭐ FnMut | 可变闭包 trait | 可变借用捕获 |
| ⭐ FnOnce | 单次闭包 trait | 移动捕获 |
| ⭐ Box | 堆分配 | 堆上分配的智能指针 |
| ⭐ Rc | 引用计数 | 单线程共享所有权 |
| ⭐ Arc | 原子引用计数 | 多线程共享所有权 |
| ⭐ RefCell | 内部可变性 | 运行时借用检查 |
| ⭐ Mutex | 互斥锁 | 线程安全互斥访问 |
| ⭐ RwLock | 读写锁 | 读多写少的锁 |
| ⭐ Cell | 单元 | 单线程内部可变性 |
| ⭐ unsafe | 不安全 | 绕过安全检查的代码块 |
| ⭐ raw pointer | 裸指针 | `*const T` / `*mut T` |
| ⭐ dangling pointer | 悬空指针 | 指向已释放内存的指针 |
| ⭐ double free | 双重释放 | 内存被释放两次的错误 |
| ⭐ use after free | 释放后使用 | 使用已释放内存的错误 |
| ⭐ data race | 数据竞争 | 并发读写同一内存 |
| ⭐ race condition | 竞态条件 | 执行顺序依赖的错误 |
| ⭐ deadlock | 死锁 | 互相等待资源 |
| ⭐ Send | Send trait | 可安全发送到其他线程 |
| ⭐ Sync | Sync trait | 可安全多线程共享引用 |
| ⭐ thread | 线程 | 操作系统线程 |
| ⭐ spawn | 生成 | 创建新线程 |
| ⭐ join | 等待 | 等待线程完成 |
| ⭐ channel | 通道 | 线程间通信 |
| ⭐ mpsc | 多生产者单消费者 | multiple producer single consumer |
| ⭐ sender | 发送者 | 通道发送端 |
| ⭐ receiver | 接收者 | 通道接收端 |
| ⭐ await | 等待 | async 中等待 Future |
| ⭐ async | 异步 | 异步函数或块 |
| ⭐ Future | 未来 | 异步计算的结果 |
| ⭐ Pin | 固定 | 内存位置固定的类型 |
| ⭐ Unpin | 可移动 | 默认可移动的类型 |
| ⭐ Stream | 流 | 异步迭代器 |
| ⭐ macro | 宏 | 元编程，代码生成代码 |
| ⭐ macro_rules! | 声明宏 | 模式匹配宏 |
| ⭐ procedural macro | 过程宏 | 自定义派生宏 |
| ⭐ derive | 派生 | `#[derive(Debug)]` 自动生成 trait |
| ⭐ attribute | 属性 | `#[...]` 元数据注解 |
| ⭐ cfg | 配置 | 条件编译 |
| ⭐ feature | 特性 | Cargo 可选依赖或功能 |
| ⭐ workspace | 工作区 | 多个 crate 的管理 |
| ⭐ edition | 版次 | Rust 语言版本（2015/2018/2021/2024）|
| ⭐ rustfmt | 格式化工具 | Rust 代码格式化 |
| ⭐ clippy | 代码检查 | Rust 代码检查工具 |
| ⭐ rustdoc | 文档工具 | 生成文档 |
| ⭐ doctest | 文档测试 | 文档中的代码示例测试 |
| ⭐ bench | 基准测试 | 性能测试 |
| ⭐ criterion | Criterion | 流行的基准测试库 |
| ⭐ tokio | Tokio | 异步运行时 |
| ⭐ axum | Axum | Web 框架 |
| ⭐ actix | Actix | Actor 框架和 Web 框架 |
| ⭐ rocket | Rocket | Web 框架 |
| ⭐ diesel | Diesel | ORM |
| ⭐ sqlx | Sqlx | 异步 SQL |
| ⭐ serde | Serde | 序列化/反序列化 |
| ⭐ rayon | Rayon | 数据并行 |
| ⭐ parking_lot | ParkingLot | 高性能锁 |
