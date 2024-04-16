// app.js
App({
  onLaunch() {
    wx.db = {};

    const toastTypeNormal = 0;
    const toastTypeSuccess = 1;
    const toastTypeError = 2;
    let commonToast = (title, type, duration = 1500) => {
      let options = {
        title: title,
        icon: 'none',
        duration: duration
      };
      if (type == toastTypeSuccess) {
        options.icon = 'success';
      } else if (type == toastTypeError) {
        options.image = '/assets/imgs/upsdk_cancel_normal.png';
      }
      wx.showToast(options);
    };

    wx.db.toast = (title, duration) => {
      commonToast(title, toastTypeNormal, duration);
    };
    wx.db.toastSuccess = (title, duration) => {
      commonToast(title, toastTypeSuccess, duration);
    };
    wx.db.toastError = (title, duration) => {
      commonToast(title, toastTypeError, duration);
    };
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
  },
  globalData: {
    userInfo: null
  }
});
