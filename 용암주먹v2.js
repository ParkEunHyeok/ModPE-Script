ModPE.setItem(501,"용암주먹",0,"대분화");

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
if(i==501)
{
var 연속 = new java.lang.Runnable( { run: function()
{
Entity.addEffect(getPlayerEnt(),12,2000,3,false,true);
Entity.addEffect(getPlayerEnt(),11,20,4,false,true);

Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,11);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,11);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,11);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,11);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,11);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,11);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
java.lang.Thread.sleep(50);

explode(px+8*sin*pcos,y+2,pz+8*cos*pcos,3);
Level.setTile(px+8*sin*pcos,y+2,pz+8*cos*pcos ,11);
Level.setTile(px+9*sin*pcos,y+2,pz+9*cos*pcos ,11);
Level.setTile(px+8*sin*pcos,y+1,pz+8*cos*pcos ,11);
Level.setTile(px+9*sin*pcos,y+1,pz+9*cos*pcos ,11);
} } ); new java.lang.Thread( 연속 ).start();
}
}

function newLevel()
{
clientMessage("이 스크립트는 쿠키샌드가 만들었으며 무단수정및 무단배포는 불가능하나 리뷰는 가능합니다");
clientMessage("명령어:/대분화");
}

function procCmd(cmd)
{
if(cmd=="대분화")
{
clientMessage("땅을 터치하면 스킬을 쓸 수 있습니다");
addItemInventory(501,+1);
}
}