<?php
	$f=fopen('./service_files/moveB.txt', 'r');
	$x=fread($f, 1);
	fclose($f);
	if($x) {
		$rand=mt_rand(5, PHP_INT_MAX);
		if($x==1) {
			if($rand % 2)
				$rand = $rand-1;
		}
		if($x==2) {
			if(!($rand % 2))
				$rand = $rand-1;
		}	
		echo hash('md5', $rand);
		$f=fopen('./service_files/rand.txt', 'w');
		fwrite($f, $rand);
		fclose($f);
	}
	else {
		echo "0";
	}
?>
