//初始化swiper
!function(){
  var view=document.querySelector('.works')
  var controller={
    view:null,
    swiper:null,
    swiperOptions:{  
      loop: true, // 是否无缝    
      pagination: { // 分页
        el: '.swiper-pagination', 
      },
      navigation: {  // 上一张，下一张
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    init:function(view){
      this.view=view
      this.initSwiper()
    },
    initSwiper:function(){
    this.swiper = new Swiper (view.querySelector('.swiper-container'), this.swiperOptions)
  }
}
  controller.init(view)
}.call()