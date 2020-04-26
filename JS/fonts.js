document.getElementById("fontChange").addEventListener('click', loadFont);

function createElement(element){
	return document.createElement(element);
}

function append(parent, el){
	return parent.appendChild(el);
}

const a = document.getElementById('fontChange');
const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCBf44GCp7LsgMbqZiHHEn-mGfG8ooAjUw`;




function loadFont(){
	let datalist = createElement('DATALIST');
	datalist.setAttribute("id", "fontStyle");
	append(a,datalist);
	console.log('run')
	fetch(url) 
	.then((resp) => resp.json()) 
	.then(function(data){
		let font = data.items;
		return font.map(function(fonts){ 
		let option = createElement('OPTION');
		option.setAttribute("value", `${fonts.category}`);
		append(datalist,option);

	});
});

}
