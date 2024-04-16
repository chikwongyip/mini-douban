// pages/home/home.js
Page({
  /**
   * Page initial data
   */
  data: {
    hotMovies: []
  },
  loadData(city) {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: {
        city: city
      },
      header: {
        'content-type': 'json'
      },
      success: (res) => {
        // 赋值同时刷新页面
        this.setData({
          hotMovies: res.data.subjects
        });
      },
      fail: () => {}
    });
  },
  loadCity(success) {
    wx.getLocation({
      success: (res) => {
        wx.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: {
            output: 'json',
            coordtype: 'wgs84ll',
            ak: '9zTl9xXSCCA8FTnsqQA9Ro8B1mO85v4W',
            location: `${res.latitude},${res.longitude}`
            // location: res.latitude + ',' + res.longitude
          },
          success: (res) => {
            let city = res.data.result.addressComponent.city;
            city = city.substring(0, city.length - 1);
            success && success(city);
          },
          fail: () => {
            wx.db.toastError('获取城市失败');
          }
        });
      },
      fail: () => {
        wx.db.toastError('获取定位失败');
      }
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {},

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom() {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {}
});
