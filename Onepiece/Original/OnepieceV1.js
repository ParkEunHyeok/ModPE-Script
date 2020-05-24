var 고무고무피스톨 = 0;
var 고무고무게틀링 = 0;
var 기어세컨드 = 0;
var 기간트피스톨 = 0;
var 룸 = 0;
var 인젝션샷 = 0;
var 택트 = 0;
var 로우검 = 0;
var 오색실 = 0;
var 실탄환 = 0;
var 오버히트 = 0;
var 새장 = 0;
var 배리어볼 = 0;
var 배리어배리어피스톨 = 0;
var 비스킷갑옷 = 0;
var 프레첼 = 0;

ModPE.setItem(500,"고무고무열매",0,"고무고무열매");
ModPE.setItem(501,"고무고무피스톨",0,"고무고무 피스톨");
ModPE.setItem(502,"고무고무게틀링",0,"고무고무 게틀링");
ModPE.setItem(503,"기어세컨드",0,"기어세컨드");
ModPE.setItem(504,"고무고무기간트피스톨",0,"고무고무 기간트피스톨");
ModPE.setItem(505,"오페오페열매",0,"수술수술 열매");
ModPE.setItem(506,"룸",0,"룸");
//521 룸해제
ModPE.setItem(507,"인젝션샷",0,"인젝션샷");
ModPE.setItem(508,"택트",0,"택트");
ModPE.setItem(509,"로우검",0,"요검 키코쿠");
ModPE.setItem(510,"실실열매",0,"실실열매");
ModPE.setItem(511,"오색실",0,"오색실");
ModPE.setItem(512,"실탄환",0,"실탄환");
ModPE.setItem(513,"오버히트",0,"오버히트");
ModPE.setItem(514,"새장",0,"새장");
ModPE.setItem(515,"배리어배리어열매",0,"배리어배리어열매");
ModPE.setItem(516,"배리어볼",0,"배리어볼");
//522 베리어볼 해제
ModPE.setItem(517,"배리어배리어피스톨",0,"배리어배리어피스톨");
ModPE.setItem(518,"비스킷비스킷열매",0,"비스킷비스킷열매");
ModPE.setItem(519,"비스킷갑옷",0,"비스킷 갑옷");
ModPE.setItem(520,"프레첼",0,"명검 프레첼");
ModPE.setItem(521,"룸해제",0,"룸 해제");
ModPE.setItem(522,"배리어볼해제",0,"배리어볼 해제");

Block.defineBlock(232,"룸블럭","룸블럭",false,0);
Block.setLightLevel(232,15);
Block.setDestroyTime(232,3);
Block.setRenderLayer(232,1);
Block.setLightOpacity(232,15);
Block.setExplosionResistance(232,9999);
Block.defineBlock(233,"배리어블럭","배리어블럭",false,0);
Block.setLightLevel(233,15);
Block.setDestroyTime(233,-1);
Block.setRenderLayer(233,1);
Block.setLightOpacity(233,15);
Block.setExplosionResistance(233,-1);
Block.defineBlock(234,"룸해제블럭","룸해제블럭",false,0);
Block.setLightLevel(234,15);
Block.setDestroyTime(234,-1);
Block.setRenderLayer(234,1);
Block.setLightOpacity(234,15);
Block.setExplosionResistance(234,-1);
Block.defineBlock(235,"배리어볼해제블럭","배리어볼해제블럭",false,0);
Block.setLightLevel(235,15);
Block.setDestroyTime(235,-1);
Block.setRenderLayer(235,1);
Block.setLightOpacity(235,15);
Block.setExplosionResistance(235,-1);

var st = Item.setProperties

function procCmd(cmd)
{
if(cmd=="모든 열매")
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,500,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,505,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,510,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,515,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,518,1,0);
}
}

function useItem(x,y,z,i,b)
{
if(i==500)
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,501,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,502,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,503,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,504,1,0);
}
if(i==505)
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,506,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,521,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,507,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,508,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,509,1,0);
}
if(i==510)
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,511,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,512,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,513,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,514,1,0);
}
if(i==515)
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,516,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,522,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,517,1,0);
}
if(i==518)
{
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,519,1,0);
Level.dropItem(getPlayerX(),getPlayerY(),getPlayerZ(),0,520,1,0);
}
if(i==501&&고무고무피스톨==0)
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
if(i==502&&고무고무게틀링==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
고무고무게틀링 = 140;

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
if(i==503&&기어세컨드==0)
{
기어세컨드 = 400;

Entity.addEffect(getPlayerEnt(),1,300,4,false,true);
Entity.addEffect(getPlayerEnt(),8,300,4,false,true);
}
if(i==504&&기간트피스톨==0)
{
기간트피스톨 = 160;

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
explode(x,y+2,z,4);
}
if(i==506&&룸==0)
{
for(var X=-14;X<20;X++)
for(var Y=-14;Y<20;Y++)
for(var Z=-14;Z<20;Z++) 
{
if((X*X)+(Y*Y)+(Z*Z)<=(15*15)&&(X*X) +(Y*Y)+(Z*Z)>=(14)*(14))
{
Level.setTile(x+X,y+Y,z+Z,232);
Level.setTile(x,y,z,234);
룸 = 300;
}}}
if(i==521&&b==234)
{
for(var X=-14;X<20;X++)
for(var Y=-14;Y<20;Y++)
for(var Z=-14;Z<20;Z++) 
{
if((X*X)+(Y*Y)+(Z*Z)<=(15*15)&&(X*X) +(Y*Y)+(Z*Z)>=(14)*(14))
{
Level.setTile(x+X,y+Y,z+Z,0);
}}}
if(i==507&&인젝션샷==0)
{
var 연속 = new java.lang.Runnable( { run: function()
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
인젝션샷 = 100;

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,35,3);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,35,3);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,35,3);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,35,3);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,35,3);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,2);
java.lang.Thread.sleep(50);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==508&&택트==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
택트 = 60;

