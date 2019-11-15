// pages/prlist/prlist.js
Page({ 

  /**
   * 页面的初始数据
   */
  data: {
    onSearch:"取消",
    _num:1,
    vu:"",
    vu1:"",
    i:1,
    o:1 ,
    // 详情页
    prlist:[
      {
        img:'../../images/1.jpg',
        text:'大兄弟今晚同你去搭讪妹咯好不呼呼喹',
        text1:'不去了 今天老婆不让去',
        price:'996',
        show:'20'
      },
      {
        img: '../../images/2.jpg',
        text: '大兄弟今晚同你去搭讪妹咯好不呼呼喹',
        text1: '不去了 今天老婆不让去',
        price: '996',
        show: '20'
      },
      {
        img: '../../images/3.jpg',
        text: '大兄弟今晚同你去搭讪妹咯好不呼呼喹',
        text1: '不去了 今天老婆不让去',
        price: '997',
        show: '20'
      },
      {
        img: '../../images/4.jpg',
        text: '大兄弟今晚同你去搭讪妹咯好不呼呼喹',
        text1: '不去了 今天老婆不让去',
        price: '996',
        show: '20'
      },
      {
        img: '../../images/5.jpg',
        text: '大兄弟今晚同你去搭讪妹咯好不呼呼喹',
        text1: '不去了 今天老婆不让去',
        price: '998',
        show: '20'
      },
      {
        img: '../../images/6.jpg',
        text: '大兄弟今晚同你去搭讪妹咯好不呼呼喹',
        text1: '不去了 今天老婆不让去',
        price: '996',
        show: '20'
      },
      {
        img: '../../images/0.jpg',
        text: '大兄弟今晚同你去搭讪妹咯好不呼呼喹',
        text1: '不去了 今天老婆不让去',
        price: '996',
        show: '20'
      },
    ]
  },
// 
  daoClick:function(e){
    let idx=e.currentTarget.dataset.idx;
    // console.log(parseInt(idx));
    if (this._num !==idx){
      this.setData({ _num:idx})
    }
    var idx1 = parseInt(idx);
    if (idx1==2 && this.data.i == 1) {
      //就把i改成2
      this.data.i = 2,
        //这里就变false
        this.setData({
          vu: false
        })
    } else {
      //上面不满足后就是把下面的变1
      this.data.i = 1,
        this.setData({
          vu: true,
        })
    }
    if (idx1==3 && this.data.o == 1) {
      //就把i改成2
      this.data.o = 2,
        //这里就变false
        this.setData({
          vu1: false
        })
    } else {
      //上面不满足后就是把下面的变1
      this.data.o = 1,
        this.setData({
          vu1: true,
        })
    }
  },
 
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