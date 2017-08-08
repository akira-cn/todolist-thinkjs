var collection=[];
var doneCol=[];
var doingCol=[];
/**
 * @function: load 实时添加任务
 * @primary： 获取到的添加的任务对象
 */
function load(data){
	// if(data.type == 0){
	// 	doingCol.push(data);  //doingCol记录待办task
	// }
	// if(data.type == 1){
	// 	doneCol.push(data);   //doneCol记录已办task
	// }
	var doinglist=document.getElementById("taskDoing");
	var donelist=document.getElementById("taskDone");
	var doingcount=document.getElementById("doingCount");
	var donecount=document.getElementById("doneCount");
	doingcount.innerHTML=0;
	doinglist.innerHTML="";
	donecount.innerHTML=0;
	donelist.innerHTML="";
	collection.push(data);
	if(collection!=null){
		var doingCount=0;
		var doneCount=0;
		var doingString="";
		var doneString="";
		//<i class="fa fa-trash">  <i class="fa fa-trash">
		for (var i = collection.length - 1; i >= 0; i--) {
			if(collection[i].type){
				doneString+="<li  draggable='true'><input data-id="+collection[i].id+" data-type=" +collection[i].type+ " type='checkbox' checked='checked' class='listInput'/>"
				+"<p id='p-"+i+"'>"+collection[i].description+"</p>"+"<button data-bid="+collection[i].id+"><i class='fa fa-trash'></i></button>"
				+"</li>";
				doneCount++;
				doneCol.push(collection[i]);
			}
			else{
				doingString+="<li  draggable='true'><input data-id="+collection[i].id+" data-type=" +collection[i].type+ " type='checkbox' class='listInput' />"
				+"<p id='p-"+i+"'>"+collection[i].description+"</p>"+"<button data-bid="+collection[i].id+"><i class='fa fa-trash'></i></button>"
				+"</li>";
				doingCount++;
				doingCol.push(collection[i]);
			}
		};
		doingcount.innerHTML=doingCount;
		doinglist.innerHTML=doingString;
		donecount.innerHTML=doneCount;
		donelist.innerHTML=doneString;

		$('.listInput:last').change(function(){
			// let sid = $(this).data('id');
			// let stype = $(this).data('type');
			let str = $.param({id:$(this).data('id'),type:$(this).data('type')});
		    $.ajax({
		        url: "/home/index/update",
		        data: str,
		        type: 'POST',
		        success: function(){
		        	$.get("api/task/get/id/116", function(arg){
		              var data = arg.data;
		              load(data);
		            }); 
		        }
		    })
		});

		//delete
  		$('button:last').click(function(){
  			let str = $.param({id:$(this).data('bid')});
  			$.ajax({
  				url: "home/index/delete",
  				data: str,
  				type: 'POST',
  				success: function(){
  					$.get("api/task/get/id/117", function(arg){
		              var data = arg.data;
		              load(data);
		            }); 
  				}
  			})
 		})
	}
	else{
		doingcount.innerHTML=0;
		doinglist.innerHTML="";
		donecount.innerHTML=0;
		donelist.innerHTML="";
	}
}



// $.get("api/task/get/id//", function(arg){
// 	var data = arg.data;
// 	load(data);
// }); 
