<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games" msg="hello">我是一个默认值，当使用者没有传递具体结构时，我会出现1</slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
		data() {
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
			}
		},
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width:200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>