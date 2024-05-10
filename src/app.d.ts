// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Variables {
			idVariable: number;
			cdSerie: number;
			descripcion: string;
			fecha: string;
			valor: string;
		}
		//interface Error { }
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { Variables };
