import { file, parse } from'./globals';

function component() { 
    let element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.innerHTML = join(['Hello', 'webpack'], ' ');
	
	// 假设我们处于 `window` 上下文
	// this.alert('Hmmm, this probably isn\'t a great idea...');
	console.log(file);
	parse();
    return element;
}

document.body.appendChild(component());