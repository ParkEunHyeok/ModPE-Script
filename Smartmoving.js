var Did = {};
Did.Check = true;


Did.Checking = function(){
pe = Player.getEntity(); 
if(Player.isFlying())//날고 있을때
{ 
if(Did.Check)//체크가 true일때
DoubleTouch(); //더블터치 발동
if(Level.getGameMode() == 0)//게임모드가 서바일때
Player.setFlying(false);//못난다
if(Level.getGameMode() == 1)//크리일때
Did.Check = false; //체크는 false
}else{//그 무엇도 아니고
if(!Did.Check){//체크가 가짜일때
DoubleTouch();//더블터치 발동
Did.Check = true;//디드 체크는 true가 됨
}
}
}

function newLevel(){
if(Level.getGameMode() == 0){
Player.setCanFly(true);
}
}
//들어올시 날수있음

function modTick(){
Did.Checking();
}
//디드 체킹을 계속 반복함
function DoubleTouch(){
yaw=Math.floor(getYaw());
pitch=Math.floor(getPitch());
sin=-Math.sin(yaw/180*Math.PI);
tan=-Math.sin(pitch/180*Math.PI);
cos=Math.cos(yaw/180*Math.PI);
Entity.setVelY(getPlayerEnt(),0.4*tan);
Entity.setVelX(getPlayerEnt(),2*sin);
Entity.setVelZ(getPlayerEnt(),2*cos);
}
