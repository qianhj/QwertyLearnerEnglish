# 26 Java 语言

> Java 及 Spring 生态专属词汇，JVM、企业级开发核心概念

| 英文单词 / 短语 | 中文释义 | 场景记忆 |
|---|---|---|
| ⭐ Java | Java 语言 | 面向对象的跨平台编程语言 |
| ⭐ JVM | Java 虚拟机 | Java Virtual Machine，运行字节码 |
| ⭐ JDK | Java 开发工具包 | Java Development Kit |
| ⭐ JRE | Java 运行时环境 | Java Runtime Environment |
| ⭐ bytecode | 字节码 | JVM 执行的中间代码 `.class` |
| ⭐ class | 类 | 面向对象的基本单元 |
| ⭐ object | 对象 | 类的实例 |
| ⭐ method | 方法 | 类中的函数 |
| ⭐ field | 字段 | 类的成员变量 |
| ⭐ constructor | 构造器 | 创建对象的特殊方法 |
| ⭐ package | 包 | 类的命名空间组织 |
| ⭐ import | 导入 | 引入其他包的类 |
| ⭐ public | 公开的 | 所有类可访问 |
| ⭐ private | 私有的 | 仅类内部可访问 |
| ⭐ protected | 受保护的 | 同包或子类可访问 |
| ⭐ default | 默认的 | 包私有，无修饰符 |
| ⭐ static | 静态的 | 类级别，非实例 |
| ⭐ final | 最终的 | 不可变、不可继承、不可重写 |
| ⭐ abstract | 抽象的 | 抽象类或方法 |
| ⭐ interface | 接口 | 纯抽象类型 |
| ⭐ implements | 实现 | 类实现接口 |
| ⭐ extends | 继承 | 类继承类 |
| ⭐ this | 当前对象 | 引用当前实例 |
| ⭐ super | 父类 | 引用父类 |
| ⭐ new | 新建 | 创建对象 |
| ⭐ instanceof | 实例判断 | 检查对象类型 |
| ⭐ override | 重写 | 子类重写父类方法 `@Override` |
| ⭐ overload | 重载 | 同名不同参数的方法 |
| ⭐ polymorphism | 多态 | 同一接口不同实现 |
| ⭐ encapsulation | 封装 | 隐藏内部实现 |
| ⭐ inheritance | 继承 | 子类获得父类特性 |
| ⭐ Object | Object 类 | 所有类的根类 |
| ⭐ String | 字符串 | 不可变字符序列 |
| ⭐ StringBuilder | 字符串构建器 | 可变字符串 |
| ⭐ ArrayList | 动态数组 | List 接口实现 |
| ⭐ HashMap | 哈希映射 | Map 接口实现 |
| ⭐ HashSet | 哈希集合 | Set 接口实现 |
| ⭐ LinkedList | 链表 | 双向链表实现 |
| ⭐ Stream | 流 | Java 8 函数式流处理 |
| ⭐ Lambda | Lambda 表达式 | `() -> {}` 匿名函数 |
| ⭐ Optional | 可选 | 避免 null 的容器 |
| ⭐ generics | 泛型 | `<T>` 类型参数 |
| ⭐ type parameter | 类型参数 | 泛型的 T、E、K、V |
| ⭐ wildcard | 通配符 | `?` 未知类型 |
| ⭐ bounded | 有界 | `<? extends T>` 上界 |
| ⭐ exception | 异常 | 程序错误处理 |
| ⭐ try | 尝试 | 异常捕获块 |
| ⭐ catch | 捕获 | 捕获特定异常 |
| ⭐ finally | 最终 | 无论是否异常都执行 |
| ⭐ throw | 抛出 | 抛出异常 |
| ⭐ throws | 声明抛出 | 方法声明可能抛出的异常 |
| ⭐ checked exception | 受检异常 | 必须处理的异常 |
| ⭐ unchecked exception | 非受检异常 | RuntimeException 子类 |
| ⭐ RuntimeException | 运行时异常 | 非受检异常基类 |
| ⭐ NullPointerException | 空指针异常 | NPE，最常见错误 |
| ⭐ thread | 线程 | 程序执行流 |
| ⭐ Runnable | 可运行 | 线程任务接口 |
| ⭐ Callable | 可调用的 | 带返回值的线程任务 |
| ⭐ Future | 未来 | 异步计算结果 |
| ⭐ CompletableFuture | 可完成的 Future | 强大的异步编程工具 |
| ⭐ synchronized | 同步的 | 线程安全修饰符 |
| ⭐ volatile | 易变的 | 保证可见性 |
| ⭐ Lock | 锁 | 显式锁接口 |
| ⭐ ReentrantLock | 可重入锁 | Lock 的实现 |
| ⭐ Semaphore | 信号量 | 控制访问数量的锁 |
| ⭐ CountDownLatch | 倒计时门闩 | 等待多个线程完成 |
| ⭐ CyclicBarrier | 循环屏障 | 线程互相等待 |
| ⭐ Executor | 执行器 | 线程池框架 |
| ⭐ ThreadPool | 线程池 | 管理线程的池 |
| ⭐ garbage collection | 垃圾回收 | 自动内存管理 |
| ⭐ GC | 垃圾收集器 | Garbage Collector |
| ⭐ heap | 堆 | 对象存储区域 |
| ⭐ stack | 栈 | 方法调用和局部变量 |
| ⭐ class loader | 类加载器 | 加载类到 JVM |
| ⭐ reflection | 反射 | 运行时检查/修改代码 |
| ⭐ annotation | 注解 | `@Override` 等元数据 |
| ⭐ Maven | Maven | 项目管理和构建工具 |
| ⭐ Gradle | Gradle | 现代构建工具 |
| ⭐ pom.xml | POM 文件 | Maven 项目配置 |
| ⭐ build.gradle | Gradle 构建脚本 | Gradle 配置 |
| ⭐ dependency | 依赖 | 项目引用的库 |
| ⭐ repository | 仓库 | 依赖存储位置 |
| ⭐ JAR | JAR 包 | Java Archive，类库包 |
| ⭐ WAR | WAR 包 | Web Application Archive |
| ⭐ Spring | Spring 框架 | Java 最流行的应用框架 |
| ⭐ Spring Boot | Spring Boot | 简化 Spring 开发的框架 |
| ⭐ Spring MVC | Spring MVC | Web MVC 框架 |
| ⭐ Spring Data | Spring Data | 数据访问抽象 |
| ⭐ Spring Security | Spring Security | 安全框架 |
| ⭐ IoC | 控制反转 | Inversion of Control |
| ⭐ DI | 依赖注入 | Dependency Injection |
| ⭐ Bean | Bean | Spring 管理的对象 |
| ⭐ ApplicationContext | 应用上下文 | Spring 容器 |
| ⭐ Component | 组件 | `@Component` 标记的 Bean |
| ⭐ Service | 服务 | `@Service` 业务逻辑层 |
| ⭐ Repository | 仓库 | `@Repository` 数据访问层 |
| ⭐ Controller | 控制器 | `@Controller` Web 层 |
| ⭐ RestController | REST 控制器 | `@RestController` API 层 |
| ⭐ Autowired | 自动装配 | `@Autowired` 自动注入 |
| ⭐ Configuration | 配置 | `@Configuration` 配置类 |
| ⭐ ComponentScan | 组件扫描 | 自动发现 Bean |
| ⭐ Transactional | 事务的 | `@Transactional` 事务管理 |
| ⭐ RequestMapping | 请求映射 | `@RequestMapping` 路径映射 |
| ⭐ GetMapping | GET 映射 | `@GetMapping` GET 请求 |
| ⭐ PostMapping | POST 映射 | `@PostMapping` POST 请求 |
| ⭐ PathVariable | 路径变量 | `@PathVariable` URL 参数 |
| ⭐ RequestBody | 请求体 | `@RequestBody` JSON 参数 |
| ⭐ ResponseBody | 响应体 | `@ResponseBody` JSON 响应 |
| ⭐ JPA | Java 持久化 API | Java Persistence API |
| ⭐ Hibernate | Hibernate | 流行的 JPA 实现 |
| ⭐ MyBatis | MyBatis | SQL 映射框架 |
| ⭐ JDBC | Java 数据库连接 | Java Database Connectivity |
| ⭐ DataSource | 数据源 | 数据库连接池 |
| ⭐ Connection Pool | 连接池 | 复用数据库连接 |
| ⭐ Hibernate | Hibernate | ORM 框架 |
| ⭐ Lombok | Lombok | 代码生成工具 |
| ⭐ Slf4j | 日志门面 | Simple Logging Facade |
| ⭐ Logback | Logback | 日志实现 |
| ⭐ JUnit | JUnit | 测试框架 |
| ⭐ Mockito | Mockito | Mock 测试框架 |
