<template>
	<div>
		<h1>当前求和为：{{ sum }}</h1>
		<select v-model.number="n">  
			<!--上方为v-model的修饰符，把字符串格式转为数字格式。另外一种下方获得数字格式方法为标签属性value前加:-->
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementodd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
    export default {
        name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
				sum:0, //当前的合
			}
		},
		methods:{
			increment(){
				this.sum += this.n
			},
			decrement(){
				this.sum -= this.n
			},
			incrementodd(){
				if(this.sum % 2){  //如果余数为0代表是偶数，偶数为false进不来
					this.sum += this.n
				}
			},
			incrementWait(){
				// 复习：setInterval() ：
				//      	按照指定的周期（以毫秒计）来调用函数或计算表达式。方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
				//		setTimeout() ：在指定的毫秒数后调用函数或计算表达式。
				setTimeout(() => {
					this.sum += this.n
				}, 500);
			},
		}
    }
</script>

<style scoped>
	button{
		margin-left: 5px;
	}
</style>