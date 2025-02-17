var getWeaponTriangleBonus = function(p1,p2) {
		
		var p1Weapon = p1.getweapon();
		var p2Weapon = p2.getweapon();
		var p1wtb = 0;
		var p2wtb = 0;
		
		if(p1Weapon == p2Weapon) {
			p1wtb = 0;
			p2wtb = 0;
		}
		else if (p1Weapon == 1 && p2Weapon == 2) {
			p1wtb = 1;
			p2wtb = -1;
		}
		else if(p1Weapon == 3 && p2Weapon == 2 ){
			p1wtb = -1;
			p2wtb = 1;
		}
		else if (p1Weapon == 2 && p2Weapon == 1) {
			p1wtb = -1;
			p2wtb = 1;
		}
		else if (p1Weapon == 2 && p2Weapon == 3) {
			p1wtb = 1;
			p2wtb = -1;
		}
		else if(p1Weapon == 3 && p2Weapon == 1 ){
			p1wtb = 1;
			p2wtb = -1;
		}
		else(p1Weapon == 1 && p2Weapon == 3 ){
			p1wtb = -1;
			p2wtb = 1;
		}
		return [p1wtb, p2wtb];	
}

var Attack = function(p1,p2) {
	
	//get the weapon Triangle bonus
	var wtb = getWeaponTriangleBonus(p1,p2);
	
	//player 1 bonus
	var p1wtb = wtb[0];
	
	//player 2 bonus
	var p2wtb = wtb[1];
	
	//player 1 attack power
	var p1AP = p1.getStr() + p1.getSpd() + p1wtb;
	
	//player 2 attack power
	var p2AP = p2.Str + p2.Spd + p2wtb;
	
	//player 1 defense power
	var p1DP = p1.Def + p1.Luc + p1wtb;
	
	//player 2 defense power
	var p1DP = p2.Def + p2.Luc + p2wtb;
	
	var p1Damage = 0;
	var p2Damage = 0;
	
	While(p1.Health > 0 && p2.Health > 0)
	{
		if (p1.Hit >=  p2.Evade) 
		{
			p1Damage = (p1AP - p2DP)  * 10;
			p1.setHit(p1.getHit() - 1);
		}
		else
		{
			p2Damage = (p2AP - p1DP) * 10;
			p1.setHit(p1.getHit() + 1);
		}

		if (p1.Health == 0) {
			//display you lose screen
			p1.xp += level + 1;
			if (p1.xp == p1.nextlevel){
				p1.levelup();
			}
		}
		else {
			//display you win screen
			p1.xp += level + 10;
			if (p1.xp == p1.nextlevel){
				p1.levelup();
			}
		}
	}
}


