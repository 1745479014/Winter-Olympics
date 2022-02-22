// 场馆巡礼- tab 栏切换
var text = document.querySelector('.text')
var text_lis = text.children
var icon = document.querySelector('.icon')
var icon_lis = icon.children
 
for(var i = 0; i < icon_lis.length; i++) {
	icon_lis[i].setAttribute('data-index', i)
	icon_lis[i].addEventListener('click', (e) => {
		for(var i = 0; i < text_lis.length; i++) {
			text_lis[i].style.display = 'none'
		}
		var index = e.target.parentNode.getAttribute('data-index')
		text_lis[index].style.display = 'block'
	})
}

// 比赛项目- tab 栏切换
var img = document.querySelector('.img')
var img_lis = img.children
var describe = document.querySelector('.describe')
var describe_lis = describe.children
var site = document.querySelector('.site')
var site_lis = site.children

for(var i = 0; i < img_lis.length; i++) {
	img_lis[i].setAttribute('data-index', i)
	img_lis[i].addEventListener('click', (e) => {
		for(var i = 0; i < img_lis.length; i++) {
			describe_lis[i].style.display = 'none'
			site_lis[i].style.display = 'none'
		}
		var index = e.target.parentNode.parentNode.getAttribute('data-index')
		describe_lis[index].style.display = 'block'
		site_lis[index].style.display = 'block'
	})
}