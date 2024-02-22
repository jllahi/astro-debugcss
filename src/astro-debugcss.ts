export default {
	id: 'debugcss',
	name: 'Debug CSS',
	icon: 'bug',
	init(canvas: ShadowRoot, eventTarget: any) {
		eventTarget.addEventListener('app-toggled', (event: { detail: { state: boolean; }; }) => {
			if (event.detail.state === true) {
				// window.localStorage.setItem('debugcss', 'true');
				const headElement = document.head
				const styleElement = document.createElement('style')
				styleElement.setAttribute('debug-css', '')
				styleElement.innerText = '* { outline: 1px solid tomato; }'
				const debugElement = headElement.querySelector('[debug-css]')
				headElement.append(styleElement)
			} else {
				const headElement = document.head
				const debugElement = headElement.querySelector('[debug-css]')
				if (debugElement) return debugElement.remove()
			}
		})
	},
}
