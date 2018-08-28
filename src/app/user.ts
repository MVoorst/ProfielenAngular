export class User {
	constructor(

		public id? : number,
		public gebruikersnaam? : string,
		public wachtwoord? : string,
		public emailadres? : string,
		public voornaam? : string,
		public tussenvoegsel? : string,
		public achternaam? : string,
		public geslacht?: boolean,
		public geboortedatum?: number,
		public huisnummer?: number,
		public straat?: string,
		public postcode?: string,
		public woonplaats?: string,
		public linkedinadres?: string,
		public githubadres?: string

		) {
		if (id!=null) {
			this.id = id;
			}
		if (gebruikersnaam!=null) {
			this.gebruikersnaam = gebruikersnaam;
			}
		if (emailadres!=null) {
			this.emailadres = emailadres;
			}
		if (voornaam!=null) {
			this.voornaam = voornaam;
			}
		if (tussenvoegsel!=null) {
			this.tussenvoegsel = tussenvoegsel;
			}
		if (achternaam!=null) {
			this.achternaam = achternaam;
			}
		if (geboortedatum!=null) {
			this.geboortedatum = geboortedatum;
			}
		if (huisnummer!=null) {
			this.huisnummer = huisnummer;
			}
		if (straat!=null) {
			this.straat = straat;
			}
		if (postcode!=null) {
			this.postcode = postcode;
			}
		if (woonplaats!=null) {
			this.woonplaats = woonplaats;
			}
		if (linkedinadres!=null) {
			this.linkedinadres = linkedinadres;
			}
		if (githubadres!=null) {
			this.githubadres = githubadres;
			}

		}

	}