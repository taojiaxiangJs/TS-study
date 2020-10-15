export const functionFn = function(){

// 函数定义
	function add1(x:number, y:number):number {
		return x + y
	}

	let add2: (x: number, y: number) => number

	type add3 = (x:number, y: number)=> number

	interface add4{
		(x:number, y:number): number
	}

	// 可选参数
	function add5(x:number, y?:number){
		return y? y+x:x
	}

	// 默认参数
	function add6(x:number, y=0, z:number, q=1) {
		console.log( x + y + z + q)
	}
	add6(1, undefined, 6)

	// 剩余参数
	function add7(x:number, ...rest:number[]){
		return x + rest.reduce((pre, cur) => pre + cur)
	}
	console.log(add7(1,2,3,4,5,6))

	// 函数重载
	function add8(...rest: number[]):number;
	function add8(...rest: string[]):string;
	function add8(...rest: any[]):any{
		let frist = rest[0];
		if(typeof frist === 'string'){
			return rest.join('')
		}
		if(typeof frist === 'number'){
			return rest.reduce((pre, cur)=> pre+cur)
		}
	}
	console.log(add8(1,2,3,4,5,6))
	console.log(add8('q','w','e'))
}