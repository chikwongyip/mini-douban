// pages/profile/profile.js
Page({
  /**
   * Page initial data
   */
  data: {
    items: [
      {
        icon: 'ic_cat_movie.png',
        title: '观影分析',
        count: 0,
        has: '看过',
        mark: '标记10部影片\n开启观影分析'
      },
      {
        icon: 'ic_cat_book.png',
        title: '读书分析',
        count: 0,
        has: '读过',
        mark: '标记10本书\n开启读书分析'
      },
      {
        icon: 'ic_cat_music.png',
        title: '音乐分析',
        count: 0,
        has: '听过',
        mark: '标记10张唱片\n开启音乐分析'
      }
    ]
  },
  begin(e) {
    console.log(e.currentTarget);
    console.log(e.currentTarget.dataset.index);
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
