/**Food() - конструктор функции, который создает новый объект еды.
 *  Он наследует свойства и методы от прототипа Sprite и устанавливает начальные значения для типа (type) и времени (time) еды. */
function Food()
{
	Sprite.call(this, 0, 0, "food", 33);
	
	this.type = 3;
	this.time = 0;
	
}

Food.prototype = new Sprite();
/**init() - метод, который инициализирует объект еды. Он получает доступ к элементу canvas на странице, очищает предыдущее изображение еды, генерирует случайное значение для типа еды, 
 * а затем устанавливает случайные координаты x и y для еды. */
Food.prototype.init = function()
{
	var myCanvas = document.getElementById("upp");
	var graphics = myCanvas.getContext("2d");
	graphics.clearRect(this.x + offerX,this.y + offerY,30,28);
	
	this.type = parseInt(Math.random() * 6);
	//if(this.type == 0 || this.type == 4) {this.init();}
	this.x = parseInt(Math.random() * 384);
	this.y = parseInt(Math.random() * 384);
};
/**draw() - метод, который отрисовывает объект еды на холсте. Он получает доступ к элементу canvas, загружает изображение танка, 
 * определяет текущий кадр анимации на основе времени (time), и если кадр является нечетным,
 *  рисует изображение еды на заданных координатах x и y. Если кадр четный, очищает предыдущее изображение еды. */
Food.prototype.draw = function()
{
	var myCanvas = document.getElementById("upp");
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	var frame =parseInt(this.time/30);
	if(frame % 2) 
	{
		graphics.drawImage(img,30 * this.type + images[this.src][0], images[this.src][1], 30, 28, this.x + offerX, this.y + offerY, 30, 28) ;
	}	
	else 
	{
		graphics.clearRect(this.x + offerX,this.y + offerY,30,28);
	}
	return;
};
//update() - метод, который обновляет время (time) объекта еды. Он вызывается для каждого объекта еды на каждом обновлении игры.
Food.prototype.updata = function()
{
	this.time ++;
};


//drawFood() - функция, которая вызывает метод draw() для объекта еды. Она используется для отрисовки еды на холсте.
function drawFood()
{
	food.draw("upp");
}
//updateFood() - функция, которая вызывает метод update() для объекта еды. Она используется для обновления времени еды и проверки столкновений с другими объектами в игре, такими как танками. \
//В случае столкновения, она выполняет определенные действия в зависимости от типа еды.
function updataFood()
{
	food.updata();
	
	for(var i = 0 ; i < playerNum; i ++)
	{
		if(tanks[i].hitTestObject(food))
		{
		
			switch(food.type)
			{
				case foodLife: 	tanks[i].live ++;
								scoreBoard.drawPlayerLife(tanks[i].name,tanks[i].live);
							   break;
				case foodGod:  tanks[i].godTime = 600;
							   tanks[i].isGod = true;
							   break;
				case foodHome: changeHome(true);
							   break;
				case foodStar: tanks[i].shotSpeed -= 10;
							   if(tanks[i].shotSpeed < 10) tanks[i].shotSpeed = 10;
							   break;
				case foodTime: stopTime = 800;
							   break;
				case foodBomb: tanksBomb(true);
							   break;
				default: return;
			}
			var temp = new Score(food.x + 15,food.y + 15,500);
			scoreNums.push(temp);
			
			tanks[i].score ++;
		    sound.play("food");
			food.type = foodNon;
		}
	}
	
	if(homeTime == 0) {changeHome(false);}
	if(homeTime >= 0) {homeTime--;}
}















