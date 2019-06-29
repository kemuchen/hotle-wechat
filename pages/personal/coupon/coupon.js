// pages/personal/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
      index: 1,
      name: '未使用'
    }, {
      index: 2,
      name: '已使用'
    }, {
      index: 3,
      name: '已过期'
    }, {
      index: 4,
      name: '已赠送'
    }],
    rmbImage: '/resources/images/user/rmb.png',
    couponList: [{
      id: '1',
      title: '会员福利',
      yxq: '2019-12-31 00：00：00',
      desc: '说明：此券全店全日房型通用，不可转让，周五周六及法定节假日（提前一日）不可用哦~',
      price: 10
    }, {
      id: '2',
      title: '新店开张',
      yxq: '2019-12-31 00：00：00',
      desc: '说明：此券全店全日房型通用，不可转让，周五周六及法定节假日（提前一日）不可用哦~',
      price: 50
    }, {
      id: '3',
      title: '会员福利',
      yxq: '2019-12-31 00：00：00',
      desc: '说明：此券全店全日房型通用，不可转让，周五周六及法定节假日（提前一日）不可用哦~',
      price: 20
    }, {
      id: '4',
      title: '会员福利',
      yxq: '2019-12-31 00：00：00',
      desc: '说明：此券全店全日房型通用，不可转让，周五周六及法定节假日（提前一日）不可用哦~',
      price: 15
    }, {
      id: '5',
      title: '会员福利',
      yxq: '2019-12-31 00：00：00',
      desc: '说明：此券全店全日房型通用，不可转让，周五周六及法定节假日（提前一日）不可用哦~',
      price: 25
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  swichNav: function(e) {
    console.log(e);
  }
})