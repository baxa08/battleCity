/**selectMap(level): Эта функция выбирает карту для указанного уровня в игре. 
 * Она извлекает данные карты из заранее определенной переменной на основе номера уровня и обновляет массив map соответствующим образом. */

function selectMap(level)
{
	var i,j;
	
	level = level % 21;
	if(level == 0) {level = 21;}
	
	var tempMap = this["map" + level];
	
	for (i = 0; i < 26; i++ )
	{
			for (j = 0; j < 26; j++ )
			{
				map[i][j] =tempMap[i][j];
			}
	}
}	
/**drawMap(): Эта функция отрисовывает стены, сетки, воду, лед, домашнюю базу и другие элементы игровой карты на холсте.
 *  Она использует изображение (tankAll) и массив map, чтобы определить, какие элементы отрисовывать и их позиции на холсте. */
function drawMap()
{
	var myCanvas = document.getElementById("wall");
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	graphics.fillStyle = "#7f7f7f";
	graphics.fillRect(0,0,512,448);
	graphics.fillStyle = "#000";
	graphics.fillRect(offerX,offerY,416,416);
	
	var mapx = images["map"][0];
	var mapy = images["map"][1];
	var homex = images["home"][0];
	var homey = images["home"][1];
	
	for(var i=0;i<26;i++)
	{
		for(var j=0;j<26;j++)
		{
			if(map[i][j]==WALL) 
			{
				graphics.drawImage(img,mapx, mapy,16,16,j*16 + offerX, i*16 + offerY,16,16) ;
			}
			else if(map[i][j]==GRID) 
			{
				graphics.drawImage(img,16 + mapx, mapy,16,16,j*16 + offerX, i*16 + offerY,16,16) ;
			}
			else if(map[i][j]==WATER)
			{
				graphics.drawImage(img,48 + mapx, mapy,16,16,j*16 + offerX, i*16 + offerY,16,16) ;
			}
			else if(map[i][j]==ICE) 
			{
				graphics.drawImage(img,64 + mapx, mapy,16,16,j*16 + offerX, i*16 + offerY,16,16) ;
			}
			else if(map[i][j]==HOME)
			{
				graphics.drawImage(img,0 + homex, homey, 32, 32, j*16 + offerX, i*16 + offerY, 32, 32) ;
			}
			else if(map[i][j]==10)
			{
				graphics.drawImage(img, 0 + mapx, mapy, 16, 8, j*16 + offerX, i*16 + offerY, 16, 8) ;
			}
			else if(map[i][j]==11)
			{
				graphics.drawImage(img, 0 + mapx, 8 + mapy, 16, 8, j*16 + offerX,i*16+8 + offerY, 16, 8) ;
			}
			else if(map[i][j]==12)
			{
				graphics.drawImage(img, 0 + mapx, mapy, 8,16, j*16 + offerX, i*16 + offerY, 8, 16) ;
			}
			else if(map[i][j]==13)
			{
				graphics.drawImage(img, 8 + mapx, mapy, 8, 16, j*16+8 + offerX, i*16 + offerY, 8, 16) ;
			}
			else if(map[i][j]==88)
			{
				graphics.drawImage(img, 32 + mapx, mapy, 32, 32, j*16 + offerX, i*16 + offerY, 32, 32) ;
			}
		}
	}
}
//drawGrass(): Эта функция отрисовывает травяные плитки на холсте. Она перебирает массив map и проверяет наличие элементов травы. 
//Если элемент травы найден, то с использованием изображения tankAll и координат images["map"],
 //функция отрисовывает травяную плитку в соответствующей позиции на холсте.
function drawGrass()
{
	var myCanvas = document.getElementById("grass");
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	graphics.clearRect(0 , 0, 512, 448);
	
	for(var i=0;i<26;i++)
	{
		for(var j=0;j<26;j++)
		{
			if(map[i][j]==GRASS)
			{
				graphics.drawImage(img,32 + images["map"][0], 0 + images["map"][1], 16, 16, j*16 + offerX, i*16 + offerY, 16, 16) ;
			}
		}
	}
}





















