import _ from 'lodash';
import './style.css';
import Vscode from './vscode.png';

function component() { 
    let element = document.createElement('div');

	// lodash, 现在由此脚本导入
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// 将图像添加到我们已经存在的div中
	var myIcon = new Image();
	myIcon.src = Vscode;

	element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());