<template>
    <div class="todo-footer" v-show="total">
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
			<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
			<span>已完成{{ doneTotal }}</span> / 全部{{ total }}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
    export default {
        name:'MyFooter',
        props:['todos','chenckAllTodo','clearAllTodo'],
        computed:{
            total(){
                return this.todos.length
            },
            doneTotal(){
                /* const x = this.todos.reduce((pre,current)=>{
                    console.log('@',pre,current);
                    return pre + (current.done ? 1 : 0)
                },0)
                console.log('###',x); */
                return this.todos.reduce((pre,current)=> pre + (current.done ? 1 : 0),0)

		//es6中的reduce方法，是一种数组的归并方法，和迭代方法（map,forEach,filter...）一样，都会对数组进行遍历，不同之处是reduce函数的第一个参数得到的是迭代计算后的结果
                //详情方法信息可参考：https://blog.csdn.net/SoULikeMe/article/details/109088548
		    
            },
            isAll:{
                get(){
                    return this.doneTotal === this.total && this.total > 0
                },
                set(value){
                    this.chenckAllTodo(value)
                }
            }
        },
        methods:{
            /* checkAll(e){
                console.log(e.target.checked);
                this.chenckAllTodo(e.target.checked)
            }, */
            clearAll(){
                if(confirm('是否清除已完成任务？')){
                    this.clearAllTodo()
                }
            }
        }
    }
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
