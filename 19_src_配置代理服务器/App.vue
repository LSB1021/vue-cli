<template>
  <div id="root">
		<div>
			<button @click="getStudent">获取学生信息</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
    export default {
        name:'App',
		methods:{
			getStudent(){
				axios.get('http://localhost:8080/lsb/shop/index/allCategory').then(
					response =>{
						console.log('请求成功了',response.data);
					},
					error =>{
						console.log('请求失败了',error.message);
						
					}
				)
			},
		}
    }
</script>
