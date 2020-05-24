
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
var 마그마에이지 = 0;
var 볼트바리 = 0;
var 엘토르 = 0;
var 산고 = 0;
var 뇌신 = 0;
var 야타노카가미 = 0;
var 야사타미노마가타마 = 0;
var 아마테라스 = 0;
var 천총운 = 0;
var 아이스에이지 = 0;
var 아이스볼 = 0;
var 파르티잔 = 0;
var 페잔트백 = 0;

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
ModPE.setItem(482,"지진",0,"Kubatowari");
ModPE.setItem(483,"대지진",0,"Shima yurashi");
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
ModPE.setItem(494,"마그마에이지",0,"Kazan bakahatsu");
Player.addItemCreativeInv(490,3,0);
ModPE.setItem(495,"쿠릉쿠릉열매",0,"Goro Goro no mi");
ModPE.setItem(496,"볼트바리",0,"Volt vari");
ModPE.setItem(497,"엘토르",0,"Elthor");
ModPE.setItem(498,"산고",0,"Sango");
ModPE.setItem(499,"뇌신",0,"Volt amaru");
Player.addItemCreativeInv(495,3,0);
ModPE.setItem(500,"번쩍번쩍열매",0,"Pika Pika no mi");
ModPE.setItem(501,"팔지경",0,"Yata no kagami");
ModPE.setItem(502,"여덟빛깔옥구슬",0,"Yasakani no magatama");
ModPE.setItem(503,"아마테라스",0,"Amaterasu");
ModPE.setItem(504,"천총운",0,"Amanomurakumo");
Player.addItemCreativeInv(500,3,0);
ModPE.setItem(505,"얼음얼음열매",0,"Hie Hie no mi");
ModPE.setItem(506,"아이스에이지",0,"Ice Age");
ModPE.setItem(507,"아이스볼",0,"Ice ball");
ModPE.setItem(508,"파르티잔",0,"Iceblock Partisan");
ModPE.setItem(509,"페잔트백",0,"iceblock Pheasantbeak");
Player.addItemCreativeInv(505,3,0);

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

