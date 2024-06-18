# git

#### git常见操作命令

1. 日常操作
git init 初始化仓库 可以先初始化后add之后提交，需要git remote add origin 仓库地址，之后push到远程仓库。
git add . 提交全部修改文件到缓存区
git add <具体摸个文件全名> 提交某些文件到缓存区
git diff 查看当前代码add后，会add哪些内容
git diff --staged查看现在commit提交后，会提交哪些内容
git status 查看当前分支状态
git pull <远程仓库名> <远程分支名> 拉取远程仓库的分支与本地某个分支合并
git pull <远程仓库名> <远程分支名>:<远程分支名> 拉取远程仓库的某个分支与本地某个分支合并
git commit -m "<注释>" 提交代码到本地仓库，并写注释
git commit -v 提交时显示所有diff信息
git commit --amend [file1] [file2] 重做上一次commit并包含指定的新文件
提交格式：
feat:新特性，添加功能
fix:修改bug
refactor:代码重构
docs:文档修改
style:代码格式修改
test:测试用例修改
chore:其他修改如构建流程依赖管理
2. 分支命令
git branch 查看本地所有分支
git branch -r 查看远程所有分支
git branch -a 查看远程与本地所有分支
git merge <分支名> 合并分支
git merge --about 合并分支出现冲突时，取消合并
git branch <新分支名> 基于当前分支新建分支
git checkout --orphan <新分支名> 新建一个空分支会保留之前分支的文件
git branch -D <分支名> 删除本地某一个分支
git push <远程库名>: <分支名> 删除远程某一个分支
git branch <新分支名> <提交id> 从提交历史恢复某个删除掉的分支
git branch -m <原分支名> <新分支名> 分支更名
git checkout <分支名> 切换到本地某一个分支
git checkout <远程库名>/<分支名> 切换到线上某一个分支
git checkout -b <新分支名> 把基于当前分支新建分支，并切换到这个分支
3. 远程同步
git fetch [remote] 下载远程仓库的所有变动
git remote -v 显示所有远程仓库
git pull [remote] [branch] 拉取远程仓库的分支与本地当前分支合并
git fetch 获取线上最新版本信息记录，不合并
git push [remote] [branch] 上传本地指定分支到远程仓库
git push [remote] --force 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --all 推送所有分支到远程仓库
4. 撤销
git checkout [file] 恢复暂存区的指定文件到工作区
git checkout [commit] [file] 恢复某个commit的指定文件到暂存区和工作区
git checkout . 恢复暂存区的所有文件到工作区
5. git reset [commit] 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
6. git reset --hard 重置暂存区与工作区，与上一次commit保持一致
7. git reset [file] 重置暂存区指定文件，与上一次commit保持一致，但工作区不变
8. git revert [commit] 后者的所有变化会被前者抵消，并应用到当前分支
9. 存储
git stash <名字便于查找> 暂时将未提交的变化移除
git stash pop 取出最后存储的工作状态，会删除存储
git stash list 查看所有存储工作
git stash apply <存储的名称> 取出存储对应的工作状态进行恢复，不会删除存储
git stash clear 清空所有存储
git stash drop <存储的名称> 删除对应的某个存储
10. 源操作
git remote add origin {远程仓库地址} 添加链接的远程仓库
git remote -v 查看链接的仓库

#### git merge 与 rebase区别
merge合并会新增一个merge commit 然后将两个分支历史联系起来，其实是一种非破坏操作，对现有分支不会有任何更改，
但是历史记录会相对复杂。
rebase会将整个分支移动到另外一个分支上，有效的整个了所有分支的提交主要是历史记录清晰，
是在原有的提交基础上将差异内容反应出去，消除了所需的不必要记录。
