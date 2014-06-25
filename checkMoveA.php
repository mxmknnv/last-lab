<?php
	$f=fopen('./service_files/winner.txt', 'r');
	$x=fread($f, 1);
	fclose($f);
	if($x) {
		if($x==1)
			echo "1";
		else
			echo "2";
	}
	else {
		echo "0";
	}
?>
