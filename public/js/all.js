"use strict";
// $(".style").pin({
// 	containerSelector: ".app"
// });


Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
};
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};


var selects = [];
$("#showo").click(function(e) {
	if (selects.length == 0) {
		alert("当前没有选项哦！")
	} else {
		var a = $("#showo").html();
		if (a == "") {
			alert("当前没有选项哦！")
		} else {
			var id = e.target.id;
			selects.remove(id);
			if (selects.length >= 0) {
				$("#showo").html("")
			}
		}
	}
});
$("#showt").click(function(e) {
	if (selects.length == 0) {
		alert("当前没有选项哦！")
	} else {
		var a = $("#showt").html();
		if (a == "") {
			alert("当前没有选项哦！")
		} else {
			var id = e.target.id;
			selects.remove(id);
			if (selects.length >= 0) {
				$("#showt").html("")
			}
		}
	}
});
$("#showh").click(function(e) {
	if (selects.length == 0) {
		alert("当前没有选项哦！")
	} else {
		var a = $("#showh").html();
		if (a == "") {
			alert("当前没有选项哦！")
		} else {
			var id = e.target.id;
			selects.remove(id);
			if (selects.length >= 0) {
				$("#showh").html("")
			}
		}
	}
});
$("#bt li img").click(function(e) {
	//$(this).unbind("click");
	var l=selects.length;
	if (l < 3) {
		var a = e.target.src;
		var id = e.target.id;
		selects.push(id);
		var b = $("#showo").html();
		var c = $("#showt").html();
		var d = $("#showh").html();
		var bImg;
		var cImg;
		var dImg;
		if (l <= 3) {
			switch (l) {
			case 0:
				$("#showo").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>");
				break;
			case 1:
				 bImg =  $("#showo").children("img").attr("src");
				 cImg =  $("#showt").children("img").attr("src");
				 dImg =  $("#showh").children("img").attr("src");
				if (c == ""&&bImg!=a&&cImg!=a&&dImg!=a) {
					$("#showt").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>")
				}else if(b==""&&bImg!=a&&cImg!=a&&dImg!=a){
					$("#showo").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>")
				}else{
					selects.remove(id);
				}
				break;
			case 2:
				 bImg =  $("#showo").children("img").attr("src");
				 cImg =  $("#showt").children("img").attr("src");
				 dImg =  $("#showh").children("img").attr("src");
				if (d == ""&&bImg!=a&&cImg!=a&&dImg!=a) {
					$("#showh").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>")
				}else{
					if (b == ""&&bImg!=a&&cImg!=a&&dImg!=a) {
						$("#showo").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>")
					} else if(c == ""&&bImg!=a&&cImg!=a&&dImg!=a){
						$("#showt").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>")
					}else{
						selects.remove(id);
					}
				}
				break
			}
		} else {
			alert("没有选项哦")
		}
	}
});

$(".hou").click(function(e) {
	if (selects.length == 3) {

		var params = {
			category: $("#category").val(),
			items: selects
		};
		$.post('/api/setCategory', params, function (data) {

			if (!data || !data.hasOwnProperty("code") || data.code !== 0) {
				alert(data.error);
			} else if (data.data && data.data.nextCategoty) {
				location.href = "/getCategory/" + data.data.nextCategoty;

			} else if (data.data && data.data.result) {
				location.href = "/getResult/" + data.data.result;
			}

		}, 'json');

	} else {
		alert("请选择三个选项。")
	}
});


$(".qian").click(function (e) {

	location.href = "/back/" + $("#category").val();

});
