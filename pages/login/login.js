Page({
  handleLogin: function(e) {
    if (e.detail.userInfo) {
      // 获取用户基本信息
      const userInfo = e.detail.userInfo;

      // 获取微信登录凭证
      wx.weixinMiniProgramLogin({
        redirectPath: '/pages/desk/desk',
        success: res => {
          if (res.code) {
            wx.request({
              url: 'https://your-api-domain.com/wechat/login',
              method: 'POST',
              data: { code: res.code },
              success: (resp) => {
                wx.setStorageSync('session_token', resp.data.token);
                // 自动跳转无需手动导航
                
                // 集成云开发功能
                wx.cloud.callFunction({
                  name: 'myCloudFunction'
                });
              },
              fail: (err) => {
                wx.showToast({ title: '登录失败', icon: 'none' });
              }
            });
          }
        },
        fail: err => {
          wx.showToast({ title: '授权失败', icon: 'none' });
        }
      });
    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      });
    }
  }
});
