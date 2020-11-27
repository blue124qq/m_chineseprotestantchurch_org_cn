function CheckAll(form){
    aid = new Array();
    channel = new Array();
	for (var i = 0; i < form.elements.length; i++){
		if (form.elements[i].type == "checkbox" && !form.elements[i].disabled){
			form.elements[i].checked = true;
		};
	};
	return true;
};
function CheckTurn(form){
    aid = new Array();
    channel = new Array();
	for (var i = 0; i < form.elements.length; i++){
		if (form.elements[i].type == "checkbox" && !form.elements[i].disabled){
			if (form.elements[i].checked){
				form.elements[i].checked = false;
			}else{
				form.elements[i].checked = true;
			};
		};
	};
	return true;
};

var n = 2;
function previewmc( id ){ 
var list = "";
    if (document.getElementsByName("mcbox") != null) {
        for (var i = 0; i < document.getElementsByName("mcbox").length; i++) {
            if (document.getElementsByName("mcbox")[i].checked == true) {
                if (list == "") {
                    list += document.getElementsByName("mcbox")[i].value;
                } else {
                    list += "," + document.getElementsByName("mcbox")[i].value;
                }
            }
        }
    }
    if (list != "") {
		
        window.open("/play/?song_id=" + encode(list),'player','width=600,height=420');
    } 
	 else {
        alert("请选择您要连续播放的音乐!");
    }
	}

var n = 2;
function previewjt( id ){ 
var list = "";
    if (document.getElementsByName("jtbox") != null) {
        for (var i = 0; i < document.getElementsByName("jtbox").length; i++) {
            if (document.getElementsByName("jtbox")[i].checked == true) {
                if (list == "") {
                    list += document.getElementsByName("jtbox")[i].value;
                } else {
                    list += "," + document.getElementsByName("jtbox")[i].value;
                }
            }
        }
    }
    if (list != "") {
		
        window.open("/play/?song_id=" + encode(list),'player','width=600,height=420');
    } 
	 else {
        alert("请选择您要连续播放的音乐!");
    }
	}

var n = 2;
function previewyy() {
    var list = "";
    if (document.getElementsByName("yybox") != null) {
        for (var i = 0; i < document.getElementsByName("yybox").length; i++) {
            if (document.getElementsByName("yybox")[i].checked == true) {
                if (list == "") {
                    list += document.getElementsByName("yybox")[i].value;
                } else {
                    list += "," + document.getElementsByName("yybox")[i].value;
                }
            }
        }
    }
    if (list != "") {
		
        window.open("/play/?song_id=" + encode(list),'player','width=600,height=420');
    } else {
        alert("请选择您要连续播放的音乐!");
    }
}

var n = 2;
function previewqt() {
    var list = "";
    if (document.getElementsByName("qtbox") != null) {
        for (var i = 0; i < document.getElementsByName("qtbox").length; i++) {
            if (document.getElementsByName("qtbox")[i].checked == true) {
                if (list == "") {
                    list += document.getElementsByName("qtbox")[i].value;
                } else {
                    list += "," + document.getElementsByName("qtbox")[i].value;
                }
            }
        }
    }
    if (list != "") {
		
        window.open("/play/?song_id=" + encode(list),'player','width=600,height=420');
    } else {
        alert("请选择您要连续播放的音乐!");
    }
}

var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*-=";
function encode(input) {
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;
    do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output +
            keyStr.charAt(enc1) +
            keyStr.charAt(enc2) +
            keyStr.charAt(enc3) +
            keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);
    return output;
}

function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.style.display=i==cursel?"block":"none";
	}
}

