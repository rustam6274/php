<?php
	header("Pragma: no-cache");
	header("Cache-control: no-cache");
	fwrite(fopen("led_state2.txt", "w"), "0");
        fwrite(fopen("/dev/ttyACM0", "w"), "4");
	echo("0");