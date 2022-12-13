export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
   // TODO: Repair the isSpaceDebris method in the Satellite class.
   // TODO: isSpaceDebris returns true if the satellite type is 'Space Debris', and it returns false otherwise.
   isSpaceDebris(): boolean {
	if(this.type.includes("Space Debris")) {
	   return true;
	} return false;
}

}

// TODO 3a: fix isSpaceDebris check
