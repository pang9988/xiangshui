// pages/deye/deye.js
//
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deyeData: {}, //总数据
    xingxingValue: 5, //评分
    deyetui: [], //推荐的数据,
    pId: 1, //当前商品的id
    plAll: [{
        name: "小王子",
        content: "迷死一村廉江妹仔，推荐购买"
      },
      {
        name: "小公主",
        content: "男友很喜欢带我出门,非常满意"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //01先获取当前的id编号
    var id = parseInt(options.id)
    this.setData({
      pId: id
    }, () => {
      this.jiazai()
    })
    // 推荐的商品
    db.collection("showye").get().then(res => {
      this.setData({
        deyetui: res.data[5].data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  siftTap(e) { //跳转到详情/可返回
    var id = e.currentTarget.dataset.sifttapid
    wx.navigateTo({
      url: '/pages/deye/deye?id=' + id,
    });
  },
  // /02给生命周期调用的函数
  jiazai() {
    wx.showLoading({
      title: '加载中',
    })
    db.collection("details").where({
      "_id": this.data.pId
    })
   .get().then(res=>{
     this.setData({
       deyeData:res.data[0]
     },()=>{
       wx.hideLoading()
     })
   })
    .catch(err => {
      console.log(err)
    })
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
  onUnload: function() {

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

  }
})