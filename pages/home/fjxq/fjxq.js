// pages/home/fjxq/fjxq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr: [
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg'
    ],
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
      name: '房间介绍'
    }, {
      index: 2,
      name: '房间评价'
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  }
})