function useItem(x,y,z,i,b)
{
if(i==470)
{
setTile(x,y+1,z,54);
setTile(x,y+2,z,0);
Level.setChestSlot(x,y+1,z,0,471,0,1);
Level.setChestSlot(x,y+1,z,1,472,0,1);
Level.setChestSlot(x,y+1,z,2,473,0,1);
Level.setChestSlot(x,y+1,z,3,474,0,1);
Level.destroyBlock(x,y+1,z,false);
}
if(i==475)
{
setTile(x,y+1,z,54);
setTile(x,y+2,z,0);
Level.setChestSlot(x,y+1,z,0,476,0,1);
Level.setChestSlot(x,y+1,z,1,477,0,1);
Level.setChestSlot(x,y+1,z,2,478,0,1);
Level.setChestSlot(x,y+1,z,3,479,0,1);
Level.destroyBlock(x,y+1,z,false);
}
if(i==480)
{
setTile(x,y+1,z,54);
setTile(x,y+2,z,0);
Level.setChestSlot(x,y+1,z,0,481,0,1);
Level.setChestSlot(x,y+1,z,1,482,0,1);
Level.setChestSlot(x,y+1,z,2,483,0,1);
Level.setChestSlot(x,y+1,z,3,484,0,1);
Level.destroyBlock(x,y+1,z,false);
}
if(i==485)
{
setTile(x,y+1,z,54);
setTile(x,y+2,z,0);
Level.setChestSlot(x,y+1,z,0,486,0,1);
Level.setChestSlot(x,y+1,z,1,487,0,1);
Level.setChestSlot(x,y+1,z,2,488,0,1);
Level.setChestSlot(x,y+1,z,3,489,0,1);
Level.destroyBlock(x,y+1,z,false);
}
if(i==490)
{
setTile(x,y+1,z,54);
setTile(x,y+2,z,0);
Level.setChestSlot(x,y+1,z,0,491,0,1);
Level.setChestSlot(x,y+1,z,1,492,0,1);
Level.setChestSlot(x,y+1,z,2,493,0,1);
Level.setChestSlot(x,y+1,z,3,494,0,1);
Level.destroyBlock(x,y+1,z,false);
}
if(i==495)
{
setTile(x,y+1,z,54);
setTile(x,y+2,z,0);
Level.setChestSlot(x,y+1,z,0,496,0,1);
Level.setChestSlot(x,y+1,z,1,497,0,1);
Level.setChestSlot(x,y+1,z,2,498,0,1);
Level.setChestSlot(x,y+1,z,3,499,0,1);
Level.destroyBlock(x,y+1,z,false);
}
if(i==500)
{
setTile(x,y+1,z,54);
setTile(x,y+2,z,0);
Level.setChestSlot(x,y+1,z,0,501,0,1);
Level.setChestSlot(x,y+1,z,1,502,0,1);
Level.setChestSlot(x,y+1,z,2,503,0,1);
Level.setChestSlot(x,y+1,z,3,504,0,1);
Level.destroyBlock(x,y+1,z,false);
}
if(i==505)
{
setTile(x,y+1,z,54);
setTile(x,y+2,z,0);
Level.setChestSlot(x,y+1,z,0,506,0,1);
Level.setChestSlot(x,y+1,z,1,507,0,1);
Level.setChestSlot(x,y+1,z,2,508,0,1);
Level.setChestSlot(x,y+1,z,3,509,0,1);
Level.destroyBlock(x,y+1,z,false);
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
if(i==494&&마그마에이지==0)
{
마그마에이지 = 400;

for(ux=x-12;ux<x+12;ux++)
{
for(uy=y-2;uy<y+7;uy++)
{
for(uz=z-12;uz<z+12;uz++)
{
if(i==524&&getTile(ux,uy,uz)!=0)
{
setTile(ux,uy,uz,11);
}}}}}
if(i==497&&엘토르==0)
{
엘토르 = 120;

Level.spawnMob(x,y+1,z,93);
Level.spawnMob(x+1,y+1,z,93);
Level.spawnMob(x-1,y+1,z,93);
Level.spawnMob(x,y+1,z+1,93);
Level.spawnMob(x,y+1,z-1,93);
Level.spawnMob(x+1,y+1,z+1,93);
Level.spawnMob(x+1,y+1,z-1,93);
Level.spawnMob(x-1,y+1,z+1,93);
Level.spawnMob(x-1,y+1,z-1,93);

Level.spawnMob(x,y+1,z,93);
Level.spawnMob(x+1,y+1,z,93);
Level.spawnMob(x-1,y+1,z,93);
Level.spawnMob(x,y+1,z+1,93);
Level.spawnMob(x,y+1,z-1,93);
Level.spawnMob(x+1,y+1,z+1,93);
Level.spawnMob(x+1,y+1,z-1,93);
Level.spawnMob(x-1,y+1,z+1,93);
Level.spawnMob(x-1,y+1,z-1,93);
}
if(i==498&&산고==0)
{
산고 = 150;

Level.spawnMob(x,y+1,z,93);
explode(x,y+1,z,3,true);
}
if(i==499&&뇌신==0)
{
뇌신 = 400;

Entity.addEffect(getPlayerEnt(),11,200,1,false,true);
Entity.addEffect(getPlayerEnt(),2,200,1,false,true);
Entity.addEffect(getPlayerEnt(),5,200,2,false,true);
Entity.addEffect(getPlayerEnt(),21,200,4,false,true);
Entity.addEffect(getPlayerEnt(),10,200,2,false,true);
}
if(i==501&&야타노카가미==0)
{
야타노카가미 = 140;

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

Entity.setVelX(getPlayerEnt(),sin*9);
Entity.setVelY(getPlayerEnt(),tan*2);
Entity.setVelZ(getPlayerEnt(),cos*9);

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,41);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,41);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,41);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,41);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,41);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,41);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,41);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
Level.setTile(px+8*sin*pcos,y+2,pz+8*cos*pcos ,41);
Level.destroyBlock(px+8*sin*pcos,y+2,pz+8*cos*pcos ,false);
Level.setTile(px+9*sin*pcos,y+2,pz+9*cos*pcos ,41);
Level.destroyBlock(px+9*sin*pcos,y+2,pz+9*cos*pcos ,false);
Level.setTile(px+10*sin*pcos,y+2,pz+10*cos*pcos ,41);
Level.destroyBlock(px+10*sin*pcos,y+2,pz+10*cos*pcos ,false);
}
if(i==502&&야사타미노마가타마==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
야사타미노마가타마 = 30;

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

Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,41);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
explode(px+2*sin*pcos,y+2,pz+2*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,41);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,41);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,41);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,41);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,41);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,0.9);
java.lang.Thread.sleep(30);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==503&&아마테라스==0)
{
아마테라스 = 120;

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

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,41);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,41);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,41);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,41);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,41);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,41);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,41);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);

