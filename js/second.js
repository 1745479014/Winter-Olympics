// 获取 tab 栏的头部 li 标签
var tab_ul = document.querySelector('.tab_ul')
var header_lis = tab_ul.children
// 获取 tab 栏主体的 li 标签
var tab_bottom_ul = document.querySelector('.tab_bottom_ul')
var main_lis = tab_bottom_ul.children

for(var i = 0; i < header_lis.length; i++) {
	// 给 tab 栏头部 li 添加自定义属性
	header_lis[i].setAttribute('data-index', i)
	// 循环注册事件
	header_lis[i].addEventListener('click', (e) => {
		for(var i = 0; i < header_lis.length; i++) {
			header_lis[i].className = ''
			main_lis[i].style.display = 'none'
		}
		var index = e.target.getAttribute('data-index')
		header_lis[index].className = 'choise'
		main_lis[index].style.display = 'block'
	})
}