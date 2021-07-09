const countClick = document.querySelector('.count__click');
const p = document.querySelector('.count');
let count = 0;
countClick.addEventListener("click",() => {
	console.log('uio');
	count++;
	p.innerHTML ="count = " +count;

})