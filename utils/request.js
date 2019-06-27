/**
 * 处理请求
 * param:
 *    url:请求地址
 *    body: 请求参数
 *    method: 请求方法(GET, POST))
 *    responseType: 返回数据类型
 */
var doRequest=function(param, successFun, failFun) {
  if (param.url) {
    console.error("请传入请求地址")
    return;
  }

  if (param.body) {
    console.error("请传入请求参数")
    return;
  }

  wx.request({
    url: param.url,
    data: param.body,
    method: param.method ? param.method : 'GET',
    dataType: "json",
    success: function(res) {
      if (!res) {
        wx.showToast({
          title: '请求错误',
        })
      } else {
        if (res.code != '1') {
          wx.showToast({
            title: res.msg,
          })
        } else {
          successFun(res.response);
        }
      }
    },
    fail(res) {
      wx.showToast({
        title: '请求错误',
        success:  function(res) {
          failFun(res);
        }
      })
    }
  })
}

module.exports = {
  doRequest: doRequest
}