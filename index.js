var arr=["red","green","yellow", "blue"];
var uc=[];
var rc=[];
var start=false;
var level=0;
document.addEventListener("keypress",function(){
if(!start){
   nxt();
   start=true;
}
})
function nxt(){
   uc=[];
   level++
   $("#level-title").text("level"+level);
var k=arr[Math.floor(Math.random()*4)];
rc.push(k);
console.log(k);
anime(k);
playSound(k);
}
$(".btn").on("click",function(){
   console.log("clicked");
   var l=$(this).attr("id");
   uc.push(l);
   addanime(l);
   checkanswer(uc.length-1);
})
function checkanswer(level){
   if(uc[level]===rc[level]){
      if(uc.length==rc.length){
         setTimeout(function(){
            nxt();
         },1000)
      }
   }
   else{
      playSound("wrong")
      $("body").addClass("game-over");
      $("#level-title").text("GameOver Press Any key to restart");
      console.log("hello");
      setTimeout(function(){
         $("body").removeClass("game-over");
      },200)
      startover();
   }
}
function addanime(l){
   $("#"+l).addClass("pressed");
   setTimeout(function(){
      console.log("kis");
      $("#"+l).removeClass("pressed");
   },100)
}
function anime(k){
$('#'+k).fadeIn(100).fadeOut(100).fadeIn(100);
}
function playSound(k){
var audio=new Audio("sounds/"+k+".mp3");
audio.play();
}
function startover(){
   level=0;
   start=false;
   rc=[];
}





