

// function saveSort(){
	
// 	var doings=doinglist.getElementsByTagName("p");
// 	var dones=donelist.getElementsByTagName("p");
// 	var data=[];
// 	for(i=0;i<doings.length; i++){
// 		data.unshift(todo);
// 	}
// 	for(i=0;i<dones.length; i++){
// 		var todo={"title":dones[i].innerHTML,"type":1};
// 		data.unshift(todo);
// 	}
// 	saveData(data);
// }
// function saveData(data){
// 	localStorage.setItem("todo",JSON.stringify(data));  //从一个对象中解析出字符串
// }


// function update(i,field,value){
	
// }
var collection=[];
/**
 * @function: load 实时添加任务
 * @primary： 获取到的添加的任务对象
 */
function load(data){
	
	var doinglist=document.getElementById("taskDoing");
	var donelist=document.getElementById("taskDone");
	var doingcount=document.getElementById("doingCount");
	var donecount=document.getElementById("doneCount");
	collection.push(data);
	if(collection!=null){
		var doingCount=0;
		var doneCount=0;
		var doingString="";
		var doneString="";
		for (var i = collection.length - 1; i >= 0; i--) {
			if(collection[i].type){
				doneString+="<li  draggable='true'><input type='checkbox' onchange='update("+i+",false)' checked='checked' />"
				+"<p id='p-"+i+"' onclick='edit("+i+")'>"+collection[i].description+"</p>"
				+"</li>";
				doneCount++;
			}
			else{
				doingString+="<li  draggable='true'><input type='checkbox' onchange='update("+i+",\"type\",true)' />"
				+"<p id='p-"+i+"' onclick='edit("+i+")'>"+collection[i].description+"</p>"
				+"</li>";
				doingCount++;
			}
		};
		doingcount.innerHTML=doingCount;
		doinglist.innerHTML=doingString;
		donecount.innerHTML=doneCount;
		donelist.innerHTML=doneString;
	}
	else{
		doingcount.innerHTML=0;
		doinglist.innerHTML="";
		donecount.innerHTML=0;
		donelist.innerHTML="";
	}

	//checkbox

// 	var lis=doinglist.querySelectorAll('ol li');
// 	[].forEach.call(lis, function(li) {
// 		li.addEventListener('dragstart', handleDragStart, false);
// 		li.addEventListener('dragover', handleDragOver, false);
// 		li.addEventListener('drop', handleDrop, false);

// 		onmouseout =function(){
// 			saveSort();
// 		};
// 	});	
}
/**
 * @function: 实现move的相关函数
 */
// var dragSrcEl = null;
// function handleDragStart(e) {
//   dragSrcEl = this;
//   e.dataTransfer.effectAllowed = 'move';
//   e.dataTransfer.setData('text/html', this.innerHTML); //将this.innerHTML的值以'text/html'的数据类型赋给dataTransfer对象
// }
// function handleDragOver(e) {
//   if (e.preventDefault) {
//     e.preventDefault();
//   }
//   e.dataTransfer.dropEffect = 'move';   //设置拖放目标允许移动
//   return false;
// }
// function handleDrop(e) {
//   if (e.stopPropagation) {
//     e.stopPropagation(); 
//   }
//   if (dragSrcEl != this) {
//     dragSrcEl.innerHTML = this.innerHTML;
//     this.innerHTML = e.dataTransfer.getData('text/html');  //从dataTransfer对象中获取之前存进去的值
//   }
//   return false;
// }