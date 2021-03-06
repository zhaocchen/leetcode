### leecode

类别(算法,数据库,shell)
难度(Easy简单, Medium中等, Hard困难)

代码快速访问 https://github.com/daaasheng/leetcode/blob/master/level1/leet7.js

|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|1|两数之和|py, js, ts|Easy|lastIndexOf|
|9|回文数|js, ts|Easy|整数反转<br />不将整数转为字符串来判断|
|118|杨辉三角|js|Easy|嵌套循环|
|119|杨辉三角 II|py, js, ts|Easy|迭代|
|628|三个数的最大乘积|js|Easy|*|
|771|宝石与石头|js, ts|Easy|indexOf、RegExp|
|836|矩形重叠|js|Easy|逆向思维|
|1266|访问所有点的最小时间|js|Easy|Math.abs(num)|
|1281|整数的各位积和之差|js|Easy|reduce|
|1295|统计位数为偶数的数字|js|Easy|数字转字符串 num+''|
|1313|解压缩编码列表|js|Easy|new Array(len).fill(num)|
|1342|将数字变成 0 的操作次数|js|Easy|while|
|1389|按既定顺序创建目标数组|js|Easy|[].splice(start, deleteCount, n1, n2,..)|
|1431|拥有最多糖果的孩子|js|Easy|Math.max(num1, num2, ..)|
|1450|在既定时间做作业的学生人数|js|Easy|for|
|1470|重新排列数组|js|Easy|[].push(e1, e2)|
|1480|一维数组的动态和|js|Easy|reduce|
|1486|数组异或操作|js|Easy|Array.from({length: len}, (v, i) => i)|
|1512|好数对的数目|js|Easy|for|
|1572|矩阵对角线元素的和|js|Easy|+=|
|1013|将数组分成和相等的三部分|js|Easy|for遍历数组|
|507|完美数|py2|Easy|欧几里得-欧拉定理|
|54|旋转矩阵|py2\题解|Medium|操作数组|
|56|合并区间|py2|Medium|排序+迭代|
|57|插入区间|py2|Hard|排序+迭代|
|+401|二进制手表|py2|Easy|--未完成--|
|70|矩阵置零|py2|Medium|遍历|
|1094（142周赛）| 拼车 |py2|Medium|乘车问题|
|78| 子集 |py2|Medium|组合|
|551| 学生出勤记录I | py2 | Easy | 内置函数 |
|976| 三角形的最大周长 | py2 | Easy | -- |
|58| 最后一个单词的长度 | js | a | Array.split(reg) |
|151| 翻转字符串里的单词 | js | Medium | Array.reverse |
|819| 最常见的单词 | js | Easy | Map |
|349| 两个数组的交集 | js | Easy | set |
|299| 猜数字游戏 | js | Easy | 遍历字符串和数组 |
|165（经典）| 比较版本号<br />前端通用的版本比较 | js | Medium | -- |
|1859| 将句子排序 | js | Easy | String.prototype.slice() |
|1860| 增长的内存泄露 | js | Medium | - |

### 位运算

a ^ b ^ a = a

| #    | 题目             | 语言 | 难度 | 注释            |
| ---- | ---------------- | ---- | ---- | --------------- |
| 1720 | 解码异或后的数组 | js   | Easy | 异或运行（XOR） |



### 复杂度分析（10）

## 算法

### 编程技巧：递归（10）

| #    | 题目 | 语言 | 难度 | 注释 |
| :--- | :--: | :--: | :--: | :--: |
|      |      |      |      |      |

### 常见五大算法（10）

#### 贪心

| #                       | 题目                 | 语言 | 难度   | 注释                      |
| ----------------------- | -------------------- | ---- | ------ | ------------------------- |
| 402                     | 移掉K位数字          | js   | Medium | 贪心 + 单调栈             |
| 122（区别121, n+1限制） | 买卖股票的最佳时机II | js   | Easy   | 贪心                      |
| 455                     | 分发饼干             | js   | Easy   | Easy                      |
| 860                     | 柠檬水找零           | js   | Easy   | Easy                      |
| 剪枝Offer14-I           | 剪绳子               | js   | Medium | 贪心（尽可能分为长度为3） |
| 剪枝Offer14-II          | 剪绳子II             | js   | Medium | 贪心（尽可能分为长度为3） |