Level.setTile(x,y+1,z,1);
java.lang.Thread.sleep(100);
Level.destroyBlock(x,y+1,z,false);
java.lang.Thread.sleep(50);
Level.setTile(x,y+1,z,1);
Level.setTile(x+1,y+1,z,1);
Level.setTile(x-1,y+1,z,1);
Level.setTile(x,y+1,z+1,1);
Level.setTile(x,y+1,z-1,1);
Level.setTile(x,y+2,z,1);
java.lang.Thread.sleep(100);
Level.destroyBlock(x,y+1,z,false);
Level.destroyBlock(x,y+1,z,false);
Level.destroyBlock(x,y+1,z,false);
Level.destroyBlock(x,y+1,z,false);
Level.destroyBlock(x,y+1,z,false);
Level.destroyBlock(x,y+1,z,false);
explode(x,y+1,z,3);
java.lang.Thread.sleep(100);

Level.setTile(x,y+1,z,1);
Level.setTile(x+1,y+1,z,1);
Level.setTile(x-1,y+1,z,1);
Level.setTile(x,y+1,z+1,1);
Level.setTile(x,y+1,z-1,1);
Level.setTile(x+1,y+1,z+1,1);
Level.setTile(x+1,y+1,z-1,1);
Level.setTile(x-1,y+1,z+1,1);
Level.setTile(x-1,y+1,z-1,1);
Level.setTile(x,y+2,z,1);
Level.setTile(x-1,y+2,z,1);
Level.setTile(x+1,y+2,z,1);
Level.setTile(x,y+2,z+1,1);
Level.setTile(x,y+2,z-1,1);
Level.setTile(x,y+3,z,1);
java.lang.Thread.sleep(100);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==509&&로우검==0)
{
로우검 = 20;

Level.setTile(x,y+2,z,35,9);
Level.destroyBlock(x,y+2,z,false);
explode(x,y+1,z,0.5);
}
if(i==511&&오색실==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
오색실 = 100;

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

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,159,3);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
java.lang.Thread.sleep(80);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,159,4);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
java.lang.Thread.sleep(80);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,159,5);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
java.lang.Thread.sleep(80);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,159,11);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
java.lang.Thread.sleep(80);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,159,2);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
java.lang.Thread.sleep(80);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,2.5);
java.lang.Thread.sleep(50);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==512&&실탄환==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
실탄환 = 80;

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

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,42);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,42);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,42);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,42);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,42);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,42);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,42);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+8*sin*pcos,y+2,pz+8*cos*pcos ,42);
Level.destroyBlock(px+8*sin*pcos,y+2,pz+8*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+9*sin*pcos,y+2,pz+9*cos*pcos ,42);
Level.destroyBlock(px+9*sin*pcos,y+2,pz+9*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+10*sin*pcos,y+2,pz+10*cos*pcos ,42);
Level.destroyBlock(px+10*sin*pcos,y+2,pz+10*cos*pcos ,false);
java.lang.Thread.sleep(50);
explode(px+10*sin*pcos,y+2,pz+10*cos*pcos,2);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==513&&오버히트==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
오버히트 = 140;

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

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,35,0);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,11);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,35,0);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,11);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,35,0);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,11);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,35,0);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,11);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,35,0);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,11);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
java.lang.Thread.sleep(50);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,3);
explode(px+9*sin*pcos,y+2,pz+9*cos*pcos,3);

} } ); new java.lang.Thread( 연속 ).start();
}
if(i==514&&새장==0)
{
for(var X=-14;X<20;X++)
for(var Y=-14;Y<20;Y++)
for(var Z=-14;Z<20;Z++) 
{
if((X*X)+(Y*Y)+(Z*Z)<=(15*15)&&(X*X) +(Y*Y)+(Z*Z)>=(14)*(14))
{
Level.setTile(x+X,y+Y,z+Z,30);
새장 = 300;
}}}
if(i==516&&배리어볼==0)
{
for(var X=-14;X<20;X++)
for(var Y=-14;Y<20;Y++)
for(var Z=-14;Z<20;Z++) 
{
if((X*X)+(Y*Y)+(Z*Z)<=(15*15)&&(X*X) +(Y*Y)+(Z*Z)>=(14)*(14))
{
Level.setTile(x+X,y+Y,z+Z,233);
Level.setTile(x,y,z,235);
배리어볼 = 300;
}}}
if(i==522&&b==235)
{
for(var X=-14;X<20;X++)
for(var Y=-14;Y<20;Y++)
for(var Z=-14;Z<20;Z++) 
{
if((X*X)+(Y*Y)+(Z*Z)<=(15*15)&&(X*X) +(Y*Y)+(Z*Z)>=(14)*(14))
{
Level.setTile(x+X,y+Y,z+Z,0);
}}}
if(i==517&&배리어배리어피스톨==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
배리어배리어피스톨 = 80;

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

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,233);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,233);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
java.lang.Thread.sleep(50);
Entity.addEffect(getPlayerEnt(),11,20,4,false,true);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,3);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==519&&비스킷갑옷==0)
{
비스킷갑옷 = 260;

Entity.addEffect(getPlayerEnt(),11,200,2,false,true);
Entity.addEffect(getPlayerEnt(),5,200,2,false,true);
Entity.addEffect(getPlayerEnt(),10,200,2,false,true);
Entity.addEffect(getPlayerEnt(),21,200,2,false,true);
Entity.addEffect(getPlayerEnt(),1,200,4,false,true);
}
if(i==520&&프레첼==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
프레첼 = 100;

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
Level.setTile(px+1*sin*pcos,y+4,pz+1*cos*pcos ,159,12);
Level.destroyBlock(px+1*sin*pcos,y+4,pz+1*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+2*sin*pcos,y+4,pz+2*cos*pcos ,159,12);
Level.destroyBlock(px+2*sin*pcos,y+4,pz+2*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+3*sin*pcos,y+3,pz+3*cos*pcos ,159,12);
Level.destroyBlock(px+3*sin*pcos,y+3,pz+3*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+4*sin*pcos,y+3,pz+4*cos*pcos ,159,12);
Level.destroyBlock(px+4*sin*pcos,y+3,pz+4*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,159,12);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
java.lang.Thread.sleep(50);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,159,12);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
java.lang.Thread.sleep(50);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,3.5);
} } ); new java.lang.Thread( 연속 ).start();
}
}

