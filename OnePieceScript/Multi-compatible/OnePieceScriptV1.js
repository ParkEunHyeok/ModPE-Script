
var 고무고무피스톨 = 0;
var 고무고무게틀링 = 0;
var 기어세컨드 = 0;
var 기어서드 = 0;
var 룸 = 0;
var 메스지정 = 0;
var 메스공격 = 0;
var 카운터쇼크 = 0;
var 키코쿠 = 0;
var 소지진 = 0;
var 지진 = 0;
var 대지진 = 0;
var 언월도 = 0;
var 불주먹 = 0;
var 불기둥 = 0;
var 히건 = 0;
var 염제 = 0;
var 대분화 = 0;
var 유성화산 = 0;
var 명구 = 0;
var 견신홍련 = 0;

ModPE.setItem(470,"고무고무열매",0,"Gomu Gomu no mi");
ModPE.setItem(471,"고무고무피스톨",0,"Gomu Gomu no Pistol");
ModPE.setItem(472,"고무고무게틀링",0,"Gomu Gomu no Gatling");
ModPE.setItem(473,"기어세컨드",0,"Gear Second");
ModPE.setItem(474,"기어서드",0,"Gear Third");
Player.addItemCreativeInv(470,3,0);
ModPE.setItem(475,"수술수술열매",0,"Ope Ope no mi");
ModPE.setItem(476,"룸",0,"Room");
ModPE.setItem(477,"메스",0,"Mes");
ModPE.setItem(478,"카운터쇼크",0,"Counter Shock");
ModPE.setItem(479,"키코쿠",0,"Kikoku");
Player.addItemCreativeInv(475,3,0);
ModPE.setItem(480,"흔들흔들열매",0,"Gura Gura no mi");
ModPE.setItem(481,"소지진",0,"Kaishin");
ModPE.setItem(482,"지진",0,"Shima yurashi");
ModPE.setItem(483,"대지진",0,"Kubatowari");
ModPE.setItem(484,"언월도",0,"Biseto");
Player.addItemCreativeInv(480,3,0);
ModPE.setItem(485,"이글이글열매",0,"Mera Mera no mi");
ModPE.setItem(486,"불주먹",0,"Hiken");
ModPE.setItem(487,"염제불기둥",0,"Enkai Hibashira");
ModPE.setItem(488,"히건",0,"Higan");
ModPE.setItem(489,"대염계염제",0,"Daienkai Entei");
Player.addItemCreativeInv(485,3,0);
ModPE.setItem(490,"마그마마그마열매",0,"Magu Magu no mi");
ModPE.setItem(491,"대분화",0,"Dai Funka");
ModPE.setItem(492,"유성화산",0,"Ryusei Kazan");
ModPE.setItem(493,"명구",0,"Meigo");
ModPE.setItem(494,"견신홍련",0,"Inugami Guren");
Player.addItemCreativeInv(490,3,0);

Block.defineBlock(232,"룸블럭","룸블럭",false,0);
Block.setLightLevel(232,15);
Block.setDestroyTime(232,3);
Block.setRenderLayer(232,1);
Block.setLightOpacity(232,15);
Block.setExplosionResistance(232,9999);
Block.defineBlock(233,"룸해제블럭","룸해제블럭",false,0);
Block.setLightLevel(233,15);
Block.setDestroyTime(233,-1);
Block.setRenderLayer(233,1);
Block.setLightOpacity(233,15);
Block.setExplosionResistance(233,99999);

function procCmd(cmd)
{
if(cmd=="악마의열매")
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,470,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,475,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,480,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,485,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,490,1,0);
}
}

function newLevel()
{
clientMessage("이 스크립트는 쿠키샌드가 제작하였습니다");
clientMessage("리뷰는 가능하나 무단수정, 무단배포는 금지입니다");
clientMessage("열매는 크리에이티브에서 꺼내거나 명령어/악마의열매");
}

