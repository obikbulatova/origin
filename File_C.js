var player = GetPlayer();
var one = player.GetVar("var_1");
var two = player.GetVar("var_2");
var three = player.GetVar("var_3");
var four = player.GetVar("var_4");

var onenew;
var twonew;
var threenew;
var fournew;

if (four == true) {
    fournew = "- Offer alternative available corporate solutions to suit the need (correct)";
} else {
    fournew = " ";
}

if (three == true) {
    threenew = "<br> - Explain to the user that the tool is prohibited by the Company’s policy (correct)";
} else {
    threenew = " ";
}

if (two == true) {
    twonew = "<br> - Install the tool to resolve the issue (incorrect)";
} else {
    twonew = " ";
}

if (one == true) {
    onenew = "<br> - Reject the SD request with a comment that the tool is prohibited (incorrect)";
} else {
    onenew = " ";
}

var fin = onenew + twonew + threenew + fournew;

player.SetVar("fin_answer",fin);