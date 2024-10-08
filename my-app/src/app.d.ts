// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { IStaticMethods } from 'preline/src/static/interfaces';
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Window {
		HSStaticMethods: IStaticMethods;
	}
}

export {};
