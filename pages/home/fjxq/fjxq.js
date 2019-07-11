const util = require('../../../utils/util.js')
const request = require('../../../utils/request.js')
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: { 
    imgArr: [],
    indicatorDots: false, //小点
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 300, //滑动时间
    current: 1,
    currentTab: 1,
    collectImage: '/resources/images/collect.png',
    collectedImage: '/resources/images/collected.png',
    locationImage: '/resources/images/home/location_h.png',
    mapImage: '/resources/images/home/map.png',
    yzrsIcon: '/resources/images/home/yzrs.png',
    bedIcon: '/resources/images/home/bed.png',
    sizeIcon: '/resources/images/home/size.png',
    doorIcon: '/resources/images/home/door.png',
    wjxIcon: '/resources/images/wjx.png',
    wjxFillingIcon: '/resources/images/wjx_filling.png',
    isCollected: false,
    tabList: [{
      index: 1,
      name: '酒店预定'
    }, {
      index: 2,
      name: '住客评价'
    }, {
      index: 3,
      name: '附近房源'
    }],
    fjssList: [
      {
        icon: '/resources/images/home/linyu.png',
        name: '24小时热水'
      }, {
        icon: '/resources/images/home/dianshi.png',
        name: '电视'
      }, {
        icon: '/resources/images/home/kongtiao.png',
        name: '空调'
      }, {
        icon: '/resources/images/home/wifi.png',
        name: '无线上网'
      }, {
        icon: '/resources/images/home/cfj.png',
        name: '电吹风'
      }, {
        icon: '/resources/images/home/xsyp.png',
        name: '洗漱用品'
      }
    ],
    pfList: [
      {
        name: '设施评分',
        score: '4.0'
      }, {
        name: '卫生评分',
        score: '5.0'
      }, {
        name: '安全感',
        score: '5.0'
      }
    ],
    yhpjList: [
      {
        avator: '/resources/images/home/user.png',
        username: '赵**莉',
        score: '5.0',
        pjsj: '2019-01-28 14:58:01',
        pjnr: '特别不错的酒店'
      }, {
        avator: '/resources/images/home/user.png',
        username: '刘**浩',
        score: '4.0',
        pjsj: '2019-01-28 14:58:01',
        pjnr: '还不错'
      }, {
        avator: '/resources/images/home/user.png',
        username: '张**三',
        score: '5.0',
        pjsj: '2019-01-28 14:58:01',
        pjnr: '特别满意，非常棒'
      }, {
        avator: '/resources/images/home/user.png',
        username: '李**四',
        score: '3.0',
        pjsj: '2019-01-28 14:58:01',
        pjnr: '一般般'
      },
    ],
    fjfyList: [
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
    fxList: [],
    showModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    var hotelid = options.hotelid;
    this.setData({
      hotleid: hotelid
    })
    // 加载酒店图片
    this.loadHotelImage();
    //加载酒店房型
    this.loadHotelRommType();
  },

  /**
   * 切换滚动图片
   */
  swiperChange: function() {
    let temp = (this.data.current + 1) % this.data.imgArr.length;

    this.setData({
      current: temp == 0 ? this.data.imgArr.length : temp
    });
  },

  /**
   * 收藏酒店
   */
  collect: function() {
    this.setData({
      isCollected: !this.data.isCollected
    })
  },

  /**
   * 预览图片
   */
  previewImg: function(e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index], //当前图片地址
      urls: imgArr, //所有要预览的图片的地址集合 数组形式
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 房间详情tab页切换
   */
  swichNav: function(e) {
    let index = e.detail.currentTab;
    this.setData({
      currentTab: index
    });
  },

  /**
   * 打开腾讯地图
   */
  openTencentMap: function() {
    let latitude = 32.66192229056618;
    let longitude = 110.80089569089998;
    wx.openLocation({
      latitude,
      longitude,
      scale: 18
    })
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
   * 查看房间信息
   */
  ckfjxx: function() {
    this.setData({
      showModal: true
    });
  },

  /**
   * 跳转到房间预定界面
   */
  navigateToFjyd: function() {
    wx.navigateTo({
      url: '/pages/home/fjyd/fjyd',
    })
  },

  /**
   * 加载酒店图片信息
   */
  loadHotelImage: function() {
    let params = {
      url: app.globalData.serverUrl + 'getHotelImagesShow',
      body: {
        jdid: this.data.hotleid
      }
    }
    let that = this;
    request.doRequest(
      params,
      function (data) {
        that.setData({
          imgArr: data
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
   * 加载酒店信息
   */
  loadHotelInfo: function() {
    let params = {
      url: app.globalData.serverUrl + 'getHotelInfo',
      body: {
        is: this.data.hotleid
      }
    }
    let that = this;
    request.doRequest(
      params,
      function (data) {
        that.setData({
          hotel: data
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
   * 加载酒店房型信息
   */
  loadHotelRommType: function() {
    let params = {
      url: app.globalData.serverUrl + 'getHotelRoomTypesAndRooms',
      body: {
        jdid: this.data.hotleid
      }
    }
    let that = this;
    request.doRequest(
      params,
      function (data) {
        console.log(data);
        that.setData({
          fxList: data
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