var 크리티컬 = 0;
var 연기 = 0;
var 용암 = 0;
var 레드스톤 = 0;
var 화염 = 0;
var 하트 = 0;
var 거품 = 0;

function procCmd(cmd)
{
if(cmd=="파티클 크리티컬")
{
clientMessage("crit 파티클을 적용하였습니다");
크리티컬 = 1;
연기 = 0;
용암 = 0;
레드스톤 = 0;
화염 = 0;
하트 = 0;
거품 = 0;
}
if(cmd=="파티클 연기")
{
clientMessage("cloud 파티클을 적용하였습니다");
연기 = 1;
크리티컬 = 0;
용암 = 0;
레드스톤 = 0;
화염 = 0;
하트 = 0;
거품 = 0;
}
if(cmd=="파티클 용암")
{
clientMessage("lava 파티클을 적용하였습니다");
용암 = 1;
크리티컬 = 0;
연기 = 0;
레드스톤 = 0;
화염 = 0;
하트 = 0;
거품 = 0;
}
if(cmd=="파티클 레드스톤")
{
clientMessage("redstone 파티클을 적용하였습니다");
레드스톤 = 1;
크리티컬 = 0;
연기 = 0;
용암 = 0;
화염 = 0;
하트 = 0;
거품 = 0;
}
if(cmd=="파티클 화염")
{
clientMessage("mobFlame 파티클을 적용하였습니다");
화염 = 1;
크리티컬 = 0;
연기 = 0;
용암 = 0;
레드스톤 = 0;
하트 = 0;
거품 = 0;
}
if(cmd=="파티클 하트")
{
clientMessage("heart 파티클을 적용하였습니다");
하트 = 1;
크리티컬 = 0;
연기 = 0;
용암 = 0;
레드스톤 = 0;
화염 = 0;
거품 = 0;
}
if(cmd=="파티클 거품")
{
clientMessage("bubble 파티클을 적용하였습니다");
거품 = 1;
크리티컬 = 0;
연기 = 0;
용암 = 0;
레드스톤 = 0;
화염 = 0;
하트 = 0;
}
if(cmd=="파티클 해제")
{
clientMessage("모든 파티클을 사용하지 않습니다");
크리티컬 = 0;
연기 = 0;
용암 = 0;
레드스톤 = 0;
화염 = 0;
하트 = 0;
거품 = 0;
}
if(cmd=="파티클 all")
{
clientMessage("모든 파티클을 적용하였습니다");
clientMessage("다소 렉이 걸릴 수도 있습니다");
크리티컬 = 1;
연기 = 1;
용암 = 1;
레드스톤 = 1;
화염 = 1;
하트 = 1;
거품 = 1;
}
if(cmd=="help")
{
clientMessage("1./파티클 크리티컬 2./파티클 용암");
clientMessage("3./파티클 연기 4./파티클 레드스톤");
clientMessage("5./파티클 화염 6./파티클 하트");
clientMessage("7./파티클 거품")
clientMessage("8./파티클 all 9./파티클 해제");
}
}

function modTick()
{
if(크리티컬==1)
{
Level.addParticle(ParticleType.crit,getPlayerX(),getPlayerY()-1,getPlayerZ(),1,0,0,3);
Level.addParticle(ParticleType.crit,getPlayerX(),getPlayerY()-1,getPlayerZ(),-1,0,0,3);
Level.addParticle(ParticleType.crit,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,1,3);
Level.addParticle(ParticleType.crit,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,-1,3);
}
if(연기==1)
{
Level.addParticle(ParticleType.cloud,getPlayerX()+1,getPlayerY()-1,getPlayerZ(),0,0,0,150);
Level.addParticle(ParticleType.cloud,getPlayerX()-1,getPlayerY()-1,getPlayerZ(),0,0,0,150);
Level.addParticle(ParticleType.cloud,getPlayerX(),getPlayerY()-1,getPlayerZ()+1,0,0,0,150);
Level.addParticle(ParticleType.cloud,getPlayerX(),getPlayerY()-1,getPlayerZ()-1,0,0,0,150);
}
if(용암==1)
{
Level.addParticle(ParticleType.lava,getPlayerX(),getPlayerY()-1,getPlayerZ(),1,0,0,3);
Level.addParticle(ParticleType.lava,getPlayerX(),getPlayerY()-1,getPlayerZ(),-1,0,0,3);
Level.addParticle(ParticleType.lava,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,1,3);
Level.addParticle(ParticleType.lava,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,-1,3);
}
if(레드스톤==1)
{
Level.addParticle(ParticleType.redstone,getPlayerX(),getPlayerY()-1,getPlayerZ(),1,0,0,3);
Level.addParticle(ParticleType.redstone,getPlayerX(),getPlayerY()-1,getPlayerZ(),-1,0,0,3);
Level.addParticle(ParticleType.redstone,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,1,3);
Level.addParticle(ParticleType.redstone,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,-1,3);
}
if(화염==1)
{
Level.addParticle(ParticleType.mobFlame,getPlayerX(),getPlayerY()-1,getPlayerZ(),1,0,0,3);
Level.addParticle(ParticleType.mobFlame,getPlayerX(),getPlayerY()-1,getPlayerZ(),-1,0,0,3);
Level.addParticle(ParticleType.mobFlame,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,1,3);
Level.addParticle(ParticleType.mobFlame,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,-1,3);
}
if(하트==1)
{
Level.addParticle(ParticleType.heart,getPlayerX(),getPlayerY()-1,getPlayerZ(),1,0,0,3);
Level.addParticle(ParticleType.heart,getPlayerX(),getPlayerY()-1,getPlayerZ(),-1,0,0,3);
Level.addParticle(ParticleType.heart,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,1,3);
Level.addParticle(ParticleType.heart,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,-1,3);
}
if(거품==1)
{
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY()-1,getPlayerZ(),1,0,0,10);
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY()-1,getPlayerZ(),-1,0,0,10);
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,1,10);
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,-1,10);
}
}

function newLevel()
{
clientMessage("이 스크립트는 쿠키샌드가 만들었습니다");
clientMessage("명령어:/help");
}
