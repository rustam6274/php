<?php
	header("Pragma: no-cache");
	header("Cache-control: no-cache");
	fwrite(fopen("led_state1.txt", "w"), "0");
        fwrite(fopen("/dev/ttyACM0", "w"), "2");
	echo("0");