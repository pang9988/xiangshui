// pages/nbaClass/nbaClass.js
const db = wx.cloud.database(
  {
    
  }
);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classRm: [
      {
        name: "热门品牌",
        info: "8"
      },
      {
        name: "热门香调",
        info: null
      },
      {
        name: "热门香味",
        info: "12"
      },
      {
        name: "男人香",
        info: null
      },
      {
        name: "女人花",
        info: null
      },
      {
        name: "33号古龙",
        info: null
      },
      {
        name: "情缘女士",
        info: null
      },
 
    ],
    active: 0,
    classData: [],//总数据
    classDataList: []//切换数据
  },

  classActive(e) {//标签修改事件
    this.setData({
      classDataList: this.data.classData[e.detail].data
       
    })
  },
  classSKIP() {
    wx.navigateTo({
      // url: '/pages/nbaSeek/nbaSeek',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({//提示
      title: '加载中',
    })
    db.collection("class").get()//查询数据
      .then(res => {
        console.log(res);
        this.setData({
          classData: res.data,
          classDataList: res.data[0]

        }, () => {
          wx.hideLoading();//隐藏提示
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    db.collection("class").get()//查询数据
      .then(res => {
        this.setData({
          classData: res.data,
          // classDataList: res.data[0]

        }, () => {
          wx.hideLoading();//隐藏提示
   console.log(classData)
        })

      })
      .catch(err => {
        console.log(err)
      })

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