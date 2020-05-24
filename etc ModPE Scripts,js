
function newLevel()
{
clientMessage("막대기를 들고 있으면 화살이 계속 날아갑니다");
}

function modTick()
{
if(getCarriedItem()==280)
{
px = getPlayerX();
py=getPlayerY();
pz=getPlayerZ();
pe=getPlayerEnt();
yaw=getYaw();
pitch=getPitch();
sin=-Math.sin(yaw/180*Math.PI);
cos=Math.cos(yaw/180*Math.PI);
tan=-Math.sin(pitch/180*Math.PI);
pcos=Math.cos(pitch/180*Math.PI);
var 화살 = Level.spawnMob(px,py+2,pz,80);
Entity.setVelX(화살,4*sin);
Entity.setVelY(화살,3*tan);
Entity.setVelZ(화살,3*cos);
}
}
