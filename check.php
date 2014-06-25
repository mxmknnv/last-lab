<?php
	if(count($_GET)!=0) {
		foreach ($_GET as $key => $value) {
			if($value==1) {
				if($key=="a") {
					$f=fopen('./service_files/a.txt', 'r');
					$x=fread($f, 1);
					if($x) {
						echo "1";
					}
					else {
						echo "0";
					}
					fclose($f);
				}
				if($key=="b") {
					$f=fopen('./service_files/b.txt', 'r');
					$x=fread($f, 1);
					if($x) {
						echo "2";
					}
					else {
						echo "0";
					}
					fclose($f);
				}
			}
		}
	}
?>
