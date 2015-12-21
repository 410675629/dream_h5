var p2St1=p2St2=p2St3=p2St4=p2St5=p2St6=null;
slip.move(function  () {
	 switch(this.page) {
		case 0:
			clearInterval(tId);
			$(".page-1 ._sun").removeClass('sun');
 			$(".page-1 ._gas").removeClass('gas');
 			$(".page-1 ._text1").removeClass('text1');
 			$(".page-1 ._text2").removeClass('text2');
 			$(".page-1 ._text3").removeClass('text3');
 			$(".page-1 ._text4").removeClass('text4');
 			$(".page-1 ._cloud0").removeClass('cloud0');
 			$(".page-1 ._cloud1").removeClass('cloud1');
 			$(".page-1 ._cloud2").removeClass('cloud2');
 			$(".page-1 ._fly").removeClass('fly');
 			$(".page-1 ._building").removeClass('building');
 			$(".page-1  .text").empty();
		break;
		case 1:
 			for(var i =1 ;i < 6 ; i++){
 				$(".page-2 .p"+i).css("bottom" , "-15rem");
 				$(".page-2 .p"+i).stop(true);
 			}
 			$(".page-2 .pp").hide();
			$(".page-2 .pp").stop(true);
 			clearTimeout(p2St1);
 			clearTimeout(p2St2);
 			clearTimeout(p2St3);
 			clearTimeout(p2St4);
 			clearTimeout(p2St5);
 			clearTimeout(p2St6);
 		break;
 		case 2:
 			for(var i =1 ;i < 7 ; i++){
 				$(".page-3 .p"+i).css("display" , "none");
 			}
 			clearTimeout(p3St1);
 			clearTimeout(p3St2);
 			clearTimeout(p3St3);
 			clearTimeout(p3St4);
 			clearTimeout(p3St5);
 			clearTimeout(p3St6);
 		break;
 		case 3:
 			$(".page-4 .f-dn").css("display" , "none");
 		break;
 		case 4:
 			$(".page-5 ._sun").removeClass('sun');
			$(".page-5 ._text").removeClass('text');
			$(".page-5 ._arrowShow").removeClass('arrowShow');
			$(".page-5 ._tipText").removeClass('tipText').hide();
			$(".page-5 ._people").removeClass('people');
			$(".page-5 .dreamContainer").hide();
 		break;
 		case 5:
 			$(".page-6 ._textDes").removeClass('textDes');
 			$(".page-6 ._text").removeClass('text');
 			$(".page-6 ._sun").removeClass('sun');
 			$(".page-6 ._cloud1").removeClass('cloud1');
 			$(".page-6 ._cloud2").removeClass('cloud2');
 			$(".page-6 ._cloud3").removeClass('cloud3');
 			$(".page-6 ._cloud4").removeClass('cloud4');
 			$(".page-6 ._street").removeClass('street');
 		break;
 	}
});
slip.end(function(){
 	switch(this.page) {
 		case 0:
 			console.log('.page-1  end');
 			$.init();
 			$(".page-1 ._sun").addClass('sun');
 			$(".page-1 ._gas").addClass('gas');
 			$(".page-1 ._text1").addClass('text1');
 			$(".page-1 ._text2").addClass('text2');
 			$(".page-1 ._text3").addClass('text3');
 			$(".page-1 ._text4").addClass('text4');
 			$(".page-1 ._cloud0").addClass('cloud0');
 			$(".page-1 ._cloud1").addClass('cloud1');
 			$(".page-1 ._cloud2").addClass('cloud2');
 			$(".page-1 ._fly").addClass('fly');
 			$(".page-1 ._building").addClass('building');
			break;
	 	case 1:
	 		var _height = $("body").height();
	 		if( _height>=374 && _height<500 ){
		 		p3St6 = setTimeout(function(){
					$(".page-2 .pp").fadeIn();
				},300);	
				p2St1 = setTimeout(function(){
					$(".page-2 .p1").animate({ bottom: "8rem" });
				},400);				
				p2St2 = setTimeout(function(){
					$(".page-2 .p2").animate({ bottom: "9.8rem" });
				},500);				
				p2St3 = setTimeout(function(){
					$(".page-2 .p3").animate({ bottom: "16rem" });
				},900);				
				p2St4 = setTimeout(function(){
					$(".page-2 .p4").animate({ bottom: "20rem" });
				},1300);				
				p2St5 = setTimeout(function(){
					$(".page-2 .p5").animate({ bottom: "28rem" });
				},1700);
	 		}else{
		 		p3St6 = setTimeout(function(){
					$(".page-2 .pp").fadeIn();
				},300);	
				p2St1 = setTimeout(function(){
					$(".page-2 .p1").animate({ bottom: "11rem" });
				},400);				
				p2St2 = setTimeout(function(){
					$(".page-2 .p2").animate({ bottom: "13rem" });
				},500);				
				p2St3 = setTimeout(function(){
					$(".page-2 .p3").animate({ bottom: "20rem" });
				},900);				
				p2St4 = setTimeout(function(){
					$(".page-2 .p4").animate({ bottom: "25rem" });
				},1300);				
				p2St5 = setTimeout(function(){
					$(".page-2 .p5").animate({ bottom: "33.4rem" });
				},1700);	 			
	 		}
			break;			
 		case 2:
			p3St6 = setTimeout(function(){
				$(".page-3 .p6").fadeIn();
			},300);	

			p3St1 = setTimeout(function(){
				$(".page-3 .p1").fadeIn();
			},500);				
			p3St2 = setTimeout(function(){
				$(".page-3 .p2").fadeIn();
			},700);				
			p3St3 = setTimeout(function(){
				$(".page-3 .p3").fadeIn();
			},1100);				
			p3St4 = setTimeout(function(){
				$(".page-3 .p4").fadeIn();
			},1500);				
			p3St5 = setTimeout(function(){
				$(".page-3 .p5").fadeIn();
			},2000);				
			break;
		case 3:
			p4St1 =setTimeout(function(){
				$(".page-4 .qingchun").fadeIn();
				$(".page-4 .ren").fadeIn();
				$(".page-4 .gongzi").fadeIn();
			},800);
			p4St2 =setTimeout(function(){
				$(".page-4 .naxie").fadeIn();
			},1200);
			break;
		case 4:
 			$(".page-5 ._sun").addClass('sun');
			$(".page-5 ._text").addClass('text');
			$(".page-5 ._arrowShow").addClass('arrowShow');
			$(".page-5 ._tipText").addClass('tipText').show();
			$(".page-5 ._people").addClass('people');
			$('.page-5 .people1').on('touchstart',function  (event) {
				$('.dreamContainer').css({'background':'url(./image/page5-5.png) no-repeat',"left":'40%',"background-size":"contain"})
				return false;
			});
			$('.page-5 .people2').on('touchstart',function  (event) {
				$('.dreamContainer').show();
				$('.dreamContainer').css({'background':'url(./image/page5-4.png) no-repeat',"left":'45%',"background-size":"contain"})
				return false;
			});
			$('.page-5 .people3').on('touchstart',function  (event) {
				$('.dreamContainer').show();
				$('.dreamContainer').css({'background':'url(./image/page5-6.png) no-repeat',"left":'70%',"background-size":"contain"})
				return false;
			});
			$('.page-5 .people4').on('touchstart',function  (event) {
				slip.jump(5);
				return false;
			});		
 		break;
		case 5:
			$(".page-6 ._textDes").addClass('textDes');
 			$(".page-6 ._text").addClass('text');
 			$(".page-6 ._sun").addClass('sun');
 			$(".page-6 ._cloud1").addClass('cloud1');
 			$(".page-6 ._cloud2").addClass('cloud2');
 			$(".page-6 ._cloud3").addClass('cloud3');
 			$(".page-6 ._cloud4").addClass('cloud4');
 			$(".page-6 ._street").addClass('street');
			break;
		case 6:
			$(".page-7").css({'display':''});
			break;
 	}

});