#### 分治 Divide and Conquer

| #           | 题目                       | 语言   | 难度 | 注释      |
| ----------- | -------------------------- | ------ | ---- | --------- |
| 4           | 寻找两个有序数组的中位数   | py, js | Hard | 分治-二分 |
| 面试题08.03 | 魔术索引 (注意， 却别二分) | js     | Easy | 分治      |



#### 回溯法

| #                       | 题目                         | 语言 | 难度   | 注释     |
| ----------------------- | ---------------------------- | ---- | ------ | -------- |
| 17                      | 电话号码的字母组合           | js   | Medium | dfs      |
| 79                      | 单词搜索                     | js   | Medium | dfs+剪枝 |
| 剑指Offer12（同79）     | 矩阵中的路径                 | js   | Medium | dfs+剪枝 |
| 1863（5759weekly241-A） | 找出所有子集的异或总和再求和 | js   | Easy   | 回溯法   |

#### 动态规划 

DynamicProgramming

核心思想：

优势：

https://www.geeksforgeeks.org/top-20-dynamic-programming-interview-questions/




| #                      |           题目           |  语言  |  难度  |                             注释                             |
| :--------------------- | :----------------------: | :----: | :----: | :----------------------------------------------------------: |
| 509                    |     斐波那契数(数列)     | py, js |  Easy  |          dp[i] = i < 2 ? i : dp[i - 1] + dp[i - 2]           |
| 1137（147周赛）        |    第 N 个泰波那契数     | py, js |  Easy  |          dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]           |
| 70（经典）             |          爬楼梯          | py, js |  Easy  |                  dp[i] = dp[i-1] + dp[i -2]                  |
| 面试题08.01            |         三步问题         |   js   |  Easy  |               [a, b, c] = [b, c, (a + b + c)]                |
| 剑指Offer46            |     把数字译成字符串     |   js   | Medium |                 dp[i] = dp[i-1] {+dp[i -2]}                  |
| 53（经典）             |       最大子序列和       | py, js |  Easy  |          dp[i] = Math.max(dp[i-1]+nums[i], nums[i])          |
| 剑指Offer42（同53）    |    连续子数组的最大和    |   js   |  Easy  |                              -                               |
| 面试16.17              |         连续数列         |   js   |  Easy  |          dp[i] = Math.max(dp[i-1]+nums[i], nums[i])          |
| 121                    |    买卖股票的最佳时机    |   js   |  Easy  |       dp[i] = Math.max(dp[i-1], prices[i] - minPrice)        |
| 剑指Offer63（121）     |      股票的最大利润      |   js   | Medium |                              -                               |
| 746                    |    使用最小花费爬楼梯    |  py2   |  Easy  |                           动态规划                           |
| 198                    |         打家劫舍         |  py2   |  Easy  |          dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])          |
| 740                    | 删除与获得点数(打家劫舍) |  py2   | Medium |                           动态规划                           |
| 152                    |      乘积最大子序列      | py, js | Medium | Dp[i] = Math.max(dp[i-1]*nums[i], num[i])<br />由于负负得正需要一个最小子序列辅助 |
| 322（经典）            |         零钱兑换         | py, js | Medium |           dp[i] = Math.min(dp[i], dp[i-coin] + 1)            |
| 343                    |         整数拆分         |   js   | Medium |     dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])      |
| 剑指Offer14-1（同343） |          剪绳子          |   js   | Medium |                              -                               |
| 377                    |        组合总和IV        |  py2   | Medium |                           动态规划                           |
| 62                     |         不同路径         |  py2   | Medium |                           动态规划                           |
| 887                    |     扔鸡蛋（谷歌）?      |   js   |  Hard  |                           动态规划                           |
| 552                    |     学生出勤记录II ?     |   --   |  Hard  |                      组合问题-动态规划                       |

