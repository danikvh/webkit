import _ from 'lodash';
import myName from './myName';


function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}
  
document.body.appendChild(component());

function component2() {
    const element = document.createElement("div");

    //use your function!
    element.textContent = myName('Cody');
    return element;
}

document.body.appendChild(component2());