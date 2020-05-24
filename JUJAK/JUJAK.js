
ModPE.setItem(700,"주작의삽",0,"§c주작의§4삽");
Item.setHandEquipped(700,true);

function newLevel()
{
clientMessage("§c주작의삽스크립트 §eby쿠키샌드");
clientMessage("명령어:/주작의삽");
}

function attackHook(a,v)
{
if(getCarriedItem()==700)
{
Entity.setHealth(v,Entity.getHealth(v)-20);
Entity.setFireTicks(v,5);
}
}

function procCmd(cmd)
{
if(cmd=="주작의삽")
{
clientMessage("§c당신에게 주작의 힘이 깃듭니다");
addItemInventory(700,+1);
}
if(cmd=="주작패시브 on")
{
clientMessage("§c주작패시브§3ON");
낙뎀 = true;
Entity.addEffect(getPlayerEnt(),MobEffect.fireResistance,9999999,0,false,true);
}
if(cmd=="주작패시브 off")
{
clientMessage("§c주작패시브§3ff");
낙뎀 = false;
Entity.removeAllEffects(getPlayerEnt());
}
}

function useItem(x,y,z,i,b)
{
if(i==700&&Entity.isSneaking(getPlayerEnt())==true&&주작궁쿨==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
주작궁쿨 = 200000;
궁0 = true;
궁1 = true;
유파 = true;
java.lang.Thread.sleep(2500);
궁0 = false;
궁1 = false;
궁2 = true;
궁3 = true;
유파 = false;
파티클 = true;
java.lang.Thread.sleep(2000);
궁3 = false;
파티클 = false;
Entity.addEffect(getPlayerEnt(),MobEffect.damageResistance,20,4,true,true);
explode(getPlayerX(),getPlayerY()+3,getPlayerZ(),4);
궁4 = true;
java.lang.Thread.sleep(10000);
궁4 = false;
궁2 = false;
주작궁쿨 = 400;
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==0)
{
궁0 = false;
궁1 = false;
궁2 = false;
궁3 = false;
}
if(i==700&&Entity.isSneaking(getPlayerEnt())==true&&주작궁쿨>0)
{
clientMessage("이 스킬의 쿨타임은"+parseInt(주작궁쿨/20)+"초 남았습니다");
}
if(i==700&&Entity.isSneaking(getPlayerEnt())==false&&주작스킬1쿨==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
주작스킬1쿨 = 200000;
Entity.addEffect(getPlayerEnt(),MobEffect.damageResistance,20,4,true,true);
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

Level.setTile(px+2*sin*pcos,y+2,pz+2*cos*pcos ,152);
Level.destroyBlock(px+2*sin*pcos,y+2,pz+2*cos*pcos ,false);
explode(px+2*sin*pcos,y+2,pz+2*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+3*sin*pcos,y+2,pz+3*cos*pcos ,152);
Level.destroyBlock(px+3*sin*pcos,y+2,pz+3*cos*pcos ,false);
explode(px+3*sin*pcos,y+2,pz+3*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+4*sin*pcos,y+2,pz+4*cos*pcos ,152);
Level.destroyBlock(px+4*sin*pcos,y+2,pz+4*cos*pcos ,false);
explode(px+4*sin*pcos,y+2,pz+4*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+5*sin*pcos,y+2,pz+5*cos*pcos ,152);
Level.destroyBlock(px+5*sin*pcos,y+2,pz+5*cos*pcos ,false);
explode(px+5*sin*pcos,y+2,pz+5*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+6*sin*pcos,y+2,pz+6*cos*pcos ,152);
Level.destroyBlock(px+6*sin*pcos,y+2,pz+6*cos*pcos ,false);
explode(px+6*sin*pcos,y+2,pz+6*cos*pcos,0.9);
java.lang.Thread.sleep(30);
Level.setTile(px+7*sin*pcos,y+2,pz+7*cos*pcos ,152);
Level.destroyBlock(px+7*sin*pcos,y+2,pz+7*cos*pcos ,false);
explode(px+7*sin*pcos,y+2,pz+7*cos*pcos,0.9);
java.lang.Thread.sleep(30);
주작스킬1쿨 = 40;
} } ); new java.lang.Thread( 연속 ).start();
}
if(i==700&&Entity.isSneaking(getPlayerEnt())==false&&주작스킬1쿨>0)
{
clientMessage("이 스킬의 쿨타임은"+parseInt(주작스킬1쿨/20)+"초 남았습니다");
}
}

