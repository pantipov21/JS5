var victoryCount = 0;
var loseCount = 0;
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
var tmp = -1;

function getHole(index){
	let id = "hole"+index;
	return document.getElementById(id);
}

for (let i = 1; i <10; i++){
	var h = getHole(i);
	if (h != null)
		h.onclick = () =>{
			if (h.className=='hole')
			{
				loseCount += 1;
				dead.textContent = victoryCount;
				lost.textContent = loseCount;
				if (loseCount >=5)
				{
					victoryCount = 0;
					loseCount = 0;
					alert("Вы проиграли");
				}
			}
			else{
				victoryCount += 1;
				if (victoryCount >= 10)
				{
					victoryCount = 0;
					loseCount = 0;
					alert("Вы выиграли");
				}
			}
		}
}
