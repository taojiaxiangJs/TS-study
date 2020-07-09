<!-- 
    编译类型的语言
    强类型语言
    真正的面向对象的语言 
-->

# 搭建环境

    npm i -g typescript



# 基础类型
    Typescript 不仅支持最简单的数据单元（数字、字符串、结构体、布尔值），还提供了实用的枚举类型

**布尔值**
(```)
    let isDone: boolean = false;
(```)

**数字**
    和 JavaScript 一样，Typescript 里的所有数字都是浮点数，这些浮点数的类型是 number。除了支持 十进制 和 十六进制 字面量外，Typescript 还支持 ES6 中引入的 二进制 和 八进制 字面量。

(```)
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;
(```)

**字符串**
(```)
    let name:string = 'bob'
(```)
*注意：可以使用模版字符串*

**数组**
有两种定义方式：
>. 可以在元素类型后面接上 [],表示由此类型元素组成的一个数组：

(```)
    let list:number[] = [1,2,3]
(```)

>. 使用数组泛型， Array<元素类型>：
(```)
    let list:Array<number> = [1,2,3]
(```)

**元组**
**枚举**
**Any**
**Void**
**undefined 和 Null**


**Never**
**Object**


**联合类型**
(```)
    let data: string | number | boolean;
    data = 'aaa'    // ok
    data = true     // ok
    data = 111      // ok
    data = [1,2,3]  // Nok
(```)

**推论**
>. 第一种 推论为确定类型
(```)
    let a = 'aaa'   // 这样 typescript 推论 a 为 string 类型
    a = 111         // 此时 会报错
(```)

>. 第二种 推论为 Any 类型
(```)
    let a；   // 此时只是声明a变量，但是没有赋初始值，这样 typescript 推论 a 为 Any 类型
    a = 111         // 此时 会报错
(```)

**类型断言**
    有时候你会遇到这种情况，你会比 Typescript 更了解某个值的详细信息。通常这会发生在你清楚的知道一个实体具有比他现有类型更确切的类型

    通过类型断言这种方式 可以告诉编译器，“相信我，我知道自己在干什”。类型断言好比其它语言里的类型转化，但是不进行特殊的数据检查和结构。他没有运行时的影响，只在编译阶段起作用。 Typescript会假设你，已经进行了必要的检查。

    断言的两种形式：
>. "尖括号"语法
(```)
    let someValue: any = 'this is a string';
    let strLength: number = (<string>someValue).length
(```)

>. as 语法
(```)
    let someValue: any = 'this is a string';
    let strLength:number = (someValue as string).length;
(```)

*两种写法是等价的。但是，当你在 typescript 里使用 JSX时，只有 as 语法断言是被允许的*


# 接口 interface
*行为的抽象*

**对 class 的约束**
>. 对单个 class 的约束
(```)
    // 定义接口
    interface Iprinter{
        Printing(msg:string): string;
    }

    // 实现接口
    class ColorPrinter implements Iprinter{
        Printing(msg: string):string{
            return `打印${msg}成功`
        }
    }

    let p1 = new ColorPrinter()
    p1.Printing('简历')     // 简历

(```)

>. 多个接口整合
(```)
    interface Imessage {
        getMsg():string;
    }

    interface Iprinter {
        Printing(msg: string):string
    }

    class ColorPrinter implements Iprinter, Imessage{
        Printing(msg: string):string{
            return `打印${msg}成功`
        }

        getMsg(): string{
            return “哈哈”
        }
    }
(```)

**对 函数 的约束**
(```)
    interface Imyfunction{
        (a: string, b: number):boolean
    }

    let fun1: Imfunction = function(a:string, b:number): boolean {
        return false
    } 
(```)

**对 数组 的约束**
(```)
    interface Istuarr{
        [index:number]: string;
    }

    let arr1: Istuarr;
    arr1 = ['aaa','bbb']    // ok

    let arr2: Istuarr;
    arr2 = ['aaa',111]     // Nok 因为 111 不是string类型
(```)

**对 json 的约束**
(```)
    interface Idata{
        name: string,
        age: number,
        email?: string,         // 添加 ? 表示 可选属性
        readonly sex: string    // readonly 表示只读属性
    }

    function showData(a:Idata){
        return JSON.stringify(a)
    }

    showData({
        name: 'haha',
        age:12
    })
(```)


# 类
    例子：
(```)
    class Person{
        name:string;
        age:number;
        constructor(name:string, age:number){
            this.name = name;
            this.age = age
        }
        print(){
            return `姓名：${this.name} , 年龄：${this.age}`
        }
    }

    var p1 = new Person('haha', 18)
    p1.print()      // 姓名：haha , 年龄：18

(```)

