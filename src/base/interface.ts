export const interfaceFn = function(){

// 接口定义对象

	interface List {
		id: number;
		name: string;
	}

	interface Result {
		data: List[]
	}

	function render(result: Result) {
		result.data.forEach( value => {
			console.log( value.id, value.name)
		})
	}

	let result = {
		data: [
			{ id: 1, name: 'A' },
			{ id: 2, name: 'B' }
		]
	}

	render(result)

	// 可索引的接口
	interface StringArray {
		// 相当于声明了字符串数组
		[index: number] : string
	}

	let chat: StringArray = ['1', '2']

	interface Names {
		[x: string] : string;
		[z: number] : string   // 此处 数字索引签名 的返回值一定要是字符索引签名返回值的子类型
	}


// 接口定义函数

	let add: (x: number, y: number) => Number 

	interface Add1 {
		(x: number, y: number): number
	}

	// 类型别名 type 关键字
	type Add2 = (x:number, y:number) => number

	let add2: Add2 = (a,b) => a+b


// 混合接口

	interface Lib { 
		(x:number): void;	// Lib 是一个函数
		version: string;	// Lib有一个version属性
		doSomething():void	// Lib有一个doSomething方法
	}
	function initLib(){
		let lib: Lib = ((x:number) => {
			console.log(x+1)
		}) as Lib
		lib.version = '1.0.0'
		lib.doSomething = () => {}
		return lib
	}
	
	let lib1 = initLib()
	lib1(1)

	let lib2 = initLib()
	lib2(3)
}