<?php
	if(count($_GET)!=0) {
		foreach ($_GET as $key => $value) {
			if($value==1) {
				if($key=="a") {
					$f=fopen('./service_files/a.txt', 'r');
					$x=fread($f, 1);
					fclose($f);
					if(!$x) {
						$f=fopen('./service_files/a.txt', 'w');
						fwrite($f, $value);
						fclose($f);
						echo "1";	
					}
					else {
						echo "0";
					}
				}
				if($key=="b") {
					$f=fopen('./service_files/b.txt', 'r');
					$x=fread($f, 1);
					fclose($f);
					if(!$x) {
						$f=fopen('./service_files/b.txt', 'w');
						fwrite($f, $value);
						fclose($f);
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
