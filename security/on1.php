<?php
	header("Pragma: no-cache");
	header("Cache-control: no-cache");
	fwrite(fopen("led_state1.txt", "w"), "1");
        fwrite(fopen("/dev/ttyACM0", "w"), "3");
	echo("1");