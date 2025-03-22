Page({
  handleLogin: function(e) {
    if (e.detail.userInfo) {
      // 获取用户基本信息
      const userInfo = e.detail.userInfo
      
      // 获取微信登录凭证
      wx.login({
        success: res => {
        fail: err => {
          wx.showToast({
            title: '登录凭证获取失败',
            icon: 'none'
          })
        },
          if (res.code) {
            // 此处应发送res.code到服务器换取openid和session_key
            wx.setStorageSync('userInfo', userInfo)
            wx.navigateBack()
          }
        }
        }
      })
    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      })
    }
  }
})