var 에이스 = 1;

function useItem(x,y,z,i,b,s)
{
if(i==280)
{
for(var X=-7;X<10;X++)
for(var Y=-7;Y<10;Y++)
for(var Z=-7;Z<10;Z++) 
{
if((X*X)+(Y*Y)+(Z*Z)<=(8*8)&&(X*X) +(Y*Y)+(Z*Z)>=(7)*(7))
{
Level.addParticle(ParticleType.crit,x+X,y+Y+10,z+Z,0,0,0,5);
setTile(x+2,y+1,z,51);
setTile(x+1,y+1,z,51);
setTile(x,y+1,z,51);
setTile(x-1,y+1,z,51);
setTile(x-2,y+1,z,51);
setTile(x+2,y+1,z+1,51);
setTile(x+1,y+1,z+1,51);
setTile(x,y+1,z+1,51);
setTile(x-1,y+1,z+1,51);
setTile(x-2,y+1,z+1,51);
setTile(x+2,y+1,z+2,51);
setTile(x+1,y+1,z+2,51);
setTile(x,y+1,z+2,51);
setTile(x-1,y+1,z+2,51);
setTile(x-2,y+1,z+2,51);
setTile(x+2,y+1,z-1,51);
setTile(x+1,y+1,z-1,51);
setTile(x,y+1,z-1,51);
setTile(x-1,y+1,z-1,51);
setTile(x-2,y+1,z-1,51);
setTile(x+2,y+1,z-2,51);
setTile(x+1,y+1,z-2,51);
setTile(x,y+1,z-2,51);
setTile(x-1,y+1,z-2,51);
setTile(x-2,y+1,z-2,51);
}
}
}
}

function modTick()
{
if(에이스==1)
{
Entity.addEffect(getPlayerEnt(),12,20,0,false,true);
}
}

function newLevel()
{
clientMessage("이 스크립트는 쿠키샌드가 만들었으며 무단수정및 무단배포는 불가능하나 리뷰는 가능합니다");
clientMessage("막대기로 땅을 터치하면 발동합니다");
에이스 = 1;
}
