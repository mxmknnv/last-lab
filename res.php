<?php
	if(count($_GET)!=0) {
		foreach ($_GET as $key => $value) {
			if($value==0) {
				if($key=="a") {
					$f=fopen('./service_files/a.txt', 'w');
					fwrite($f, $value);
					fclose($f);
					echo "1";
				}
				if($key=="b") {
					$f=fopen('./service_files/b.txt', 'w');
					fwrite($f, $value);
					fclose($f);
					echo "2";
				}
			}
			else {
				echo "0";
			}
		}
	}
?>
