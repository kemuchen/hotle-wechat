Component({
  properties: {
    num: {
      type: Number,
      value: 1
    }
  },

  data: {
    // input默认是1
    num: 1,
    // 使用data数据对象设置样式名
    minusStatus: 'disabled'
  },

  methods: {
    /* 点击减号 */
    Minus: function() {
      var num = this.data.num;
      // 如果大于1时，才可以减
      if (num > 1) {
        num--;
      }
      // 只有大于一件的时候，才能normal状态，否则disable状态
      var minusStatus = num <= 1 ? 'disabled' : 'normal';
      // 将数值与状态写回
      this.setData({
        num: num,
        minusStatus: minusStatus
      });
      this.triggerEvent('Minus', { num: this.data.num });
    },
    /* 点击加号 */
    Plus: function() {
      var num = this.data.num;
      // 不作过多考虑自增1
      num++;
      // 只有大于一件的时候，才能normal状态，否则disable状态
      var minusStatus = num < 1 ? 'disabled' : 'normal';
      // 将数值与状态写回
      this.setData({
        num: num,
        minusStatus: minusStatus
      });
      this.triggerEvent('Plus', { num: this.data.num });
    },
    /* 输入框事件 */
    Manual: function(e) {
      var num = e.detail.value;
      // 将数值与状态写回
      this.setData({
        num: num
      });
      this.triggerEvent('Manual', { num: this.data.num });
    }
  }
})