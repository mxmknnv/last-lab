var currentRole=0;
var currentChoice=0;
var checkTimer;
var checkAliveTimer;
var checkMoveBTimer;
var checkMoveATimer;
var textSearch="Поиск игроков...";
var textSearchOk="Оппонент найден.";
var textWait="Ожидание хода оппонента..."

function allReset() {
    $.get("/allReset.php");
}

function set(role) {
    if(role=="a") {
         $.get("/set.php",{a: 1},onSetSuccess);    
    }
    if(role=="b") {
         $.get("/set.php",{b: 1},onSetSuccess);    
    }
}

function onSetSuccess (data){
    var answer=parseInt(data);
    if(answer) {
        $('#main-menu').addClass('hide');
        if(answer==1) {
            $('#role-a').removeClass('hide');
            currentRole=1;
            checkTimer=setInterval(check, 3000, 'b');
        }
        else {
            $('#role-b').removeClass('hide');
            $('#move-b').removeClass('hide');
            currentRole=2;
            checkTimer=setInterval(check, 3000, 'a');
        }
    }
    else {
        alert("Роль уже используется.");
    }
}

function res(role) {
    if(role=="a") {
         $.get("/res.php",{a: 0},onResSuccess);    
    }
    if(role=="b") {
         $.get("/res.php",{b: 0},onResSuccess);    
    }
}

function onResSuccess(data) {
    var answer=parseInt(data);
    if(answer) {
        currentRole=0;
        currentChoice=0
        clearInterval(checkTimer);
        clearInterval(checkAliveTimer);
        clearInterval(checkMoveBTimer);
        clearInterval(checkMoveATimer);
        $('#main-menu').removeClass('hide');
        if(answer==1) {
            $('#role-a').addClass('hide');
            $('#role-a-status').html(textSearch);
            $('#game-a-message').html(textWait);
            $('#game-a').addClass('hide');
            $('#move-a').addClass('hide');
            $('#winner-a').html("");
            $('#choice-a').html("");
            $('#wait-a').addClass('hide');
        }
        else {
            $('#role-b').addClass('hide');
            $('#role-b-status').html(textSearch);
            $('#game-b').addClass('hide');
            $('#wait-b').addClass('hide');
            $('#winner-b').html(textWait);
            $('#choice-b').html("");
        }   
    }
}

function check(role) {
    if(role=="a") {
        $.get("/check.php",{a: 1},onCheckSuccess);    
    }
    if(role=="b") {
        $.get("/check.php",{b: 1},onCheckSuccess);    
    }
}

function onCheckSuccess(data) {
    var answer=parseInt(data);
    if(answer) {
        clearInterval(checkTimer);
        if(answer==2) {
            $('#role-a-status').html(textSearchOk);
            $('#game-a').removeClass('hide');
            checkAliveTimer=setInterval(checkAlive, 3000, 'b');
            checkMoveBTimer=setInterval(checkMoveB, 3000);
        }
        else {
            $('#role-b-status').html(textSearchOk);
            $('#game-b').removeClass('hide');
            checkAliveTimer=setInterval(checkAlive, 3000, 'a');
        }   
    }
}

function moveB(ch) {
    $('#move-b').addClass('hide');
    $('#wait-b').removeClass('hide');
    if(ch=='o') {
        $.get("/moveB.php",{b: 1},onMoveBSuccess);
        currentChoice=1;
        $('#choice-b').html("Ваш выбор: Орел");
    }
    if(ch=='r') {
        $.get("/moveB.php",{b: 2},onMoveBSuccess); 
        currentChoice=2;
        $('#choice-b').html("Ваш выбор: Решка");
    }
    checkMoveATimer=setInterval(checkMoveA, 3000);
    
}

function onMoveBSuccess(data) {
    ///
}

function checkAlive(role) {
    if(role=="a") {
        $.get("/check.php",{a: 1},oncheckAliveSuccess);    
    }
    if(role=="b") {
        $.get("/check.php",{b: 1},oncheckAliveSuccess);    
    }
}

function oncheckAliveSuccess(data) {
    var answer=parseInt(data);
    if(answer) {
        ///     
    }
    else {
        alert("Оппонент покинул игру");
        clearInterval(checkAliveTimer);
        clearInterval(checkMoveATimer);
        clearInterval(checkMoveBTimer);
        if(currentRole==1) {
            $('#game-a').addClass('hide');
            $('#role-a-status').html(textSearch);
            $('#game-a-message').html(textWait);
            $('#move-a').addClass('hide');
            $('#winner-a').html("");
            checkTimer=setInterval(check, 3000, 'b');
        }
        if(currentRole==2) {
            $('#game-b').addClass('hide');
            $('#wait-b').addClass('hide');
            $('#role-b-status').html(textSearch);
            checkTimer=setInterval(check, 3000, 'a');
        }
    }
}

function checkMoveB() {
    $.get("/checkMoveB.php",oncheckMoveBSuccess);
}

function oncheckMoveBSuccess(data) {
    if(data!="0") {
        clearInterval(checkMoveBTimer);
        $('#game-a-message').html("Игрок В сделал ход:<br>"+data); 
        $('#move-a').removeClass('hide');
    }
    else {
        ///
    }
}

function moveA(ch) {
    $('#move-a').addClass('hide');
    $('#wait-a').removeClass('hide');
    if(ch=='o') {
        $.get("/moveA.php",{a: 1},onMoveASuccess);
        currentChoice=1;
        $('#choice-a').html("Ваш выбор: Орел");
    }
    if(ch=='r') {
        $.get("/moveA.php",{a: 2},onMoveASuccess); 
        currentChoice=2;
        $('#choice-a').html("Ваш выбор: Решка");
    }
    
}

function onMoveASuccess(data) {
    clearInterval(checkAliveTimer);
    var win = data.substr(0,1);
    if(win=="1") {
        $('#winner-a').html("Вы победили!<br>Ход оппонента: "+ data.substr(1));
    }
    else {
        $('#winner-a').html("Вы проиграли!<br>Ход оппонента: "+ data.substr(1));
    }
}

function checkMoveA() {
    $.get("/checkMoveA.php",oncheckMoveASuccess);
}

function oncheckMoveASuccess(data) {
    if(data!="0") {
        clearInterval(checkMoveATimer);
        clearInterval(checkAliveTimer);
        if(data=="1")
            $('#winner-b').html("Вы проиграли!");      
        else
            $('#winner-b').html("Вы победили!");
        allReset();
    }
    else {
        ///
    }
}
