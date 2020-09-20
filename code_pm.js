var a = 10;
var b = 10;
var w = 20;
var l = 0;
var lp = 0;
var zak = 30;
var rownanie = "";

function start()
{
    document.getElementById("t_zakres").innerHTML = "Zakres: "+zak;
    document.getElementById("test").innerHTML = " Zaczynamy!";
    document.getElementById("wynik").focus();

    generuj();
}

function ustaw()
{
    var l_zak = document.getElementById("zakres").value;
    if (l_zak < 10) {alert("Wpisz liczbę 10 lub większą!")}
    else {zak=l_zak; l=0; lp=0; generuj();}
}
        
function generuj()
{   
    document.getElementById("t_zakres").innerHTML = "Zakres: "+zak;
    document.getElementById("zakres").value = "";
    var alt_a = a;
    a = Math.floor(Math.random() * zak) + 1;
    if(a == alt_a) {a = Math.floor(Math.random() * zak) + 1;}
    var alt_b = b;
    b = Math.floor(Math.random() * zak) + 1;

    if (b == alt_b) {b = Math.floor(Math.random() * zak) + 1;}
    if(a+b <= zak) {rownanie = a +" + "+ b +" = "; w=a+b;}
    else if (a >= b) {rownanie = a +" - "+ b +" = "; w=a-b;}
    else {rownanie = b +" - "+ a +" = "; w=b-a;}
    document.getElementById("z").innerHTML = rownanie;
}
        
function sprawdz()
{
    if (lp<20) 
    {
        var liczba = document.getElementById("wynik").value;
        if (liczba == w) {
            l++;
            document.getElementById("test").innerHTML = '<div style = "color: lightgreen;">'+ rownanie+w+"  -- dobrze :)</div>";          
        }
        else {
            document.getElementById("test").innerHTML = '<div style = "color: lightcoral;">'+"Źle !!!  Prawidłowy wynik to: "+rownanie+w+"</div>";
        }
        lp++;     
        document.getElementById("score").innerHTML = "Wynik: [ "+l+" / "+lp+" ]";
        document.getElementById("wynik").value = "";
        
        if(lp == 20) {
            var ocena = "5";
            if(l<= 10) ocena = "2";
            else if (l==11) ocena = "-3";
            else if (l>=12 && l<=13) ocena = "3";
            else if (l==14) ocena = "+3";
            else if (l==15) ocena = "-4";
            else if (l==16) ocena = "4";
            else if (l==17) ocena = "+4";
            else if (l>=18 && l<=19) ocena = "-5";

            document.getElementById("test").innerHTML = "Ocena: "+ocena;
            alert("Twój wynik: [ "+ l +" / "+lp+" ] Ocena: "+ocena);
            lp=0;
            l=0;
        }

        generuj();
    }        
            
}