//留言板
!function(){
	var view=document.querySelector('section.message')
	var model={
		init:function(){
			//初始化 leadCloud
			var APP_ID = '62ykAOo9X0VE5mhgme3dn2O0-MdYXbMMI';
			var APP_KEY = 'ICa8TO9MOcwMpTf7kVyCyi9C';
			AV.init({
			  appId: APP_ID,
			  appKey: APP_KEY
			});
		},
		fetch:function(){
			//获取数据
			var query = new AV.Query('message');
			return query.find() // 返回一个Promise对象
		},
		save:function(name,content){
		var Message=AV.Object.extend('message');
			var message=new Message();	
			message.set({'content':content,'name':name});
			return	message.save() // 返回Promise对象
		}
	}
	var controller={
		view:null,	
		model:this.model,	
		init:function(view,model){
			this.view=view
			this.model=model
			this.messageList=view.querySelector('#messageList')
			this.form=view.querySelector('form')
			this.model.init()
			this.bindEvent()
			this.getMessage()			
		},
		getMessage:function(){
			//获取留言
			this.model.fetch().then(
				(messages)=> {
					let arr=messages.map(item=>item.attributes)
					arr.forEach(item=>{
						let li=document.createElement('li')
						li.innerText=`${item.name}: ${item.content}`
						this.messageList.appendChild(li)
				})
			});
		},
		bindEvent:function(){
			//监听提交留言
			this.form.addEventListener('submit',(e)=>{
				e.preventDefault()
				this.leaveMessage()
			})
		},
		leaveMessage:function(){
			//提交留言
			let myForm=this.form
			let name=myForm.querySelector('input[name=name]').value
			let content=myForm.querySelector('input[name=content]').value			
			if(content!==''){
				this.model.save(name,content).then(function (Object) {
				  alert('留言成功。')
				  let li=document.createElement('li')
					li.innerText=`${Object.attributes.name}: ${Object.attributes.content}`
					messageList.appendChild(li)
					myForm.querySelector('input[name=content]').value=''
				})
			}else{
				alert('请输入留言')
			}
		}
	}
controller.init(view,model)
}.call()