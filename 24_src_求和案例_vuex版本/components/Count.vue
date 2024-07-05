<template>
	<div>
		<h1>当前求和为：{{ $store.state.sum }}</h1>
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
			}
		},
		methods:{
			increment(){
				this.$store.commit('JIA',this.n)  //已知简单的动作及处理没有其他业务逻辑可直接进行commit连接mutation
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementodd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted(){
			console.log('Count',this);
			
		}
    }
</script>

<style scoped>
	button{
		margin-left: 5px;
	}
</style>