/* import './style.css';
import Vscode from './vscode.png';
import Data from './data.xml'; */
import _ from 'lodash';

// async function getComponent() { 
function component() {
	// return import(/* webpackChunkName: "lodash" */ 'lodash')
	// 	.then(({ default: _ }) => { 
	// 		const element = document.createElement('div');

	// 		element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	// 		return element;
	// 	})
	// 	.catch(error => 'An error occured while loading the component');

	const element = document.createElement('div');
	// const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
	const button = document.createElement('button');
	const br = document.createElement('br');
	button.innerHTML = 'Click me and look at the console!';
	element.innerHTML = _.join(['Hello','webpack'], ' ');
	element.appendChild(br);
	element.appendChild(button);

	// Note that because a network request is involved, some indication
	// of loading would need to be shown in a production-level site/app.
	button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
		const print = module.default;
		print();
	});
	return element;
}

// document.body.appendChild(component());
/* getComponent().then(component => { 
	document.body.appendChild(component);
}); */
document.body.appendChild(component());

/**
 * 这里我们需要使用 default 的原因是，从 webpack v4 开始，
 * 在 import CommonJS 模块时，不会再将导入模块解析为 
 * module.exports 的值，
 * 而是为 CommonJS 模块创建一个 artificial namespace object(人工命名空间对象)，
 * 关于其背后原因的更多信息，
 * 请阅读 webpack 4: import() 和 CommonJs
 */