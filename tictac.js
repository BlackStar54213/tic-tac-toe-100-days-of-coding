
var player = 0;
var b1 = document.getElementById("row11");
var b2 = document.getElementById("row12");
var b3 = document.getElementById("row13");
var b4 = document.getElementById("row21");
var b5 = document.getElementById("row22");
var b6 = document.getElementById("row23");
var b7 = document.getElementById("row31");
var b8 = document.getElementById("row32");
var b9 = document.getElementById("row33");
var dark = document.getElementById("darkbtn");
var body = document.querySelector("body");
var par = document.querySelector("p");
var numid = 0;

function myFunc() {
    var bb1 = document.getElementById("row11").value;
    var bb2 = document.getElementById("row12").value;
    var bb3 = document.getElementById("row13").value;
    var bb4 = document.getElementById("row21").value;
    var bb5 = document.getElementById("row22").value;
    var bb6 = document.getElementById("row23").value;
    var bb7 = document.getElementById("row31").value;
    var bb8 = document.getElementById("row32").value;
    var bb9 = document.getElementById("row33").value;

    //checking for "X" winner
    if ((bb1 == "X" || bb1 == "x") && (bb2 == "X" || bb2 == "x") && (bb3 == "X" || bb3 == "x")) {
        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player X wins";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if ((bb7 == "X" || bb7 == "x") && (bb8 == "X" || bb8 == "x") && (bb9 == "X" || bb9 == "x")) {
        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player X wins";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
    }
    else if ((bb3 == "X" || bb3 == "x") && (bb6 == "X" || bb6 == "x") && (bb9 == "X" || bb9 == "x")) {
        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player X wins";
        b1.disabled = true;
        b2.disabled = true;
        b5.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
    }
    else if ((bb1 == "X" || bb1 == "x") && (bb5 == "X" || bb5 == "x") && (bb9 == "X" || bb9 == "x")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player X wins";
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    }
    else if ((bb3 == "X" || bb3 == "x") && (bb5 == "X" || bb5 == "x") && (bb7 == "X" || bb7 == "x")) {
        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player X wins";
        b1.disabled = true;
        b2.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if ((bb2 == "X" || bb2 == "x") && (bb5 == "X" || bb5 == "x") && (bb8 == "X" || bb8 == "x")) {
        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player X wins";
        b1.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
    }
    else if ((bb4 == "X" || bb4 == "x") && (bb5 == "X" || bb5 == "x") && (bb6 == "X" || bb6 == "x")) {
        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player X wins";
        b2.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if ((bb1 == "X" || bb1 == "x") && (bb4 == "X" || bb4 == "x") && (bb7 == "X" || bb7 == "x")) {
        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player X wins";
        b2.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }


    //checking for Y winner


    if ((bb1 == "O" || bb1 == "o") && (bb2 == "O" || bb2 == "o") && (bb3 == "O" || bb3 == "o")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player O wins";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }



    else if ((bb7 == "O" || bb7 == "o") && (bb8 == "O" || bb8 == "o") && (bb9 == "O" || bb9 == "o")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player O wins";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
    }


    else if ((bb3 == "O" || bb3 == "o") && (bb6 == "O" || bb6 == "o") && (bb9 == "O" || bb9 == "o")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player O wins";
        b1.disabled = true;
        b2.disabled = true;
        b5.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
    }


    else if ((bb1 == "O" || bb1 == "o") && (bb5 == "O" || bb5 == "o") && (bb9 == "O" || bb9 == "o")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player O wins";
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    }



    else if ((bb3 == "O" || bb3 == "o") && (bb5 == "O" || bb5 == "o") && (bb7 == "O" || bb7 == "O")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player O wins";
        b1.disabled = true;
        b2.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }


    else if ((bb2 == "O" || bb2 == "o") && (bb5 == "O" || bb5 == "o") && (bb8 == "O" || bb8 == "o")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player O wins";
        b1.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
    }


    else if ((bb4 == "O" || bb4 == "o") && (bb5 == "O" || bb5 == "o") && (bb6 == "O" || bb6 == "o")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player O wins";
        b2.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }

    else if ((bb1 == "O" || bb1 == "o") && (bb4 == "O" || bb4 == "o") && (bb7 == "O" || bb7 == "o")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "player O wins";
        b2.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }

    else if ((bb1 !== "") && (bb2 !== "") && (bb3 !== "") && (bb4 !== "") && (bb5 !== "") && (bb6 !== "") && (bb7 !== "") && (bb8 !== "") && (bb9 !== "")) {

        document.getElementById("winner").style.opacity = "1";
        document.getElementById("winner").innerHTML = "WOW ITS A TIE";
    }
}






function clickRow11() {
    if (player == 0) {
        b1.value = "X";
        player = 1;
        document.getElementById("row11").disabled = true;

    } else {
        b1.value = "O";
        player = 0;
        document.getElementById("row11").disabled = true;

    }
}

function clickRow12() {
    if (player == 0) {
        b2.value = "X";
        player = 1;
        b2.disabled = true;

    } else {
        b2.value = "O";
        player = 0;
        b2.disabled = true;
    }
}

function clickRow13() {
    if (player == 0) {
        b3.value = "X";
        player = 1;
        b3.disabled = true;

    } else {
        b3.value = "O";
        player = 0;
        b3.disabled = true;
    }
}


function clickRow21() {
    if (player == 0) {
        b4.value = "X";
        player = 1;
        b4.disabled = true;

    } else {
        b4.value = "O";
        player = 0;
        b4.disabled = true;
    }
}

function clickRow22() {
    if (player == 0) {
        b5.value = "X";
        player = 1;
        b5.disabled = true;

    } else {
        b5.value = "O";
        player = 0;
        b5.disabled = true;
    }
}

function clickRow23() {
    if (player == 0) {
        b6.value = "X";
        player = 1;
        b6.disabled = true;

    } else {
        b6.value = "O";
        player = 0;
        b6.disabled = true;
    }
}

function clickRow31() {
    if (player == 0) {
        b7.value = "X";
        player = 1;
        b7.disabled = true;

    } else {
        b7.value = "O";
        player = 0;
        b7.disabled = true;
    }
}

function clickRow32() {
    if (player == 0) {
        b8.value = "X";
        player = 1;
        b8.disabled = true;

    } else {
        b8.value = "O";
        player = 0;
        b8.disabled = true;
    }
}

function clickRow33() {
    if (player == 0) {
        b9.value = "X";
        player = 1;
        b9.disabled = true;

    } else {
        b9.value = "O";
        player = 0;
        b9.disabled = true;
    }
}
var bb1 = document.getElementById("row11").value;
var bb2 = document.getElementById("row12").value;
var bb3 = document.getElementById("row13").value;
var bb4 = document.getElementById("row21").value;
var bb5 = document.getElementById("row22").value;
var bb6 = document.getElementById("row23").value;
var bb7 = document.getElementById("row31").value;
var bb8 = document.getElementById("row32").value;
var bb9 = document.getElementById("row33").value;


function reloadGame() {
    //remove the value
    document.getElementById("row11").value = "";
    document.getElementById("row12").value = "";
    document.getElementById("row13").value = "";
    document.getElementById("row21").value = "";
    document.getElementById("row22").value = "";
    document.getElementById("row23").value = "";
    document.getElementById("row31").value = "";
    document.getElementById("row32").value = "";
    document.getElementById("row33").value = "";
    document.getElementById("winner").innerHTML = "";

    //enable the input tags
    document.getElementById("row11").disabled = false;
    document.getElementById("row12").disabled = false;
    document.getElementById("row13").disabled = false;
    document.getElementById("row21").disabled = false;
    document.getElementById("row22").disabled = false;
    document.getElementById("row23").disabled = false;
    document.getElementById("row31").disabled = false;
    document.getElementById("row32").disabled = false;
    document.getElementById("row33").disabled = false;



    player = 0;


    document.getElementById("winner").style.opacity = "0    ";
}



dark.addEventListener("click", () => {
    switch (numid) {
        case numid = 0:
            body.style.backgroundColor = "black";
            par.style.color = "white";
            dark.innerHTML = "Light Mode";
            numid = 1;
            break;

        case numid = 1:
            body.style.backgroundColor = "white";
            par.style.color = "black";
            dark.innerHTML = "Dark Mode";
            numid = 0;
            break;
    }
})