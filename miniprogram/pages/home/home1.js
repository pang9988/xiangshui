// pages/base/base1.js
const db = wx.cloud.database();
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    homeImg: [],//轮播图片,
    homenav:[],
    homeping:[],
    homeslide:[],
    homeslideB:[],
    homeslideC:[],
    msg: "caohello",
    mum1: 20,
    bool1: false,
    value: "",

    //  轮播图的数据 
    indicatorDots: true,
    indicatorColor: "white",
    autoplay: false,
    interval: 2000,
    duration: 500,

  },
  // 跳转到商品列表
  prlist: function() {
    wx.navigateTo({
      url: '/pages/prlist/prlist',

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    db.collection("showye").get().then(res => {
      this.setData({
        homeImg:res.data[0].CarouselImg,
        homenav:res.data[1].NavImg,
        homeping:res.data[2].PingImg,
        homeslide:res.data[3].data,
        homeslideB:res.data[4].data,
        homeslideC:res.data[5].data
      },()=>{
        wx.hideLoading()
      })
      // console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

// 
  siftTap(e) {//跳转到详情/可返回
    var id = e.currentTarget.dataset.sifttapid
    wx.navigateTo({
      url: '/pages/deye/deye?id=' + id,
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (options) {


  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 滚轮事件
  onPageScroll: function(e) {
    this.setData({
      // scrollTop: e.scrollTop,
      // showSu:e.showSu
    })
    // console.log(e);
  },
  // 滚到底部
  onReachBottom() {
    console.log("页面滚动到底部")
  }
})