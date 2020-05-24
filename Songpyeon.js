ModPE.setFoodItem(500,"ghast_tear",0,5,"송편");

function newLevel()
{
clientMessage("이 스크립트는 쿠키샌드가 제작하였습니다");
clientMessage("명령어1:/송편 지급 1");
clientMessage("명령어2:/송편 지급 64");
clientMessage("명령어3:/배고픔");
}

function eatHook(h,s)
{
if(getCarriedItem()==500)
{
clientMessage("기운이 솟아오른다");
Entity.addEffect(getPlayerEnt(),MobEffect.regeneration,20*10,1,false,true);
Entity.addEffect(getPlayerEnt(),MobEffect.damageBoost,20*10,1,false,true);
Entity.addEffect(getPlayerEnt(),MobEffect.movementSpeed,20*10,1,false,true);
Entity.addEffect(getPlayerEnt(),MobEffect.digSpeed,20*10,1,false,true);
Entity.addEffect(getPlayerEnt(),MobEffect.damageResistance,20*10,1,false,true);
}
}

function procCmd(cmd)
{
if(cmd=="송편 지급 1")
{
addItemInventory(500,1);
}
if(cmd=="송편 지급 64")
{
addItemInventory(500,64);
}
if(cmd=="배고픔")
{
Player.setHunger(1);
}
}
