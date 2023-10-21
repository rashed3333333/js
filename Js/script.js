var btn = document.querySelectorAll('.tab-btn');
var tab = document.querySelectorAll('.tab');

function reset() {
	for( var i = 0; i < tab.length; i++){
		tab[i].style.display = 'none';
		btn[i].style.backgroundColor = 'transparent';
	}
}
function tabOne(){
	reset();
	tab[0].style.display = 'block';
	btn[0].style.backgroundColor = '#57daca';
}
tabOne();
for( let a = 0; a < btn.length; a++){
	btn[a].addEventListener('click', function() {
		reset();

		tab[a].style.display = 'block';
		btn[a].style.backgroundColor = '#57daca';
	});
}
// here is slider

const slides = document.querySelectorAll(".slide");
var counter = 0;
//console.log(sliders)
sliders.forEach(
	(slide, index) => {
		slide.style.left ='${index * 100}%';

	}
)
const goPrev = () => {
	counter--;
	alert();
	slideImage();
}
const goNext = () => {
	counter++;
	alert();
	slideImage();
}
const sildeImage = () => {
	slides.forEach(
		(slide) => {
			slide.style.transform = 'translateX(-${counter * 100}%)';
		}
	)
}
