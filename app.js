App({
  globalData: {
    userInfo: null,
    queueStatus: {
      currentNumber: 0,
      waitingCount: 0
    }
  },
  onLaunch() {
    // 小程序初始化完成时执行
    wx.getSystemInfo({
      success: res => {
        this.globalData.systemInfo = res;
      }
    })
    wx.getWindowInfo({
      success: res => {
        this.globalData.windowInfo = res
        // 获取设备信息
        wx.getDeviceInfo({
          success: deviceRes => {
            this.globalData.deviceInfo = deviceRes
          }
        })
      }
    })
  }
})