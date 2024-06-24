<template>
	<div class="container">
		<Category title="游戏">
			<template scope="lsb" slot="haha">
				<ul>
					<li v-for="(item,index) in lsb.games" :key="index">{{item}}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<template scope="{games}">  <!--此处{games}的写法为解构赋值-->
				<!-- 
					解构赋值（语法）
						const [a, b] = array;
						const [a, , b] = array;
						const [a = aDefault, b] = array;
						const [a, b, ...rest] = array;
						const [a, , b, ...rest] = array;
						const [a, b, ...{ pop, push }] = array;
						const [a, b, ...[c, d]] = array;

						const { a, b } = obj;
						const { a: a1, b: b1 } = obj;
						const { a: a1 = aDefault, b = bDefault } = obj;
						const { a, b, ...rest } = obj;
						const { a: a1, b: b1, ...rest } = obj;
						const { [key]: a } = obj;
				-->
				<ol>
					<li style="color:red" v-for="(item,index) in games" :key="index">{{item}}</li>
				</ol>
			</template>
		</Category>

		<Category title="游戏">
			<template slot-scope="{games}">
				<h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
			</template>
		</Category>
	</div>
</template>

<script>
import Category from './components/Category.vue'
	export default {
		name:'App',
		components:{Category},
	}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: space-around;
	}
	img{
		width: 100%;
	}
	video{
		width: 100%;
	}
	.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
