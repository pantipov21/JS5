let intervalID = 0;
const value = document.getElementById("timer");

function task(){
	const n = Number(value.textContent);
	if (n == 1){
		alert("Вы победили в конкурсе");
		value.textContent = "59";
		clearInterval(intervalID);
	}
	else {
		value.textContent = n-1;
	}
}

intervalID = setInterval(task, 1000);