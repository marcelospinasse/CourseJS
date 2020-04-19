$(document).ready(function () {
	carregar_json("Cinemas");
	function carregar_json(id, cidade_id) {
		var html = "";

		$.getJSON(
			"complexo.json",
			function (data) {
				html += "<option>Selecionar " + id + "</option>";
				console.log(data);
				if (id == "Cinemas" && cidade_id == null) {
					for (var i = 0; i < data.cinemas.length; i++) {
						html +=
							"<option value=" +
							data.cinemas[i].cidade +
							">" +
							data.cinemas[i].regiao +
							"</option>";
					}
				} else {
					for (var i = 0; i < data.cinemas.length; i++) {
						if (data.cinemas[i].regiao == cidade_id) {
							for (var j = 0; j < data.cinemas[i].length; j++) {
								html +=
									"<option value=" +
									data.cinemas[i].cidade +
									">" +
									data.cinemas[i].regiao[j] +
									"</option>";
							}
						}
					}
				}

				$("#" + id).html(html);
			}
		);
	}

	$(document).on("change", "#Cinemas", function () {
		var cidade_id = $(this).val();
		console.log(cidade_id);
		if (cidade_id != null) {
			carregar_json("Cidade", cidade_id);
		}
	});
});
