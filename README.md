# 写这个项目的的起因
最近在公司一直在做小程序的项目，在项目中就有一个使用组件构建小程序的功能，就类似以前的建站工具，这个功能是用比较传统的方式写的，使用JQ和JQ-UI的拖拽功能，相信大家也很熟悉这种组合方式，由于最近一直在学习vue，并且vue是数据驱动，就想用vue来写一下这个功能。刚开始的准备写的时候，想在网上找一个类似的demo研究研究，找了一圈发现，基本上什么也找不到太多开源，之前好不容易找到一篇[类似的文章](https://juejin.im/post/5a711724518825733201ebb1)，作者也要做类似的功能，但是没有把代码开源出来，最后只能自己东平西凑的找资料，完成了项目的第一个测试版。
# 项目准备
#### 1、vue-cli
#### 2、vuedraggable
#### 3、sortablejs
#### 4、vuex
#### 5、element-ui
> **vue-cli**是vue官方推荐的脚手架还很适合有vue基础的人使用。
在这个项目中由于用到了拖拽元素就为了方便就使用了**vuedraggable**，**vuedraggable**是基于**sortablejs**的封装所以也要引入。由于组件中会存在大量的数据所以为了数据的统一管理，这里就使用了**vuex**。**element-ui**这个我就不解释了，为了好看点就引入。

# 安装过程
#### 1、安装vue-cli并初始化一个vue项目
 ```
npm install --global vue-cli
vue init webpack vuetest
 ```
#### 2、安装项目所需要的包
 ```
npm install vuedraggable
npm install sortablejs
npm install --save vuex
npm install --save axios
npm install element-ui
 ```
 #### 3、运行项目
```
npm run dev
```
# 主要代码
> 完成上面这些操作就可以正式开始编写代码了

### 1、main.js
> 在main.js文件中基本上是引入了项目所需要的模块

![](https://user-gold-cdn.xitu.io/2018/3/22/1624e5fc2f4690b8?w=817&h=559&f=png&s=73907)
### 2、dragapi.js
> dragapi.js左侧菜单栏的数据配置

![](https://user-gold-cdn.xitu.io/2018/3/23/1624e7363e3be7e5?w=804&h=900&f=png&s=61979)
### 3、componentsData.js
> 每个组件初始化的数据配置

![](https://user-gold-cdn.xitu.io/2018/3/23/1624e753691402db?w=812&h=780&f=png&s=57703)
### 4、vuex.js
> 对数据的集中管理，每当组件的某个数据变化的时候都要同步到vuex

![](https://user-gold-cdn.xitu.io/2018/3/23/1624e891a2a12899?w=806&h=867&f=png&s=96203)
### 5、App.vue
> 在App.vue主要有三个自定义组件，draggable的拖拽组件，Sort元素排序组件，BaseEdit元素样式编辑组件

![](https://user-gold-cdn.xitu.io/2018/3/22/1624e65b4e1dbd2d?w=783&h=938&f=png&s=121545)
> draggable是vuedraggable的组件我就不多说了，下面我们来看一下Sort.vue文件是怎么样的

### 6、Sort.vue
> 这个文件其实是挺好理解的就是显示组件视图，这里我们可以看到我们引入了Btn.vue、TextCp.vue这个两个组件，当拖拽组件到Sort的时候回显相应的组件视图。在Sort.vue也要引入vuex因为我们需要更新视图只要更新数据就可以了，这也是数据驱动的好处，不用再频繁的操作DOM。

![](https://user-gold-cdn.xitu.io/2018/3/22/1624e6ab9c7edb71?w=808&h=554&f=png&s=75263)

### 7、BaseEdit.vue
> 这个就是编辑器组件，可以回显并编辑组件的数据。每个组件都会有一个自己单独的编辑器组件，本来想把编辑组件放到放到组件本身去会更好，可能会在下次更新github会封装在一起。

![](https://user-gold-cdn.xitu.io/2018/3/23/1624e7ee3384e53e?w=958&h=705&f=png&s=105984)
> 接下来我们看看每个组件具体是怎么写的

### 8、TextCp.vue

![](https://user-gold-cdn.xitu.io/2018/3/23/1624e8c3bd89430e?w=817&h=667&f=png&s=64201)
### 9、TextCpEdit.vue

![](https://user-gold-cdn.xitu.io/2018/3/23/1624e8cab91bf76a?w=931&h=928&f=png&s=125874)

### 10、DeleteCp.vue
> 这是对组件进行删除操作的删除组件

![](https://user-gold-cdn.xitu.io/2018/3/23/1624e8f5dd5ccb7d?w=973&h=532&f=png&s=75392)
## 总结

#### 说一下编写组件的基本流程
> 1、dragapi.js添加一项组件
>
> 2、componentsData.js 添加组件创建时需要初始化的数据
>
> 3、写xxx.vue组件（在Sort视图中显示）
>
> 4、写xxxEdit.vue组件（组件的特有编辑器）

> 看一下最终的效果

![](https://user-gold-cdn.xitu.io/2018/3/23/1624eabd6e481981?w=1226&h=807&f=gif&s=1908462)

> 由于这是本人第一次写技术贴，有很多不足的地方，请大家谅解。如果有什么地方写得不明白可以到github下载源码研究一下，或者在下面评论或者提issues。

> 最后把源码附上 [源码地址](https://github.com/dykily/dragWidget)

> https://github.com/dykily/dragWidget

