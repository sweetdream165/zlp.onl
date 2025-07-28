export function fetchAndLoadPage(el, page_name){
	return fetch(`./pages/${page_name}.html`).then(res=>res.text()).then(text=>el.innerHTML = text)
}

export function create_page(name, initFunc=()=>{}){
	class Page extends HTMLElement {
		constructor(){
			super()
		}

		connectedCallback(){
			fetchAndLoadPage(this, name)
			initFunc()
		}
	}
	
	customElements.define(`${name}-page`, Page)
}

//INIT LIBRARY
window.curent_page = document.createElement('div')
window.go = (name) => {
	import(`./pages/${name}.js`)
	window.curent_page.remove()
	window.curent_page = document.createElement(`${name}-page`)
	document.body.appendChild(window.curent_page)
}