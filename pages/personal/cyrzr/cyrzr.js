// pages/personal/cyrzr/cyrzr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 跳转到添加入住人界面
   */
  navigateToTjrzr: function() {
    wx.navigateTo({
      url: '/pages/personal/cyrzr/tjrzr/tjrzr',
    })
  }
})