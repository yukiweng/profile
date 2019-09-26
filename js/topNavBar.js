!function(){
	var view=document.querySelector('#topNavBar')
	var controller={
		view:null,
		init:function(view){
			this.view=view
			this.bindEvent()
			this.onscroll()
		},
		bindEvent:function(){ //移入导航条li时触发浮层
			var liTags=view.querySelectorAll('nav.menu>ul>li')
			for(let i=0;i<liTags.length;i++){ //遍历li标签的classname
				liTags[i].onmouseenter=function(x){ //鼠标移动到元素上时触发
					x.currentTarget.classList.add('active')			
				}
				liTags[i].onmouseleave=(x)=>{ //鼠标移出元素时触发
					x.currentTarget.classList.remove('active')
				}
			}

		},
		onscroll:function(){
			//下滑时，导航条收缩悬挂页面顶部
			window.addEventListener('scroll',()=>{
				if(window.scrollY>0){
					this.view.classList.add('sticky')
				}else{
					this.view.classList.remove('sticky')
				}
			})				
		}
	}
	controller.init(view)
}.call()