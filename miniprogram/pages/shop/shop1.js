// pages/shop/shop1.js
// 
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
// 
  insert:function(){
    db.collection("caommp").add({
      data:{
        id:1,
        img: '../../images/1.jpg',
        text: '大兄弟今晚同你去搭讪妹咯好不呼呼喹',
        text1: '不去了 今天老婆不让去',
        price: '996',
        show: '20'
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  del:function(){},
  sesect:function(){},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})