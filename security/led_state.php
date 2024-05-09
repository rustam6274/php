<?php 
	header("Pragma: no-cache");
	header("Cache-control: no-cache");
	readfile("led_state.txt");
