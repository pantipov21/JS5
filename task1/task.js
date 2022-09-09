setInterval(
	() => {
		const value = document.getElementById("timer");
		n = Number(value.textContent);
		if (n == 1){
			alert("Вы победили в конкурсе");
			value.textContent = "59";
		}
		else
			value.textContent = n-1;
	}, 1000)