var DD = function (id) {
		return "string" == typeof id ? document.getElementById(id) : id;
	};

	var Extend = function(destination, source) {
		for (var property in source) {
			destination[property] = source[property];
		}
		return destination;
	}

	var CurrentStyle = function(element){
		return element.currentStyle || document.defaultView.getComputedStyle(element, null);
	}

	var Bind = function(object, fun) {
		var args = Array.prototype.slice.call(arguments).slice(2);
		return function() {
			return fun.apply(object, args.concat(Array.prototype.slice.call(arguments)));
		}
	}

	var Tween = {
		Quart: {
			easeOut: function(t,b,c,d){
				return -c * ((t=t/d-1)*t*t*t - 1) + b;
			}
		},
		Back: {
			easeOut: function(t,b,c,d,s){
				if (s == undefined) s = 1.70158;
				return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
			}
		},
		Bounce: {
			easeOut: function(t,b,c,d){
				if ((t/=d) < (1/2.75)) {
					return c*(7.5625*t*t) + b;
				} else if (t < (2/2.75)) {
					return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
				} else if (t < (2.5/2.75)) {
					return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
				} else {
					return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
				}
			}
		}
	}


	var SlideTrans = function(container, slider, count, options) {
		this._slider = DD(slider);
		this._container = DD(container);
		this._timer = null;
		this._count = Math.abs(count);
		this._target = 0;
		this._t = this._b = this._c = 0;
		
		this.Index = 0;
		
		this.SetOptions(options);
		
		this.Auto = !!this.options.Auto;
		this.Duration = Math.abs(this.options.Duration);
		this.Time = Math.abs(this.options.Time);
		this.Pause = Math.abs(this.options.Pause);
		this.Tween = this.options.Tween;
		this.onStart = this.options.onStart;
		this.onFinish = this.options.onFinish;
		
		var bVertical = !!this.options.Vertical;
		this._css = bVertical ? "top" : "left";
		
		var p = CurrentStyle(this._container).position;
		p == "relative" || p == "absolute" || (this._container.style.position = "relative");
		this._container.style.overflow = "hidden";
		this._slider.style.position = "absolute";
		
		this.Change = this.options.Change ? this.options.Change :
			this._slider[bVertical ? "offsetHeight" : "offsetWidth"] / this._count;
	};
	SlideTrans.prototype = {
	  SetOptions: function(options) {
		this.options = {
			Vertical:	true,
			Auto:		true,
			Change:		0,
			Duration:	50,
			Time:		25,
			Pause:		9000,
			onStart:	function(){},
			onFinish:	function(){},
			Tween:		Tween.Quart.easeOut
		};
		Extend(this.options, options || {});
	  },
	  Run: function(index) {
		index == undefined && (index = this.Index);
		index < 0 && (index = this._count - 1) || index >= this._count && (index = 0);
		this._target = -Math.abs(this.Change) * (this.Index = index);
		this._t = 0;
		this._b = parseInt(CurrentStyle(this._slider)[this.options.Vertical ? "top" : "left"]);
		this._c = this._target - this._b;
		
		this.onStart();
		this.Move();
	  },
	  Move: function() {
		clearTimeout(this._timer);
		if (this._c && this._t < this.Duration) {
			this.MoveTo(Math.round(this.Tween(this._t++, this._b, this._c, this.Duration)));
			this._timer = setTimeout(Bind(this, this.Move), this.Time);
		}else{
			this.MoveTo(this._target);
			this.Auto && (this._timer = setTimeout(Bind(this, this.Next), this.Pause));
		}
	  },
	  MoveTo: function(i) {
		this._slider.style[this._css] = i + "px";
	  },
	  Next: function() {
		this.Run(++this.Index);
	  },
	  Previous: function() {
		this.Run(--this.Index);
	  },
	  Stop: function() {
		clearTimeout(this._timer); this.MoveTo(this._target);
	  }
	};

function CheckLogin(){
	  var taget_obj = document.getElementById('_ajax_feedback');
	  myajax = new DedeAjax(taget_obj,false,false,'','','');
	  myajax.SendGet2("/member/ajax_feedback.php");
	  DedeXHTTP = null;
}
function login(){
	  var taget_obj = document.getElementById('_ajax_login');
	  myajax = new DedeAjax(taget_obj,false,false,'','','');
	  myajax.SendGet2("/member/ajax_loginsta.php");
	  DedeXHTTP = null;
}
function postBadGood(ftype,fid)
{
	var taget_obj = document.getElementById(ftype+fid);
	var saveid = GetCookie('badgoodid');
	if(saveid != null)
	{
		var saveids = saveid.split(',');
		var hasid = false;
		saveid = '';
		j = 1;
		for(i=saveids.length-1;i>=0;i--)
		{
			if(saveids[i]==fid && hasid) continue;
			else {
				if(saveids[i]==fid && !hasid) hasid = true;
				saveid += (saveid=='' ? saveids[i] : ','+saveids[i]);
				j++;
				if(j==10 && hasid) break;
				if(j==9 && !hasid) break;
			}
		}
		if(hasid) { alert('您刚才已表决过了喔！'); return false;}
		else saveid += ','+fid;
		SetCookie('badgoodid',saveid,1);
	}
	else
	{
		SetCookie('badgoodid',fid,1);
	}
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	myajax.SendGet2("/plus/feedback.php?aid="+fid+"&action="+ftype+"&fid="+fid);
}
function postDigg(ftype,aid)
{
	var taget_obj = document.getElementById('newdigg');
	var saveid = GetCookie('diggid');
	if(saveid != null)
	{
		var saveids = saveid.split(',');
		var hasid = false;
		saveid = '';
		j = 1;
		for(i=saveids.length-1;i>=0;i--)
		{
			if(saveids[i]==aid && hasid) continue;
			else {
				if(saveids[i]==aid && !hasid) hasid = true;
				saveid += (saveid=='' ? saveids[i] : ','+saveids[i]);
				j++;
				if(j==20 && hasid) break;
				if(j==19 && !hasid) break;
			}
		}
		if(hasid) { alert("您已经顶过该帖，请不要重复顶帖 ！"); return; }
		else saveid += ','+aid;
		SetCookie('diggid',saveid,1);
	}
	else
	{
		SetCookie('diggid',aid,1);
	}
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	var url = "/plus/digg_ajax.php?action="+ftype+"&id="+aid;
	myajax.SendGet2(url);
}
function getDigg(aid)
{
	var taget_obj = document.getElementById('newdigg');
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	myajax.SendGet2("/plus/digg_ajax.php?id="+aid);
	DedeXHTTP = null;
}
