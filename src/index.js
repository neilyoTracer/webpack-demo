import _ from 'lodash';
import printMe from './print';
/* import './style.css';
import Vscode from './vscode.png';
import Data from './data.xml'; */

function component() { 
    let element = document.createElement('div');
    let btn = document.createElement('button');

	// lodash, 现在由此脚本导入
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	// element.classList.add('hello');

	// 将图像添加到我们已经存在的div中
	/* var myIcon = new Image();
	myIcon.src = Vscode;

    element.appendChild(myIcon);
    
    console.log(Data); */

    btn.innerHTML = '点击这里，然后查看console！';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());