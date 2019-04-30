//index.js
//获取应用实例
const app = getApp()
var WXP = require('../../lib/wxp.min.js').default

Page({
  data: {
    lunarInfo: null
  },
  onLoad: function () {
    this.initCache()
    let date = "20190430"
    if(this.lunarInfoIf(date)){
      console.log("start set data")
      console.log(this.lunarInfoIf(date))
    }else{
      console.log("start requst data")
      this.getLunarInfo(date)
    }
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
  handleForward(){
    console.log("前一天")
  },
  handleBack(){
    console.log("后一天")
  },
  getLunarInfo(date){
    WXP.request({
      url:"https://www.baidu.com"
    }).then(result => {
      console.log('success信息:',result)
      let userLunarInfo = app.getCache("userLunarInfo")
      if(userLunarInfo["msg"] == false){
        userLunarInfo = { "msg": true, "data": { "defaut": "默认" }}
        userLunarInfo["data"][date] = 123
        app.setCache("userLunarInfo",userLunarInfo)
      }else{
        userLunarInfo["data"][date] = 456
        // let data = userLunarInfo["data"]
        // data[date] = "6"
        app.setCache("userLunarInfo",userLunarInfo)
      }
    }).catch(error => {
      console.log('fail信息:',error)
    })
  },
  initCache(){
    let userLunarInfo = null
    userLunarInfo = app.getCache("userLunarInfo")
    if(userLunarInfo === false){
      app.setCache("userLunarInfo",{"msg":false,"data":{"defaut":"默认"}})
    }    
  },
  lunarInfoIf(date){
    let userLunarInfo = app.getCache("userLunarInfo")
    console.log(userLunarInfo)
    if(userLunarInfo["msg"] == true){
      //存在缓存数据
      var data = userLunarInfo["data"]
      if(data[date]){
        return data[date]
      }else{
        return false
      }
    }else{
      console.log("没有数据")
      //请求数据
      return false
    }
  }
})
