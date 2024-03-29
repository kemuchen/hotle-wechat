// pages/order/order.js
const util = require('../../utils/util.js')
const request = require('../../utils/request.js')
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    imageSrc: '/resources/images/1.jpg',
    tabList: [
      {
        index: 1,
        name: '全部订单',
        ddzt: ''
      }, {
        index: 2,
        name: '待支付',
        ddzt: '1'
      }, {
        index: 3,
        name: '待入住',
        ddzt: '2'
      }, {
        index: 4,
        name: '入驻中',
        ddzt: '3'
      }, {
        index: 5,
        name: '已取消',
        ddzt: '6'
      }, {
        index: 6,
        name: '待评价',
        ddzt: '4'
      }
    ],
    orderList: [],
    // 自定义page对象CSS样式对象
    pageBackgroundColor: '#f5f5f5',
    showModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'vipInfo',
      success: function (res) {
        if (res.data) {
          that.setData({
            userid: res.data.id
          })
          console.log(that.data.currentTab);
          // 加载全部订单
          that.loadOrders('');
        } else {
          wx.showToast({
            title: '请先登录',
            icon: 'none'
          })
        }
      },
    })
  },

  /**
   * 切换tab页
   */
  swichNav: function(e) {
    if (e.detail.currentTab == 1) {
      this.setData({
        tabname: ''
      })
    } else {
      this.setData({
        tabname: this.data.tabList[e.detail.currentTab - 1].name
      })
    }
    this.loadOrders(this.data.tabList[e.detail.currentTab - 1].ddzt);
  },

  /**
   * 跳转到订单详情界面
   */
  navigateToOrderInfo: function(e) {
    wx.navigateTo({
      url: '/pages/order/orderinfo/orderinfo?orderid=' + e.currentTarget.dataset.orderid,
    })
  },

  /**
   * 跳转到预定界面
   */
  navigateToOrder: function(e) {
    wx.navigateTo({
      url: '/pages/home/fjyd/fjyd?orderid=' + e.currentTarget.dataset.orderid,
    })
  },

  /**
   * 跳转到查询界面
   */
  navigateToSearch: function() {
    util.navigateTo('/pages/home/search/search', true);
  },

  /**
   * 跳转到办理入住界面
   */
  navigateToBlrz: function (e) {
    wx.navigateTo({
      url: '/pages/service/blrz/blrz?orderid=' + e.currentTarget.dataset.orderid,
    })
  },

  /**
   * 跳转到在住服务界面
   */
  navigateToZzfw: function (e) {
    wx.navigateTo({
      url: '/pages/service/zzfw/zzfw?orderid=' + e.currentTarget.dataset.orderid,
    })
  },

  /**
   * 跳转到订单评价界面
   */
  navigateToPj: function (e) {
    wx.navigateTo({
      url: '/pages/order/comment/comment?orderid=' + e.currentTarget.dataset.orderid + "&jdid=" + e.currentTarget.dataset.jdid,
    })
  },

  /**
   * 根据订单状态加载订单信息
   */
  loadOrders: function(ddzt) {
    let params = {
      url: app.globalData.serverUrl + 'getOrders',
      body: {
        ddzt: ddzt,
        xdrid: this.data.userid
      }
    }
    let that = this;
    request.doRequest(
      params,
      function (data) {
        console.log(data);
        that.setData({
          orderList: data
        })
        if (that.data.orderList.length == 0) {
          that.setData({
            pageBackgroundColor: '#fff;'
          })
        } else {
          that.setData({
            pageBackgroundColor: '#f5f5f5;'
          })
        }
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
   * 
   */
  navigateToPay: function(e) {
    this.setData({
      showModal: true
    })
  }
})