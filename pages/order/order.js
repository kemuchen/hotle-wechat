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
    ],
    orderList: [
      {
        fjmc: '精致大床房',
        ddzt: '已取消',
        rzsj: '06/27',
        ldsj: '06/28',
        lc: '17',
        fjh: '1729',
        sfje: '0.00'
      }, {
        fjmc: '精致大床房',
        ddzt: '已取消',
        rzsj: '06/27',
        ldsj: '06/28',
        lc: '17',
        fjh: '1729',
        sfje: '0.00'
      }, {
        fjmc: '精致大床房',
        ddzt: '已取消',
        rzsj: '06/27',
        ldsj: '06/28',
        lc: '17',
        fjh: '1729',
        sfje: '0.00'
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
  },

  /**
   * 跳转到订单详情界面
   */
  navigateToOrderInfo: function() {
    wx.navigateTo({
      url: '/pages/order/orderinfo/orderinfo',
    })
  },

  /**
   * 跳转到预定界面
   */
  navigateToOrder: function() {
    wx.navigateTo({
      url: '/pages/home/fjyd/fjyd',
    })
  }
})