# 打包UI库和🔧库
``yarn build``
# 执行子包脚本
``lerna run [script]``

# 安装packages间的引用
``lerna bootstrap``

# 删除所有子包依赖
``lerna clean``

# 安装依赖到根目录
``yarn add [dep] -W -D``

# 安装到子包目录
``yarn workspace <module> add [dep]``
``lerna add --scope=<module> [dep]``