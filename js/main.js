

$(function(){
	function resize(){
		var windowWidth = $(window).width();
	var isSmallScreen = windowWidth < 768;
	
	 $("#main_img > .carousel-inner > .item").each(function(index,ele){
	 	var $ele = $(ele);
	 	//$ele.data() 用来取元素data-xxx属性的值里面的参数为data——xxx的名称 如img-sm
	 	$ele.css("backgroundImage","url("+$ele.data(isSmallScreen?'img-sm':'img-bg')+")");
	 	if(isSmallScreen){
	 		$ele.html("<img src="+$ele.data(isSmallScreen?'img-sm':'img-bg')+" />");
	 	}
	 	else{
	 		$ele.empty();//当大于时移除里面的IMG
	 	}
	 })
	}
	$('[data-toggle="tooltip"]').tooltip();
	$(window).on("resize",resize).trigger("resize");
		var $ulWapper = $("#main_products_nav_tabs");
		var width = 30;
	$ulWapper.children("li").each(function(index,ele){
		width += ele.clientWidth;
	})
	if(width>$(window).width()){
		$ulWapper.css("width",width).parent().css("overflow-x","scroll");
	}
	var $newsTitle = $(".newstitle");
	//获取所有的a//给所有的a注册点击事件
	$("#main_news .nav-pills a").on("click",function(){
		var $this=$(this);
		$newsTitle.text($this.data("title"))
	})
	
	
	//获取轮播图元素
	var $carousel = $(".carousel");
	//给轮播图注册滑动事件
	var starX,endX;
	var offset = 50;//用来判断是否有滑动
	$carousel.on("touchstart",function(e){
		starX = e.originalEvent.touches[0].clientX;
	})
	//获取他们的按上和离开时的x坐标
	$carousel.on("touchmove",function(e){
		endX = e.originalEvent.touches[0].clientX;
	})
	//取他们的差的绝对值 看是否有滑动
	$carousel.on("touchend",function(e){
		var moveLength = Math.abs(endX - starX);
		if(moveLength > offset){
			//	 判断向左还是向右滑 调用carousel函数  来实现轮播图的滑动方向
			$(this).carousel(endX > starX?"prev":"next")
		}
	})

})