explode(px+2*sin*pcos,y+2,pz+2*cos*pcos,2.1);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,2.1);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,2.1);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,2.1);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,2.1);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,2.1);
}
if(i==504&&천총운==0)
{
천총운 = 20;

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

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,41);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,41);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,41);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,41);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);

explode(px+2*sin*pcos,y+2,pz+2*cos*pcos,1);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,1);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,1);
}
if(i==506&&아이스에이지==0)
{
아이스에이지 = 200;
Entity.addEffect(getPlayerEnt(),1,140,6,false,true);
for(ux=x-12;ux<x+12;ux++)
{
for(uy=y-2;uy<y+7;uy++)
{
for(uz=z-12;uz<z+12;uz++)
{
if(i==506&&getTile(ux,uy,uz)!=0)
{
setTile(ux,uy,uz,79);
}}}}}
if(i==507&&아이스볼==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
아이스볼 = 100;

setTile(x,y,z,79);
setTile(x+1,y,z,79);
setTile(x-1,y,z,79);
setTile(x,y,z+1,79);
setTile(x,y,z-1,79);
setTile(x+1,y,z+1,79);
setTile(x+1,y,z-1,79);
setTile(x-1,y,z+1,79);
setTile(x-1,y,z-1,79);

setTile(x,y+4,z,79);
setTile(x+1,y+4,z,79);
setTile(x-1,y+4,z,79);
setTile(x,y+4,z+1,79);
setTile(x,y+4,z-1,79);
setTile(x+1,y+4,z+1,79);
setTile(x+1,y+4,z-1,79);
setTile(x-1,y+4,z+1,79);
setTile(x-1,y+4,z-1,79);

setTile(x+2,y+1,z,79);
setTile(x+2,y+1,z+1,79);
setTile(x+2,y+1,z-1,79);
setTile(x+2,y+2,z,79);
setTile(x+2,y+2,z-1,79);
setTile(x+2,y+2,z+1,79);
setTile(x+2,y+3,z,79);
setTile(x+2,y+3,z+1,79);
setTile(x+2,y+3,z-1,79);

setTile(x-2,y+1,z,79);
setTile(x-2,y+1,z+1,79);
setTile(x-2,y+1,z-1,79);
setTile(x-2,y+2,z,79);
setTile(x-2,y+2,z-1,79);
setTile(x-2,y+2,z+1,79);
setTile(x-2,y+3,z,79);
setTile(x-2,y+3,z+1,79);
setTile(x-2,y+3,z-1,79);

setTile(x,y+1,z+2,79);
setTile(x+1,y+1,z+2,79);
setTile(x-1,y+1,z+2,79);
setTile(x,y+2,z+2,79);
setTile(x+1,y+2,z+2,79);
setTile(x-1,y+2,z+2,79);
setTile(x,y+3,z+2,79);
setTile(x+1,y+3,z+2,79);
setTile(x-1,y+3,z+2,79);

setTile(x,y+1,z-2,79);
setTile(x+1,y+1,z-2,79);
setTile(x-1,y+1,z-2,79);
setTile(x,y+2,z-2,79);
setTile(x+1,y+2,z-2,79);
setTile(x-1,y+2,z-2,79);
setTile(x,y+3,z-2,79);
setTile(x+1,y+3,z-2,79);
setTile(x-1,y+3,z-2,79);

java.lang.Thread.sleep(2500);

explode(x,y+2,z,2.5);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==508&&파르티잔==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
파르티잔 = 40;

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

Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,79);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
explode(px+2*sin*pcos,y+2,pz+2*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,79);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,79);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,79);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,79);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,79);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,0.9);
java.lang.Thread.sleep(30);
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==509&&페잔트백==0)
{
페잔트백 = 120;

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

Level.setTile(px+1*sin*pcos,y+2,pz+1*cos*pcos ,79);
Level.destroyBlock(px+1*sin*pcos,y+2,pz+1*cos*pcos ,false);
Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,79);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,79);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,79);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,79);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,79);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,79);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);

