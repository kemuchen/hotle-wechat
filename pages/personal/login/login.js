// pages/personal/login/login.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPhoneLogin: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 显示手机登录
   */
  showPhoneLogin: function() {
    this.setData({
      isPhoneLogin: true
    })
  },

  /**
   * 隐藏手机登录
   */
  hidePhoneLogin: function() {
    this.setData({
      isPhoneLogin: false
    })
  },

  /**
   * 获取手机号码
   */
  getPhoneNumber: function(e) {
    console.log(e);
  },

  /**
   * 
   */
  login: function() {
    wx.setStorage({
      key: 'isLogin',
      data: true,
    })
    wx.navigateBack({})
  }
})