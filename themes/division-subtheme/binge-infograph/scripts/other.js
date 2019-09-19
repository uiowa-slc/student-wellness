
   // Decide whether to suppress missing file error or not based on preference setting
var suppressMissingFileError = true

   window.Muse.assets.check=function(c){if(!window.Muse.assets.checked){window.Muse.assets.checked=!0;var b={},d=function(a,b){if(window.getComputedStyle){var c=window.getComputedStyle(a,null);return c&&c.getPropertyValue(b)||c&&c[b]||""}if(document.documentElement.currentStyle)return(c=a.currentStyle)&&c[b]||a.style&&a.style[b]||"";return""},a=function(a){if(a.match(/^rgb/))return a=a.replace(/\s+/g,"").match(/([\d\,]+)/gi)[0].split(","),(parseInt(a[0])<<16)+(parseInt(a[1])<<8)+parseInt(a[2]);if(a.match(/^\#/))return parseInt(a.substr(1),
16);return 0},f=function(f){for(var g=document.getElementsByTagName("link"),j=0;j<g.length;j++)if("text/css"==g[j].type){var l=(g[j].href||"").match(/\/?css\/([\w\-]+\.css)\?crc=(\d+)/);if(!l||!l[1]||!l[2])break;b[l[1]]=l[2]}g=document.createElement("div");g.className="version";g.style.cssText="display:none; width:1px; height:1px;";document.getElementsByTagName("body")[0].appendChild(g);for(j=0;j<Muse.assets.required.length;){var l=Muse.assets.required[j],k=l.match(/([\w\-\.]+)\.(\w+)$/),i=k&&k[1]?
k[1]:null,k=k&&k[2]?k[2]:null;switch(k.toLowerCase()){case "css":i=i.replace(/\W/gi,"_").replace(/^([^a-z])/gi,"_$1");g.className+=" "+i;i=a(d(g,"color"));k=a(d(g,"backgroundColor"));i!=0||k!=0?(Muse.assets.required.splice(j,1),"undefined"!=typeof b[l]&&(i!=b[l]>>>24||k!=(b[l]&16777215))&&Muse.assets.outOfDate.push(l)):j++;g.className="version";break;case "js":j++;break;default:throw Error("Unsupported file type: "+k);}}c?c().jquery!="1.8.3"&&Muse.assets.outOfDate.push("jquery-1.8.3.min.js"):Muse.assets.required.push("jquery-1.8.3.min.js");
g.parentNode.removeChild(g);if(Muse.assets.outOfDate.length||Muse.assets.required.length)g="Some files on the server may be missing or incorrect. Clear browser cache and try again. If the problem persists please contact website author.",f&&Muse.assets.outOfDate.length&&(g+="\nOut of date: "+Muse.assets.outOfDate.join(",")),f&&Muse.assets.required.length&&(g+="\nMissing: "+Muse.assets.required.join(",")),suppressMissingFileError?(g+="\nUse SuppressMissingFileError key in AppPrefs.xml to show missing file error pop up.",console.log(g)):alert(g)};location&&location.search&&location.search.match&&location.search.match(/muse_debug/gi)?
setTimeout(function(){f(!0)},5E3):f()}};
var muse_init=function(){require.config({baseUrl:""});require(["jquery","museutils","whatinput","jquery.musepolyfill.bgsize","jquery.watch","webpro","musewpslideshow","jquery.museoverlay","touchswipe","jquery.museresponsive"],function(c){var $ = c;$(document).ready(function(){try{
window.Muse.assets.check($);/* body */
Muse.Utils.transformMarkupToFixBrowserProblemsPreInit();/* body */
Muse.Utils.detectScreenResolution();/* HiDPI screens */
Muse.Utils.prepHyperlinks(true);/* body */
(function(){
	try{

$(document).ready(function(){$('.holdingpapers').attr('data-animation-classes','animated1 null fadeInLeftBig');$('.holdingpapers').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.wineicons').attr('data-animation-classes','animated1 null wobble');$('.wineicons').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.arrowbeer').attr('data-animation-classes','animated1 null fadeInUp');$('.arrowbeer').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.beer').attr('data-animation-classes','animated1 null wobble');$('.beer').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.keg').attr('data-animation-classes','animated1 null wobble');$('.keg').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.hopswobble').attr('data-animation-classes','animated1 null wobble');$('.hopswobble').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.books').attr('data-animation-classes','animated1 null rotateInDownLeft');$('.books').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:1000,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.fadeindelayed').attr('data-animation-classes','animated1 null fadeIn');$('.fadeindelayed').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:1000,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.hittingsnooze').attr('data-animation-classes','animated1 null fadeInRightBig');$('.hittingsnooze').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.zzz').attr('data-animation-classes','animated1 null jackInTheBox');$('.zzz').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:1000,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.pointingright').attr('data-animation-classes','animated1 null fadeInLeftBig');$('.pointingright').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.textfadeinleft').attr('data-animation-classes','animated1 null fadeInLeft');$('.textfadeinleft').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.womencups').attr('data-animation-classes','animated1 null fadeInRightBig');$('.womencups').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.mencups').attr('data-animation-classes','animated1 null fadeInLeftBig');$('.mencups').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.textfadein').attr('data-animation-classes','animated1 null fadeIn');$('.textfadein').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.textfadeinup').attr('data-animation-classes','animated1 null fadeInUp');$('.textfadeinup').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.imgslideleft').attr('data-animation-classes','animated1 null fadeInLeftBig');$('.imgslideleft').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.winestats').attr('data-animation-classes','animated1 null fadeInUp');$('.winestats').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.wineslider').attr('data-animation-classes','animated1 null fadeInRightBig');$('.wineslider').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.shotglassslideinleft').attr('data-animation-classes','animated1 null fadeInLeftBig');$('.shotglassslideinleft').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.textwobble').attr('data-animation-classes','animated1 null wobble');$('.textwobble').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:1,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.maleassult').attr('data-animation-classes','animated1 null fadeInLeft');$('.maleassult').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.femaleassult').attr('data-animation-classes','animated1 null fadeInRight');$('.femaleassult').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.pow').attr('data-animation-classes','animated1 null bounceIn');$('.pow').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:1000,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
(function(){
	try{

$(document).ready(function(){$('.pointingleft').attr('data-animation-classes','animated1 null fadeInRightBig');$('.pointingleft').attr('data-animate','');var isMobile=function(){if(window.matchMedia("(max-width: 480px)").matches){return!0}else{return!1}};var animate1=new Animate({target:'[data-animate]',animatedClass:'js-animated',offset:0,delay:0,remove:!1,scrolled:!0,reverse:false,onLoad:!0,onScroll:!0,onResize:!1,disableFilter:false,callbackOnInit:function(){},callbackOnAnimate:function(el){},});animate1.init()})

	}
	catch(e)
	{
		Muse.Assert.fail('Error with Widget:The Animator - On Scroll (2.4) ParamHTMLOnDocReady Handler ' + e.toString());
	}
})();/* Widget:The Animator - On Scroll (2.4) */
Muse.Utils.resizeHeight('.browser_width');/* resize height */
Muse.Utils.requestAnimationFrame(function() { $('body').addClass('initialized'); });/* mark body as initialized */
Muse.Utils.resizeHeight('.popup_anchor.allow_click_through');/* resize height */
Muse.Utils.makeButtonsVisibleAfterSettingMinWidth();/* body */
Muse.Utils.initWidget('#pamphletu9033', ['#bp_infinity', '#bp_1024', '#bp_768', '#bp_600', '#bp_414', '#bp_375', '#bp_320'], function(elem) { return new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'loose',event:'mouseover',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:200,hideAllContentsFirst:false,triggersOnTop:false,shuffle:false,enableSwipe:true,resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false,isResponsive:true}); });/* #pamphletu9033 */
Muse.Utils.fullPage('#page');/* 100% height page */
$( '.breakpoint' ).registerBreakpoint();/* Register breakpoints */
Muse.Utils.transformMarkupToFixBrowserProblems();/* body */
}catch(b){if(b&&"function"==typeof b.notify?b.notify():Muse.Assert.fail("Error calling selector function: "+b),false)throw b;}})})};
