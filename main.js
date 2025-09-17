import {$} from './just.js' // +import library
import * as cmp from './components/common.js' // + import components
import * as stl from './styles/styles.js' // + import styles

(function Main() {
	//:::CONFIG:::
	$.RouteIn = '.content'
	$.updateURL = true

	//:::LAYOUT:::
	cmp.navBar()
	cmp.content()

	//:::BIND_STYLES:::
	$.bindStyle('.pagelink', stl.pageLinkStl)

	startPage('home', 1)
})()