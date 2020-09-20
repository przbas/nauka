var lp = 0;
var g_list = new Array();
var l = 0;
var img_link = "";

function ustaw()
{

    var li = document.getElementById("zakres").value;
    /*var id = 0;
    if (li == "Kolory / Colors") id=1;
    if (li == "Liczby / Numbers") id=2;
    if (li == "Unit 1 My favourite things") id=3;
    if (li == "Unit 2 My family") id=4;
    if (li == "Unit 3 My body and face") id=5;
    if (li == "Unit 4 My room") id=6;
    if (li == "Unit 5 I can jump!") id=7;
    if (li == "Unit 6 He likes cheese!") id=8;
    if (li == "Unit 7 Our world") id=9;
    if (li == "Unit 8 What's he wearing?") id=10;
    if (li == "Halloween") id=11;
    if (li == "Christmas") id=12;
    if (li == "Pancake Day") id=13;
    if (li == "Easter") id=14;
    if (li == "May Day") id=15;*/
    

    setTimeout("generuj_"+li+"()",100);
    document.getElementById("score").innerHTML = "Wynik: [ 0 / 0 ]";
}

function generuj_0()
{
     document.getElementById("pytanie").innerHTML = "<b>^^ Wybierz rozdział ^^</b><br><br>";
     document.getElementById("img_test").innerHTML = '<img src="img/empty_img.png" height=10px />';
     document.getElementById("sprawdz").style.display = "none";
     document.getElementById("dalej").style.display = "none";
     document.getElementById("wynik").focus();
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
    document.getElementById("pytanie").innerHTML = g_list[lp*2];
    img_link = '"img/'+g_list[lp*2+1]+'.png"';
    document.getElementById("img_test").innerHTML = "<img src="+img_link+" height=100px />";
    document.getElementById("wynik").style.display = "initial";
    document.getElementById("sprawdz").style.display = "initial";
    document.getElementById("dalej").style.display = "none";
    document.getElementById("wynik").focus();
}

