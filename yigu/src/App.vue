<template>
  <div id="app">
    <view-box>
      <x-header :left-options="{showBack: false}" slot="header" class="header">
        <i  slot="left" class="icon iconfont icon-saoyisao"></i>
        <div class="form">
          <input type="text" placeholder="搜索" >
          <i class="icon iconfont icon-fangdajing"></i>
        </div>
        <i slot="right" class="icon iconfont icon-xinxi"></i>
      </x-header>

      <router-view></router-view>

      <tabbar>
        <tabbar-item link="/home">
          <i slot="icon" class="icon iconfont icon-yemian"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/pro_list">
          <i slot="icon" class="icon iconfont icon-liebiao"></i>
          <span slot="label">列表</span>
        </tabbar-item>
        <tabbar-item link="/shop_cart">
          <i slot="icon" class="icon iconfont icon-gouwuche"></i>
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item link="/user">
         <i slot="icon" class="icon iconfont icon-wode"></i>
          <span slot="label">我的</span>
        </tabbar-item>
        
        
      </tabbar>

    </view-box>
  </div>
</template>

<script>
import { ViewBox,XHeader,Tabbar, TabbarItem } from 'vux'   //参考vux,组件布局中



export default {
  name: 'App',
  components:{  //引进之后需要注册组件
    ViewBox,
    XHeader,
    Tabbar, 
    TabbarItem
  }
}
</script>


<style lang="less">
  @import './assets/fonts/iconfont.css';
  @import '~vux/src/styles/reset.less' ;

  html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

#app{
  .vux-header{
    height: 2.15rem;
    background-color: #2d9481; 
    .vux-header-left{
      left: 0;
      top: 0;
      width: 3.375rem;
      height: 100%;
      color:#272636;
      
      .icon-saoyisao{
        width: 1.25rem;
        height: 1.25rem;
        font-size: 1.25rem;
        line-height: 2.15rem;
      }
      .icon-saoyisao:before{
        margin-left:0.8rem;
      }
    }
    .vux-header-title{
      height: auto !important;
      color:#272636;
     
      .form{
        input{
          width:12rem;
          height:1.2rem;
          line-height: 1.2rem;
          font-size: 0.55rem;
          border-radius: 0.25rem;
          margin-top: 0.4rem;
          border:1px solid #959595;
        }
      }
      .iconfont{
        font-size: 0.8rem;
        position: absolute;
        top:0.65rem;
        left:14.3rem;
      }
    }
    .vux-header-right{
      right: 0;
      top:0;
      width: 3.375rem;
      height: 100%;
      color:#272636;

      .icon-xinxi{
        width: 1.25rem;
        height: 1.25rem;
        font-size:1.25rem;
        line-height:2.15rem;
      }
      .icon-xinxi:before{
        margin-left: 0.8rem;
      }
    }
  }
  .weui-tabbar{
    position: fixed;
    bottom: 0;
    height: 2.45rem;
    background: #2d9481;
    span{
      font-size: 24px;
      color: #fff;
    }
    .icon{
      color:#fff;
      font-size: 42px;
    }
    .weui-tabbar__item{
      text-indent: -0.2rem;
    }
  }
}
</style>
