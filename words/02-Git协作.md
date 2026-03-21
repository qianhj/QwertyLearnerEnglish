# 02 Git & GitHub & 协作（200）

> 日常使用 Git 版本控制和团队协作时的必备词汇

| 英文单词 / 短语 | 中文释义 | 场景记忆 |
|---|---|---|
| ⭐ add | 暂存文件 | `git add .` 暂存所有改动 |
| amend | 修改最后一次提交 | `git commit --amend` |
| archive | 打包归档 | `git archive` 打包代码 |
| ⭐ assign | 分配（任务/Issue） | `assign issue to @user` |
| ⭐ author | 作者 | `git log --author=xxx` 按作者筛选 |
| ⭐ base branch | 基础分支 | PR 目标分支，通常为 main |
| ⭐ blame | 追溯行作者 | `git blame file.js` 查看每行作者 |
| ⭐ branch | 分支 | `git branch feature/xxx` 创建分支 |
| ⭐ bug | 缺陷；错误 | `fix bug #123` 修复 Issue 123 |
| ⭐ checkout | 切换分支/恢复文件 | `git checkout main` 切换到 main |
| cherry-pick | 摘取特定提交 | `git cherry-pick <hash>` |
| ⭐ clean | 清理未跟踪文件 | `git clean -fd` 删除未跟踪文件 |
| ⭐ clone | 克隆仓库 | `git clone <url>` 克隆远程仓库 |
| ⭐ close | 关闭（Issue/PR） | `Closes #42` 关联 Issue |
| ⭐ collaborate | 协作 | `collaborate on PR` 协作 PR |
| ⭐ commit | 提交 | `git commit -m "message"` |
| ⭐ conflict | 冲突 | `merge conflict` 合并冲突 |
| ⭐ contribute | 贡献 | `contribute to open source` |
| contributor | 贡献者 | `core contributor` 核心贡献者 |
| ⭐ default branch | 默认分支 | 通常是 main 或 master |
| ⭐ delete branch | 删除分支 | `git branch -d feature/xxx` |
| ⭐ deploy | 部署 | `deploy on push to main` |
| ⭐ diff | 差异；对比 | `git diff` 查看改动差异 |
| ⭐ discard | 丢弃改动 | `git restore file.js` 丢弃改动 |
| ⭐ draft | 草稿 | `draft PR` 草稿状态的 PR |
| ⭐ fetch | 拉取（不合并） | `git fetch origin` 拉取远程信息 |
| ⭐ fix | 修复 | `fix: resolve null pointer` |
| ⭐ fork | 派生仓库 | `fork the repository` 叉仓库 |
| ⭐ hash / SHA | 提交哈希 | `git log` 中的 40 位哈希值 |
| ⭐ head | 当前指针 | `HEAD` 指向当前提交 |
| ⭐ history | 历史记录 | `git log --oneline` 单行历史 |
| ⭐ hook | Git 钩子 | `pre-commit hook` 提交前钩子 |
| hotfix | 热修复分支 | `hotfix/critical-bug` |
| ⭐ ignore | 忽略文件 | `.gitignore` 忽略配置 |
| ⭐ issue | 问题；任务 | `open an issue` 提交 Issue |
| ⭐ label | 标签 | `bug` / `enhancement` / `help wanted` |
| ⭐ latest | 最新的 | `latest commit` 最新提交 |
| ⭐ log | 日志 | `git log` 查看提交历史 |
| ⭐ main / master | 主分支 | 项目主分支名 |
| ⭐ merge | 合并 | `git merge feature/xxx` 合并分支 |
| milestone | 里程碑 | 版本计划中的阶段目标 |
| ⭐ origin | 远程默认别名 | `git push origin main` |
| ⭐ pull | 拉取并合并 | `git pull origin main` |
| ⭐ pull request / PR | 拉取请求 | 请求合并代码的流程 |
| ⭐ push | 推送 | `git push origin feature/xxx` |
| ⭐ rebase | 变基 | `git rebase main` 变基到 main |
| ⭐ release | 发布版本 | `create a release v1.0.0` |
| ⭐ remote | 远程 | `git remote -v` 查看远程地址 |
| ⭐ resolve | 解决（冲突） | `resolve merge conflict` |
| ⭐ review | 代码审查 | `code review` / `request review` |
| ⭐ revert | 撤销提交 | `git revert <hash>` 安全撤销 |
| ⭐ squash | 压缩提交 | `squash commits` 合并多个提交 |
| ⭐ stash | 暂存（临时） | `git stash` 临时保存改动 |
| ⭐ status | 工作区状态 | `git status` 查看文件状态 |
| ⭐ switch | 切换分支 | `git switch main` |
| ⭐ tag | 标签；版本标记 | `git tag v1.0.0` 打版本标签 |
| ⭐ track | 跟踪 | `track remote branch` 跟踪远程分支 |
| ⭐ upstream | 上游 | `upstream repository` 原始仓库 |
| ⭐ workflow | 工作流 | `GitHub Actions workflow` |
| working tree | 工作目录 | 未暂存改动所在位置 |
| ⭐ access token | 访问令牌 | GitHub Personal Access Token |
| ⭐ action | 自动化任务 | `GitHub Actions` workflow 中的 job |
| ⭐ apply | 应用补丁 | `git apply patch.diff` 应用差异文件 |
| ⭐ approval | 审批；批准 | `require approval` PR 需要审批 |
| ⭐ bot | 自动化机器人 | `Dependabot` 依赖自动更新机器人 |
| ⭐ check | 状态检查 | `status check` PR 必须通过的检查 |
| ⭐ ci | 持续集成 | `CI passed` 持续集成通过 |
| ⭐ collision | 哈希碰撞 | `hash collision` 极低概率的哈希冲突 |
| ⭐ comment | 评论；注释 | `leave a comment on PR` 评论 PR |
| ⭐ compare | 比较分支 | `compare branches` / `git diff main..feature` |
| ⭐ convention | 约定；规范 | `commit message convention` 提交规范 |
| ⭐ deprecated | 已废弃的 | `deprecated API` 废弃的接口 |
| ⭐ description | 描述 | `PR description` PR 说明 |
| ⭐ directory | 目录 | `git ls-files` 查看跟踪的目录文件 |
| ⭐ drop | 丢弃 | `git stash drop` 删除某条 stash |
| ⭐ edit | 编辑 | `git commit --edit` 编辑提交信息 |
| ⭐ email | 邮箱配置 | `git config user.email` 设置提交邮箱 |
| ⭐ empty commit | 空提交 | `git commit --allow-empty` 触发 CI |
| ⭐ environment | 环境变量 | CI/CD 中的 `$GITHUB_TOKEN` 等 |
| ⭐ exclude | 排除 | `.gitignore` 中排除特定文件 |
| ⭐ existing | 已有的 | `existing branch` 已存在的分支 |
| ⭐ file | 文件 | `track file` / `untrack file` |
| ⭐ flag | 命令行标志 | `git push --force` 中的 `--force` 标志 |
| ⭐ flow | 工作流模型 | `git flow` 分支管理模型 |
| ⭐ force push | 强制推送 | `git push --force-with-lease` 安全强推 |
| ⭐ format | 日志格式 | `git log --format="%h %s"` |
| ⭐ freeze | 冻结版本 | `freeze dependencies` 锁定依赖版本 |
| ⭐ global | 全局配置 | `git config --global` 全局配置 |
| ⭐ include | 包含 | `.gitattributes` 包含规则 |
| ⭐ index | 暂存区 | `git index` = staging area 暂存区 |
| ⭐ initialize | 初始化 | `git init` 初始化本地仓库 |
| ⭐ integrate | 集成 | `integrate changes` 集成新变更 |
| ⭐ link | 关联 | `link PR to issue` 关联 PR 和 Issue |
| ⭐ lock | 锁定 | `package-lock.json` 依赖锁文件 |
| ⭐ message | 提交信息 | `commit message` 提交说明 |
| ⭐ mirror | 镜像仓库 | `mirror repository` 备份仓库 |
| ⭐ modify | 修改 | `modify file` 修改文件后 git add |
| ⭐ move | 移动/重命名 | `git mv old.js new.js` |
| ⭐ notify | 通知 | `@mention notify` @提及通知成员 |
| ⭐ outdated | 过时的 | `outdated dependency` 依赖需要更新 |
| ⭐ owner | 所有者 | `repo owner` 仓库所有者 |
| ⭐ patch | 补丁文件 | `git format-patch` 生成补丁 |
| ⭐ permission | 权限 | `read/write permission` 仓库读写权限 |
| ⭐ pick | 挑选 | `cherry-pick commit` 挑选提交 |
| ⭐ protected branch | 受保护分支 | main 分支通常设为 protected |
| ⭐ recover | 恢复 | `git reflog` + checkout 恢复丢失提交 |
| ⭐ reference / ref | 引用 | `refs/heads/main` 分支引用路径 |
| ⭐ rename | 重命名 | `git mv` / rename branch |
| ⭐ request changes | 要求修改 | PR review 中的 Request Changes |
| ⭐ revision | 版本号；修订 | `git rev-parse HEAD` 获取当前版本 |
| ⭐ rollback | 回滚 | `git revert` / `git reset` 回滚代码 |
| ⭐ scope | 范围 | `feat(scope): message` 提交范围 |
| ⭐ sign | 签名 | `git commit -S` GPG 签名提交 |
| ⭐ skip | 跳过 | `[skip ci]` 跳过 CI 触发 |
| ⭐ source | 来源分支 | `source branch` PR 的来源分支 |
| ⭐ stage | 暂存 | `git add` = stage changes |
| ⭐ submodule | 子模块 | `git submodule update` |
| ⭐ sync | 同步 | `sync fork` 同步上游变更 |
| ⭐ target | 目标分支 | `target branch` PR 合入的分支 |
| ⭐ test | 测试 | `run tests in CI` CI 中自动测试 |
| ⭐ token | 令牌 | `GITHUB_TOKEN` CI 中的权限令牌 |
| ⭐ transfer | 转移 | `transfer ownership` 转移仓库所有权 |
| ⭐ undo | 撤销 | `git reset HEAD~1` 撤销最近提交 |
| ⭐ untrack | 取消追踪 | `git rm --cached file` 停止跟踪文件 |
| ⭐ update | 更新 | `git pull` 更新本地分支 |
| ⭐ validate | 验证 | `validate commit message` 校验提交信息 |
| ⭐ version | 版本 | `semantic versioning` 语义化版本 v1.2.3 |
| ⭐ visibility | 可见性 | `public / private / internal` 仓库可见性 |
| ⭐ watcher | 关注者 | `watch repository` 关注仓库动态 |
| ⭐ backlog | 待办列表 | `product backlog` 产品待办事项 |
| ⭐ breaking change | 破坏性变更 | 需要升级主版本号的不兼容变更 |
| ⭐ build artifact | 构建产物 | CI 产生的可部署文件，如 `.jar` `.zip` |
| ⭐ changelog | 变更日志 | `CHANGELOG.md` 每次发布的变更记录 |
| ⭐ ci pipeline | CI 流水线 | push 后自动触发的构建/测试流程 |
| ⭐ code freeze | 代码冻结 | 发布前禁止合入新功能 |
| ⭐ code owner | 代码负责人 | `CODEOWNERS` 文件指定文件审查人 |
| ⭐ code style | 代码风格 | `.editorconfig` / `prettier` 统一风格 |
| ⭐ commit convention | 提交规范 | `feat:` `fix:` `chore:` 前缀规范 |
| ⭐ conventional commits | 约定式提交 | `feat(scope): desc` 标准化提交格式 |
| ⭐ dependency update | 依赖更新 | `Dependabot` 自动提 PR 更新依赖 |
| ⭐ deploy key | 部署密钥 | 专用于 CI/CD 的 SSH 公钥 |
| ⭐ diverge | 分叉 | 两分支各有对方没有的提交 |
| ⭐ fast-forward | 快进合并 | 无需新 commit 直接移动指针 |
| ⭐ feature flag | 功能开关 | 通过配置控制功能是否启用，不改代码 |
| ⭐ git bisect | 二分查找提交 | `git bisect` 定位引入 bug 的提交 |
| ⭐ git blame | 逐行追责 | `git blame file` 查看每行最后修改者 |
| ⭐ git flow | Git Flow 模型 | main/develop/feature/release/hotfix 分支模型 |
| ⭐ git grep | 代码搜索 | `git grep "keyword"` 在仓库中搜索字符串 |
| ⭐ git reflog | 操作日志 | `git reflog` 找回误删的分支/提交 |
| ⭐ kanban | 看板 | GitHub Projects 看板式任务管理 |
| ⭐ lgtm | 审查通过 | "Looks Good To Me" 常见 PR 评论 |
| ⭐ lock file | 锁文件 | `package-lock.json` 固定依赖版本 |
| ⭐ maintainer | 维护者 | 负责合并 PR 和发版的仓库成员 |
| ⭐ merge strategy | 合并策略 | merge commit / squash / rebase 三种方式 |
| ⭐ monorepo | 单仓库多项目 | 多个包/服务放在同一 Git 仓库 |
| ⭐ nit | 细节改进意见 | `nit: rename variable` PR 中的小建议 |
| ⭐ open source | 开源 | 开放源代码，允许社区贡献 |
| ⭐ outdated | 过时 | `git status` 提示本地落后远程 |
| ⭐ pr template | PR 模板 | `.github/pull_request_template.md` |
| ⭐ pre-commit | 提交前钩子 | `pre-commit` 工具在提交前自动检查 |
| ⭐ pre-release | 预发布 | `v1.0.0-beta.1` 语义化版本预发布标记 |
| ⭐ preview | 预览 | 部署预览环境，可在合并前验证效果 |
| ⭐ release candidate | 发布候选 | `v2.0.0-rc.1` 接近正式发布的版本 |
| ⭐ release notes | 发布说明 | 描述新版本变更的文档 |
| ⭐ roadmap | 路线图 | 产品或项目的未来规划 |
| ⭐ rollout | 分批发布 | 逐步扩大新版本的用户比例 |
| ⭐ scrum | Scrum 敏捷 | 以 sprint 为单位的敏捷开发框架 |
| ⭐ semantic versioning | 语义化版本 | `MAJOR.MINOR.PATCH` 版本号规范 |
| ⭐ sprint | 迭代冲刺 | 固定时长（通常两周）的开发周期 |
| ⭐ staging | 预发布环境 | 与生产环境一致的测试环境 |
| ⭐ trunk-based | 主干开发 | 所有人直接向 main 分支频繁提交 |
| ⭐ version bump | 版本号递增 | `1.0.0 → 1.1.0` 发布前更新版本号 |
| ⭐ wip | 进行中 | `WIP:` / `[WIP]` 标记未完成的 PR |
| ⭐ workspace | 工作区 | monorepo 中的子包，`npm workspaces` |
| ⭐ bisect | 二分定位 bug | `git bisect start/good/bad` |
| ⭐ branch naming | 分支命名 | `feat/` `fix/` `chore/` 前缀规范 |
| ⭐ branch protection rule | 分支保护规则 | 限制直接 push，要求 PR 审查 |
| ⭐ ci badge | CI 徽章 | README 中显示构建状态的小图标 |
| ⭐ code coverage | 代码覆盖率 | CI 中自动计算并报告测试覆盖率 |
| ⭐ commit lint | 提交信息检查 | `commitlint` 校验提交信息格式 |
| ⭐ commit SHA | 提交哈希 | 唯一标识一次提交的 40 位哈希 |
| ⭐ continuous delivery | 持续交付 | CD：代码随时可发布到生产 |
| ⭐ continuous deployment | 持续部署 | 通过 CI 自动部署到生产环境 |
| ⭐ dependency lock | 依赖锁定 | `yarn.lock` / `package-lock.json` |
| ⭐ devops | 开发运维一体化 | 开发与运维协同，CI/CD 核心理念 |
| ⭐ environment variable | 环境变量 | `.env` 文件 / GitHub Secrets |
| ⭐ feature branch | 功能分支 | `feat/login` 独立开发新功能的分支 |
| ⭐ git attributes | Git 属性 | `.gitattributes` 控制行尾/merge 策略 |
| ⭐ git hooks | Git 钩子 | 提交/推送等操作触发的脚本 |
| ⭐ issue template | Issue 模板 | `.github/ISSUE_TEMPLATE/` 引导提 issue |
| ⭐ maintainability | 可维护性 | 代码易于理解和修改的程度 |
| ⭐ pull request review | PR 评审 | 合并前由同事审查代码的流程 |
| ⭐ release branch | 发布分支 | 从 develop 切出，专门用于发版准备 |
| ⭐ squash merge | 压缩合并 | 将多个 commit 压缩为一个再合入 |
| ⭐ test suite | 测试套件 | CI 中运行的全套自动化测试 |
| ⭐ three-way merge | 三路合并 | Git 合并时用两个分支和公共祖先对比 |
| ⭐ triage | 问题分类 | 对 Issue 按严重程度/类型打标签排序 |
