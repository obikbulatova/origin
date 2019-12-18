var player = GetPlayer();
var one = player.GetVar("var_1");
var two = player.GetVar("var_2");
var three = player.GetVar("var_3");
var four = player.GetVar("var_4");

function upprcs (x) {
var y=x.toUpperCase();
return y;
}

var one_l = lwrcs (one);
var two_l = lwrcs (two);
var three_l = lwrcs (three);
var four_l = lwrcs (four);
var respond=false;
var answer=false;

function ololo (a, k, b, l, c,d,e,f,g,h){
if ((g != true) && (a==b) && (c==d)) {
    i=true;
    respond=true;
    return i;
} else if ((h != true) && (k==e) && (l==f)) {
        i=true;
        answer=true;
        return  i;
} else {
i=false;
return i;
}
}

var res1=ololo (one_l, three_l, "respond", four_l, two_l, "answer", "regards", "regarding", respond, answer);
var res2=ololo (one_l, three_l, "respond", four_l, two_l, "answer", "regards", "regarding", respond, answer);

player.SetVar("res1", res1);
player.SetVar("res2", res2);