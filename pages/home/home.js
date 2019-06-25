// pages/home/home.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ImageList: [
      {
        link: '/pages/index/index',
        url: '/resources/images/1.jpg'
      }, {
        link: '/pages/index/index',
        url: '/resources/images/2.jpg'
      }, {
        link: '/pages/index/index',
        url: '/resources/images/3.jpg'
      }, {
        link: '/pages/index/index',
        url: '/resources/images/4.jpg'
      },{
        link: '/pages/index/index',
        url: '/resources/images/5.jpg'
      }, {
        link: '/pages/index/index',
        url: '/resources/images/6.jpg'
      }
    ],
    indicatorDots: false,  //小点
    autoplay: true,  //是否自动轮播
    interval: 3000,  //间隔时间
    duration: 300,  //滑动时间
    qrImage: '/resources/images/home/qr.png',
    dyImage: '/resources/images/home/dy.png',
    zdImage: '/resources/images/home/zd.png',
    searchImage: '/resources/images/home/search.png',
    locationImage: '/resources/images/home/location.png',
    calendarImage: '/resources/images/home/calendar.png',
    searchBtnImage: '/resources/images/home/search_w.png',
    isHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 用户选择入住时间
   */
  selectRzsj: function() {
    this.setData({
      isHidden: false
    })
  },
  
  /**
   * 取消选择入住时间
   */
  unSelectRzsj: function() {
    this.setData({
      isHidden: true
    })
  }
})