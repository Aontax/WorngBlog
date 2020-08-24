var store = [{
        "title": "git初次体验",
        "excerpt":"git 命令速查表 初次提交命令 今天说说怎么通过 git 基本命令把本地项目成功上传到 Gitee 远端仓库（GitHub 类似）。主要是防止遗忘，方便复盘，默认已经配置好公钥私钥。 首先在个人 Gitee 账户创建一个用来存放项目的仓库，然后点击克隆/下载按钮选择地址复制。 在本地项目文件夹下打开Git Bash，初始化本地仓库： git init 发现当前目录下多了一个 .git文件夹，表示成功初始化本地 git 仓库。 现在要用到之前复制的 Gitee 仓库地址：origin 是仓库简称，可以使用其他名称 //关联本地仓库和远端仓库 git remote add origin （刚刚复制的地址/不要写括号） 如果之前创建仓库时选了 README.md 初始化仓库的，需要更新下本地仓库，以免上传项目时产生冲突： //当然，没有选 README.md 的同学也可以敲下，权当练手了 git pull --rebase origin master 因为 Git 的结构，我们先将项目上传到本地暂存区： //添加项目所有发生改变的文件 git add . //Git 强烈建议在提交代码时备注信息...","categories": ["Git"],
        "tags": [],
        "url": "http://localhost:4000/Antax/git/git%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C/",
        "teaser": "http://localhost:4000/Antax/assets/images/BJ1.jpg"
      }]
