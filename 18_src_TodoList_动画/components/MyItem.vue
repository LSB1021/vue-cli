<template>
    <!-- <transition name="todo" appear> -->
		<li>
			<label>
				<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
				<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
				<!-- <input type="checkbox" v-model="todo.done"/> -->
				<span v-show="!todo.isEdit">{{todo.title}}</span>
				<input 
					type="text" 
					v-show="todo.isEdit" 
					:value="todo.title" 
					@blur="handleBlur(todo,$event)" 
					ref="inputTitle"
				>
			</label>
			<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
			<button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
		</li>
	<!-- </transition> -->
</template>

<script>
	import PubSub from 'pubsub-js';
    export default {
        name:'MyItem',
        //声明接收todo对象
        props:['todo'],
        methods:{
            //勾选or取消勾选
            handleCheck(id){
                //通知App组件将对应todo的done值取反
                // this.checkTodo(id)
				// this.$bus.$emit('checkTodo',id)
				PubSub.publish('checkTodo',id)
            },
            //删除
            handleDelete(id){
                if(confirm('确认删除吗？')){
                    // this.deleteTodo(id)
					// this.$bus.$emit('deleteTodo',id)
					PubSub.publish('deleteTodo',id)
                }
            },
			//编辑
			handleEdit(todo){
				if(todo.hasOwnProperty('isEdit')){  //hasOwnProperty('')测有没有..属性
					todo.isEdit = true
				}else{
					this.$set(todo,'isEdit',true)   //用$set给todo追加的isEdit属性是Vue所认可的属性，可调用setget，看弹幕在Vue3中没了\Vue3直接写
					// todo.isEdit = true  这种是生硬的加入了一个属性，注意不要出这种错误
					console.log(todo);
				}	
				/* setTimeout(() => {
					this.$refs.inputTitle.focus()
				}, 300); */  //定时器就算立即到点，定时器的回调也会推向队列执行，所以也可以解决，但是官方一点就是用$nextTick

				//$nextTick所指定的回调函数会在dom节点更新之后再执行
				//什么时候用：当改变数据后，要基于更新后的新DOM进行缪写操作时，要在nextTick所指定的回调函数中执行
				this.$nextTick(function(){
					this.$refs.inputTitle.focus()
				})
			},
			//失去焦点回调（真正执行修改逻辑）
			handleBlur(todo,e){  //第二个参数的$event可以获取到该事件的事件对象
				todo.isEdit = false
				if(e.target.value.trim()) return alert('输入不能为空')
				this.$bus.$emit('updateTodo',todo.id,e.target.value)
			}
        }
    }
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}


	/* .todo-enter-active{
        animation: lsb 0.5s linear;
    }
    .todo-leave-active{
        animation: lsb 0.5s linear reverse;
    }

    @keyframes lsb{
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    } */
</style>