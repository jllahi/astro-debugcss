import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from 'astro';

export default function debugcssIntegration(): AstroIntegration {
	// See the Integration API docs for full details
	// https://docs.astro.build/en/reference/integrations-reference/

	return {
		name: 'astro-debugcss',
		hooks: {
			"astro:config:setup": ({ addDevToolbarApp }) => {
				// https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
				const __filename = fileURLToPath(import.meta.url);
				const __dirname = dirname(__filename);
				addDevToolbarApp(join(__dirname, "./astro-debugcss.ts"));
			},
		},
	};
}
