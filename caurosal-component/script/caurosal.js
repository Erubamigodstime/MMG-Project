const trainigBtn = document.querySelector('#trainbtn');
const consultBtn = document.querySelector('#consulbtn');
const fmBtn = document.querySelector('#fmbtn');
const h2 = document.querySelector('h2');
const display = document.querySelector('article')

trainigBtn.addEventListener("click", () => {
	trainigBtn.classList.remove("def");
	fmBtn.classList.remove("fmm")
	consultBtn.classList.remove("coo");	
	consultBtn.classList.add("def");
	fmBtn.classList.add("def");
	trainigBtn.classList.add("trr")			
	display.classList.remove("component");	
	display.classList.add("trn");
	display.classList.remove("con");
	display.classList.remove("fm");	
	h2.classList.remove('blue');
	h2.classList.remove('green');
	h2.classList.add('yellow');
});
consultBtn.addEventListener("click", () => {
	consultBtn.classList.remove("def");	
	trainigBtn.classList.remove("trr");
	trainigBtn.classList.add("def");
	fmBtn.classList.remove("fmm");
	fmBtn.classList.add("def");
	consultBtn.classList.add("coo");	
	display.classList.remove("component");	
	display.classList.add("con");
	display.classList.remove("trn");
	display.classList.remove("fm");
	h2.classList.remove('blue')
	h2.classList.remove('yellow')
	h2.classList.add('green')
	
});

fmBtn.addEventListener("click", showList); 
function showList() {	
	fmBtn.classList.remove("def")
	consultBtn.classList.remove("coo")			
	trainigBtn.classList.remove("trr");
	trainigBtn.classList.add("def");
	consultBtn.classList.add("def");
	fmBtn.classList.add("fmm");
	display.classList.remove("component");	
	display.classList.add("fm");
	display.classList.remove("con");
	display.classList.remove("trn");
	h2.classList.remove('yellow');
	h2.classList.remove('green');
	h2.classList.add('blue');
}



