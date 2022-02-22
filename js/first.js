// 轮播图
// 获取左右按钮以及图片
var left_btn = document.querySelector('.left_button')
var right_btn = document.querySelector('.right_button')
var ul = document.querySelector('.slideshow_ul')
// 声明变量
var flag = true  // 节流阀变量
var num = 0 // 图片计数
var imgWidth = 157 // 移动距离
// 轮播图右按钮
var first = ul.children[0].cloneNode(true)
ul.appendChild(first)
right_btn.addEventListener('click', () => {
	if(flag) {
		flag == false
		if(num == 16) {
			ul.style.left = 0
			num = 0
		}
		num++
		animate(ul, -num * imgWidth, function() {
			flag = true
		})
	}
})
// 轮播图左按钮
left_btn.addEventListener('click', () => {
	if(flag) {
		flag = false
		if(num == 0) {
			num = 16
			ul.style.left = -num * imgWidth + 'px'
		}
		num--
		animate(ul, -num * imgWidth, function() {
			flag = true
		})
	}
})


// tab 栏切换
// 获取 轮播图 的 img 标签
var imgs = document.querySelector('.slideshow_ul').children
// 获取 tab 栏的 ul 标签
var tab_ul = document.querySelector('.out') 
var lis = tab_ul.children

for (var i = 0; i < imgs.length; i++) {
	// 给每个轮播图图片设置自定义属性
	imgs[i].setAttribute('data-index', i)
	// 循环给 图片 注册事件
	imgs[i].addEventListener('click', (e) => {
		for (var i = 0; i < lis.length; i++) {
			lis[i].style.display = 'none';
		}
		var index = e.target.parentNode.getAttribute('data-index')
		lis[index].style.display = 'block'
	})
}

// 拖动模态款框
for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener('mousedown', (e) => {
		// 获取鼠标在 li 中的坐标
		var x = e.pageX - tab_ul.offsetLeft - 150
		var y = e.pageY - tab_ul.offsetTop
		// 移动事件处理函数
		function move(e) {
			tab_ul.style.left = e.pageX - x + 'px'
			tab_ul.style.top = e.pageY - y + 'px'
		}
		// 鼠标按下时移动
		document.addEventListener('mousemove', move)
		// 鼠标弹起时，移除鼠标移动事件
		document.addEventListener('mouseup', function() {
			document.removeEventListener('mousemove', move)
		})
	})
	
}


