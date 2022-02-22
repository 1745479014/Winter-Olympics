const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4;
	
	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top;
		
		if (boxTop < triggerBottom) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	})
}


// 三大赛区部分
var special = document.querySelector('.special')
var visible = document.querySelector('.visible')

special.addEventListener('mouseenter', () => {
	visible.style.display = 'block'
}) 
special.addEventListener('mouseleave', () => {
	setTimeout(() => {
		visible.style.display = 'none'
	}, 5000)
})

// 冬奥会吉祥物部分
var mascots = document.querySelector('.mascots')
var mascot_item = document.querySelector('.mascot_item')

mascots.addEventListener('mouseenter', () => {
	mascot_item.style.display = 'block'
})
mascots.addEventListener('mouseleave', () => {
	setTimeout(() => {
		mascot_item.style.display = 'none'
	}, 5000)
})