import _ from 'lodash';
import printMe from './print';
import './styles.css';
import { cube } from './main';
/* import './style.css';
import Vscode from './vscode.png';
import Data from './data.xml'; */

if(process.env.NODE_ENV !== 'production') { 
	console.log('Looks like we are in development mode!');
}

function component() { 
    // let element = document.createElement('div');
	// let btn = document.createElement('button');
	let element = document.createElement('pre');
	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');
	// lodash, 现在由此脚本导入
	// element.innerHTML = _.join(['Hello', 'webpack', '!!!!'], ' ');
	// element.classList.add('hello');

	// 将图像添加到我们已经存在的div中
	/* var myIcon = new Image();
	myIcon.src = Vscode;

    element.appendChild(myIcon);
    
    console.log(Data); */

    // btn.innerHTML = '点击这里，然后查看console！';
    // btn.onclick = printMe;

    // element.appendChild(btn);
    return element;
}

// document.body.appendChild(component());
let element = component(); // 储存 element, 以在print.js 修改时重新渲染
document.body.appendChild(element);

if(module.hot) { 
    module.hot.accept('./print.js', () => { 
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}