const util = require('../../utils/util.js')

// pages/home/home.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ImageList: [{
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
    }, {
      link: '/pages/index/index',
      url: '/resources/images/5.jpg'
    }, {
      link: '/pages/index/index',
      url: '/resources/images/6.jpg'
    }],
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
    isHidden: true,
    rzsj: '6月27',
    ldsj: '6月28',
    rzts: '一天',
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
    currentRzlx: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  },

  // 处理日期选择事件
  handleSelectDate(e) {
    let dateStart = e.detail.dateStart;
    let dateEnd = e.detail.dateEnd;
    let rzts = util.dateUtil.dateDiff(this.formaDate(dateEnd), this.formaDate(dateStart));
    console.log(rzts);
    this.setData({
      isHidden: true,
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
  }
})