function generuj_101()
{
    var lista = ["niebieski","blue","zielony","green","czerwony","red","żółty","yellow","torba","bag","książka","book","kredka","crayon","długopis","pen","ołówek","pencil","piórnik","pencil case","gumka","rubber","linijka","ruler"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_102()
{
    var lista = ["uszy","ears","oczy","eyes","twarz","face","włosy","hair","usta","mouth","nos","nose","brązowy","brown","pomarańczowy","orange","różowy","pink","fioletowy","purple","wesoły","happy","smutny","sad"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_103()
{
    var lista = ["ptak","bird","słoń","elephant","żyrafa","giraffe","hipopotam","hippo","lew","lion","nosorożec","rhino","zebra","zebra","czarny","black","szary","grey","biały","white","jeden","one","dwa","two","trzy","three","cztery","four","pięć","five"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_104()
{
    var lista = ["piłka","ball","łódka","boat","samochód","car","kowboj","cowboy","dinozaur","dinosaur","lalka","doll","latawiec","kite","astronauta","spaceman","pluszowy miś","teddy bear","pociąg","train","jo-jo","yo-yo","sześć","six","siedem","seven","osiem","eight","dziewięć","nine","dziesięć","ten"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_105()
{
    var lista = ["jabłka","apples","banany","bananas","chleb","bread","ciasto","cake","ser","cheese","kurczak","chicken","jaja","eggs","mięso","meat","mleko","milk","gruszki","pears","pizza","pizza","kanapki","sandwiches","spaghetti","spaghetti","woda","water"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_106()
{
    var lista = ["ramiona","arms","ciało","body","głowa","head","nogi","legs","brzuch","tummy","palce u rąk","fingers","ręce","hands","palce u stóp","toes","stopa","feet","wysoki","long","niski","short"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_107()
{
    var lista = ["łazienka","bathroom","sypialnia","bedroom","ogród","garden","dom","house","kuchnia","kitchen","salon","living room","krzesło","chair","drzwi","door","stół","table","okno","window"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_108()
{
    var lista = ["buty","boots","płaszcz","coat","sukienka","dress","kapelusz","hat","koszula","shirt","półbuty","shoes","spódnica","skirt","sweter","sweater","spodnie","trousers","koszulka","T-shirt"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_109()
{
    var lista = ["ptak","bird","kot","cat","pies","dog","kaczka","duck","ryba","fish","chomik","hamster","koń","horse","mysz","mouse","królik","rabbit","zółw","tortoise"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_110()
{
    var lista = ["petarda z zabawką","cracker","prezent","present","budyń","pudding","Święty","Santa","skarpeta na prezent","stocking","drzewko","tree","indyk","turkey"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_111()
{
    var lista = ["pisklę","chick","jajo","egg","kwiat","flower","owieczka","lamb","królik","rabbit"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_112()
{
    var lista = ["nietoperz","bat","kot","cat","duch","ghost","dynia","pumpkin","czarownica","witch"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_201()
{
    var lista = ["czarny","black","niebieski","blue","brązowy","brown","zielony","green","szary","grey","pomarańczowy","orange","różowy","pink","fioletowy","purple","czerwony","red","biały","white","żółty","yellow"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_202()
{
    var lista = ["jeden","one","dwa","two","trzy","three","cztery","four","pięć","five","sześć","six","siedem","seven","osiem","eight","dziewięć","nine","dziesięć","ten","jedenaście","eleven","dwanaście","twelve","trzynaście", "thirteen","czternaście","fourteen","piętnaście","fifteen","szesnaście","sixteen","siedemnaście","seventeen","osiemnaście","eighteen","dziewiętnaście","nineteen","dwadzieścia","twenty"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_203()
{
    var lista = ["piłka","ball","rower","bike","komputer","computer","gra komputerowa","computer game","lalka","doll","latawiec","kite","robot","robot","hulajnoga","scooter","statek kosmiczny","spaceship","miś pluszowy","teddy bear","telewizor","TV","zegarek (na ręke)","watch"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_204()
{
    var lista = ["ciocia","aunt","brat","brother","kuzyni","cousins","tato","dad","rodzina","family","babcia","grandma","dziadek","grandad","mama","mum","siostra","sister","wujek","uncle"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_205()
{
    var lista = ["jasne włosy","blond hair","ciemne włosy","dark hair","broda","chin","oczy","eyes","okulary","glasses","szyja","neck","ogon","tail","ząb","teeth","długie włosy","long hair","krótkie włosy","short hair","silny","strong","małe","small","duże","big"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_206()
{
    var lista = ["fotel","armchair","wanna","bath","łużko","bed","pudełko","box","dywan","carpet","szafka","cupboard","zasłona","curtain","podłoga","floor","lampa","lamp","lustro","mirror","w środku","in","na","on","obok","next to","pod","under"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_207()
{
    var lista = ["wspinać się","climb","taniec","dance","latać","fly","skakać","jump","jechać rowerem","ride a bike","jechać konno","ride a horse","biegać","run","pływać","swim","chodzić","walk","niedźwiedź","bear","ptak","bird","słoń","elephant","ryba","fish","małpa","monkey","wąż","snake","tygrys","tiger"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_208()
{
    var lista = ["marchewki","carrots","czekolada","chocolate","winogrona","grapes","lody","ice cream","grzyby","mushrooms","cebule","onions","groszek","peas","zupa","soup","truskawki","strawberries","pomidory","tomatoes"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_209()
{
    var lista = ["pole","field","las","forest","jezioro","lake","góra","mountain","rzeka","river","miasto","town","łódka","boat","autobus","bus","samochód","car","ciężarówka","lorry","smolot","plane","traktor","tractor","pociąg","train"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_210()
{
    var lista = ["pas","belt","buty","boots","sukienka","dress","kurtka","jacket","dżinsy","jeans","płaszcz przeciwdeszczowy","raincoat","szalik","scarf","koszula","shirt","półbuty","shoes","spodenki","shorts","spódnica","skirt","skarpety","socks","kapelusz przeciwsłoneczny","sun hat","trampki","trainers","koszulka","T-shirt","kalosze","wellies"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_211()
{
    var lista = ["miotła","broomstick","maska","mask","potwór","monster","pająk","spider","czarodziej","wizard"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_212()
{
    var lista = ["świeca","candle","renifer","reindeer","gwiazda","star"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_213()
{
    var lista = ["mąka","flour","cytryna","lemon","patelnia","pan","naleśnik","pancake","cukier","sugar"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_214()
{
    var lista = ["koszyk","basket","ławka","bench","czekoladowe jajko","chocolate egg","gniazdo","nest","słodycze","sweets"];
    g_list = generuj(lista);
    wyswietl();
}

function generuj_215()
{
    var lista = ["korona","crown","liście","leaves","wstążki","ribbons","maszt majowy","maypole"];
    g_list = generuj(lista);
    wyswietl();
}

function sprawdz()
{
    if (lp<g_list.length/2)
    {
        var t = false;
        var tekst =  document.getElementById("wynik").value;
        if (tekst == g_list[lp*2+1]) {
            l++;
            document.getElementById("test").innerHTML = '<div style = "color: lightgreen;"> Dobrze :) </div>';
            t=true;      
        }
        else {
            document.getElementById("test").innerHTML = '<div style = "color: lightcoral;">'+"Źle !!!  "+g_list[lp*2]+" to: "+g_list[lp*2+1]+"<div>";
            document.getElementById("wynik").style.display = "none";
            document.getElementById("sprawdz").style.display = "none";
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
        
        if(t)
        wyswietl();
        else
        document.getElementById("dalej").style.display = "initial";
    }
}
