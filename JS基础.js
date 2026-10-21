// 区分大小写
let a = 10;
console.log(a)
let A = 20;
console.log(A)

//弱类型变量: 数据类型动态变化
let name = '张三'
console.log(typeof(name))
name = 100
console.log(typeof(name))

const age = 18 // 常量: 不能改变的变量
console.log(age)
// age = 20
// console.log(age)

function sayHello() {
    let a = 10000;
    console.log(a)
}
sayHello()
// alert(a)
// confirm('确认吗？')
// num3 = prompt('请输入姓名')
// alert(typeof(num3))
// alert(typeof(parseInt(num3)))
// let num1 = 10.1
// alert(parseInt(num1))
// let num2 = 10
// alert(parseFloat(num2))

// undefined: 未定义
let gril;
console.log(typeof(gril))
let boy = "lisi";
console.log(typeof(boy))

// boolean: 布尔值 true false
let isTrue = true;
console.log(typeof(isTrue))
let isFalse = "false";
console.log(typeof(isFalse))

// 字符串模版: 可以在字符串中嵌变量 方便输出
let age2 = 18;
let name2 = "NieWei";
let greeting = `你好，我是${name2}，我今年${age2}岁`;
console.log(greeting)

let str = "你好，我是" + name2 + "，我今年" + age2 + "岁";
console.log(str)

// 字符串属性和方法
console.log(name2.length)
console.log(name2.charAt(0))
let subName2 = name2.substring(0, 3)
console.log(subName2)
let subName22 = name2.slice(0, 3)
console.log(subName22)
console.log(name2.indexOf('i'))
console.log(name2.lastIndexOf('i'))

// 数值转字符串
let num = 100;
console.log(typeof(num))
let numStr = num.toString()
console.log(typeof(numStr))
let num2 = 200
console.log(num2)
console.log(typeof(num2))
num2 = num2 + ""
console.log(typeof(num2))

let num3 = "300"
console.log(num3)
console.log(typeof(num3))
num3 = parseInt(num3)
console.log(typeof(num3))

// 顺序结构：赋值语句与表达式
let ab = 100;
let ac = ad = 200;
const greeting2 = "你好";
let str4 = greeting2 + ab
console.log(str4)
let num4 = 2 + 10 * 10
console.log(num4)

// 分支结构：必有判断  [条件语句] true false
// 比较运算符
let b = 10==10
console.log(b)
let c = 10=="10"
console.log(c)
let d = 10==="10"
console.log(d)
let e = 10>=11
console.log(e)
// 逻辑运算符 and or not
let f = true && false // 与: 两个操作数都为true时才为true
console.log(`true && false: ${f}`)
let g = true || false // 或: 有一个操作数为true时就为true
console.log(`true || false: ${g}`)
console.log(g)
let h = !true // 非: 取反 true->false false->true
console.log(`!true: ${h}`)

// 分支结构：条件语句-if语句
let grade = 90
if (grade<60) {
    console.log('不及格:'+grade)
}
else if (grade>=60 && grade<70) {
    console.log('合格:'+grade)
}
else if (grade>=70 && grade<80) {
    console.log('中等:'+grade)
}
else if (grade>=80 && grade<90) {
    console.log('良好:'+grade)
}
else {
    console.log('优秀:'+grade)
}




console.log('20261014 JS基础学习 QiuZhihan')