##### 动态规划+其他思想

| #                    | 题目   | 语言 | 难度   | 注释            |
| -------------------- | ------ | ---- | ------ | --------------- |
| 264                  | 丑数II | js   | Medium | 动态规划+三指针 |
| 剑指Offer49（同264） | 丑数   | js   | Medium | 动态规划+三指针 |

##### 二维动态规划

| #           | 题目           | 语言 | 难度   | 注释                                                         |
| ----------- | -------------- | ---- | ------ | ------------------------------------------------------------ |
| 5           | 最长回文子串   | js   | Medium | dp[i] [j] = dp[i+1] [j-1] ^ s[i] === s[j]                    |
| 72          | 编辑距离       | js   | Medium | dp[i+1] [j+1] = Math.min(dp[i] [j], dp[i+1] [j], dp[i] [j+1]) + 1; |
| 1143（LCS） | 最长公共子序列 | js   | Medium | s1 == s2, dp[i+1] [j+1] = 1 + dp[i] [j]<br />s1 != s2, dp[i+1] [j+1] = Math.max(dp[i] [j], dp[i] [j+1], dp[i+1] [j]) |
| 剑指offer47 | 礼物的最大价值 | js   | Medium | dp[i] [j] = Math.max(左上， 上， 左)                         |
| 剑指offer19 | 正则表达式匹配 | js   | Medium | 细节特殊处理                                                 |

##### 背包问题

| #    | 题目 | 语言 | 难度 | 注释 |
| ---- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |



#### 分支

| #    | 题目 | 语言 | 难度 | 注释 |
| ---- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |

### 搜索（查找）

#### DFS（8）

#### BFS（8）

#### 二分查找（7）

| #    |   题目   |  语言   | 难度 | 注释 |
| :--- | :------: | :-----: | :--: | :--: |
| 153 | 寻找旋转排序数组中的最小值 | ts | Medium | LC2 |
| 154 | 寻找旋转排序数组中的最小值II（支持重复） | js | Hard | 二分 |
| 剑指Offer11（同154） | 旋转数组的最小数字 | js | Easy | 二分 |
| 268 | （查找）缺失数字 | js | Easy | 二分查找 |
| 278 | 第一个错误的版本 | js | Easy | 二分 |
| 704 | 二分查找 | js, ts | Easy | LC1二分查找（快慢指针） |
| 69 | x的平方根 | py2, ts | Easy | LC1二分法 |
| 374 | 猜数字大小 | js, 无ts | Easy | LC1二分 |
| 33 | 搜索旋转排序数组 | py, js, ts | Medium | LC1二分查找 |
| 162 | 寻找峰值 | ts | Medium | LC2 |
| 34 | 在排序数组中查找元素的第一个和最后一个位置 | ts | Medium | LC3 |

#### 排序


