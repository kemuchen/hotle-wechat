// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    imageSrc: '/resources/images/1.jpg',
    tabList: [
      {
        index: 1,
        name: '全部订单'
      }, {
        index: 2,
        name: '待支付'
      }, {
        index: 3,
        name: '待入住'
      }, {
        index: 4,
        name: '入驻中'
      }, {
        index: 5,
        name: '已取消'
      }, {
        index: 6,
        name: '待评价'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 切换tab页
   */
  swichNav: function(e) {
    console.log(e.detail.currentTab);
  }
})