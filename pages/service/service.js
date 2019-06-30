// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderImg: '/resources/images/service/order.png',
    znkmImage: '/resources/images/service/click.png',
    mmkmImage: '/resources/images/service/password.png',
    rlkmImage: '/resources/images/service/rlsb.png',
    sfzkmImage: '/resources/images/service/sfz.png',
    znkmRoutes: [{
      name: '智能开门',
      icon: '/resources/images/service/click.png',
      index: '0'
    }, {
      name: '密码开门',
      icon: '/resources/images/service/password.png',
      index: '1'
    }, {
      name: '人脸开门',
      icon: '/resources/images/service/rlsb.png',
      index: '2'
    }, {
      name: '身份证开门',
      icon: '/resources/images/service/sfz.png',
      index: '3'
    }, ],
    zzfwRouters: [{
        name: '联系酒店',
        icon: '/resources/images/service/lxkf.png',
        index: '0'
      },
      {
        name: '邀请入住',
        url: '/pages/personal/yj/yj',
        icon: '/resources/images/service/yqrz.png',
        index: '1'
      },
      {
        name: '办理退房',
        url: '/pages/personal/sfrz/sfrz',
        icon: '/resources/images/service/bltf.png',
        index: '2'
      },
      {
        name: '办理续住',
        url: '/pages/personal/cyrzr/cyrzr',
        icon: '/resources/images/service/blxz.png',
        index: '3'
      },
      {
        name: '清洁服务',
        icon: '/resources/images/service/qjfw.png',
        index: '4'
      },
      {
        name: '意见反馈',
        icon: '/resources/images/service/yjfk.png',
        index: '5'
      },
      {
        name: '寻路指南',
        icon: '/resources/images/service/xlzn.png',
        index: '6'
      },
      {
        name: '门店提醒',
        icon: '/resources/images/service/mdtx.png',
        index: '7'
      },
      {
        name: '在线客服',
        icon: '/resources/images/service/zxkf.png',
        index: '8'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 跳转到我的订单界面
   */
  navigateToOrder: function() {
    wx.switchTab({
      url: '/pages/order/order',
    })
  },

  /**
   * 跳转到房间搜索界面
   */
  navigateToSearch: function() {
    wx.navigateTo({
      url: '/pages/home/search/search',
    })
  },

  /**
   * 跳转到办理入住界面
   */
  navigateToBlrz: function() {
    wx.navigateTo({
      url: '/pages/service/blrz/blrz',
    })
  },

  /**
   * 点击在住服务项
   */
  clickZzfwItem: function(e) {
    let index = e.detail.index;
    if (index == 0) {
      // 联系客服
      wx.makePhoneCall({
        phoneNumber: '0719-8885855',
      })
    } else if(index == 1) {
      wx.showToast({
        title: '邀请入住',
        icon: 'none'
      })
    }
  }
})