function useItem(x,y,z,i,b)
{
if(i==470)
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,471,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,472,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,473,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,474,1,0);
}
if(i==475)
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,476,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,477,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,478,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,479,1,0);
}
if(i==480)
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,481,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,482,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,483,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,484,1,0);
}
if(i==485)
{
Entity.addEffect(getPlayerEnt(),12,9999999,0,false,true);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,486,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,487,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,488,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,489,1,0);
}
if(i==490)
{
Entity.addEffect(getPlayerEnt(),12,9999999,0,false,true);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,491,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,492,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,493,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,494,1,0);
}
if(i==471&&고무고무피스톨==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
고무고무피스톨 = 80;

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
Entity.addEffect(getPlayerEnt(),11,20,4,false,true);
setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos,159,0);
setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos,159,0);
setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos,159,0);
setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos,159,0);
setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos,159,0);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,2);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,2);

java.lang.Thread.sleep(2000);

setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos,0);
setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos,0);
setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos,0);
setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos,0);
setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos,0);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==472&&고무고무게틀링==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
고무고무게틀링 = 100;

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
Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,159,0);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,159,0);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,159,0);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,159,0);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,159,0);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);

Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,1.5);
java.lang.Thread.sleep(300);

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,159,0);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,159,0);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,159,0);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,159,0);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,159,0);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);

Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,1.5);
java.lang.Thread.sleep(300);

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,159,0);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,159,0);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,159,0);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,159,0);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,159,0);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);

Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,1.5);
java.lang.Thread.sleep(300);

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,159,0);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,159,0);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,159,0);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,159,0);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,159,0);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);

Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,1.5);
java.lang.Thread.sleep(300);

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,159,0);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,159,0);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,159,0);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,159,0);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,159,0);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);

Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,1.5);
java.lang.Thread.sleep(300);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==473&&기어세컨드==0)
{
기어세컨드 = 400;

Entity.addEffect(getPlayerEnt(),1,300,4,false,true);
Entity.addEffect(getPlayerEnt(),8,300,4,false,true);
}
if(i==474&&기어서드==0)
{
기어서드 = 160;

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
Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,159,0);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,159,0);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,159,0);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,159,0);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,159,0);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);

