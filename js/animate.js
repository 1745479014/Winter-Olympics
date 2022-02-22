function animate(obj, target, callback) {
			clearInterval(obj.timer);
			obj.timer = setInterval(function() {
				var step = (target - obj.offsetLeft) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				if (obj.offsetLeft == target) {
					clearInterval(obj.timer);
					callback && callback(); // 利用了短路运算
				}
				obj.style.left = obj.offsetLeft + step + 'px';
			}, 15)
		}