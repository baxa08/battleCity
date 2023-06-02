/*HitFx(x, y) - конструктор функции, создающий новый объект эффекта попадания (HitFx). 
Он наследует свойства и методы от прототипа Sprite и устанавливает начальные значения для координат x и y, 
типа (type), текущего кадра (frame) и времени (time) эффекта попадания.*/
function HitFx(x,y)
{
	Sprite.call(this, x, y, "hitFx", 6);
	
	this.x = x - 16;
	this.y = y - 16;
	
	this.type = 0;
	this.frame = 0;
	this.time = -3;
}
/**draw(canvas) - метод, который отрисовывает объект эффекта попадания на холсте. 
 * Он получает доступ к элементу canvas с помощью переданного параметра canvas, 
 * загружает изображение танка, исходя из типа эффекта попадания (type), 
 * и рисует соответствующий кадр эффекта попадания на заданных координатах x и y.
 *  Если тип эффекта равен 0, рисуется изображение размером 32x32 пикселя, 
 * иначе рисуется уменьшенное изображение размером 20x20 пикселей. */
HitFx.prototype.draw = function(canvas)
{
	
	
	var myCanvas = document.getElementById(canvas);
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	
	
	if(this.type == 0)
	{
		graphics.drawImage(img,this.frame * 32 + images[this.src][0], images[this.src][1], 32, 32, this.x + offerX, this.y + offerY, 32, 32) ;
	}
	else
	{
		graphics.drawImage(img,this.frame * 32 + images[this.src][0], images[this.src][1], 32, 32, this.x + offerX + 6, this.y + offerY + 6, 20, 20) ;
	}
	
	
	
	return;
};
/**update() - метод, который обновляет состояние объекта эффекта попадания.
 *  Он увеличивает значение текущего кадра (frame) на 1 каждый раз, когда значение времени (time) кратно 4.
 *  Если текущий кадр превышает значение 3, метод завершается. В противном случае, значение времени увеличивается на 1. */
HitFx.prototype.updata = function()
{
	if(this.time % 4 == 1) {this.frame++;}
	
	if(this.frame > 3) {return;}
	
	this.time ++;
};
/**drawHitFxs() - функция, которая вызывает метод draw() для каждого объекта эффекта попадания (HitFx) в массиве hitFxs. 
 * Она используется для отрисовки всех эффектов попадания на холсте. */
function drawHitFxs()
{
	
	for(var i = 0;i < hitFxs.length;i++)
	{
		hitFxs[i].draw("main");
	}
}
/**updateHitFxs() - функция, которая вызывает метод update() для каждого объекта эффекта попадания (HitFx) в массиве hitFxs.
 *  Она используется для обновления состояния всех эффектов попадания. 
 * Если текущий кадр объекта эффекта попадания превышает значение 2, объект удаляется из массива hitFxs.
 */
function updataHitFxs()
{
	
	for(var i = 0;i < hitFxs.length;i++)
	{
		hitFxs[i].updata();
		
		if(hitFxs[i].frame > 2)
		{
			
			hitFxs.splice(i,1);
			i --;
		}
	}
}