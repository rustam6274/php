var container = document.getElementById('container');
var start = (new Date).getTime();
var data, graph, offset, i,led;






// Выводим кривую синуса во время t
function animateSine (t) {
    data = [];
    data2 = [];
	


//$.get('/DS1820.txt/', function (data2) {}

	
    // Небольшое смещение между шагами
    offset = 2 * Math.PI * (t - start) / 10000;

    for (i = 0; i < 4 * Math.PI; i += 0.2) {  
      data2.push([i, Math.sin(i*2 - offset)]);
    }
	


	
	

    // Подготавливаем свойства
    var properties;
            properties = {
                yaxis : {
                    max : 2,
                    min : -2
                }
            };
    // Выводим график
        graph = Flotr.draw(container, [ data2 ], properties);

    // Основной цикл
    setTimeout(function () {
        animateSine((new Date).getTime());
    }, 20);
}
animateSine(start);
