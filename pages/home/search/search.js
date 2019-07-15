// pages/home/search/search.js
const util = require('../../../utils/util.js')
const request = require('../../../utils/request.js')
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    searchImage: '/resources/images/home/search_2.png',
    sxfyList: [],
    scrollTop: 100,
    roomListHeight: 100,
    tabList: [
      {
        index: 1,
        name: '挑选房间'
      }, {
        index: 2,
        name: '酒店特卖'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      roomListHeight: wx.getSystemInfoSync().windowHeight - 101.5,
    })
    if (options.ydsj) {
      this.setData({
        ydsj: JSON.parse(options.ydsj)
      })
    }
    this.loadSxfy();
  },

  /**
   * 切换tab页
   */
  swichNav: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 跳转到房间详情界面
   */
  navigateToFjxq: function(e) {
    if (this.data.ydsj) {
      wx.navigateTo({
        url: '/pages/home/fjxq/fjxq?ydsj=' + JSON.stringify(this.data.ydsj) + '&hotelid=' + e.currentTarget.dataset.hotelid,
      })
    } else {
      wx.navigateTo({
        url: '/pages/home/fjxq/fjxq?&hotelid=' + e.currentTarget.dataset.hotelid,
      })
    }
  },

  /**
   * 加载推荐房源
   */
  loadSxfy: function () {
    let params = {
      url: app.globalData.serverUrl + 'getHotels',
      body: {}
    }
    let that = this;
    request.doRequest(
      params,
      function (data) {
        that.setData({
          sxfyList: data
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