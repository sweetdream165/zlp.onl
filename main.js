import {$} from './just.js' 

(function Main() {
	$['div']({style: 'background-color: green', className: 'zalupa'}).ADD(
		$['div']({style: 'top: 30px;', style: 'background-color: yellow'}).ADD(
			$['a']({href: 'https://www.google.com', innerHTML: 'google'})
		),
		$['button']({style: 'top: 80px;', innerHTML: 'llll'})

	)
	$['a']({style: 'top:70px; position: absolute; background-color: red', className: 'zaza', innerHTML: "EBANA krwa"})

})()