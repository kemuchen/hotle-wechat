// pages/order/orderinfo/orderinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    calendarImage: '/resources/images/home/calendar.png',
    rzsj: '06月27日 21:07',
    ldsj: '06月28日 12:00',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 拨打客服电话
   */
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '0719-8885855',
    })
  }
})