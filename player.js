function Player()
{
	this.Str = 0;
	this.Spd = 0;
	this.Def = 0;
	this.Mag = 0;
	this.Luc = 0;
	this.xp = 0;
	this.level = 1;
	this.Hit = Spd; 
	this.Evade = Luc;
	this.nextlevel = level * 100;
	//1 is sword, 2 is axe, 3 is lance
	this.weapon = 0;
	this.statstring = "";
	
	this.serialize = function() {
		this.strstring = Str.toString();
		this.spdstring = Spd.toString();
		this.defstring = Def.toString();
		this.magstring = Mag.toString();
		this.lucstring = Luc.toString();
		this.xpstring = xp.toString();
		this.lvlstring = level.toString();
		this.wepstring = weapon.toString();
		this.delim = "|"
		
		this.statstring = strstring.concat(delim,spdstring,delim,defstring,delim,magstring,delim,lucstring,delim,xpstring,delim,lvlstring,delim,wepstring);
		return this.statstring;
	}
	this.deserialize = function(serial) {
		this.Stats = serial.split("|");
		setStr(parseInt(Stats[0]));
		setSpd(parseInt(Stats[1]));
		setDef(parseInt(Stats[2]));
		setMag(parseInt(Stats[3]));
		setLuc(parseInt(Stats[4]));
		setXp(parseInt(Stats[5]));
		setLvl(parseInt(Stats[6]));
		setweapon(parseInt(Stats[7]));
	}
	
	this.setCookie = function(cname, cvalue, expires) {
		var d = new Date();
    	d.setTime(d.getTime() + (exdays*24*60*60*1000));
    	var expires = "expires="+d.toUTCString();
    	document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	this.getCookie = function(cookie) {
		var name = cname + "=";
    	var ca = document.cookie.split(';');
    	for(var i=0; i<ca.length; i++) {
        	var c = ca[i];
        	while (c.charAt(0)==' ') c = c.substring(1);
        		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    	}
    	return "";
	}
	//initialize
	this.generateStats(w) {
	//sword
		if(w == 1){
			setStr(2); 
			setSpd(2); 
			setDef(2); 
			setMag(1); 
			setLuc(2); 
			setLvl(1);
			Hit = Spd; 
			Evade = Luc;
			nextlevel = level * 100;
		}
		else if(w == 2){
		//axe
			setStr(2); 
			setSpd(2); 
			setDef(1); 
			setMag(2); 
			setLuc(2);
			setLvl(1);
			Hit = Spd; 
			Evade = Luc;
			nextlevel = level * 100; 
		else {
		//lance
			setStr(2); 
			setSpd(1); 
			setDef(2); 
			setMag(2); 
			setLuc(2); 
			setLvl(1);
			Hit = Spd; 
			Evade = Luc;
			nextlevel = level * 100;
		}
	}
	
	//level up stats function
	this.levelup = function() {
		setStr(Str + (Math.floor(Math.random() * (2 - 0)) + 0));
		setSpd(Spd + (Math.floor(Math.random() * (2 - 0)) + 0));
		setDef(Def + (Math.floor(Math.random() * (2 - 0)) + 0));
		setMag(Mag + (Math.floor(Math.random() * (2 - 0)) + 0));
		setLuc(Luc + (Math.floor(Math.random() * (2 - 0)) + 0));
		level += 1;
		
	}
	
	//setters
	this.setStr = function(x) {
		Str = x;
	}
	this.setSpd = function(x) {
		Spd = x;
	}
	this.setDef = function(x) {
		Def = x;
	}
	this.setMag = function(x) {
		Mag = x;
	}
	this.setLuc = function(x) {
		Luc = x;
	}
	this.setweapon = function(x) {
		weapon = x;
	}
	this.setHit = function(x) {
		Hit = x;
	}
	this.setEvade = function(x) {
		Evade = x;
	}
	this.setXp = function(x) {
		xp = x;
	}
	this.setLvl = function(x) {
		lvl = x;
	}
	
	//getters
	this.getStr = function() {
		return Str;
	}
	this.getSpd = function() {
		return Spd;
	}
	this.getDef = function() {
		return Def;
	}
	this.getMag = function() {
		return Mag;
	}
	this.getLuc = function() {
		return Luc;
	}
	this.getweapon = function() {
		return weapon;
	}
	this.getHit = function() {
		return Hit;
	}
	this.getEvade = function() {
		return Evade; 
	}
}
	
	