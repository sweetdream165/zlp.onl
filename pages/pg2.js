import {$} from '../just.js' 

export function pg2(){
	return [
		$['div']({style: 'width: 50px; height: 150px; background-color: orange', innerHTML: 'PG2'}),
		$['div']({style: 'width: 150px; height: 150px; background-color: BurlyWood', innerHTML: 'fffff'})
	]
}