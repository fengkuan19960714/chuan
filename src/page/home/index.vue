<template>
    <div class="homeContaier">
        <!-- 图片轮播部分 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) of imgList" :key="index">
                <a href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格部分 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="@/assets/menu1.png" alt="">
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="@/assets/menu2.png" alt="">
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="@/assets/menu3.png" alt="">
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="@/assets/menu4.png" alt="">
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="@/assets/menu5.png" alt="">
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="@/assets/menu6.png" alt="">
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
		</div>
    </div>
</template>
<script>
// 引入Toast模块
import { Toast } from 'mint-ui';

export default {
    data(){
        return{
            imgList:[]
        }
    },
    created(){
        this.getBanner()
    },
    methods:{
        getBanner(){
            this.$http.get("http://lovegf.cn:8899/api/getlunbo").then(result=>{
                console.log(result.body)
                if(result.body.status===0){
                    Toast("数据获取成功")
                    this.imgList=result.body.message
                }else{
                    Toast("数据获取失败")
                }
            })
        }
    }
}
</script>
<style lang="less">
    .mint-swipe-items-wrap{
        height:200px;
        img{
            width:100%;
            height:100%   
        }
    }
    .mui-content{
        .mui-grid-view.mui-grid-9{
            background-color: #fff;
        }
        .mui-content>.mui-table-view:first-child{
            margin-top: 0;
        }
        img{
            width: 80%;
        }
    }
</style>