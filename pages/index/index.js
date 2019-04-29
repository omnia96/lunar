//index.js
//获取应用实例
const app = getApp()
var WXP = require('../../lib/wxp.min.js').default

Page({
  data: {
  },
  onLoad: function () {
    var data = {
      "status": "0",
      "msg": "ok",
      "result": {
        "year": "2015",
        "month": "10",
        "day": "27",
        "yangli": "公元2015年10月27日",
        "nongli": "农历二〇一五年九月十五",
        "star": "天蝎座",
        "taishen": "厨灶碓外西南",
        "wuxing": "涧下水",
        "chong": "冲（庚午）马",
        "sha": "煞南",
        "shengxiao": "羊",
        "jiri": "天牢（黑道）满日",
        "zhiri": "天牢（黑道凶日）",
        "xiongshen": "灾煞 天火 大煞 归忌 天牢 触水龙",
        "jishenyiqu": "天德 月德 时德 福德 民日 天巫 普护 鸣犬对",
        "caishen": "西南",
        "xishen": "西南",
        "fushen": "正东",
        "suici": [
          "乙未年",
          "丙戌月",
          "丙子日"
        ],
        "yi": [
          "纳采",
          "成服"
        ],
        "ji": [
          "入宅",
          "上梁",
          "谢土"
        ],
        "eweek": "TUESDAY",
        "emonth": "October",
        "week": "二"
      }
    }
  }
})
