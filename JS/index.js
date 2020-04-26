// JavaScript source codes
document.getElementById("upload").addEventListener('click', loadFile);
document.getElementById("addText").addEventListener('click', addText);
document.getElementById("changeColor").addEventListener('click', colorPick);
document.getElementById("canvas").addEventListener('click', removeHandler);
document.getElementById("download").addEventListener('click', fileDownload);


const uploadFile = document.getElementById("file");
const fileUpdate = document.getElementById("fileDesc");
const preview =  document.getElementById("canvas");
const colorInput =  document.getElementById("color");


uploadFile.addEventListener("change", checkFile);

//Generic functions

function createElement(element){
	return document.createElement(element);
}

function append(parent, el){
	return parent.appendChild(el);
}

function remove(parent, el){
	return parent.removeChild(el);
}




//upload files

function loadFile(){
	uploadFile.click();
}

function checkFile(){
	const file = this.files[0]
	const reader = new FileReader();
	console.log(file);
	let img = createElement('img');
	if(uploadFile.value){
		fileUpdate.innerHTML = uploadFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1] + " uploaded";
		if(file){
			preview.style.display="block";
			const reader = new FileReader();
			reader.addEventListener("load", function(){
				img.src=this.result;
				img.className="preview-img";
				img.id='uploadImg';
				img.alt="upload";
				img.setAttribute('ondragstart', 'gstart()');
				img.draggable="true";
				append(preview,img)
				//select image
				document.getElementById('uploadImg').addEventListener('click', imgSelect);

			})
			reader.readAsDataURL(file);
		}
		;
	}else{
		fileUpdate.innerHTML = "No file choosen ";
	}

}


//addText

function addText(){
		let text = createElement('textarea');
		text.id="addtext"
		text.cols=30;
		text.placeholder="start typing...";
		append(preview,text);
		document.getElementById('addtext').addEventListener('keypress', function (e){
			if (e.key === 'Enter') {	
				text.style.border="none";
				text.style.resize="none";
			 }
		});
}


//change color
function colorPick(){
		colorInput.click();
		let colorPicker = document.querySelector('#color');
		let text=document.querySelector('#addtext');
		colorPicker.addEventListener('input', ()=>{
			let color = colorPicker.value;
			console.log(color);
			text.style.color=color;
		});
		
}
		

 function nDrop(){
        event.preventDefault();
}  


function gstart(){
        holdItem=event.target;
 }
function dDrop(){
        event.preventDefault();
        if(event.target.className=="canvas"){
            event.target.appendChild(holdItem);  
		}
}

//download file
function fileDownload(file){
	var a = document.getElementById('download1');
	a.setAttribute('download' , file);
	a.click();
}

//select,delete and edit

function imgSelect(){
	elem = document.querySelector('.preview-img');
	let btn = createElement('input');
	let btn1 = createElement('input');
	btn.setAttribute('type', 'button')
	btn1.setAttribute('type', 'button')
	btn.value="delete"
	btn1.value="edit"
	btn.id='imgBtn'
	elem.style.border="solid 1px";
	append(preview,btn);
	append(preview,btn1);
	document.getElementById('imgBtn').addEventListener('click', function (){
		remove(preview,elem);
		remove(preview,btn);
		remove(preview,btn1);
	});
}

function removeHandler(){
	document.getElementById("uploadImg").removeEventListener("click", imgSelect);
}

//change fonts