function startDestroyBlock(x,y,z,side)
{
if(getCarriedItem()==700&&Entity.isSneaking(getPlayerEnt())==false&&주작스킬2쿨==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
주작스킬2쿨 = 200000;
궁2 = true;
Entity.addEffect(getPlayerEnt(),MobEffect.damageResistance,20,4,true,true);
explode(getPlayerX(),getPlayerY()+2,getPlayerZ(),2,true);
java.lang.Thread.sleep(800);
Entity.addEffect(getPlayerEnt(),MobEffect.damageResistance,20,4,true,true);
explode(getPlayerX(),getPlayerY()+3,getPlayerZ(),3,true);
java.lang.Thread.sleep(800);
Entity.addEffect(getPlayerEnt(),MobEffect.damageResistance,20,4,true,true);
explode(getPlayerX(),getPlayerY()+4,getPlayerZ(),4,true);
java.lang.Thread.sleep(800);
Entity.addEffect(getPlayerEnt(),MobEffect.damageResistance,20,4,true,true);
explode(getPlayerX(),getPlayerY()+5,getPlayerZ(),5,true);
궁2 = false;
주작스킬2쿨 = 200;
} } ); new java.lang.Thread( 연속 ).start();
}
if(getCarriedItem()==700&&Entity.isSneaking(getPlayerEnt())==false&&주작스킬2쿨>0)
{
clientMessage("이 스킬의 쿨타임은"+parseInt(주작스킬2쿨/20)+"초 남았습니다");
}
if(getCarriedItem()==700&&Entity.isSneaking(getPlayerEnt())==true&&주작스킬3쿨==0)
{
var 연속 = new java.lang.Runnable( { run: function()
{
주작스킬3쿨 = 200000;
setVelY(getPlayerEnt(),1);
궁0 = true;
유파 = true;
궁1 = true;
java.lang.Thread.sleep(1000);
주작스킬()
java.lang.Thread.sleep(1000);
주작스킬()
java.lang.Thread.sleep(1000);
주작스킬()
java.lang.Thread.sleep(1000);
주작스킬()
java.lang.Thread.sleep(1000);
주작스킬()
java.lang.Thread.sleep(1000);
주작스킬()
궁1 = false;
유파 = false;
궁0 = false;
주작스킬3쿨 = 260;
} } ); new java.lang.Thread( 연속 ).start();
}
if(getCarriedItem()==700&&Entity.isSneaking(getPlayerEnt())==true&&주작스킬3쿨>0)
{
clientMessage("이 스킬의 쿨타임은"+parseInt(주작스킬3쿨/20)+"초 남았습니다");
}
}

var sin,cos;
var c=0;

var 낙뎀 = false;
var 궁0 = false;
var 궁1 = false;
var 궁2 = false;
var 궁3 = false;
var 궁4 = false;
var 유파 = false;
var 파티클 = false;
var 사용 = true;

var 주작궁쿨 = 0;
var 주작스킬1쿨 = 0;
var 주작스킬2쿨 = 0;
var 주작스킬3쿨 = 0;

