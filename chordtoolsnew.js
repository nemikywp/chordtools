<script type='text/javascript'>
$(function(){
$(&#39;button&#39;).click(function(){
var ourText = $(&#39;pre&#39;);
var currFontSize = ourText.css(&#39;fontSize&#39;);
var finalNum = parseFloat(currFontSize, 10);
var stringEnding = currFontSize.slice(-2);
if(this.id == &#39;large&#39;) {
finalNum *= 1.1;
}
else if (this.id == &#39;small&#39;){
finalNum /=1.1;
}
else if (this.id == &#39;reset&#39;){
finalNum =14;
}
ourText.animate({fontSize: finalNum + stringEnding},500);
});
});
</script>
<script type="text/javascript">
 $(function() {
    $("pre").transpose();
  });
</script>
<script async="" src="https://cdn.rawgit.com/jessegavin/jQuery-Chord-Transposer/b8bc7a59/jquery.transposer.js" type="text/javascript"></script>
<link href="https://cdn.rawgit.com/jessegavin/jQuery-Chord-Transposer/b8bc7a59/jquery.transposer.css" rel="stylesheet" type="text/css"></link>
<script type='text/javascript'>
//<![CDATA[
// Night Mode
$("#nightmode").click(function(){$("body").toggleClass("nightmode")}),$("body").toggleClass(localStorage.toggled),$("#nightmode").click(function(){"nightmode"!=localStorage.toggled?($("body").toggleClass("nightmode",!0),localStorage.toggled="nightmode"):($("body").toggleClass("nightmode",!1),localStorage.toggled="")});
//]]>
</script>
<script type='text/javascript'>
//<![CDATA[ // Jangan diedit lagi! Nanti ERROR !! //
var speed=1;var disp=0;var handle;var currentspeed=0;var status=1;var currentpos=0,alt=1,curpos1=0,curpos2=-1;var color=new Array();color[1] = "#ddd";color[2] = "#ccc";color[3] = "#bbb";color[4] = "#aaa";color[5] = "#999";var interval=new Array(400,300,200,100,30);function scrollwindow(){if (status==1){if (document.all && !document.getElementById) temp=document.body.scrollTop;else temp=window.pageYOffset;if (alt==0) alt=2;else alt=1;if (curpos1!=curpos2){if (document.all) currentpos=document.body.scrollTop+speed;else currentpos=window.pageYOffset+speed;window.scroll(0,currentpos);}else{currentpos=0;window.scroll(0,currentpos);}}}function startit(s){status=1;currentspeed=s;clearInterval(handle);handle = setInterval("scrollwindow()",interval[s]);}function stopit(){currentspeed=0;for (i=1;i<=5;i++) {document.getElementById('speed'+i).style.backgroundColor=color[i];}status=0;}
function resetBg(n) {for (i=1;i<=5;i++) {document.getElementById('speed'+i).style.backgroundColor=color[i];}for (i=1;i<=currentspeed;i++) {document.getElementById('speed'+i).style.backgroundColor="#00cc00";}}function changeBg(n) {for (i=1;i<=5;i++) {document.getElementById('speed'+i).style.backgroundColor=color[i];}for (i=1;i<=n;i++) {document.getElementById('speed'+i).style.backgroundColor="#00cc00";}}function tooglespeed() {if (disp==0) {disp=1;document.getElementById('speedsobatmasbro').style.display='';document.getElementById('speedtoogle').innerHTML='<svg viewBox="-8 -8 34 34"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" fill="#222"/></svg>';document.getElementById('speedtoogle');}else {disp=0;document.getElementById('speedsobatmasbro').style.display='none';document.getElementById('speedtoogle').innerHTML='<svg viewBox="-9 -9 42 42"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z" fill="#222"/></svg>';document.getElementById('speedtoogle');}}function calcHeight(){var the_height=document.getElementById('sobatmasbro').contentWindow.document.body.scrollHeight;document.getElementById('sobatmasbro').height=the_height;}//script created by https://sobatmasbro.blogspot.com//
//]]></script>
