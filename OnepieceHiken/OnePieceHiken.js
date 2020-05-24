ModPE.setItem(500,"불주먹",0,"불주먹");

function useItem(x,y,z,i,b)
{
px=Math.floor(getPlayerX());
py=Math.floor(getPlayerY());
pz=Math.floor(getPlayerZ());
pe=getPlayerEnt();
yaw=Math.floor(getYaw());
pitch=Math.floor(getPitch());
sin=-Math.sin(yaw/180*Math.PI);
cos=Math.cos(yaw/180*Math.PI);
tan=-Math.sin(pitch/180*Math.PI);
pcos=Math.cos(pitch/180*Math.PI);
if(i==500)
{
var 연속 = new java.lang.Runnable( { run: function()
{
Entity.addEffect(getPlayerEnt(),12,2000,3,false,true);
Entity.addEffect(getPlayerEnt(),11,20,4,false,true);

Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,35,14);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,35,14);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,35,14);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,35,14);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,35,14);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,35,14);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
java.lang.Thread.sleep(50);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,4,true);
} } ); new java.lang.Thread( 연속 ).start();
}
}

function newLevel()
{
clientMessage("명령어:/불주먹");
}

function procCmd(cmd)
{
if(cmd=="불주먹")
{
clientMessage("불주먹이 지급돼었습니다");
addItemInventory(500,+1);
}
}

function attackHook(a,v)
{
if(Player.getCarriedItem()==500)
{
Entity.setHealth(v,Entity.getHealth(v)-10);
}
}
