$(document).ready(function() {
    var prevpage = $("#pre").attr("href");
    var nextpage = $("#next").attr("href");
    $("body").keydown(function(event) {
        if (event.keyCode == 37 && prevpage != undefined) location = prevpage;
        if (event.keyCode == 39 && nextpage != undefined) location = nextpage
    })
});
$(document).ready(function() {
	$(".tabNav_01").click(function(){
			$(".tabNav_01").addClass("current");
			$(".tabNav_02,.tabNav_03").removeClass("current");
			$("#jiu,.xialasy1").show();
			$(".xialasy2,.xialasy3").hide();
			$("#xin,#sou").hide();
	});
	$(".tabNav_02").click(function(){
			$(".tabNav_02").addClass("current");
			$(".tabNav_01,.tabNav_03").removeClass("current");
			$("#xin,.xialasy2").show();
			$(".xialasy1,.xialasy3").hide();
			$("#jiu,#sou").hide();
	});
	$(".tabNav_03").click(function(){
			$(".tabNav_03").addClass("current");
			$(".tabNav_01,.tabNav_02").removeClass("current");
			$("#sou,.xialasy3").show();
			$(".xialasy1,.xialasy2").hide();
			$("#xin,#jiu").hide();
	});
	$("#xin").hide();
	$("#sou").hide();
    $(".kaiguan").click(function() {
        $(".xuanxiang").toggle()
    })
});
$(document).ready(function() {
    $(".guan").click(function() {
        $(".xuanxiang").hide()
    })
});
$(document).ready(function() {
    $(".zitikaiguan").click(function() {
        $(".ziti").toggle()
    })
});
$(document).ready(function() {
    $(".zitiguan").click(function() {
        $(".ziti").hide()
    })
});
$(document).ready(function() {
    $(".weixinkaiguan").click(function() {
        $(".weixin").toggle()
    })
});
$(document).ready(function() {
    $(".weixinguan").click(function() {
        $(".weixin").hide()
    })
});
$(document).ready(function() {
    $(".yinpinkaiguan").click(function() {
        $(".yinpin").toggle()
    })
});
$(document).ready(function() {
    $(".yinpinguan").click(function() {
        $(".yinpin").hide()
    })
});
$(document).ready(function() {
    $(".kuangguan").click(function() {
        $(".kuang").hide()
    })
});
$(document).ready(function() {
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i) ? true: false
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i) ? true: false
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true: false
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) ? true: false
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows())
        }
    };
    if (isMobile.any()) {
        $("#playerLrc").click(function(){
            $("#playerLrc").toggleClass("caidanguan caidankai");
            $("#caidan,#top").toggleClass("caidanguans caidankais");
            $("#xuanxiang").toggleClass("xuanxiang2 xuanxiang3")
        })
    }
});