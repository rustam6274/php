<?php
	header("Pragma: no-cache");
	header("Cache-control: no-cache");
	fwrite(fopen("led_state2.txt", "w"), "1");
        fwrite(fopen("/dev/ttyACM0", "w"), "5");
	echo("1");