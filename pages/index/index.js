Page({
  data: {
    showModal: false
  },
  
  handleLogin: function(e) {
    this.setData({ showModal: true });
    wx.login({
      success: res => {
        if (res.code) {
          wx.setStorageSync('wxCode', res.code);
          wx.navigateTo({
            url: '/pages/success/success'
          });
        }
      },
      fail: err => {
        wx.showToast({
          title: '登录失败',
          icon: 'none'
        });
      }
    });
  },
  // 处理扫码事件

});
