import Mock from 'mockjs';

const Random = Mock.Random;

/* 登录数据 */
const loginInfo = (option) =>{
	console.log("option:"+option);
							//把字符串转换一下
	let { userName,pwd } = JSON.parse(option.body);
	console.log(userName);
	console.log(pwd);
	let userList = {
		"error_code":0,
		"data":[
			{
				"id":"1",
				"userTitle":"普通用户",
				"userName":"15075954113",
				"pwd":"123456",
				"token":"yh1"
			},
			{
				"id":"2",
				"userTitle":"普通用户",
				"userName":"houheju",
				"pwd":"123456",
				"token":"yh2"
			}
		]
	}
	for(let i = 0; i<userList.data.length; i++){
		if(userList.data[i].userName == userName && userList.data[i].pwd == pwd){
			return userList.data[i].token;
		}
	}
	return userList.error_code;
}

//定义对外接口名称
Mock.mock('/api/getUserInfo',loginInfo);


/* 随机数据 */
const txteData = () =>{
	let shuju=[];
	for(let i=0;i<10;i++){
		let user = {
			'id':i,
			'name':Random.cname(),
			'date':Random.date('yyyy-MM-dd'),
			'phone':Mock.mock(/^1[385][1-9]{8}$/),
			'address':Random.county(true),
			'buer':Random.integer(0,1),
		}
		shuju.push(user);
	}
	
	return shuju;
}
//定义对外接口名称
Mock.mock('/api/test',txteData);