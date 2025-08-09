import {initUtils} from './utils.js'

initUtils('home')

function bg_letters(){
	const el =document.querySelector('.bg-letters')
	const letters = ['Z', 'L', 'P']

	for (let i=0; i < (window.innerWidth/3); i++) {
		const rndT = Math.floor(Math.random()*((window.innerHeight-20) - 0) + 0)
		const rndL = Math.floor(Math.random()*(window.innerWidth-20) + 0)

		const te = document.createElement('div')
		te.innerHTML = letters[Math.floor(Math.random()*(3 - 0) + 0)]
		te.className = 'letter'
		te.style=`position:fixed;top:${rndT}px;left:${rndL}px;color:#1A1A1A;font:bold 20px sans-serif`
		el.appendChild(te)
	}
}

bg_letters()

const letters = document.querySelectorAll('.letter')
const rndArr = [-1, 1]
let shiftT = []
let shiftL = []
for(let i =0; i<letters.length; i++){
	shiftT.push(rndArr[Math.floor(Math.random()*(2 - 0) + 0)])
	shiftL.push(rndArr[Math.floor(Math.random()*(2 - 0) + 0)])
}

function animLoop(){
	letters.forEach((el,i)=>{
		const top = parseInt(el.style.top)
		const left = parseInt(el.style.left)
		if (top > window.innerHeight) {shiftT[i] = -1} else if(top < 0) {shiftT[i] = 1}
		if (left > window.innerWidth) {shiftL[i] = -1} else if(top < 0) {shiftL[i] = 1}
		el.style.top = (top+shiftT[i]) + 'px'
		el.style.left = (left+shiftL[i]) + 'px'
	})
	setTimeout(() => {
		requestAnimationFrame(animLoop);
	}, 1000 / 25);
}

requestAnimationFrame(animLoop)