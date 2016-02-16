$(function() {
	$("body").on('click', '.lk', function() {
		var check = $(this).attr("data-action");
		$.ajax({
			url : "/action",
			data : {
				"check" : check
			},
			type : "POST",
			dataType : "text",
			success : function(data) {
				html = "";
				if(data == 'funny'){
					html += "<a class='lk active' data-action='funny' href='#'>This is Funny!</a>";
					html += "<a class='lk' data-action='notfunny' href='#'>This is not Funny</a>";
				}else{
					html += "<a class='lk' data-action='funny' href='#'>This is Funny!</a>";
					html += "<a class='lk active' data-action='notfunny' href='#'>This is not Funny</a>";
				}
				$(".result").html(html);
			},
			error : function() {
				console.log("fail");
			}
		});
		return false;
	});
});
