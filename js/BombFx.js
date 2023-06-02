//Объект BombFx используется для отображения анимации взрыва бомбы на холсте.//
function BombFx(x,y,score)
{
	/*Функция drawBombFxs принимает некоторые параметры или использует переменные, которые должны быть доступны для отображения на холсте.

	Внутри функции происходит цикл, который перебирает каждый элемент массива bombFxs.

В каждой итерации цикла вызывается метод draw для текущего объекта BombFx. Метод draw принимает аргументом имя холста, на котором нужно отрисовать объект.

Внутри метода draw создается ссылка на холст с помощью document.getElementById(canvas), где canvas - имя холста, переданное в функцию drawBombFxs.

Затем получается контекст графики холста с помощью myCanvas.getContext("2d"), который используется для рисования.

Создается ссылка на изображение с помощью document.getElementById("tankAll"). Предполагается, что в HTML-разметке есть элемент с id "tankAll", содержащий изображение.

Внутри метода draw используется graphics.drawImage для отображения нужного кадра анимации взрыва на холсте. Изображение берется из переменной img, 
текущий кадр определяется с помощью this.frame, а координаты и размеры рисунка задаются с помощью this.x, this.y, offerX и offerY.

После отрисовки объекта BombFx на холсте метод draw завершается, и управление возвращается в цикл функции drawBombFxs.

После завершения цикла, функция drawBombFxs завершается, и выполнение кода продолжается со следующей инструкции после вызова функции drawBombFxs.*/
	Sprite.call(this, x, y, "bombFx", 6);
	
	this.x = x - 16;
	this.y = y - 16;
	
	this.frame = 0;
	this.time = -10;
	this.score = score;
}

BombFx.prototype.draw = function(canvas)
{
	var myCanvas = document.getElementById(canvas);
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	graphics.drawImage(img,this.frame * 67 + images[this.src][0], images[this.src][1], 66, 66, this.x + offerX, this.y + offerY, 66, 66) ;
	return;
};

BombFx.prototype.updata = function()
{
	if(this.time % 7 == 1) 
	{
		this.frame++;
	}
	if(this.frame > 4) 
	{
		return;
	}
	this.time ++;
};

function drawBombFxs()
{
	
	for(var i = 0;i < bombFxs.length;i++)
	{
		bombFxs[i].draw("main");
	}
}

function updataBombFxs()
{
	
	for(var i = 0;i < bombFxs.length;i++)
	{
		bombFxs[i].updata();
		
		if(bombFxs[i].frame > 3)
		{
			var tempScore = new Score(bombFxs[i].x + 33,bombFxs[i].y + 33,bombFxs[i].score); 
			scoreNums.push(tempScore);
			
			bombFxs.splice(i,1);
			i --;
		}
	}
}