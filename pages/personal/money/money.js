// pages/personal/money/money.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentJe: 0,
    circleImage: '/resources/images/circle.png',
    successImage: '/resources/images/success.png',
    czImage: '/resources/images/user/cz.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 选择充值金额
   */
  selectJe: function(e) {
    let czje = e.currentTarget.dataset.number;
    if (czje == this.data.currentJe) {
      czje = 0;
    }
    this.setData({
      currentJe: czje
    });
  }
})