|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|136|只出现一次的数字|js|Easy|Sort|
|75|颜色分类|py2|Medium|冒泡排序|
|179|最大数|py, js|Medium|冒泡排序、sort|
|177| 第N高的薪水|sql|Medium|DESC LIMIT|
|215| 数组中的第K个最大元素 |js|Medium|选择、快速|
|561| [数组拆分I](<https://leetcode-cn.com/problems/array-partition-i/>) |py2|Easy|冒泡排序会超时，推荐sort\sorted|
|665| [非递减数列](https://leetcode-cn.com/problems/non-decreasing-array/) |py2|Easy|移除间断点|
|81（147周赛精选）| 搜索旋转排序数组ii |py2|Medium|二分法搜索|
|74| 搜索二维矩阵 |js|Medium|两层二分查找|
|448| 找到所有数组中消失的数字 |py2|Easy|超时，元素转索引|
|442| 数组中重复的数据 |py2|Medium|元素转索引|
|880|索引处的解码字符串|py2|Medium|逆向思维|
|440(158周赛精选)|字典序的第k小数字|py2|Hard|字典序|
|面试题13|机器人的运动范围？|js|Medium|DFS|

### 双指针（快慢指针、左右指针）

#### 快慢指针

- 判断链表中是否含有环
- 已知链表中含有环， 返回这个环的起始位置
- 寻找链表的中点
- 寻找链表的倒数第k个元素

#### 左右指针

- 二分法 (二分查找)
- 两数之和
- 反转数组
- 滑动窗口

| #    | 题目                           | 语言  | 难度 | 注释                 |
| ---- | ------------------------------ | ------- | ------ | -------------------- |
| 350 | 两个数组的交集II | js | Easy | 双指针 |
| 88   | 合并两个有序数组               | js/py2  | Easy   | 左右指针             |
| 977  | 有序数组的平方                 | py, js | Easy   | 左右指针             |
| m21  | 调整数组顺序使奇数位于偶数前面 | js      | Easy   | 左右指针             |
| 283  | 移动零                         | js      | Easy   | 左右指针             |
| m57  | 何为s的两个数字（有序数组）    | js      | Easy   | 左右指针-两数之和    |
| 3    | 无重复字符的最长子串           | js      | Medium | 滑动窗口             |
| 209  | 长度最小的子数组               | js      | Medium | 滑动窗口             |
| 424  | 替换后的最长重复字符           | ?       | Medium | 滑动窗口             |
| 1004 | 最大连续1的个数III             | js      | Medium | 滑动窗口             |
| 1855 | 下标对中的最大距离 | js | Medium | 双指针 |
| 76   | 最小覆盖子串                   | ?       | Hard   | 滑动窗口             |
| 42 | 接雨水 | js | Hard | 左右指针+左右最大值辅助 |

### 字符串匹配

#### 字符串匹配（BF、RK）（7）

#### 字符串匹配（BM、KMP、AC 自动机）（3）

#### 字符串匹配（Trie）（7）

### 拓扑排序、最短路径、A* 算法（5）

### 哈希算法（3）

| #    | 题目 | 语言 | 难度 | 注释 |
| ---- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |



## 数据结构

#### 数组（8）

| #          | 题目                     | 语言 | 难度   | 注释     |
| ---------- | ------------------------ | ---- | ------ | -------- |
| 217        | 存在重复元素             | js   | Easy   | -        |
| 26         | 删除排序数组中的重复相   | js   | Easy   | -        |
| 27（同26） | 移除元素                 | js   | Easy   | -        |
| 80（同26） | 删除排序数组中的重复项II | js   | Medium | -        |
| 724        | 寻找数组的中心索引       | ts   | Easy   | LC1      |
| 35         | 搜索插入位置             | ts   | Easy   | LC1      |
| 56         | 合并区间                 | ts   | Medium | LC1      |
| 1864       | 人口最多的年份           | js   | Easy   | 差分数组 |
| 1094       | 拼车                     | js   | Medium | 差分数组 |
| 1109       | 航班预订统计             | js   | Medium | 差分数组 |
| 1310       | 子数组异或查询-          | js   | Medium | 差分数组 |

#### 矩阵（二维数组）

| #                   | 题目     | 语言   | 难度   | 注释         |
| ------------------- | -------- | ------ | ------ | ------------ |
| 面试题01.08         | 零矩阵   | js     | Medium | -            |
| 867                 | 转置矩阵 | ts     | Easy   | LC           |
| 189                 | 旋转数组 | js, ts | Easy   | -            |
| 48                  | 旋转图像 | js     | Medium | 旋转二维数组 |
| 面试题01.07（同48） |          |        |        |              |

#### 集合

| #           | 题目           | 语言 | 难度   | 注释 |
| ----------- | -------------- | ---- | ------ | ---- |
| 剑指Offer61 | 扑克牌中的顺子 | js   | Easy   | Set  |
| 187         | 重复的DNA序列  | js   | Medium | Set  |
| 349         | 两个数组的交集 | js   | Easy   | Set  |
| 961         | 重复N次的元素  | js   | Easy   | Set  |

#### 字符串

| #           | 题目                     | 语言       | 难度   | 注释                                               |
| ----------- | ------------------------ | ---------- | ------ | -------------------------------------------------- |
| 面试01.02   | 判定是否互为字符重排     | js         | Easy   | Sort、charCodeAt                                   |
| 567（面试） | 字符串排列               | js         | Medium | 滑动窗口+array记录状态                             |
| 344         | 反转字符串               | js         | Easy   | o(1)双指针                                         |
| 7           | 整数反转                 | py, js, ts | Easy   | 取余、取整<br />注意题中的安全范围                 |
| 387         | 字符串中的第一个唯一字符 | js         | Easy   | for * 2                                            |
| 242         | 有效的字母异位词         | js         | Easy   | 哈希表                                             |
| 125         | 验证回文串               | js         | Easy   | 正则                                               |
| 8           | 字符串转换整数 (atoi)    | js         | Medium | 判断细节处理                                       |
| 28          | 实现strStr()             | js         | Easy   | String.prototype.substring(indexStart[, indexEnd]) |
| 38          | 外观数列                 | js         | Easy   | For * 2                                            |
| 14          | 最长公共前缀             | js         | Easy   | for * 2                                            |
| 394         | 字符串解码               | Js         | Medium | 栈                                                 |

#### 栈（8）

| #    | 题目               | 语言 | 难度   | 注释  |
| ---- | ------------------ | ---- | ------ | ----- |
| 20   | 有效的括号         | js   | Easy   | 栈    |
| 84   | 柱状图中最大的矩形 | js   | Hard   | 栈    |
| 496  | 下一个更大元素I    | js   | Easy   | stack |
| 503  | 下一个更大元素II   | js   | Medium | stack |

#### 队列（8）

#### 哈希/散列表（8）

| #           | 题目                         | 语言 | 难度   | 注释            |
| ----------- | ---------------------------- | ---- | ------ | --------------- |
| 剑指Offer48 | 最长不包含重复字符放入字符串 | js   | Medium | 滑动窗口+哈希表 |
| 剑指Offer50 | 第一只出现一次的字符         | js   | Easy   | 哈希表          |
| 面试题01.02 | 判定是否互为字符重排-哈希表  | js   | Easy   | 哈希表          |
| 36          | 有效的数独                   | js   | Medium | 哈希表存放状态  |
| 350         | 两个数组的交集II             | js   | Easy   | 哈希表          |
| 970         | 强整数                       | js   | Medium | 暴力法+哈希表   |
| 1640        | 能否连接形成数组             | js   | Easy   | 哈希表          |

### 链表（9）

代码快速访问 https://github.com/daaasheng/leetcode/blob/master/linkedList/leet2.js

| #                     |           题目           |   语言   |  难度  |              注释               |
| :-------------------- | :----------------------: | :------: | :----: | :-----------------------------: |
| 剑指Offer06           |     从尾到头打印链表     |    js    |  Easy  |                -                |
| 21                    |     合并两个有序链表     |    js    |  Easy  |   递归（~~链表反转+双指针~~）   |
| 237                   |     删除链表中的节点     | j s、py2 |  Easy  |            移动指针             |
| 面试题02.03（同237）  |       删除中间节点       |    js    |  Easy  |            移动指针             |
| 206                   |         反转链表         |    js    |  Easy  |            链表反转             |
| 剑指offer 24（同206） |         反转链表         |    js    |  Easy  |            链表反转             |
| 25                    |     K个一组反转链表      |    js    |  Hard  |            链表反转             |
| 2                     |         两数相加         |    js    | Medium |            链表合并             |
| 1290                  |     二进制链表转整数     |    js    |  Easy  |            链表遍历             |
| 83                    | 删除排序链表中的重复元素 |    js    |  Easy  |      链表删除（方法二？）       |
| m2_1                  |       移除重复节点       |    js    |  Easy  |            快慢指针             |
| 876                   |      链表的中间节点      |    js    |  Easy  |            快慢指针             |
| 1721                  |     交换链表中的节点     |    js    | Medium | Done: 距离为k的双指针+ 交换节点 |
| 234                   |         回文链表         |    js    |  Easy  |        回文数组/链表反转        |
| 445                   |       两数相加II?        |   py2    | Medium |                                 |
| 355                   |        设计推特?         |    js    | Medium |         (应用)增删改查          |

#### 链表-双指针

| #                     | 题目                     | 语言   | 难度   | 注释                               |
| --------------------- | ------------------------ | ------ | ------ | ---------------------------------- |
| 160                   | 相交链表                 | js, ts | Easy   | 双指针跑两趟                       |
| 剑指Offer52（同160）  | 两个链表的第一个公共节点 | js     | Easy   | 双指针跑两趟                       |
| 141                   | 环形链表                 | js     | Easy   | 快慢指针                           |
| 203                   | 移除链表元素             | js     | Easy   | 快慢指针+哨兵节点                  |
| 剑指offer18（同203）  | 删除链表的节点（元素）   | js     | Easy   | 快慢指针+哨兵节点                  |
| 19                    | 删除链表的倒数第N个节点  | js     | Medium | 距离为k的双指针（注意： 哨兵节点） |
| 剑指offer22（易于19） | 链表中倒数第k个节点      | js     | Easy   | Done: 距离为k的双指针              |
| 面试题02.02（易于19） | 返回倒数第k个节点        | js     | Easy   | Done: 距离为k的双指针              |
| 面试02.01             | 移除重复节点             | js     | Easy   | 快慢指针                           |



#### 双链表



| #           | 题目        | 语言 | 难度   | 注释              |
| ----------- | ----------- | ---- | ------ | ----------------- |
| 146（经典） | LRU缓存机制 | js   | Medium | 哈希表+双链表O(1) |



### 二叉树（9）

| #    | 题目                 | 语言    | 难度   | 注释     |
| ---- | -------------------- | ------- | ------ | -------- |
| 100 | 相同的树 | js | Easy | 递归 |
| 101 | 对称二叉树 | js | Easy | 递归 |
| 剑指Offer28（同101） | 对称二叉树 | js | Easy | 递归 |
| 110 | 平衡二叉树 | js | Easy | 递归 |
| 剑指Offer55-II(同110) | 平衡二叉树 | js | Easy | - |
| 111 | 二叉树的最小深度 | js | Easy | 递归 |
| 226 | 翻转二叉树 | py, js | Easy | 递归 |
| 112 | 路径总和 | js | Easy | 递归 |
| 114 | 二叉树展开为链表 | js | Medium | 递归 |
| 102 | 二叉树的层序遍历 | js | Medium | 层序遍历 |
| 637 | 二叉树的层平均值 | js | Easy | 层序遍历 |
| 654 | 最大二叉树 | js | Medium | 生成树 |
| 105 | 从前序与中序遍历序列构造二叉树 | js | Medium | 生成树 |
| 106 | 从中序与后序遍历序列构造二叉树 | js | Medium | 生成树 |
| 236  | 二叉树的最近公共祖先 | js      | Medium | LCA 问题（复杂递归） |
| 剑指Offer68II | 二叉树的最近公共祖先 | js | Easy | - |

#### 二叉搜索树BST

| #                    | 题目                             | 语言 | 难度   | 注释                 |
| -------------------- | -------------------------------- | ---- | ------ | -------------------- |
| 98                   | 验证二叉搜索树                   | js   | Medium | 递归+辅助函数        |
| 剑指Offer33          | （验证）二叉搜索树的后序遍历序列 | js   | Medium | 双指针的辅助函数     |
| 235                  | 二叉搜索树的最近公共祖先         | js   | Easy   | 递归                 |
| 剑指Offer68-I        | 二叉搜索树的最近公共祖先         | js   | Easy   | -                    |
| 108                  | 将有序数组转为二叉搜索树         | js   | Easy   | 递归+辅助函数        |
| 700                  | 二叉搜索树中的搜索               | js   | Easy   |                      |
| 701                  | 二叉搜索树中的插入操作           | js   | Easy   | insert               |
| 450                  | 删除二叉搜索树中的节点           | js   | Medium | 特殊情况需要修改树枝 |
| 538\1038             | 把二叉搜索树转换为累加树         | js   | Medium | 操作                 |
| 230                  | 二叉搜索树中第K小的元素          | js   | Medium | 递归                 |
| 剑指Offer54（同230） | 二叉搜索树的第k大节点            | js   | Easy   | 递归                 |

#### 完全二叉树（Complete Binary Tree）：

若设二叉树的深度为h

1.  (1～h-1) 各层的结点数都达到最大个数。
2.  第 h 层所有的结点都连续集中在最左边。

因此。如果根节点存储在索引i中，那么它的左子节点和右子节点分别存储在索引2*i+1、2*i+2中。



#### 满二叉树（Full Binary Tree）：

每个节点都有0或2个子节点

#### 完美二叉树：

**完美二叉树**，其所有叶子节点都在同一层，每个父节点都有两个子节点。

| #    | 题目                             | 语言 | 难度   | 注释                        |
| ---- | -------------------------------- | ---- | ------ | --------------------------- |
| 116  | 填充每个节点的下一个右侧节点指针 | js   | Medium | 递归， 辅助函数连接两个节点 |
|      |                                  |      |        |                             |



#### 平衡二叉树：

一个二叉树*每个节点* 的左右两个子树的高度差的绝对值不超过1。


|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|965| 单值二叉树 |py2|a|创建二叉树|
|101| 对称二叉树 |py2|a|遍历二叉树|
|102| 二叉树的层序遍历 |py2|Medium|层序遍历|
|107|  ||||
|637| [二叉树的层平均值](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/) |py2|a|层序遍历|
|110| 平衡二叉树 |py2|a|DFS|
|662| 二叉树最大宽度 |py2|Medium|DFS(一些节点为空)，creatTree不适用|
|617| 合并二叉树 |py2|a|遍历二叉树|
|1184(153周赛)| 公交站间的距离 |py2|a|--|
|1185(153周赛)| 一周中的第几天 |py2|a|Zeller公式：w=([c/4]-2c+y+[y/4]+[13(m+1)/5]+d-1)mod7<Mediumr />注：1582-10-15之后|
|1186| 删除一次得到子数组最大和 ||Medium||
|1187| 使数组严格递增 ||Hard||

### 字典树

| #    | 题目     | 语言 | 难度   | 注释   |
| ---- | -------- | ---- | ------ | ------ |
| 208  | 实现Trie | js   | Medium | 字典树 |



### 图（8）

### 跳表（6）

### 位图（6）

### B+（5）

### 红黑树（3）

### rest

| #           | 题目                                           | 语言 | 难度   | 注释               |
| ----------- | ---------------------------------------------- | ---- | ------ | ------------------ |
| 剑指Offer20 | 表示数值的字符串                               | js   | Medium | 确定有限状态自动机 |
| 剑指Offer62 | 圆圈中最后剩下的数字<br />（**击鼓传花游戏**） | js   | Easy   | 约瑟夫环           |
| 0519        | 寻找组合                                       | js   | --     | （应用）Map        |

#### 设计

| #                    | 题目            | 语言 | 难度   | 注释     |
| -------------------- | --------------- | ---- | ------ | -------- |
| 155                  | 最小栈          | js   | Easy   | 辅助栈   |
| 剑指Offer30（同155） | 包含min函数的栈 | js   | Easy   | -        |
| 384                  | 打乱数组        | js   | Medium | 洗牌算法 |

#### 数学问题


|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|剑指Offer66|构建乘积数组|js|Medium|两趟遍历|
|50|幂函数 Pow(x, n)|js|Medium|折半累乘|
|剑指Offer16（同50）|数值的整数次方|js|Medium|折半累乘|
|剑指Offer57-II|和为s的连续正数序列|js|Easy|求和公式|
|412|Fizz Buzz|py,  js, ts|Easy|Array.from|
|204|计数质数|js|Easy|-|
|326|3的幂|js|Easy|-|
|342|4的幂|py2|Easy|检查一个数是否为 2 的幂：x > 0 and (x & (x - 1)) == 0<br />若 xx 为 2 的幂且 x%3 == 1，则 xx 为 4 的幂|
|400|第N个数字|js|Medium|count([100, 999])=(10 ** dep - 10 ** (dep - 1)) * dep|
|66|加一|py, js|Easy|操作list|
|67|二进制求和|py, js|Easy|按位+|
|371|两整数之和（经典位运算）|js|Easy|sum = a ^ b<br />carry = (a & b) << 1|
|989|数组形式的整数加法|js|Easy|按位+|
|415|字符串相加|js|Easy|按位+|
|模拟加法|addString|js||已测试|
|166|分数到小数（模拟除法）||||
|43|字符串相乘\模拟乘法\大数相乘|js|Medium|分治未实现？|
|m57_2|和为s的连续正数序列|js||连续数字求和公式|
|（经典）|线段是否相交|||isIntersect， 向量（几何）|
|面试题 16.03. 交点| 交点 |js|Hard|intersection|

####  进制转换

| #    | 题目           | 语言       | 难度 | 注释   |
| ---- | -------------- | ---------- | ---- | ------ |
| 13   | 罗马数字转整数 | py, js, ts | Easy | Map    |
| 168  | Excel表列名称  | js         | Easy | 26进制 |
| 171  | Excel表序号    | js         | Easy | -      |

#### 位运算

题型：

1. 运算
2. 统计
3. 寻找出现次数的数字

| #                    | 题目                                          | 语言 | 难度   | 注释                       |
| -------------------- | --------------------------------------------- | ---- | ------ | -------------------------- |
| 剑指Offer64          | 求1+2+...+n（限制不使用乘除法、条件判断语句） | js   | Medium | n && (n += sumNums(n-1))   |
| 剑指Offer65          | 不用加减乘除做加法                            | js   | Easy   | (a & b)<<1                 |
| 面试题01.01          | 判断字符是否唯一                              | js   | Easy   | <<                         |
| 190                  | 颠倒二进制位                                  | js   | Easy   | 获取末位+移位+无符号移位   |
| ---                  | ---                                           | -    | -      | -                          |
|                      |                                               |      |        |                            |
| 136                  | 只出现一次的数字                              | js   | Easy   | 异或                       |
| 面试题17.04（类136） | 消失的数字                                    | js   | Easy   | 异或                       |
| 137                  | 只出现一次的数字 II                           | js   | Medium | 同或                       |
| 260                  | 只出现一次的数字 III                          | js   | Medium | 异或                       |
| 剑指offer56-I(同260) | 数组中数字出现的次数                          | js   | Medium | 异或                       |
| 剑指offer56-II       | 数组中数字出现的次数II                        | js   | Medium | 与+移位                    |
| 645                  | 错误集合                                      | js   | Easy   | 异或                       |
| --                   | --                                            | -    | -      | -                          |
| 191（汉明重量）      | 位1的个数                                     | js   | Easy   | 移位/按位与                |
| 剑指Offer15（同191） | 二进制中1的个数                               | js   | Easy   |                            |
| 461（汉明距离）      | 汉明距离                                      | js   | Easy   | 按位异或+布赖恩-克尼根算法 |

#### 统计

- 平均值
- 中位数
- 众数



#### 摩尔投票（Boyer–Moore majority vote algorithm）

1981年被发表， 是处理数据流的一种典型算法。本质与分治相似

伪代码：

```
初始化元素m并给计数器i赋初值i = 0
对于输入队列中每一个元素x：
  若i = 0, 那么 m = x and i = 1
  否则若m = x, 那么 i = i + 1
  否则 i = i − 1
返回 m
```



| #                    | 题目                         | 语言 | 难度   | 注释     |
| -------------------- | ---------------------------- | ---- | ------ | -------- |
| 169                  | 多数元素                     | js   | Easy   | 摩尔投票 |
| 剑指Offer39（同169） | 数组中出现次数超过一半的数字 | js   | Easy   | 摩尔投票 |
| 面试题17.10          | 主要元素                     | js   | Easy   | 摩尔投票 |
| 229                  | 求众数II                     | js   | Medium | 摩尔投票 |

