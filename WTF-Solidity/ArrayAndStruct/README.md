# 引用类型，array，struct

## 数组array

数组（`Array`）是`solidity`常用的一种变量类型，用来存储一组数据（整数，字节，地址等等）。数组分为固定长度和可变长度数组两种

- 固定长度数组：在声明时指定数组的长度。用T[k]的格式声明。
- 可变长度数组（动态数组）：在声明时不指定数组的长度。用T[]的格式声明，其中T是元素的类型。

**注意**: `bytes`比较特殊，是数组，但是不用加`[]`。另外，不能用`byte[]`声明单字节数组，可以使用`bytes`或`bytes1[]`。在gas上，`bytes`比`bytes1[]`便宜。因为`bytes1[]`在`memory`中要增加31个字节进行填充，会产生额外的gas。但是在`storage`中，由于内存紧密打包，不存在字节填充。

## 结构体struct

`Solidity`支持通过构造结构体的形式定义新的类型。

B C D B C A 

3D -> b 
