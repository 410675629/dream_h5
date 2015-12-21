
var dream_arr  = ["回忆2015","梦想实现情况","发现很多梦想","没有实现"];
var tId =null;
$(function(){
	$.init();//页面初始话动画效果
	/* 分享 */
	$('.pop_share').click(function(){
		$(this).fadeOut();
	});
	$('.dreamContainer').bind('click',function  () {
		$(this).hide();
	});

	$('.page-7 .bubble').bind('click',function(event){
		var target = event.target;
		$(target).toggleClass('on');
	})
	$('.page-7 .my-dream').bind('keyup',function(e){
		if($(this).val().length > 20){
			var content = ($(this).val()).slice(0,20);
			$(this).val(content);
			$('.page-7 .tips').css('display','block');
		}
	});

	$('.toShare').bind('click', function(){
		$('.page-7-3').addClass('to-show');
	});
	$('.page-7-3').bind('click', function(){
		$('.page-7-3').removeClass('to-show');
	});

	var dream_id_list;// 用户选择的梦想id
	var dream_data;
	var dream;
	$('.page-7 .btn').bind('click', function() {
		dream_id_list = [];
		dream_data={};
		dream="";
		var bubbles = $('.page-7 .bubble');
		for(var i=0;i<bubbles.length;i++){
			if($(bubbles[i]).hasClass('on')){
				dream_id_list[dream_id_list.length] = {
					'dream_id':$(bubbles[i]).index()
				};
			}
		}
		console.log(dream_id_list);
		if($('.page-7-1 .my-dream').val()!=''){
			dream = $('.page-7-1 .my-dream').val()
		}
		dream_id_list && (dream_data.dream_id_list = dream_id_list);
		dream && (dream_data.dream = dream);

		getData(dream_data);
	});

	function getData(data){
		var _data = {
			wecha_id: window.wecha_id,
			lid: window.activity_type
		}
		if(data){
			data.dream_id_list && (_data.dream_id_list= JSON.stringify(data.dream_id_list));
			data.dream && (_data.dream = data.dream);
		}
		$.ajax({
			url: "http://hy.hzmozhi.com/index.php?g=Wap&m=Dream2015&a=doLottery",
			method: "GET",
			dataType:'jsonp',
			callback: 'callback',
			data: _data,
			success: function(data){
				if(data.code && data.code == 10000){
						var coupon_sn = data.data && (data.data.coupon_sn || '');
						var coupon_value = data.data && (data.data.coupon_value || '');
						var is_lottery = data.data && (data.data.is_lottery || 0);

						$('.page-7-2 .code').text(coupon_sn);

						$('.page-7 .page-7-1').hide();
						$('.page-7 .page-7-2').show();

						if(is_lottery == 1){
							$('.page-7-2 .top-box-1').remove();
							$('.page-7-2 .top-box-2').show();
							$('.page-7-2 .value2').text(coupon_value);
							$('.hongbao-buttom').remove();
						}else{
							$('.page-7-2 .top-box-1').show();
							$('.page-7-2 .top-box-2').remove();
							$('.page-7-2 .value').text(coupon_value);
							$('.page-7-2 p.negative').remove();
						}
				}else{
					data.msg && alert(data.msg);
				}
			},
			error: function(data){
				console.log(data);
				data.msg && alert(data.msg);
			},
			complete:function(){
				// slip.jump(7);
			}
		});
	}
});
$.extend({
	init : function(){
		var elements = $(".text");
		if(elements.html().length>0){return;}
		$.typeIt(elements,0,dream_arr);
	},
	typeIt :function (element,index,array){
	  if(element.length==1){//数组的长度等于0
	  	element.text('');
	  	var s = array[0];
		tId = setInterval(function(){
		    element.append(s.charAt(index));
		    if(index++ === s.length){
			    clearInterval(tId);
		    }
		  },100);
	  }else{
	  	var i = 0;//
	  	var arr_len =  array.length ;
	  	$(element[i]).text('');
	  	tId = setInterval(function(){
		    $(element[i]).append(array[i].charAt(index));
		    if(index++ === array[i].length){
		    	i++;index=0;
		    	if(i ==arr_len){
		    		clearInterval(tId);
		    	}
		    }
		  },100);
	  }
	},
	isWeiXin : function(){
		var ua = window.navigator.userAgent.toLowerCase();
		return ua.match(/MicroMessenger/i) == 'micromessenger' ? true : false;
	}
});
