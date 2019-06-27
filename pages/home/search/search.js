// pages/home/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    searchImage: '/resources/images/home/search_2.png',
    tjfyList: [
      {
        url: '/resources/images/1.jpg',
        fyxj: '三星级',
        fypf: 3.0,
        fymc: '精致大床房',
        fyjg: 188
      }, {
        url: '/resources/images/2.jpg',
        fyxj: '四星级',
        fypf: 5.0,
        fymc: '豪华大床房',
        fyjg: 256
      }, {
        url: '/resources/images/3.jpg',
        fyxj: '四星级',
        fypf: 4.0,
        fymc: '双人房',
        fyjg: 220
      }, {
        url: '/resources/images/4.jpg',
        fyxj: '三星级',
        fypf: 5.0,
        fymc: '精致大床房',
        fyjg: 188
      }
    ],
    scrollTop: 100,
    roomListHeight: 100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      roomListHeight: wx.getSystemInfoSync().windowHeight - 101.5
    })
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
})