<template>
    <div class="left-nav">
        <ul>
            <li>
                <router-link class="icon iconfont icon-hanbao" to="/cashier">
                    收银
                </router-link>
            </li>
            <li>
                <router-link class="icon iconfont icon-dianpu" to="/shop">
                    店铺
                </router-link>
            </li>
            <li>
                <router-link class="icon iconfont icon-hanbao" to="/">
                    商品
                </router-link>
            </li>
            <li>
                <router-link class="icon iconfont icon-zuanshi" to="/member">
                    会员
                </router-link>
            </li>
            <li>
                <router-link class="icon iconfont icon-goumai" to="/statistics">
                    统计
                </router-link>
            </li>
             <li>
                <i class="icon iconfont icon-gongnengjianyi">
                    设置
                </i>
            </li>
        </ul>
    </div>
</template>
<script>
    import leftNav from '@/components/common/leftNav'
    export default {
        name:'leftNav'
    }
</script>

<style>
    .left-nav{
        color: #fff;
        font-size: 10px;
        height: 100%;
        background-color: #1D8CE0;
        float: left;
        width: 5%;
    }
    .iconfont{
        font-size: 14px;
    }
    .left-nav ul{
        padding: 0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding:10px;
    }
</style>
