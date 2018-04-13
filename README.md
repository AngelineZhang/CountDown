# CountDown
<h3>CountDown组件的文档说明</h3>	
			<p>CountDown组件需要传入两个参数，第一个参数是包含倒计时容器的DomId，第二参数options</p>
			<ul>
				<li>
					<h4>options中包含的属性有:</h4>
					<p>endDate：倒计时的结束时间，其值为Date类型；</p>
					<p>timeAction：是一个数组，数组的每一个元素，包含了到规定时间要做的相应操作；</p>
					<p style="color:red"> endDate是约定必须传入的</p>
				</li>
				<li>
					<h4>timeAction每个元素中有三个属性:</h4>
					<p>time:设定要操作的时间，以秒为单位；</p>
					<p>timeSymbol:判断的运算符，根据项目需求目前只有以下三种取值"<=" "=" "<"；</p>
					<p>callback : 到设定的时间，应该做相应操作的回调函数；</p>
					<p style="color:red">timeAction的有无是根据需要而设定的；</p>
					<p ><i>eg:</i>如果想要在倒计时等于30分钟时，需要页面刷新一下页面，则需要在timeAction中
				  添加一个{time:30*60，timeSymbol:"="，callback :refreshPage }对象</p>
				</li>
			</ul>
			<p><i>显示的四个倒计时是四个实例的测试效果</i></p>
