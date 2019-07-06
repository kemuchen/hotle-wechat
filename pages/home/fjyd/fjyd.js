// pages/home/fjyd/fjyd.js
const util = require('../../../utils/util.js')
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
    zffsRadio: [
      { name: '1', value: '钱包支付' },
      { name: '2', value: '微信支付' }
    ],
    ydfjs: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      showModal: false,
      rzsj: util.dateUtil.formatNum(dateStart.month) + '月' + util.dateUtil.formatNum(dateStart.day) + '日',
      ldsj: util.dateUtil.formatNum(dateEnd.month) + '月' + util.dateUtil.formatNum(dateEnd.day) + '日',
      rzts: util.dateUtil.convertToChinaNum(rzts) + '天'
    })
  },

  // 格式化日期
  formaDate: function (date) {
    return util.dateUtil.formatNum(date.year) + '-' + util.dateUtil.formatNum(date.month) + '-' + util.dateUtil.formatNum(date.day)
  },

  /**
   * 房间数减
   */
  bindFjslChange: function(e) {
    this.setData({
      ydfjs: e.detail.num
    })
  },
})