**继承**


**class 继承**

*与 ES6 的继承一样*

(```)
    class Student extends Person{
        cardNum: number;
        school: string;
        doHomework(){
            return `${this.name} 今年${this.age}岁，就读于${this.school},学号为：${this.cardNum}`
        }
    }

    let student1 = new Student('haha',12)
    student1.cardNum = 111;
    students.scholl = '南京大学'

    student1.doHomework()       // haha 今年12岁，就读于南京大学，学号为：111
(```)

**接口 的继承**

(```)
    interface A {
        getMsg()
    }

    interface ColorA extends A{
        printing()
    }

    class HPprinter implements ColorA{
        printing(){
            console.log('这是一台打印机')
        }
        getMsg(){
            console.log('haha')
        }
    }

    var HP = new HPprinter()
    HP.getMsg()     // haha
(```)

**访问修饰符**

*public、private、protected*

>. public : 定义 类 的公有成员

>. private : 私有的，申明类的外面不可以访问

>. protected : 受保护的，在自身和子类中可以访问

(```)
    class Person {
        public name:string;
        private age:number;
        protected email:string;

        constructor(name:string, age:number, email:string){
            this.name = name;
            this.age = age;
            this.email = email
        }

        print(){
            console.log(`${this.email},${this.age}`) 
        }
    }

    var p1 = new Person('haha', 12, 'xxx@163.com')

    console.log(p1.name)        // 'haha'
    console.log(p1.age)         // 报错
    console.log(p1.email)       // 报错

    class Student extends Person{
        show(){
            console.log(`${this.name}, ${this.age}, ${this.email}`)     
            // this.name、this.email 可以正常访问 / this.age 报错 
        }
    }

(```)

**静态属性/静态方法**

>. ES6 中

(```)
        class Person {
        // 实例属性
        this.name = 'haha';
        //实例方法
        this.print = function(){
            console.log(this.name)
        }
    }
    // 静态属性
    Person.age = 13;
    // 静态方法
    Person.say = function(){
        console.log('haha')
    }

    console.log(Person.age)     // 静态属性调用
    Person.say()                // 静态方法调用

    var p1 = new Person()
    console.log(p1.name)        // 实例属性调用
    p1.print()                  // 实例方法调用
(```)

>. Typescript 中

(```)
    class Person {
        // 默认都是 public

        // 实例属性
        name: string;
        age: number;

        // 静态属性
        static email:string;

        constructor(name:string, age:number, email:string){
            this.name = name;
            this.age = age;
            Person.email = email;
        }

        // 实例方法
        print(){
            console.log(this.name, this.age)
        }
        static say(){
            console.log('haha')
        }
    }
    var p1 = new Person('zhangsan', 15, 'xxx@333.com')
    p1.print()                      // 调用实例方法
    console.log(Person.email )      // 调用静态属性
    Person.say()                    // 调用静态方法
(```)


**多态**

*同一个父类下面有一个方法 多个不同的子类有不同的展示*

(```)
    class Animal{
        eat(){
            console.log('animal eat')
        }
    }

    class Cat extends Animal{
        eat(){
            console.log('猫吃鱼')
        }
    }

    class Dog extends Animal{
        eat(){
            console.log('狗吃肉')
        }
    }
(```)

**抽象类/抽象方法**

>. 抽象类是提供给其它类 继承的基类（父类），不能直接被实例化
>. 抽象方法只能包含在 抽象类中，抽象类中 可以包含 抽象方法 和 非抽象方法
>. 子类如果继承抽象类，则要实现抽象方法

定义：通过 abstract 关键字

(```)
    abstract class Animal{
        abstract eat();
        run(){
            console.log('haha')
        }
    }

    class Cat extends Animal{
        eat(){
            console.log('chichi')
        }
    }

    class Dog extends Animal{
        eat(){
            console.log('chichi')
        }
    }

    var c1 = new Cat()
    var d1 = new Dog()
(```)


# 函数
    没什么好说的

# 泛型

**泛型函数**

(```)
function printer<T>(arr:T[]){
    for(var item of arr){
        console.log(item)
    }
}

printer<number>([1,2,3,4])
printer<string>(['1','2','3','4'])
(```)

**泛型类**

(```)
class myArr <T> {
    public name: T
    public list: T[] = []

    add(val: T):void{
        this.list.push(val)
    }
}

var arr = new myArr<number>()

arr.add(111)
arr.add(222)
arr.add('222')  // 报错
(```)

**泛型接口**

(```)
interface Iadd <T>{
    (x: T, y: T):number
}

var add:Iadd<number>;

add = function(x:number, y:number):number{
    console.log(x+y)
}

add(2,4)
(```)



































