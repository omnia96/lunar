// pages/calendar/calendar.js
import initCalendar from '../../component/calendar/main.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunarInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initCalendar()
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
    var lunarInfo = {
      monthSize: '四月小',
      yearsNumber: '2019',
      yearsLunar: '己亥年【猪年】',
      lunarMonth: '戊辰月',
      todayNumber: '29',
      dateLunar: '三月廿五',
      week: '星期一',
      auspicious: [
        {
          title: '宜',
          content: '祭祀 斋醮 开市 动土'
        },
        {
          title: '忌',
          content: '嫁娶 移徙 入宅'
        }
      ]
    }
    var that = this
    that.setData({
      lunarInfo:lunarInfo
    })
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