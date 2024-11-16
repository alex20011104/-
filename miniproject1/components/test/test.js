// conponents/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    rgb:{
      r:0,
      g:0,
      b:0
    },
    fullcolor:'0,0,0',
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addcount(){
      this.setData({
        count:this.properties.count+1
      })
      this.triggerEvent('sync',{value: this.properties.count})
    },
    changeR(){
      this.setData({
        'rgb.r':this.data.rgb.r + 5 > 255 ? 255 : this.data.rgb.r+5
      })
    },
    changeG(){
      this.setData({
        'rgb.g':this.data.rgb.g + 5 > 255 ? 255 : this.data.rgb.g+5
      })
    },
    changeB(){
      this.setData({
        'rgb.b':this.data.rgb.b + 5 > 255 ? 255 : this.data.rgb.b+5
      })
    },
    
  },
  observers:{
    'rgb.r,rgb.g,rgb.b':function(r,g,b){
      this.setData({
        fullcolor:`${r},${g},${b}`
      })
    }
  }
})
