// pages/personal/personal.js
//获取应用实例
const app = getApp()

Page({

  data: {
    defaultUserImg: '/resources/images/user/default-user.png',
    vipImg: '/resources/images/user/vip.png',
    cardImg: '/resources/images/user/atm-card.png',
    scoreImg: '/resources/images/user/score.png',
    moneyImg: '/resources/images/user/score.png',
    couponImg: '/resources/images/user/score.png',
    rightArrowImage: '/resources/images/right-arr.png',
    userInfo: {},
    routers: [{
        name: '发票',
        url: '/pages/personal/fp/fp',
        icon: '/resources/images/user/fp.png',
        index: '0'
      },
      {
        name: '押金',
        url: '/pages/personal/yj/yj',
        icon: '/resources/images/user/yj.png',
        index: '1'
      },
      {
        name: '身份认证',
        url: '/pages/personal/sfrz/sfrz',
        icon: '/resources/images/user/sfrz.png',
        index: '2'
      },
      {
        name: '常用入住人',
        url: '/pages/personal/cyrzr/cyrzr',
        icon: '/resources/images/user/cyrzr.png',
        index: '3'
      },
      {
        name: '长租申请',
        icon: '/resources/images/user/czsq.png',
        index: '4'
      },
      {
        name: '加盟申请',
        icon: '/resources/images/user/jmsq.png',
        index: '5'
      },
      {
        name: '联系客服',
        icon: '/resources/images/user/lxkf.png',
        index: '6'
      },
      {
        name: '加入我们',
        icon: '/resources/images/user/jrwm.png',
        index: '7'
      },
      {
        name: '设置',
        icon: '/resources/images/user/settings.png',
        index: '8'
      }
    ]
  },

  onLoad: function() {

  },

  /**
   * 切换到在住服务tab页
   */
  navigateToZzfw: function() {
    wx.switchTab({
      url: '/pages/service/service',
    })
  },

  /**
   * 跳转到钱包界面
   */
  navigateToMoney: function() {
    wx.navigateTo({
      url: '/pages/personal/money/money',
    })
  },

  /**
   * 跳转到优惠券界面
   */
  navigateToCoupon: function() {
    wx.navigateTo({
      url: '/pages/personal/coupon/coupon',
    })
  },

  /**
   * 跳转九宫格服务
   */
  navigateService: function(e) {
    let index = e.currentTarget.dataset.index;

    if (index == 6) {
      // 联系客服
      wx.makePhoneCall({
        phoneNumber: '18207173275',
      })
    } else if (!this.data.routers[index].url) {
      wx.showToast({
        title: '此功能暂未开通',
        icon: 'none'
      })
    } else {
      wx.navigateTo({
        url: this.data.routers[index].url,
      })
    }
  }
})