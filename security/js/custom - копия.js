/*
 * LED control
 */

function led_state2(state) 
{
	switch(state) {
		case '0':
			$("#led-on2").show();
			$("#led-off2").hide();
			break;
		case '1':
			$("#led-off2").show();
			$("#led-on2").hide();
			break;
	}
}

function led_state1(state) 
{
	switch(state) {
		case '0':
			$("#led-on1").show();
			$("#led-off1").hide();
			break;
		case '1':
			$("#led-off1").show();
			$("#led-on1").hide();
			break;
	}
}

function led_state(state) 
{
	switch(state) {
		case '0':
			$("#led-on").show();
			$("#led-off").hide();
			break;
		case '1':
			$("#led-off").show();
			$("#led-on").hide();
			break;
	}
}

function led_update() {
	$.get("/led_state.php/", null, led_state);
        $.get("/led_state1.php/", null, led_state1);
        $.get("/led_state2.php/", null, led_state2);
	window.setTimeout(led_update, 500);
}

function led_init()
{
	$("#led-on").click(function() {
		$.get("/on.php/", null, led_state);
	});
	$("#led-off").click(function() {
		$.get("/off.php/", null, led_state);
	});
        
        $("#led-on1").click(function() {
		$.get("/on1.php/", null, led_state1);
	});
	$("#led-off1").click(function() {
		$.get("/off1.php/", null, led_state1);
	});

        $("#led-on2").click(function() {
		$.get("/on2.php/", null, led_state2);
	});
	$("#led-off2").click(function() {
		$.get("/off2.php/", null, led_state2);
	});
	led_update();
}

/*
 * DS1820
 */

function ds1820_update()
{
        $.get("/DS1820.php/", null, function(val) {

             

  if ((val>0) && (val<900000000000000000)) 
        {
            $("#ds1820-value").html((val[0]+val[1]+val[2])/10);
            $("#ds1820-value1").html((val[3]+val[4]+val[5])/10);
            $("#ds1820-value2").html(val[6]+val[7]+val[8]);
            $("#ds1820-value3").html((val[9]+val[10]+val[11])/10);
            $("#ds1820-value4").html(val[12]+val[13]+val[14]);
            $("#ds1820-value5").html(val[15]+val[16]+val[17]);
        }
  else 
        {
            $("#ds1820-value").html("----");
            $("#ds1820-value1").html("----");
            $("#ds1820-value2").html("----");
            $("#ds1820-value3").html("----");
            $("#ds1820-value4").html("----");
            $("#ds1820-value5").html("----");
        }

	});
	window.setTimeout(ds1820_update, 1500);
}



/*
 * Misc.
 */



$(document).ready(function() {
	led_init();
	ds1820_update();
});
