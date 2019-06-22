/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-21 16:48:10
 * @LastEditTime: 2019-06-21 17:03:18
 * @LastEditors: Please set LastEditors
 */


/**
 touchstart

 触摸事件技术选型
 移动端滑动不反馈，触摸之后才有反馈 js 原生没有 tap 事件
 tap : zepto vue-touch better-scroll

 iscroll swiper better-scroll(对iscroll的二次封装)

最后纠结究极选择 better-scroll

滑动原理
    1 外层的 container 必须包裹内层的 container ，内层的 container 高度必须大于外层 container
    2 滑动内容必须在ajax请求加载完数据之后才触发滑动，否则不滑动
 */
