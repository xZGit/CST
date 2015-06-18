"use strict";
$(".style").pin({
	containerSelector: ".app"
});
var selects = [];
$("#showo").click(function(e) {
	if (selects.length == 0) {
		//alert("当前没有选项哦！")
	} else {
		var a = $("#showo").html();
		if (a == "") {
			//alert("当前没有选项哦！")
		} else {
			selects.length--;
			if (selects.length >= 0) {
				$("#showo").html("")
			}
		}
	}
});
$("#showt").click(function(e) {
	if (selects.length == 0) {
		//alert("当前没有选项哦！")
	} else {
		var a = $("#showt").html();
		if (a == "") {
			//alert("当前没有选项哦！")
		} else {
			selects.length--;
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
			//alert("当前没有选项哦！")
		} else {
			selects.length--;
			if (selects.length >= 0) {
				$("#showh").html("")
			}
		}
	}
});
$("#bt li img").click(function(e) {
	$(this).unbind("click");
	if (selects.length < 3) {
		selects.length++;
		var a = e.target.src;
		var id = e.target.id;
		var b = $("#showo").html();
		var c = $("#showt").html();
		var d = $("#showh").html();
		if (selects.length <= 3) {
			switch (selects.length) {
			case 1:
				$("#showo").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>");
				break;
			case 2:
				if (c == "") {
					$("#showt").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>")
				} else {
					$("#showo").html("<img id='" + id + "'src='" + a + "' height='150' alt=''>")
				}
				break;
			case 3:
				if (d == "") {
					$("#showh").html("<img id='" + id + "'src='" + a + "' height='150' alt=''>")
				} else {
					if (b == "") {
						$("#showo").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>")
					} else {
						$("#showt").html("<img id='" + id + "' src='" + a + "' height='150' alt=''>")
					}
				}
				break
			}
		} else {
			//alert("没有选项哦")
		}
	}
});uu