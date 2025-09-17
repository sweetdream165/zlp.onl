console.log('just here')

//:::$ IS THE WAY TO COMMUNICATE WITH JUST.JS:::
//:::IT WILL BE DECLARED IN EXPORT SECTION___:::
let elName = ''
let dollar = {};
const handler = {
    get: function(target, name) {
    elName = name
    return target.hasOwnProperty(name) ? target[name] : createElement;
  }
};

//:::FUCNTIONS THAT HANDLES ELEMENT CREATION AND PUTS IT TO THE RIGHT PLACE IN DOM:::
function createElement(elementPropertys = {}, events = '') {
  const element = document.createElement(elName)

  //+add styles+
  for (const [key, value] of Object.entries(elementPropertys)) {
    element[key] = value
  }
  Object.assign(element.style, elementPropertys)

  //+add events+
  for (const [key, value] of Object.entries(events)) {
    element.addEventListener(key, ()=>{
      value()
    })
  }

  //+add/append child elements+
  element.ADD = appendElement
  function appendElement(...elements) {
    elements.forEach((el)=>{
      if(Array.isArray(el)){
        this.append(...el)
        return
      }
      this.append(el)
    })
    return this
  }

  document.body.append(element)
  return element
}

function bindStyleToClass(cls, stl){
  const tempEl = document.createElement('temp')
  Object.assign(tempEl.style, new stl())
  justSheet.insertRule(`${cls}{${tempEl.style.cssText}}`)
}

//:::EXPORTS:::
export const $ = new Proxy(dollar, handler);

window.go = (page, updateURL = $.updateURL)=>{
  const cnt = document.querySelector($.RouteIn)
  cnt.innerHTML = ''
  import(`./${$.pagesDir}/${page}.js`).then((fn)=>{
    fn[page]().forEach((el)=>{
      cnt.append(el)  
    })
  })
  if(updateURL) history.state ? history.pushState(page, "", page) : history.replaceState(page, "", page)
  $.pathLVL = location.pathname.split('/').splice(1)
}

//:::DEF CONFIG:::
$.RouteIn = 'body'
$.bindStyle = bindStyleToClass
$.pagesDir = 'pages'
$.updateURL = true
$.pathLVL = location.pathname.split('/').splice(1)

//:::INIT STUFF:::
//+just stylesheet+
const justStyle = document.createElement("style");
document.head.appendChild(justStyle);
const justSheet = justStyle.sheet;
//+event listeners+
window.addEventListener("popstate", e => {
  go(e.state, false)
})