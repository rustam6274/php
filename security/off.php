<?php
	header("Pragma: no-cache");
	header("Cache-control: no-cache");
	fwrite(fopen("led_state.txt", "w"), "0");
        fwrite(fopen("/dev/ttyACM0", "w"), "0");
	echo("0");