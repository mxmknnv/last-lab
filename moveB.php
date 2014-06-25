<?php
	if(count($_GET)!=0) {
		foreach ($_GET as $key => $value) {
			if($key=="b") {
				if($value==1) { //Орел
					$f=fopen('./service_files/moveB.txt', 'w');
					fwrite($f, "1");
					fclose($f);
					echo "1";
				}
				if($value==2) {
					$f=fopen('./service_files/moveB.txt', 'w');
					fwrite($f, "2");
					fclose($f);
					echo "2";
				}
			}
		}	
	}
?>
