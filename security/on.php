<?php
	header("Pragma: no-cache");
	header("Cache-control: no-cache");
	fwrite(fopen("led_state.txt", "w"), "1");
        fwrite(fopen("/dev/ttyACM0", "w"), "1");
	echo("1");