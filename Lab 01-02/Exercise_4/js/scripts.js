$().ready(function() {
	$("#demoForm").validate({
		// onfocusout: true,
		// onkeyup: true,
		// onclick: true,
		rules: {
			"firstname": {
				required: true,
				maxlength: 15
			},

            "title": {
                required: true,
                maxlength: 20
            }
		},
		messages: {
			"firstname": {
				required: "Bắt buộc nhập firstname",
				maxlength: "Hãy nhập tối đa 20 ký tự"
			},

            "title": {
				required: "Bắt buộc nhập title",
				maxlength: "Hãy nhập tối đa 20 ký tự"
			}
		}
	});
});