explode(px+2*sin*pcos,y+2,pz+2*cos*pcos,2.1);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,2.1);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,2.1);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,2.1);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,2.1);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,2.1);
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
var Ex = Entity.getX(v);
var Ey = Entity.getY(v);
var Ez = Entity.getZ(v);
explode(Ex,Ey,Ez,1);
}
if(Player.getCarriedItem()==484)//언월도
{
var Ex = Entity.getX(v);
var Ey = Entity.getY(v);
var Ez = Entity.getZ(v);
explode(Ex,Ey,Ez,1);
}
if(Player.getCarriedItem()==496&&볼트바리==0)
{
볼트바리 = 80;

var Ax = Entity.getX(v);
var Ay = Entity.getY(v);
var Az = Entity.getZ(v);
explode(Ax,Ay,Az,1);
Level.spawnMob(Ax,Ay,Az,93);
}
if(Player.getCarriedItem()==504)//언월도
{
var Ex = Entity.getX(v);
var Ey = Entity.getY(v);
var Ez = Entity.getZ(v);
explode(Ex,Ey,Ez,1);
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
Item.setProperties(477,{"foil":true});
}
if(메스공격==0)
{
Item.setProperties(477,{"foil":false});
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
if(마그마에이지>0)
{
마그마에이지--;
Item.setProperties(494,{"foil":true});
}
if(마그마에이지==0)
{
Item.setProperties(494,{"foil":false});
}
if(볼트바리>0)
{
볼트바리--;
Item.setProperties(496,{"foil":true});
}
if(볼트바리==0)
{
Item.setProperties(496,{"foil":false});
}
if(엘토르>0)
{
엘토르--;
Item.setProperties(497,{"foil":true});
}
if(엘토르==0)
{
Item.setProperties(497,{"foil":false});
}
if(산고>0)
{
산고--;
Item.setProperties(498,{"foil":true});
}
if(산고==0)
{
Item.setProperties(498,{"foil":false});
}
if(뇌신>0)
{
뇌신--;
Item.setProperties(499,{"foil":true});
}
if(뇌신==0)
{
Item.setProperties(499,{"foil":false});
}
if(야타노카가미>0)
{
야타노카가미--;
Item.setProperties(501,{"foil":true});
}
if(야타노카가미==0)
{
Item.setProperties(501,{"foil":false});
}
if(야사타미노마가타마>0)
{
야사타미노마가타마--;
Item.setProperties(502,{"foil":true});
}
if(야사타미노마가타마==0)
{
Item.setProperties(502,{"foil":false});
}
if(아마테라스>0)
{
아마테라스--;
Item.setProperties(503,{"foil":true});
}
if(아마테라스==0)
{
Item.setProperties(503,{"foil":false});
}
if(천총운>0)
{
천총운--;
Item.setProperties(504,{"foil":true});
}
if(천총운==0)
{
Item.setProperties(504,{"foil":false});
}
if(아이스에이지>0)
{
아이스에이지--;
Item.setProperties(506,{"foil":true});
}
if(아이스에이지==0)
{
Item.setProperties(506,{"foil":false});
}
if(아이스볼>0)
{
아이스볼--;
Item.setProperties(507,{"foil":true});
}
if(아이스볼==0)
{
Item.setProperties(507,{"foil":false});
}
if(파르티잔>0)
{
파르티잔--;
Item.setProperties(508,{"foil":true});
}
if(파르티잔==0)
{
Item.setProperties(508,{"foil":false});
}
if(페잔트백>0)
{
페잔트백--;
Item.setProperties(509,{"foil":true});
}
if(페잔트백==0)
{
Item.setProperties(509,{"foil":false});
}
}
