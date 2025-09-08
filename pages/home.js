import {$} from '../just.js' 

export function home(){
	return [
		$['div']({style: 'width: 50px; height: 50px; background-color: red', innerHTML: 'HOME HOME'}).
			ADD($['div']({style: 'top: 30px;', style: 'background-color: yellow', innerHTML: 'lol'})),
		$['div']({style: 'width: 50px; height: 50px; background-color: green', innerHTML: 'ZALUPA ONL'})
	]
}