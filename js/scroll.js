// 滚动效果
!function(){
var view=document.querySelectorAll('[date-x]')
var controller={
	view:null,
	init:function(view){
		this.view=view
		this.bindEvent()
		this.onscroll()
	},
	bindEvent:function(){
	//技能条自动填充
		for(let i=0;i<view.length;i++){
			view[i].classList.add('offset')
		}
	},
	onscroll:function(){
		window.onscroll=()=>{
		//当前视口的模块对应的导航条li高亮
			let specialTags=this.view
			let minIndex=0
			for(let i=1;i<specialTags.length;i++){
				if(Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
					minIndex=i
				}
			}
			specialTags[minIndex].classList.remove('offset')
			let id=specialTags[minIndex].id
			let a=document.querySelector('a[href="#'+id+'"]')
			let li=a.parentNode
			let allLi=li.parentNode.children
			for(let i=0;i<allLi.length;i++){
				allLi[i].classList.remove('highlight')
			}
			li.classList.add('highlight')
		}

	}

}
controller.init(view)
}.call()