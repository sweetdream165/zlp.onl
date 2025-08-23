console.log('just here')

//DEFAULT FUNCTION FOR ANY ITEM OF $
let elName = ''
let dollar = {};
const handler = {
  get: function(target, name) {
    elName = name
    return target.hasOwnProperty(name) ? target[name] : createElement;
  }
};

function createElement(elementPropertys) {
  const element = document.createElement(elName)

  for (const [key, value] of Object.entries(elementPropertys)) {
    element[key] = value
  }

  document.body.append(element)
  return element
}

Object.prototype.ADD = appendElement
function appendElement(...elements) {
  elements.forEach((el)=>{
    this.append(el)
  })
  return this
}


export const $ = new Proxy(dollar, handler);