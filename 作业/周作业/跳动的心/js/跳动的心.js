			// 获取元素
			var wrap = document.getElementById('wrap')
			// 文本
			var str =
				"豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯"
			//设置字符串的索引
			var n = 0
			// 定时器
			var time = null
			time = setInterval(() => {
				n++;
				if (n >= str.length) {
					clearInterval(time)
					n = str.length
				}
				wrap.innerHTML = str.substring(0, n)
			}, 200)