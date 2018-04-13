(function()
{
	var CountDown = function(domId,options){
		this.domId = domId;
		this.timer = null;
		this.timeItem ={
			"dayDom":'',
			"hourDom":'',
			"minuteDom":'',
			"secondDom": ''
		}
		
		this.options ={};
		for(var item in options){
			if ( options.hasOwnProperty(item)){
				this.options[item] = options[item];	
			}					
		}	
		this._init ();	
	};

	CountDown.prototype._init = function(){
		var self = this;
		self._getDomElement();	

		this.timer = setInterval(function(){
			
			var t = (Date.parse(self.options.endDate)-Date.parse(new Date()))/1000;

			self._timeAction(self.options.timeAction,t);	
			if(t <= 0){	
				self.timeItem.dayDom.innerHTML ="00";
				self.timeItem.hourDom.innerHTML ="00";
				self.timeItem.minuteDom.innerHTML = "00";
				self.timeItem.secondDom.innerHTML = "00";			
				clearInterval(this.timer);
				return;
			}
			self._updateTime(t);
			
		},1000);		
	};

	CountDown.prototype._updateTime = function (time){

		this.timeItem.dayDom.innerHTML =this._setTime(Math.floor((time/60/60/24)));
		this.timeItem.hourDom.innerHTML =this._setTime(Math.floor((time/60/60)%24));
		this.timeItem.minuteDom.innerHTML = this._setTime(Math.floor((time/60)%60));
		this.timeItem.secondDom.innerHTML = this._setTime(Math.floor(time%60));		
	};
	
	CountDown.prototype._getDomElement = function(){
		var countDown = document.getElementById(this.domId);
		this.timeItem.dayDom = countDown.querySelectorAll('*[data-time = day]')[0];
		this.timeItem.hourDom = countDown.querySelectorAll('*[data-time = hour]')[0];
		this.timeItem.minuteDom = countDown.querySelectorAll('*[data-time = min]')[0];
		this.timeItem.secondDom = countDown.querySelectorAll('*[data-time = sec]')[0];
	}

	CountDown.prototype._setTime = function(num){
		return num >=10 ? num : "0"+num;
	};

	
	CountDown.prototype._timeAction = function ( actionList , t){
		if( actionList  && actionList.length >0){
			for (var i = 0 ; i < actionList.length ; i++){
			    if ( actionList[i].timeSymbol == "<" && t <actionList[i].time ){
					actionList[i].callback(this.domId);
					actionList.splice(i,1);
					break;
				} else if( actionList[i].timeSymbol == "<=" && t <= actionList[i].time ){
					actionList[i].callback(this.domId);
					actionList.splice(i,1);
					break;
				} else if(actionList[i].timeSymbol == "=" && t == actionList[i].time){
					actionList[i].callback(this.domId);
					actionList.splice(i,1);
					break;
				}
			}
		}
	};
	
	
	window.CountDown = function(){
		return function (domId,options){
				new CountDown(domId,options);
		}
		
	}();
})(window);