function modTick()
{
낙뎀방지=Entity.getVelY(getPlayerEnt());
if(낙뎀방지<=-0.2&&낙뎀==true)
{
Entity.addEffect(getPlayerEnt(),MobEffect.jump,2,999,true,false);
}
if(낙뎀방지>=-0.26&&낙뎀==true)
{
Entity.removeEffect(getPlayerEnt(),MobEffect.jump);
}
if(궁0==true)
{
Level.addParticle(ParticleType.mobFlame,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,0,5);
}
if(궁1==true)
{
c++;
sin=Math.sin(c*Math.PI/9);
cos=Math.cos(c*Math.PI/9);
Level.addParticle(ParticleType.crit,getPlayerX()+sin,getPlayerY()+1,getPlayerZ()+cos,0,0,0,4);
setVelY(getPlayerEnt(),0.1);
}
if(궁2==true)
{
for(var e=0;e<30;e+=0.3)
{
sin=Math.sin(e*Math.PI/10);
cos=Math.cos(e*Math.PI/10);
Level.addParticle(ParticleType.flame,getPlayerX()+(sin*1),getPlayerY()-1,getPlayerZ()+(cos*1),0,0,0,3);
}
}
if(궁3==true)
{
Entity.setImmobile(Player.getEntity(),true)
}
if(궁3==false)
{
Entity.setImmobile(Player.getEntity(),false)
}
if(궁4==true)
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
Entity.setVelX(getPlayerEnt(),1.5*sin);
Entity.setVelY(getPlayerEnt(),1*tan);
Entity.setVelZ(getPlayerEnt(),1.5*cos);

for each(var ent in Entity.getAll())
{
if(getPlayerX()+1.5>Entity.getX(ent)&&getPlayerX()-1.5<Entity.getX(ent)&&getPlayerZ()+1.5>Entity.getZ(ent)&&getPlayerZ()-1.5<Entity.getZ(ent)&&ent!=getPlayerEnt())
{
for(k=getPlayerX()-1.5;k<getPlayerX()+1.5;k++)
for(m=getPlayerZ()-1.5;m<getPlayerZ()+1.5;m++)
{
Entity.setHealth(ent,Entity.getHealth(ent)-0.1);
Entity.setFireTicks(ent,10);
}}}
}
if(유파==true)
{
주작궁()
}
if(파티클==true)
{
for(var i=1;i<4;i=i+0.15)
{
c++;
sin=Math.sin(c*Math.PI/10)*i;
cos=Math.cos(c*Math.PI/10)*i;
Level.addParticle(ParticleType.mobFlame,getPlayerX()+sin,getPlayerY()-1,getPlayerZ()+cos,0,0,0,50);
}}
if(주작궁쿨>0)
{
주작궁쿨--;
}
if(주작스킬1쿨>0)
{
주작스킬1쿨--;
}
if(주작스킬2쿨>0)
{
주작스킬2쿨--;
}
if(주작스킬3쿨)
{
주작스킬3쿨--;
}
}
var mob=[];

function entityAddedHook(entity)
{
 for(var i=10;i<50;i++){
var T=Entity.getEntityTypeId(entity);
if(T==i)
{
mob.push(entity)
}}
}

function 주작궁()
{
for(var c in mob)
{
var px=Math.floor(getPlayerX());
var py=Math.floor(getPlayerY())-1;
var pz=Math.floor(getPlayerZ());
if(Math.abs(px-Entity.getX(mob[c]))<8&&Math.abs(py-Entity.getY(mob[c]))<8&&Math.abs(pz-Entity.getZ(mob[c]))<8)
{
for(var i=0;i<30;i++)
{
Level.addParticle(ParticleType.flame,Entity.getX(mob[c])+((px-Entity.getX(mob[c]))/30)*i,Entity.getY(mob[c])+((py-Entity.getY(mob[c]))/30)*i,Entity.getZ(mob[c])+((pz-Entity.getZ(mob[c]))/30)*i,0,0,0,1);
Entity.setFireTicks(mob[c],10);
Entity.addEffect(mob[c],2,80,100,true,true);
Entity.setVelY(mob[c],0.1);
}
}
}
}

function 주작스킬()
{
for(var c in mob)
{
var px=Math.floor(getPlayerX());
var py=Math.floor(getPlayerY())-1;
var pz=Math.floor(getPlayerZ());
if(Math.abs(px-Entity.getX(mob[c]))<8&&Math.abs(py-Entity.getY(mob[c]))<8&&Math.abs(pz-Entity.getZ(mob[c]))<8)
{
for(var i=0;i<30;i++)
{
Entity.setVelY(mob[c],0.1);
explode(Entity.getX(mob[c]),Entity.getY(mob[c]),Entity.getZ(mob[c]),0.4,true);
}
}
}
}

function 띄우기()
{
for(var c in mob)
{
var px=Math.floor(getPlayerX());
var py=Math.floor(getPlayerY())-1;
var pz=Math.floor(getPlayerZ());
if(Math.abs(px-Entity.getX(mob[c]))<8&&Math.abs(py-Entity.getY(mob[c]))<8&&Math.abs(pz-Entity.getZ(mob[c]))<8)
{
for(var i=0;i<30;i++)
{
Entity.setVelY(mob[c],2);
}
}
}
}

function 패시브()
{
for(var c in mob)
{
var px=Math.floor(getPlayerX());
var py=Math.floor(getPlayerY())-1;
var pz=Math.floor(getPlayerZ());
if(Math.abs(px-Entity.getX(mob[c]))<5&&Math.abs(py-Entity.getY(mob[c]))<5&&Math.abs(pz-Entity.getZ(mob[c]))<5)
{
for(var i=0;i<30;i++)
{
Entity.setFireTicks(mob[c],5);
}
}
}
}
