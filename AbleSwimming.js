function modTick()
{
if(Entity.isSneaking(getPlayerEnt())==true&&getTile(getPlayerX()-1,getPlayerY()-1,getPlayerZ())==9)
{
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY(),getPlayerZ(),0,0,0,15);
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY(),getPlayerZ(),0,0,0,15);
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY(),getPlayerZ(),0,0,0,15);
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY()+1,getPlayerZ(),0,0,0,15);
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY()+1,getPlayerZ(),0,0,0,15);
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY()+1,getPlayerZ(),0,0,0,15);
Entity.addEffect(getPlayerEnt(),MobEffect.waterBreathing,20,0,false,true);
Entity.addEffect(getPlayerEnt(),MobEffect.nightVision,20,0,false,true);
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
Entity.setVelX(getPlayerEnt(),0.5*sin);
Entity.setVelY(getPlayerEnt(),0.25*tan);
Entity.setVelZ(getPlayerEnt(),0.5*cos);
}
}

function newLevel()
{
clientMessage("제작자 쿠키샌드");
clientMessage("물속에서 웅크리기를 하면 수영을 합니다");
}