Entity.addEffect(getPlayerEnt(),11,20,4,false,true);
explode(x,y+2,z,3.5);
}
if(i==476&&룸==0)
{
for(var X=-14;X<20;X++)
for(var Y=-14;Y<20;Y++)
for(var Z=-14;Z<20;Z++) 
{
if((X*X)+(Y*Y)+(Z*Z)<=(15*15)&&(X*X) +(Y*Y)+(Z*Z)>=(14)*(14))
{
Level.setTile(x+X,y+Y,z+Z,232);
Level.setTile(x,y,z,233);
룸 = 300;
}}}
if(i==476&&b==233)
{
for(var X=-14;X<20;X++)
for(var Y=-14;Y<20;Y++)
for(var Z=-14;Z<20;Z++) 
{
if((X*X)+(Y*Y)+(Z*Z)<=(15*15)&&(X*X) +(Y*Y)+(Z*Z)>=(14)*(14))
{
Level.setTile(x+X,y+Y,z+Z,0);
Level.setTile(x,y,z,0);
}}}
if(getCarriedItem()==477&&메스공격==0)
{
메스공격 = 60;
Enx=Entity.getX(vv);
Eny=Entity.getY(vv);
Enz=Entity.getZ(vv);
explode(Enx,Eny,Enz,1);
}
if(i==478&&카운터쇼크==0)
{
카운터쇼크 = 100;

Entity.addEffect(getPlayerEnt(),11,20,4,false,true);
Entity.addEffect(getPlayerEnt(),12,100,4,false,true);

explode(x,y+1,z,2);
Level.spawnMob(x,y,z,93);
}
if(i==479&&키코쿠==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
키코쿠 = 60;

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
Entity.addEffect(getPlayerEnt(),11,20,4,false,true);

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,35,15);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,35,15);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,35,15);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,35,15);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,35,15);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,35,15);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,35,15);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+8*sin*pcos,y+2,pz+8*cos*pcos ,35,15);
Level.destroyBlock(px+8*sin*pcos,y+2,pz+8*cos*pcos ,false);
explode(px+8*sin*pcos,y+2,pz+8*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+9*sin*pcos,y+2,pz+9*cos*pcos ,35,15);
Level.destroyBlock(px+9*sin*pcos,y+2,pz+9*cos*pcos ,false);
explode(px+9*sin*pcos,y+2,pz+9*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+10*sin*pcos,y+2,pz+10*cos*pcos ,35,15);
Level.destroyBlock(px+10*sin*pcos,y+2,pz+10*cos*pcos ,false);
explode(px+10*sin*pcos,y+2,pz+10*cos*pcos,0.9);
java.lang.Thread.sleep(50);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==481&&소지진==0)
{
소지진 = 90;

Entity.addEffect(getPlayerEnt(),11,20,4,false,true);
Level.setTile(x,y+2,z,35,0);
Level.destroyBlock(x,y+2,z,false);
explode(x,y+2,z,3);
}
if(i==482&&지진==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
지진 = 120;

Entity.addEffect(getPlayerEnt(),11,20,4,false,true);
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

explode(px+2*sin*pcos,y+1,pz+2*cos*pcos,2.3);
java.lang.Thread.sleep(150);
explode(px+4*sin*pcos,y+1,pz+4*cos*pcos,2.3);
java.lang.Thread.sleep(150);
explode(px+6*sin*pcos,y+1,pz+6*cos*pcos,2.3);
java.lang.Thread.sleep(50);
explode(px+8*sin*pcos,y+1,pz+8*cos*pcos,2.3);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==483&&대지진==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
대지진 = 140;

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

Level.setTile(px+3*sin*pcos,y+5,pz+3*cos*pcos ,155,0);
Level.destroyBlock(px+3*sin*pcos,y+5,pz+3*cos*pcos ,false);
Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+3*sin*pcos,y+5,pz+3*cos*pcos,2);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+4,pz+3*cos*pcos ,155,0);
Level.destroyBlock(px+3*sin*pcos,y+4,pz+3*cos*pcos ,false);
Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+3*sin*pcos,y+4,pz+3*cos*pcos,2);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+3,pz+3*cos*pcos ,155,0);
Level.destroyBlock(px+3*sin*pcos,y+3,pz+3*cos*pcos ,false);
Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+3*sin*pcos,y+3,pz+3*cos*pcos,2);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,155,0);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,2);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+1,pz+3*cos*pcos ,155,0);
Level.destroyBlock(px+3*sin*pcos,y+1,pz+3*cos*pcos ,false);
Entity.addEffect(getPlayerEnt(),11,10,4,false,true);
explode(px+3*sin*pcos,y+1,pz+3*cos*pcos,2);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==484&&언월도==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
언월도 = 60;

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
Entity.addEffect(getPlayerEnt(),11,20,4,false,true);

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,42);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
explode(px+1*sin*pcos,y+2,pz+1*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,42);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
explode(px+2*sin*pcos,y+2,pz+2*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,42);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,42);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,42);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,42);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,42);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+8*sin*pcos,y+2,pz+8*cos*pcos ,42);
Level.destroyBlock(px+8*sin*pcos,y+2,pz+8*cos*pcos ,false);
explode(px+8*sin*pcos,y+2,pz+8*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+9*sin*pcos,y+2,pz+9*cos*pcos ,42);
Level.destroyBlock(px+9*sin*pcos,y+2,pz+9*cos*pcos ,false);
explode(px+9*sin*pcos,y+2,pz+9*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+10*sin*pcos,y+2,pz+10*cos*pcos ,42);
Level.destroyBlock(px+10*sin*pcos,y+2,pz+10*cos*pcos ,false);
explode(px+10*sin*pcos,y+2,pz+10*cos*pcos,0.9);
java.lang.Thread.sleep(50);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==486&&불주먹==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
불주먹 = 100;

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
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,2.8,true);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==487&&불기둥==0)
{
불기둥 = 140;

Entity.addEffect(getPlayerEnt(),11,20,4,false,true);

Level.setTile(getPlayerX(),getPlayerY()+3,getPlayerZ(),35,14);
Level.destroyBlock(getPlayerX(),getPlayerY()+3,getPlayerZ(),false);
Level.setTile(getPlayerX(),getPlayerY()+4,getPlayerZ(),35,14);
Level.destroyBlock(getPlayerX(),getPlayerY()+4,getPlayerZ(),false);
Level.setTile(getPlayerX(),getPlayerY()+5,getPlayerZ(),35,14);
Level.destroyBlock(getPlayerX(),getPlayerY()+5,getPlayerZ(),false);
Level.setTile(getPlayerX(),getPlayerY()+6,getPlayerZ(),35,14);
Level.destroyBlock(getPlayerX(),getPlayerY()+6,getPlayerZ(),false);
Level.setTile(getPlayerX(),getPlayerY()+7,getPlayerZ(),35,14);
Level.destroyBlock(getPlayerX(),getPlayerY()+7,getPlayerZ(),false);
Level.setTile(getPlayerX(),getPlayerY()+8,getPlayerZ(),35,14);
Level.destroyBlock(getPlayerX(),getPlayerY()+8,getPlayerZ(),false);
Level.setTile(getPlayerX(),getPlayerY()+9,getPlayerZ(),35,14);
Level.destroyBlock(getPlayerX(),getPlayerY()+9,getPlayerZ(),false);
Level.setTile(getPlayerX(),getPlayerY()+10,getPlayerZ(),35,14);
Level.destroyBlock(getPlayerX(),getPlayerY()+10,getPlayerZ(),false);
explode(getPlayerX(),getPlayerY()+2,getPlayerZ(),4.5,true);
}
if(i==488&&히건==0)
{
히건 = 50;
Entity.addEffect(getPlayerEnt(),11,20,4,false,true);
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

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,35,14);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,35,14);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,35,14);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,1,true);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,35,14);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,1,true);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,35,14);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,1,true);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,35,14);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,1,true);
explode(px+7*sin*pcos,y+1,pz+7*cos*pcos,1,true);
}
if(i==489&&염제==0)
{
염제 = 160;

Level.setTile(x,y+1,z,35,14);
Level.destroyBlock(x,y+1,z,false);
Level.setTile(x+1,y+1,z,35,14);
Level.destroyBlock(x+1,y+1,z,false);
Level.setTile(x-1,y+1,z,35,14);
Level.destroyBlock(x-1,y+1,z,false);
Level.setTile(x,y+1,z+1,35,14);
Level.destroyBlock(x,y+1,z+1,false);
Level.setTile(x,y+1,z-1,35,14);
Level.destroyBlock(x,y+1,z-1,false);
Level.setTile(x+1,y+1,z+1,35,14);
Level.destroyBlock(x+1,y+1,z+1,false);
Level.setTile(x-1,y+1,z+1,35,14);
Level.destroyBlock(x-1,y+1,z+1,false);
Level.setTile(x+1,y+1,z-1,35,14);
Level.destroyBlock(x+1,y+1,z-1,false);
Level.setTile(x-1,y+1,z-1,35,14);
Level.destroyBlock(x-1,y+1,z-1,false);

Level.setTile(x+1,y+2,z,35,14);
Level.destroyBlock(x+1,y+2,z,false);
Level.setTile(x-1,y+2,z,35,14);
Level.destroyBlock(x-1,y+2,z,false);
Level.setTile(x,y+2,z+1,35,14);
Level.destroyBlock(x,y+2,z+1,false);
Level.setTile(x,y+2,z-1,35,14);
Level.destroyBlock(x,y+2,z-1,false);
Level.setTile(x+1,y+2,z+1,35,14);
Level.destroyBlock(x+1,y+2,z+1,false);
Level.setTile(x-1,y+2,z+1,35,14);
Level.destroyBlock(x-1,y+2,z+1,false);
Level.setTile(x+1,y+2,z-1,35,14);
Level.destroyBlock(x+1,y+2,z-1,false);
Level.setTile(x-1,y+2,z-1,35,14);
Level.destroyBlock(x-1,y+2,z-1,false);

Level.setTile(x,y+3,z,35,14);
Level.destroyBlock(x,y+3,z,false);
Level.setTile(x+1,y+3,z,35,14);
Level.destroyBlock(x+1,y+3,z,false);
Level.setTile(x-1,y+3,z,35,14);
Level.destroyBlock(x-1,y+3,z,false);
Level.setTile(x,y+3,z+1,35,14);
Level.destroyBlock(x,y+3,z+1,false);
Level.setTile(x,y+3,z-1,35,14);
Level.destroyBlock(x,y+3,z-1,false);
Level.setTile(x+1,y+3,z+1,35,14);
Level.destroyBlock(x+1,y+3,z+1,false);
Level.setTile(x-1,y+3,z+1,35,14);
Level.destroyBlock(x-1,y+3,z+1,false);
Level.setTile(x+1,y+3,z-1,35,14);
Level.destroyBlock(x+1,y+3,z-1,false);
Level.setTile(x-1,y+3,z-1,35,14);
Level.destroyBlock(x-1,y+3,z-1,false);

explode(x,y+2,z,3.4,true);
}
if(i==491&&대분화==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
대분화 = 100;

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
if(i==492&&유성화산==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
유성화산 = 180;

Level.setTile(x,y+5,z+1,11);
Level.destroyBlock(x,y+5,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x,y+4,z+1,11);
Level.destroyBlock(x,y+4,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x,y+3,z+1,11);
Level.destroyBlock(x,y+3,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x,y+2,z+1,11);
Level.destroyBlock(x,y+2,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x,y+1,z+1,10);
java.lang.Thread.sleep(50);


Level.setTile(x+1,y+5,z-1,11);
Level.destroyBlock(x+1,y+5,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+1,y+4,z-1,11);
Level.destroyBlock(x+1,y+4,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+1,y+3,z-1,11);
Level.destroyBlock(x+1,y+3,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+1,y+2,z-1,11);
Level.destroyBlock(x+1,y+2,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+1,y+1,z-1,10);
java.lang.Thread.sleep(50);

Level.setTile(x-2,y+5,z-3,11);
Level.destroyBlock(x-2,y+5,z-3,false);
java.lang.Thread.sleep(50);
Level.setTile(x-2,y+4,z-3,11);
Level.destroyBlock(x-2,y+4,z-3,false);
java.lang.Thread.sleep(50);
Level.setTile(x-2,y+3,z-3,11);
Level.destroyBlock(x-2,y+3,z-3,false);
java.lang.Thread.sleep(50);
Level.setTile(x-2,y+2,z-3,11);
Level.destroyBlock(x-2,y+2,z-3,false);
java.lang.Thread.sleep(50);
Level.setTile(x-2,y+1,z-3,10);
java.lang.Thread.sleep(50);

Level.setTile(x+3,y+5,z+3,11);
Level.destroyBlock(x+3,y+5,z+3,false);
java.lang.Thread.sleep(50);
Level.setTile(x+3,y+4,z+3,11);
Level.destroyBlock(x+3,y+4,z+3,false);
java.lang.Thread.sleep(50);
Level.setTile(x+3,y+3,z+3,11);
Level.destroyBlock(x+3,y+3,z+3,false);
java.lang.Thread.sleep(50);
Level.setTile(x+3,y+2,z+3,11);
Level.destroyBlock(x+3,y+2,z+3,false);
java.lang.Thread.sleep(50);
Level.setTile(x+3,y+1,z+3,10);
java.lang.Thread.sleep(50);

Level.setTile(x,y+5,z-3,11);
Level.destroyBlock(x,y+5,z-3,false);
java.lang.Thread.sleep(50);
Level.setTile(x,y+4,z-3,11);
Level.destroyBlock(x,y+4,z-3,false);
java.lang.Thread.sleep(50);
Level.setTile(x,y+3,z-3,11);
Level.destroyBlock(x,y+3,z-3,false);
java.lang.Thread.sleep(50);
Level.setTile(x,y+2,z-3,11);
Level.destroyBlock(x,y+2,z-3,false);
java.lang.Thread.sleep(50);
Level.setTile(x,y+1,z-3,10);
java.lang.Thread.sleep(50);

Level.setTile(x+2,y+5,z+1,11);
Level.destroyBlock(x+2,y+5,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+2,y+4,z+1,11);
Level.destroyBlock(x+2,y+4,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+2,y+3,z+1,11);
Level.destroyBlock(x+2,y+3,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+2,y+2,z+1,11);
Level.destroyBlock(x+2,y+2,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+2,y+1,z+1,10);
java.lang.Thread.sleep(50);

Level.setTile(x-1,y+5,z-1,11);
Level.destroyBlock(x-1,y+5,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x-1,y+4,z-1,11);
Level.destroyBlock(x-1,y+4,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x-1,y+3,z-1,11);
Level.destroyBlock(x-1,y+3,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x-1,y+2,z-1,11);
Level.destroyBlock(x-1,y+2,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x-1,y+1,z-1,10);
java.lang.Thread.sleep(50);

Level.setTile(x+4,y+5,z-1,11);
Level.destroyBlock(x+4,y+5,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+4,y+4,z-1,11);
Level.destroyBlock(x+4,y+4,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+4,y+3,z-1,11);
Level.destroyBlock(x+4,y+3,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x+4,y+2,z-1,11);
Level.destroyBlock(x+4,y+2,z-1,false);
java.lang.Thread.sleep(50);
Level.setTile(x-4,y+1,z-1,10);
java.lang.Thread.sleep(50);

Level.setTile(x-1,y+5,z+3,11);
Level.destroyBlock(x-1,y+5,z+3,false);
java.lang.Thread.sleep(50);
Level.setTile(x-1,y+4,z+3,11);
Level.destroyBlock(x-1,y+4,z+3,false);
java.lang.Thread.sleep(50);
Level.setTile(x-1,y+3,z+3,11);
Level.destroyBlock(x-1,y+3,z+3,false);
java.lang.Thread.sleep(50);
Level.setTile(x-1,y+2,z+3,11);
Level.destroyBlock(x-1,y+2,z+3,false);
java.lang.Thread.sleep(50);
Level.setTile(x-1,y+1,z+3,10);
java.lang.Thread.sleep(50);

Level.setTile(x-3,y+5,z+1,11);
Level.destroyBlock(x-3,y+5,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x-3,y+4,z+1,11);
Level.destroyBlock(x-3,y+4,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x-3,y+3,z+1,11);
Level.destroyBlock(x-3,y+3,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x-3,y+2,z+1,11);
Level.destroyBlock(x-3,y+2,z+1,false);
java.lang.Thread.sleep(50);
Level.setTile(x-3,y+1,z+1,10);
java.lang.Thread.sleep(50);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==493&&명구==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
명구 = 120;

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
Entity.addEffect(getPlayerEnt(),11,20,4,false,true);

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,11);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,11);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
explode(px+2*sin*pcos,y+2,pz+2*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,11);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,11);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,11);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,11);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,11);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+8*sin*pcos,y+2,pz+8*cos*pcos ,11);
Level.destroyBlock(px+8*sin*pcos,y+2,pz+8*cos*pcos ,false);
explode(px+8*sin*pcos,y+2,pz+8*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+9*sin*pcos,y+2,pz+9*cos*pcos ,11);
Level.destroyBlock(px+9*sin*pcos,y+2,pz+9*cos*pcos ,false);
explode(px+9*sin*pcos,y+2,pz+9*cos*pcos,0.9);
java.lang.Thread.sleep(50);
Level.setTile(px+10*sin*pcos,y+2,pz+10*cos*pcos ,11);
Level.destroyBlock(px+10*sin*pcos,y+2,pz+10*cos*pcos ,false);
explode(px+10*sin*pcos,y+2,pz+10*cos*pcos,0.9);
java.lang.Thread.sleep(50);

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,11);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,11);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,11);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,11);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,11);
java.lang.Thread.sleep(50);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,11);
java.lang.Thread.sleep(50);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,11);
java.lang.Thread.sleep(50);
Level.setTile(px+8*sin*pcos,y+2,pz+8*cos*pcos ,11);
java.lang.Thread.sleep(50);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==494&&견신홍련==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
견신홍련 = 90;

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

