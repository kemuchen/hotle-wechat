// pages/home/fjyd/fjyd.js
const util = require('../../../utils/util.js')
const request = require('../../../utils/request.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    clickMaskClose: false,
    calendarImage: '/resources/images/home/calendar.png',
    wjxIcon: '/resources/images/wjx.png',
    wjxFillingIcon: '/resources/images/wjx_filling.png',
    user_plus: '/resources/images/service/yqrz.png',
    zffsRadio: [
      { value: '1', name: '钱包支付' },
      { value: '2', name: '微信支付' }
    ],
    fjs: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 如果存在入住时间则设置入住时间
    if (options.ydsj) {
      this.setData({
        ydsj: JSON.parse(options.ydsj)
      });
      console.log(this.data.ydsj.rzsjDate);
      this.setData({
        rzsj: this.data.ydsj.rzsj,
        ldsj: this.data.ydsj.ldsj,
        rzts: this.data.ydsj.rzts,
        rzsjDate: this.data.ydsj.rzsjDate,
        ldsjDate: this.data.ydsj.ldsjDate,
        rzsjWeek: this.data.ydsj.rzsjWeek,
        ldsjWeek: this.data.ydsj.ldsjWeek,
      })
    } else {
      this.setData({
        rzsj: util.dateUtil.format(new Date(), 'M月D'),
        ldsj: util.dateUtil.format(util.dateUtil.nextDay(), 'M月D'),
        rzsjWeek: util.dateUtil.getDetail(new Date()).weekday,
        ldsjWeek: util.dateUtil.getDetail(util.dateUtil.nextDay()).weekday,
        rzts: '一天',
        rzsjDate: util.dateUtil.format(new Date(), 'Y-M-D'),
        ldsjDate: util.dateUtil.format(util.dateUtil.nextDay(), 'Y-M-D')
      })
    }
    // 设置酒店信息
    this.setData({
      fjlxid: options.fjlxid,
      hotel: JSON.parse(options.hotel)
    });

    // 加载酒店房型信息
    this.loadFjlxxx();

    // 获取vip信息
    var that = this;
    wx.getStorage({
      key: 'vipInfo',
      success: function (res) {
        that.setData({
          qbye: util.parseDouble(res.data.qbye),
          id: res.data.id
        });
      },
    });

    // 加载剩余房间数
    this.loadSyfjs();
  },

  /**
   * 用户选择入住时间
   */
  selectRzsj: function () {
    this.setData({
      showModal: true
    })
  },

  /**
   * 取消选择日期
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
      ddyj: rzts * this.data.fjlx.fjjg,
      showModal: false,
      rzsj: util.dateUtil.formatNum(dateStart.month) + '月' + util.dateUtil.formatNum(dateStart.day) + '日',
      ldsj: util.dateUtil.formatNum(dateEnd.month) + '月' + util.dateUtil.formatNum(dateEnd.day) + '日',
      rzts: util.dateUtil.convertToChinaNum(rzts) + '天',
      rzsjDate: this.formaDate(dateStart),
      ldsjDate: this.formaDate(dateEnd),
      rzsjWeek: util.dateUtil.getDetail(util.dateUtil.parse(this.formaDate(dateStart), 'y-m-d')).weekday,
      ldsjWeek: util.dateUtil.getDetail(util.dateUtil.parse(this.formaDate(dateEnd), 'y-m-d')).weekday,
    });
    this.loadSyfjs();
  },

  // 格式化日期
  formaDate: function (date) {
    return util.dateUtil.formatNum(date.year) + '-' + util.dateUtil.formatNum(date.month) + '-' + util.dateUtil.formatNum(date.day)
  },

  /**
   * 房间数减
   */
  bindFjslChange: function(e) {
    if (e.detail.num > this.data.freeRomms) {
      wx.showToast({
        title: '预定房间数不能超过剩余房间数',
        icon: 'none'
      })
      this.setData({
        fjs: e.detail.num - 1
      })
    } else {
      this.setData({
        fjs: e.detail.num
      })
    }
  },

  /**
   * 加载房间类型信息
   */
  loadFjlxxx: function(e) {
    let params = {
      url: app.globalData.serverUrl + 'getHomeType',
      body: {
        id: this.data.fjlxid
      }
    }
    let that = this;
    request.doRequest(
      params,
      function (data) {
        data.fjjg = util.parseDouble(data.fjjg);
        data.hyjg = util.parseDouble(data.hyjg);
        console.log(data);
        that.setData({
          fjlx: data,
          ddyj: util.dateUtil.dateDiff(that.data.ldsjDate, that.data.rzsjDate) * data.fjjg
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
   * 本人入住
   */
  brrz: function() {
    var that = this;
    wx.getStorage({
      key: 'vipInfo',
      success: function(res) {
        that.setData({
          rzrxm: res.data.xm,
          rzrsjhm: res.data.sjhm,
          rzrlx: '1',
          rzrid: that.data.id
        });
      },
    })
  },

  /**
   * 选择入住人
   */
  selectRzr: function() {

  },

  /**
   * 输入备注
   */
  inputMemo: function(e) {
    this.setData({
      memo: e.detail.value
    })
  },

  /**
   * 输入手机号码
   */
  inputSjhm: function(e) {
    this.setData({
      rzrsjhm: e.detail.value
    })
  },

  /**
   * 输入姓名
   */
  inputXm: function (e) {
    this.setData({
      rzrxm: e.detail.value
    })
  },

  radioChange: function(e) {
    this.setData({
      zffs: e.detail.value
    })
  },

  /**
   * 加载剩余房间数
   */
  loadSyfjs: function() {
    let params = {
      url: app.globalData.serverUrl + 'getFreeRooms',
      body: {
        fxid: this.data.fjlxid,
        rzsj: this.data.rzsjDate + '14:00:00',
        ldsj: this.data.ldsjDate + '12:00:00'
      }
    }
    let that = this;
    request.doRequest(
      params,
      function (data) {
        console.log(data);
        that.setData({
          freeRomms: data
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