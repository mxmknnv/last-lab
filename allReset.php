<?php
	$f=fopen('./service_files/a.txt', 'w');
	fwrite($f, "0");
	fclose($f);
	$f=fopen('./service_files/b.txt', 'w');
	fwrite($f, "0");
	fclose($f);
	$f=fopen('./service_files/moveB.txt', 'w');
	fwrite($f, "0");
	fclose($f);
	$f=fopen('./service_files/rand.txt', 'w');
	fwrite($f, "0");
	fclose($f);
	$f=fopen('./service_files/winner.txt', 'w');
	fwrite($f, "0");
	fclose($f);
?>