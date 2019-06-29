// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderImg: '/resources/images/service/order.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 跳转到我的订单界面
   */
  navigateToOrder: function() {
    wx.switchTab({
      url: '/pages/order/order',
    })
  },

  /**
   * 跳转到房间搜索界面
   */
  navigateToSearch: function() {
    wx.navigateTo({
      url: '/pages/home/search/search',
    })
  }
})