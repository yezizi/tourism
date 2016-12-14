$(function(){
    $.ajax({
    	url:'wad/recommand/6',
    	method:'get',   	
    	dataType:'json',
    	success:function(data,status,xhr){
            console.log(data);
            for(i=0;i<data.length;i++){
            	$('#name'+i).text(data[i].name);
            	$('#alias'+i).text('<strong>别名：</strong>'+data[i].alias);
            	document.getElementById('alias'+i).innerHTML = '<strong>别名：</strong>'+data[i].alias;
                //document.getElementById('alias'+i).textContent = '<strong>别名：</strong>'+data[i].alias;
                $('#taste'+i).text('味道：'+data[i].taste);         
            	$('#propose'+i).text('推荐人群：'+data[i].propose);    
            	$('#name'+i).attr('href','food.html?id='+data[i].id);
                console.log(i);  
                console.log(data[i].id);         
            	$('#pic_1'+i).attr('src',data[i].pic_1);
            }
    	},
    	error:function(xhr,status,error){
          console.log(error);
    	}
    })
    $.ajax({
    	url:'wad/popular/3',
    	method:'get',   	
    	dataType:'json',
    	success:function(data,status,xhr){
            console.log(data);
            for(i=0;i<data.length;i++){
            	$('#hname'+i).text(data[i].name);
            	$('#halias'+i).text('别名：'+data[i].alias);
            	$('#htaste'+i).text('味道：'+data[i].taste);
            	$('#hname'+i).attr('href','food.html?id='+data[i].id);       	
            	$('#hpic_1'+i).attr('src',data[i].pic_1);
            }
    	},
    	error:function(xhr,status,error){
          console.log(error);
    	}
    })   
   
})