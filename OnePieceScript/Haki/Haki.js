ModPE.setItem(502,"무장색",0,"무장색패기");
ModPE.setItem(503,"견문색",0,"견문색패기");
ModPE.setItem(504,"패왕색",0,"패왕색패기");

function useItem(x,y,z,i,b)
{
if(i==502)
{
Entity.addEffect(getPlayerEnt(),5,100,2,false,true);
}
if(i==503)
{
Entity.addEffect(getPlayerEnt(),11,100,4,false,true);
}
}

function newLevel()
{
clientMessage("이 스크립트는 쿠키샌드가 만들었으며 무단수정및 무단배포는 불가능하나 리뷰는 가능합니다");
clientMessage("명령어:/모든패기");
clientMessage("명령어:/무장색");
clientMessage("명령어:/견문색");
clientMessage("명령어:/패왕색");
}

function procCmd(cmd)
{
if(cmd=="모든패기")
{
addItemInventory(502,+1);
addItemInventory(503,+1);
addItemInventory(504,+1);
}
if(cmd=="무장색")
{
addItemInventory(502,+1);
}
if(cmd=="견문색")
{
addItemInventory(503,+1);
}
if(cmd=="패왕색")
{
addItemInventory(504,+1);
}
}

function attackHook(a,v)
{
if(getCarriedItem()==504)
{
Entity.addEffect(v,19,100,1,false,true);
Entity.addEffect(v,18,100,2,false,true);
Entity.addEffect(v,2,100,2,false,true);
}
}
