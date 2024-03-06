---
layout: post
title: 使用 Github Pages + jekyll 模板 搭建的个人博客
subtitle: 我的第一篇 blog~
categories: 技术随笔
tags: [Github Pages, jekyll]
---
之前一直想要比较 Geek 的博客，很早就了解到了 Github Pages。因为各种原因从大二鸽到了大四。。。。
总之这是这个网站上的第一篇博文~

## Github Pages？
是一个静态网站，优点是可以通过编写 markdown 文件展示博文，自己定制页面的布局和风格。简洁又好看。

## 1. Github 上新建 repository
新建一个 repository，起名为 【xxx.github.io】  （xxx为任意字符串，eg."tem.github.io"）
![新建示意图](https://picss.sunbangyan.cn/2023/12/05/94c65151debabd6c6bb27f8bf9e2de52.jpeg)
现在就可以从浏览器输入 eg.`https://starlightlmy/tem.github.io` 来访问你的博客~ （注：默认访问的是 `https://starlightlmy/tem.github.io/index.html`页面）

## 2. 下载博客模板
http://jekyllthemes.org/
从这个网站可以预览博客模板的 demo 并进行下载。

## 3. 配置 & 安装 Ruby Gem jekyll 库
下载模板后，需要进行一些配置才能够使用。
### 克隆到本地
我在 VSCode 的 Terminal 里输入 `git clone https://github.com/starlightlmy/starlightlmy.github.io.git` ，使用 git 进行这个博客的版本管理（本地修改，经检查无误，发布到网站）。
如果你没有 git，首先需要下载。
clone 地址：
![clone 地址](https://picdl.sunbangyan.cn/2023/12/05/39fb4e4ccd931564c28e9c09f3c8cac4.jpeg)
如果成功，你可以在本地找到博客的 `tem.github.io` 仓库，打开后能看到文件树。

### 安装库
对照着 README.md 文件的 installation 部分，修改文件内容和执行命令。
执行命令 `bundle` 时会出现 “无法将“bundle”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次” 字样，这时表示需要安装新的库了。
1. 首先安装 Ruby（[Ruby 的下载地址](https://rubyinstaller.org/downloads/)，选择推荐的版本）
2. 命令行输入 `gem install bundle` ,  `bundle install`
3. 命令行输入 `gem install jekyll`
4. 命令行输入 `gem install github-pages`
安装完成，输入 `jekyll s` ，可以在 `127.0.0.1:4000` 生成一个本地的预览效果，这时就可以看到我们博客的界面了~

如果出现 `You have already activated concurrent-ruby 1.2.3, but your Gemfile requires concurrent-ruby 1.2.2. Prepending ``bundle exec`` to your command may solve this. (Gem::LoadError)` 这个报错，预览本地的效果需要使用 `bundle exec jekyll s` 这条命令。

#### 可能遇到的问题
cannot load such file -- webrick (LoadError)
根据[官网](https://jekyllrb.com/docs/)，输入 `bundle add webrick` 即可解决

## 4. 编辑博文并发布
输入 `jekyll s`，进入预览界面。
随时编辑之后 Ctrl S 保存，修改满意之后用 git 更新到网站。
### git 的使用
* `git add .`  将本地修改暂存
* `git commit -m "新改的地方，文字说明"`
* `git push origin [branch_name]` push 到网页里，branch_name 我的是 main

做完这些才能在网站上看到内容的更新