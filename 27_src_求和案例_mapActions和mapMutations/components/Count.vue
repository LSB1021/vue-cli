<template>
	<div>
		<h1>当前求和为：{{ sum }}</h1>
		<h3>我在{{ school }}学{{ subject }}</h3>
		<h3>当前求和放大10倍后为：{{ bigSum }}</h3>
		<select v-model.number="n">  
			<!--上方为v-model的修饰符，把字符串格式转为数字格式。另外一种下方获得数字格式方法为标签属性value前加:-->
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementodd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'

    export default {
        name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			//借助mapState生成计算属性，从state中读取数据（对象写法）
			//下方三个点为扩展运算符，将花括号内的键值对一一展现出来
			// ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

			//借助mapState生成计算属性，从state中读取数据（数组写法）
			//一个 'sum/school/subject' 两种用途：首先作为计算属性名，之后在state中找数据名
			...mapState(['sum','school','subject']),

			// ...mapGetters({bigSum:'bigSum'})
			...mapGetters(['bigSum'])
		},
		methods:{
			//程序员亲自写方法
			/* increment(){
				this.$store.commit('JIA',this.n)  //已知简单的动作及处理没有其他业务逻辑可直接进行commit连接mutation
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			}, */

			//借助mapMutations生成对应的方法，方法中会调用commmit去联系mutations（对象写法）
			...mapMutations({increment:'JIA',decrement:'JIAN'}),
			/* 
				此处出现的样式为
				increment(event){
					this.$store.commit('JIA',value)
				}
			*/


			/* *********************************************************** */

			/* incrementodd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			}, */

			...mapActions({incrementodd:'jiaOdd',incrementWait:'jiaWait'})
		},
		mounted(){
			// console.log('Count',this.$store);
			const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
			console.log(x);
		}
    }
</script>

<style scoped>
	button{
		margin-left: 5px;
	}
</style>