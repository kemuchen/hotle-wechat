const util = require('../../utils/util.js')
const request = require('../../utils/request.js')
var app = getApp();

// pages/home/home.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ImageList: [],
    indicatorDots: false, //小点
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 300, //滑动时间
    qrImage: '/resources/images/home/qr',
    dyImage: '/resources/images/home/dy',
    zdImage: '/resources/images/home/zd',
    searchImage: '/resources/images/home/search.png',
    locationImage: '/resources/images/home/location.png',
    calendarImage: '/resources/images/home/calendar.png',
    searchBtnImage: '/resources/images/home/search_w.png',
    rightArrowImage: '/resources/images/right-arr.png',
    showModal: false,
    rzsj: '6月27',
    ldsj: '6月28',
    rzts: '一天',
    tjfyList: [{
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
    }],
    currentRzlx: 1,
    clickMaskClose: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadImages();
    wx.requestPayment(
      {
        'timeStamp': '',
        'nonceStr': '',
        'package': '',
        'signType': 'MD5',
        'paySign': '',
        'success': function (res) { 
          console.log("success" + res);
        },
        'fail': function (res) {"fail" + console.log(res);},
        'complete': function (res) {"complete" + console.log(res);}
      }) 
  },

  /**
   * 用户选择入住时间
   */
  selectRzsj: function() {
    this.setData({
      showModal: true
    })
  },

  /**
   * 取消选择入住时间
   */
  unSelectRzsj: function() {
    this.setData({
      showModal: false
    })
  },

  // 处理日期选择事件
  handleSelectDate(e) {
    let dateStart = e.detail.dateStart;
    let dateEnd = e.detail.dateEnd;
    let rzts = util.dateUtil.dateDiff(this.formaDate(dateEnd), this.formaDate(dateStart));
    console.log(rzts);
    this.setData({
      showModal: false,
      rzsj: util.dateUtil.formatNum(dateStart.month) + '月' + util.dateUtil.formatNum(dateStart.day) + '日',
      ldsj: util.dateUtil.formatNum(dateEnd.month) + '月' + util.dateUtil.formatNum(dateEnd.day) + '日',
      rzts: util.dateUtil.convertToChinaNum(rzts) + '天'
    })
  },

  // 格式化日期
  formaDate: function(date) {
    return util.dateUtil.formatNum(date.year) + '-' + util.dateUtil.formatNum(date.month) + '-' + util.dateUtil.formatNum(date.day)
  },

  /**
   * 跳转到搜索房间界面
   */
  searchRoom: function() {
    wx.navigateTo({
      url: '/pages/home/search/search',
    })
  },

  /**
   * 选择入住类型
   */
  selectRzlx: function(e) {
    this.setData({
      currentRzlx: e.currentTarget.dataset.rzlx
    });
  },

  /**
   * 跳转到房间详情界面
   */
  navigateToFjxq: function() {
    wx.navigateTo({
      url: '/pages/home/fjxq/fjxq',
    })
  },

  /**
   * 联系客服
   */
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '0719-8885855',
    })
  },

  /**
   * 跳转链接
   */
  redirectTo: function(e) {
    let link = e.currentTarget.dataset.link;
    if (link) {
      wx.navigateTo({
        url: '/pages/home/webview/webview?link=' + link,
      })
    }
  },

  /**
   * 加载轮播图片列表
   */
  loadImages: function() {
    let params = {
      url: app.globalData.serverUrl + 'getHomeLinks',
      body: {
        sfxs: '1',
        xssjq: util.dateUtil.format(new Date(), 'Y-M-D H:F:S'),
        xssjz: util.dateUtil.format(new Date(), 'Y-M-D H:F:S')
      }
    }
    let that = this;
    request.doRequest(
      params,
      function(data){
        that.setData({
          ImageList: data
        })
      },
      function(data) {
        wx.showToast({
          title: '请求错误',
        })
      }
    )
  }
})