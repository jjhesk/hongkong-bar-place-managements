/*
 * 	Easy Slider 1.7 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/post/4004/easy-slider-15-the-easiest-jquery-plugin-for-sliding
 *
 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
 
/*
 *	markup example for $("#slider").easySlider();
 *	
 * 	<div id="slider">
 *		<ul>
 *			<li><img src="images/01.jpg" alt="" /></li>
 *			<li><img src="images/02.jpg" alt="" /></li>
 *			<li><img src="images/03.jpg" alt="" /></li>
 *			<li><img src="images/04.jpg" alt="" /></li>
 *			<li><img src="images/05.jpg" alt="" /></li>
 *		</ul>
 *	</div>
 *
 */
(function(a){a.fn.easySlider=function(b){var c={prevId:"prevBtn",prevText:"&laquo;",nextId:"nextBtn",nextText:"&raquo;",controlsShow:true,controlsBefore:"",controlsAfter:"",controlsFade:true,firstId:"firstBtn",firstText:"First",firstShow:false,lastId:"lastBtn",lastText:"Last",lastShow:false,vertical:false,speed:600,auto:false,pause:2000,continuous:false,numeric:false,numericId:"controls"};var b=a.extend(c,b);this.each(function(){var g=a(this);var u=a("li",g).length;var q=a("li",g).width();var j=a("li",g).height();var l=true;g.width(q);g.height(j);g.css("overflow","hidden");var m=u-1;var r=0;a("ul",g).css("width",u*q);if(b.continuous){a("ul",g).prepend(a("ul li:last-child",g).clone().css("margin-left","-"+q+"px"));a("ul",g).append(a("ul li:nth-child(2)",g).clone());a("ul",g).css("width",(u+1)*q)}if(!b.vertical){a("li",g).css("float","left")}if(b.controlsShow){var k=b.controlsBefore;if(b.numeric){k+='<ol id="'+b.numericId+'"></ol>'}else{if(b.firstShow){k+='<span id="'+b.firstId+'"><a href="javascript:void(0);">'+b.firstText+"</a></span>"}k+=' <span id="'+b.prevId+'"><a href="javascript:void(0);">'+b.prevText+"</a></span>";k+=' <span id="'+b.nextId+'"><a href="javascript:void(0);">'+b.nextText+"</a></span>";if(b.lastShow){k+=' <span id="'+b.lastId+'"><a href="javascript:void(0);">'+b.lastText+"</a></span>"}}k+=b.controlsAfter;a(g).after(k)}if(b.numeric){for(var f=0;f<u;f++){a(document.createElement("li")).attr("id",b.numericId+(f+1)).html("<a rel="+f+' href="javascript:void(0);">'+(f+1)+"</a>").appendTo(a("#"+b.numericId)).click(function(){d(a("a",a(this)).attr("rel"),true)})}}else{a("a","#"+b.nextId).click(function(){d("next",true)});a("a","#"+b.prevId).click(function(){d("prev",true)});a("a","#"+b.firstId).click(function(){d("first",true)});a("a","#"+b.lastId).click(function(){d("last",true)})}function e(h){h=parseInt(h)+1;a("li","#"+b.numericId).removeClass("current");a("li#"+b.numericId+h).addClass("current")}function o(){if(r>m){r=0}if(r<0){r=m}if(!b.vertical){a("ul",g).css("margin-left",(r*q*-1))}else{a("ul",g).css("margin-left",(r*j*-1))}l=true;if(b.numeric){e(r)}}function d(h,i){if(l){l=false;var s=r;switch(h){case"next":r=(s>=m)?(b.continuous?r+1:m):r+1;break;case"prev":r=(r<=0)?(b.continuous?r-1:0):r-1;break;case"first":r=0;break;case"last":r=m;break;default:r=h;break}var v=Math.abs(s-r);var t=v*b.speed;if(!b.vertical){p=(r*q*-1);a("ul",g).animate({marginLeft:p},{queue:false,duration:t,complete:o})}else{p=(r*j*-1);a("ul",g).animate({marginTop:p},{queue:false,duration:t,complete:o})}if(!b.continuous&&b.controlsFade){if(r==m){a("a","#"+b.nextId).hide();a("a","#"+b.lastId).hide()}else{a("a","#"+b.nextId).show();a("a","#"+b.lastId).show()}if(r==0){a("a","#"+b.prevId).hide();a("a","#"+b.firstId).hide()}else{a("a","#"+b.prevId).show();a("a","#"+b.firstId).show()}}if(i){clearTimeout(n)}if(b.auto&&h=="next"&&!i){n=setTimeout(function(){d("next",false)},v*b.speed+b.pause)}}}var n;if(b.auto){n=setTimeout(function(){d("next",false)},b.pause)}if(b.numeric){e(0)}if(!b.continuous&&b.controlsFade){a("a","#"+b.prevId).hide();a("a","#"+b.firstId).hide()}})}})(jQuery);