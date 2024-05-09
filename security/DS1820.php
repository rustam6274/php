<?php 
	header("Pragma: no-cache");
	header("Cache-control: no-cache");

  
	fwrite(fopen("DS1820.txt", "w"), fread(fopen("/dev/ttyACM0", "r"), 18));
	readfile("DS1820.txt");

