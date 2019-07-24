// pages/order/orderinfo/orderinfo.js
const util = require('../../../utils/util.js')
const request = require('../../../utils/request.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    calendarImage: '/resources/images/home/calendar.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderid: options.orderid
    })
    this.loadOrderInfo();
    this.loadOrderRoomList();
  },

  /**
   * 拨打客服电话
   */
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '0719-8885855',
    })
  },

  /**
   * 加载订单信息
   */
  loadOrderInfo: function () {
    let params = {
      url: app.globalData.serverUrl + 'getOrder',
      body: {
        orderid: this.data.orderid
      }
    }
    let that = this;
    request.doRequest(
      params,
      function (data) {
        console.log(data);
        that.setData({
          hotel: data.hotel,
          orderInfo: data.orderInfo
        })
      },
      function (data) {
        wx.showToast({
          title: '请求错误',
          icon: 'none'
        })
      }
    )
  },

  /**
   * 加载订单房间列表
   */
  loadOrderRoomList: function() {
    let params = {
      url: app.globalData.serverUrl + 'getOrderRooms',
      body: {
        orderid: this.data.orderid
      }
    }
    let that = this;
    request.doRequest(
      params,
      function (data) {
        console.log(data);
        that.setData({
          roomList: data
        })
      },
      function (data) {
        wx.showToast({
          title: '请求错误',
          icon: 'none'
        })
      }
    )
  }
})