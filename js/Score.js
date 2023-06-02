function Score(x, y, num)
{ 
	Sprite.call(this, x, y, "score", 1);
	
	this.num = num;
	this.time = 0;
}

Score.prototype = new Sprite();

//Score.prototype.draw - метод, отвечающий за отрисовку очков на холсте. Он принимает параметр canvas (идентификатор холста). 
//Метод использует изображения из ресурса "tankAll" для отображения числа очков.
// В зависимости от значения num происходит отрисовка соответствующего числа очков на холсте.
Score.prototype.draw = function (canvas)
{
	var myCanvas = document.getElementById(canvas);
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	var sc;

	if (this.num == 100) {sc = 0; } 
	else if (this.num == 200) {sc = 14; }
	else if (this.num == 400) {sc = 28; }
	else if (this.num == 500) {sc = 42; }
	else {return;}
	
	graphics.drawImage(img, images[this.src][0], sc + images[this.src][1], 28, 14, this.x + offerX  - 14, this.y + offerY  - 7, 28, 14 ) ;	
	
	return;
};
//Score.prototype.updata - метод, обновляющий время объекта "Очки".
Score.prototype.updata = function()
{
	this.time ++;
};
//Score.prototype.clear - метод, очищающий отрисованные очки на холсте.
Score.prototype.clear = function(canvas)
{
	var myCanvas = document.getElementById(canvas);
	var graphics = myCanvas.getContext("2d");
	
	graphics.clearRect(this.x + offerX  - 14, this.y + offerY  - 7, 28, 14);
};

//drawScoreNums - функция, отвечающая за отрисовку всех объектов "Очки" в массиве scoreNums. 
//Она вызывает методы draw и updata для каждого объекта "Очки".
// Если прошло больше 30 единиц времени, очки очищаются с холста и удаляются из массива scoreNums.
function drawScoreNums()
{
	for(var i = 0;i < scoreNums.length; i ++)
	{
		scoreNums[i].draw("upp");
		scoreNums[i].updata();
		
		if(scoreNums[i].time >30 )
		{
			scoreNums[i].clear("upp");
			
			scoreNums.splice(i,1);
			i --;
		}
	}
}
