function modTick()
{
if(고무고무피스톨>0)
{
고무고무피스톨--;
st(501,{"foil":true});
}
if(고무고무피스톨==0)
{
st(501,{"foil":false});
}
if(고무고무게틀링>0)
{
고무고무게틀링--;
st(502,{"foil":true});
}
if(고무고무게틀링==0)
{
st(502,{"foil":false});
}
if(기어세컨드>0)
{
기어세컨드--;
st(503,{"foil":true});
}
if(기어세컨드==0)
{
st(503,{"foil":false});
}
if(기간트피스톨>0)
{
기간트피스톨--;
st(504,{"foil":true});
}
if(기간트피스톨==0)
{
st(504,{"foil":false});
}
if(룸>0)
{
룸--;
st(506,{"foil":true});
}
if(룸==0)
{
st(506,{"foil":false});
}
if(인젝션샷>0)
{
인젝션샷--;
st(507,{"foil":true});
}
if(인젝션샷==0)
{
st(507,{"foil":false});
}
if(택트>0)
{
택트--;
st(508,{"foil":true});
}
if(택트==0)
{
st(508,{"foil":false});
}
if(로우검>0)
{
로우검--;
st(509,{"foil":true});
}
if(로우검==0)
{
st(509,{"foil":false});
}
if(오색실>0)
{
오색실--;
st(511,{"foil":true});
}
if(오색실==0)
{
st(511,{"foil":false});
}
if(실탄환>0)
{
실탄환--;
st(512,{"foil":true});
}
if(실탄환==0)
{
st(512,{"foil":false});
}
if(오버히트>0)
{
오버히트--;
st(513,{"foil":true});
}
if(오버히트==0)
{
st(513,{"foil":false});
}
if(새장>0)
{
새장--;
st(514,{"foil":true});
}
if(새장==0)
{
st(514,{"foil":false});
}
if(배리어볼>0)
{
배리어볼--;
st(516,{"foil":true});
}
if(배리어볼==0)
{
st(516,{"foil":false});
}
if(배리어배리어피스톨>0)
{
배리어배리어피스톨--;
st(517,{"foil":true});
}
if(배리어배리어피스톨==0)
{
st(517,{"foil":false});
}
if(비스킷갑옷)
{
비스킷갑옷--;
st(519,{"foil":true});
}
if(비스킷갑옷==0)
{
st(519,{"foil":false});
}
if(프레첼>0)
{
프레첼--;
st(520,{"foil":true});
}
if(프레첼==0)
{
st(520,{"foil":false});
}
}
