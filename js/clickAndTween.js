// 缓动动画，点击导航条li，缓动到对应模块
!function(){
	var view=document.querySelectorAll('nav.menu>ul>li>a')
	var controller={
		view:null,	
		initAnimate:function(){
			function animate(time){
				requestAnimationFrame(animate)
				TWEEN.update(time)
			}
			requestAnimationFrame(animate)
		},

		scrollToElement:function(element){
			let top=element.offsetTop
			
			let currentTop=window.scrollY  //已滚动的距离
			let targetTop= top-80 // 目标距离
			let s=targetTop-currentTop

			var coords={y:currentTop}
			var t=Math.abs((s/100)*300) 
			if (t>500) {t=500}
			var tween = new TWEEN.Tween(coords) // 起始位置
	      		.to({ y: targetTop}, t) // 结束位置 和 时间
	     		.easing(TWEEN.Easing.Quadratic.InOut) // 缓动类型
	     		.onUpdate(function() {
	        	// coords.y 已经变了
	        	window.scrollTo(0,coords.y) // 如何更新界面
	        })
      		.start(); // 开始缓动			
      	},
      	bindEvent:function(){
      		for(let i=0;i<view.length;i++){
      			view[i].onclick=(x)=>{
					x.preventDefault()//阻止默认动作
					let a=x.currentTarget
					let href=a.getAttribute('href')
					let element=document.querySelector(href)
					this.scrollToElement(element)		
				}
			}
		},
		init:function(view){
			this.view=view
			this.initAnimate()
			this.bindEvent()
		}
	}
	controller.init(view)
}.call()