explode(px+2*sin*pcos,y+2,pz+2*cos*pcos,1.5);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,11);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,1.5);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,11);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,1.5);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,11);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,1.5);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,11);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,1.5);
java.lang.Thread.sleep(50);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,11);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,1.5);
java.lang.Thread.sleep(50);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,11);
java.lang.Thread.sleep(50);
} } ); new java.lang.Thread( 연속 ).start();
}
}

function attackHook(a,v)
{
if(getCarriedItem()==477&&메스지정==0)
{
메스지정=400;

var Ex = Entity.getX(v);
var Ey = Entity.getY(v);
var Ez = Entity.getZ(v);
Entity.addEffect(v,MobEffect.confusion ,20*5,9,false,true);
Entity.addEffect(v,MobEffect.blindness ,20*5,0,false,true);
vv=v;
ModPE.saveData(vv,v)
}
if(getCarriedItem()==477)
{
ModPE.removeData(vv)
}
if(Player.getCarriedItem()==479)//키코쿠
{
Entity.setHealth(v,Entity.getHealth(v)-8);
}
if(Player.getCarriedItem()==484)//언월도
{
Entity.setHealth(v,Entity.getHealth(v)-8);
}
}

function modTick()
{
if(고무고무피스톨>0)
{
고무고무피스톨--;
Item.setProperties(471,{"foil":true});
}
if(고무고무피스톨==0)
{
Item.setProperties(471,{"foil":false});
}
if(고무고무게틀링>0)
{
고무고무게틀링--;
Item.setProperties(472,{"foil":true});
}
if(고무고무게틀링==0)
{
Item.setProperties(472,{"foil":false});
}
if(기어세컨드>0)
{
기어세컨드--;
Item.setProperties(473,{"foil":true});
}
if(기어세컨드==0)
{
Item.setProperties(473,{"foil":false});
}
if(기어서드>0)
{
기어서드--;
Item.setProperties(474,{"foil":true});
}
if(기어서드==0)
{
Item.setProperties(474,{"foil":false});
}
if(룸>0)
{
룸--;
Item.setProperties(476,{"foil":true});
}
if(룸==0)
{
Item.setProperties(476,{"foil":false});
}
if(메스지정>0)
{
메스지정--;
Item.setProperties(477,{"foil":true});
}
if(메스지정==0)
{
Item.setProperties(477,{"foil":false});
}
if(메스공격>0)
{
메스공격--;
}
if(카운터쇼크>0)
{
카운터쇼크--;
Item.setProperties(478,{"foil":true});
}
if(카운터쇼크==0)
{
Item.setProperties(478,{"foil":false});
}
if(키코쿠>0)
{
키코쿠--;
Item.setProperties(479,{"foil":true});
}
if(키코쿠==0)
{
Item.setProperties(479,{"foil":false});
}
if(소지진>0)
{
소지진--;
Item.setProperties(481,{"foil":true});
}
if(소지진==0)
{
Item.setProperties(481,{"foil":false});
}
if(지진>0)
{
지진--;
Item.setProperties(482,{"foil":true});
}
if(지진==0)
{
Item.setProperties(482,{"foil":false});
}
if(대지진>0)
{
대지진--;
Item.setProperties(483,{"foil":true});
}
if(대지진==0)
{
Item.setProperties(483,{"foil":false});
}
if(언월도>0)
{
언월도--;
Item.setProperties(484,{"foil":true});
}
if(언월도==0)
{
Item.setProperties(484,{"foil":false});
}
if(불주먹>0)
{
불주먹--;
Item.setProperties(486,{"foil":true});
}
if(불주먹==0)
{
Item.setProperties(486,{"foil":false});
}
if(불기둥>0)
{
불기둥--;
Item.setProperties(487,{"foil":true});
}
if(불기둥==0)
{
Item.setProperties(487,{"foil":false});
}
if(히건>0)
{
히건--;
Item.setProperties(488,{"foil":true});
}
if(히건==0)
{
Item.setProperties(488,{"foil":false});
}
if(염제>0)
{
염제--;
Item.setProperties(489,{"foil":true});
}
if(염제==0)
{
Item.setProperties(489,{"foil":false});
}
if(대분화>0)
{
대분화--;
Item.setProperties(491,{"foil":true});
}
if(대분화==0)
{
Item.setProperties(491,{"foil":false});
}
if(유성화산>0)
{
유성화산--;
Item.setProperties(492,{"foil":true});
}
if(유성화산==0)
{
Item.setProperties(492,{"foil":false});
}
if(명구>0)
{
명구--;
Item.setProperties(493,{"foil":true});
}
if(명구==0)
{
Item.setProperties(493,{"foil":false});
}
if(견신홍련>0)
{
견신홍련--;
Item.setProperties(494,{"foil":true});
}
if(견신홍련==0)
{
Item.setProperties(494,{"foil":false});
}
}
