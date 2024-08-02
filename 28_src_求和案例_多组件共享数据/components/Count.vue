<template>
	<div>
		<h1>当前求和为：{{ sum }}</h1>
		<h3>我在{{ school }}学{{ subject }}</h3>
		<h3>当前求和放大10倍后为：{{ bigSum }}</h3>
		<h3 style="color: red;">Person组件的总人数是：{{ personList.length }}</h3>
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
			//借助mapState生成计算属性，从state中读取数据（数组写法）
			//一个 'sum/school/subject' 两种用途：首先作为计算属性名，之后在state中找数据名
			...mapState(['sum','school','subject','personList']),
			// ...mapGetters({bigSum:'bigSum'})
			...mapGetters(['bigSum'])
		},
		methods:{
			//借助mapMutations生成对应的方法，方法中会调用commmit去联系mutations（对象写法）
			...mapMutations({increment:'JIA',decrement:'JIAN'}),

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