<?php
	if(count($_GET)!=0) {
		foreach ($_GET as $key => $value) {
			if($key=="a") {
				$f=fopen('./service_files/rand.txt', 'r');
				$rand=fread($f, 20);
				fclose($f);
				$f=fopen('./service_files/moveB.txt', 'r');
				$x=fread($f, 1);
				fclose($f);
				$f=fopen('./service_files/winner.txt', 'w');
				if($value==$x) { //A win
					echo "1$rand";
					fwrite($f, "1");
				}
				else {
					echo "2$rand";
					fwrite($f, "2");
				}
				fclose($f);
			}
		}	
	}
?>
