import {$} from '../just.js'

//### NAVBAR ###
export function navBar(){
	return $['div']({style: 'background-color: gray; display: flex; justify-content: center;'}).ADD(
		pageLink('home'),
		pageLink('pg2'),
		pageLink('pg3'),
	)
	
}

function pageLink(pageName){
	return $['div']({className: 'pagelink', innerHTML: pageName}, {click: ()=>go(pageName)})
}

//### CONTENT_DIV ###
export function content(){
	return $['div']({className: 'content', style: 'position: absolute; width: 500px; height: 500px; top: 200px; left: 200px; background-color: darkgray'})
}