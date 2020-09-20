var lp = 0;
var g_list = new Array();
var l = 0;
var img_link = "";

function ustaw()
{
    var li = document.getElementById("zakres").value;
    var id = 0;
    if (li == "od 4 do 25") id=1;
    if (li == "od 27 do 50") id=2;
    if (li == "od 54 do 100") id=3;
   
    setTimeout("generuj_"+id+"()",100);
    document.getElementById("score").innerHTML = "Wynik: [ 0 / 0 ]";
}

function generuj_0()
{
     document.getElementById("pytanie").innerHTML = "Nie działająca opcja :(";
}

function generuj(list)
{
    lp = 0;
    l =0;
    var pom1 = list[0];
    var pom2 = list[1];
    var i_rand = 0;

    for (i=0; i<list.length/2; i++)
    {
        i_rand = Math.floor(Math.random()*(list.length/2));
        list[0] = list[i_rand*2];
        list[1] = list[i_rand*2+1];
        list[i_rand*2] = pom1;
        list[i_rand*2+1] = pom2;
        pom1 = list[0];
        pom2 = list[1];
    }
    return list;    
}

function wyswietl()
{
    document.getElementById("pytanie").innerHTML = g_list[lp*2]+" x "+g_list[lp*2+1]+" =";
    document.getElementById("wynik").focus();
    
}

function generuj_1()
{
    var lista = [2,2,2,3,2,4,2,5,2,6,2,7,2,8,2,9,2,10,3,3,3,4,3,5,3,6,3,7,3,8,4,4,4,5,4,6,5,5];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_2()
{
    var lista = [3,9,3,10,4,7,4,8,4,9,4,10,5,6,5,7,5,8,5,9,5,10,6,6,6,7,6,8,7,7];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_3()
{
    var lista = [6,9,6,10,7,8,7,9,7,10,8,8,8,9,8,10,9,9,9,10,10,10];
    g_list = generuj(lista);
    wyswietl();
}


function sprawdz()
{
    if (lp<g_list.length/2)
    {
        var tekst =  document.getElementById("wynik").value;
        if (tekst == g_list[lp*2+1]*g_list[lp*2]) {
            l++;
            document.getElementById("test").innerHTML = '<div style = "color: lightgreen;">'+ g_list[lp*2]+" x "+g_list[lp*2+1]+" = "+g_list[lp*2]*g_list[lp*2+1]+" -- Dobrze :)</div>";          
        }
        else {
            document.getElementById("test").innerHTML = '<div style = "color: lightcoral;">Źle !!!  '+g_list[lp*2]+" x "+g_list[lp*2+1]+" = "+g_list[lp*2]*g_list[lp*2+1]+"</div>";
        }
        lp++;     
        document.getElementById("score").innerHTML = "Wynik: [ "+l+" / "+lp+" ]";
        document.getElementById("wynik").value = "";

        if(lp==g_list.length/2)
        {
            alert("Twój wynik: [ "+ l +" / "+lp+" ]" );
            lp=0;
            l=0;
            document.getElementById("test").innerHTML = " Od Nowa";
            document.getElementById("score").innerHTML = "Wynik: [ "+l+" / "+lp+" ]";
        }
        
        wyswietl();
    }
}

