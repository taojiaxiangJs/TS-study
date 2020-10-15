export const enumFn = function (){
	// 数字枚举
	enum Role{
		Reporter,
		Developer,
		Maintainer,
		Owner,
		Guest
	}
	console.log(Role.Reporter)
	console.log(Role.Developer)

	// 字符串枚举
	enum Message{
		Success = '成功了',
		Fail = '失败了'
	}

	// 异构枚举(不建议使用)
	enum Answer {
		N,
		Y = 'yes'
	}

	// 枚举成员
	enum Char {
		// const (常量成员)
		a,
		b = Char.a,
		c = 1+3,
		// computed(计算枚举)   计算枚举后面的成员必须要赋初始值
		d = Math.random(),
		e = '123'.length,
	}

	// 常量枚举 (在编译阶段会被移除，其作用当我们不需要一个对象，但是需要对象的值的时候就适合使用，这样会减少我们在编译时的代码)
	const enum Month{
		Jan,
		Feb,
		Mar
	}
	let month = [Month.Jan, Month.Feb, Month.Mar]
	console.log(month)


// 案例改造
	// 改造前
	function initByRole1(role:number){
		if(role === 1 || role === 2){
		}else if(role === 3 || role === 4){
		}else if(role === 5){
		}else{
		}
	}
	// 改造后
	const enum Roles {
		Reporter = 1,
		Developer,
		Maintainer,
		Owner,
		Guest
	}
	function initByRole2(role:number){
		if(role === Roles.Reporter || role === Roles.Developer){
		}else if(role === Roles.Maintainer || role === Roles.Owner){
		}else if(role === Roles.Guest){
		}else{
		}
	}
}