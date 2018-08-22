export class User {
	constructor(
		public id: number,
		public gebruikersnaam: string,
		public wachtwoord: string,
		public emailadres: string,
		public voornaam: string,
		public tussenvoegsel: string,
		public achternaam: string,
		public geslacht: boolean,
		public geboortedatum: number,
		public huisnummer: number,
		public straat: string,
		public postcode: string,
		public woonplaats: string,
		public linkedinadres: string,
		public githubadres: string

		) {}
}
