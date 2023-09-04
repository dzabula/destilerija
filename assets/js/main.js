
var url=window.location.href;
console.log(url);
if ((url.indexOf("index.html") != -1 )||(url=="https://destilerija.000webhostapp.com/")){
    function brojanje(){
    document.getElementById("drugiDeo").removeEventListener("mouseover",brojanje);
        var polje=document.getElementById("broji");
        var ogranicenje=polje.getAttribute("ogranicenje");
        var brojac=0
        parseInt(ogranicenje);
        function rast(){
            if(brojac<ogranicenje ){
            brojac++
            polje.innerHTML=brojac;
        
            tajmer=setTimeout(rast,300)
            }
            else{
                clearTimeout("tajmer");
                }
        }
        var tajmer=setTimeout(rast(),50)
    }
    document.getElementById("drugiDeo").addEventListener("mouseover",brojanje);
}

var slike = ["assets/img/proizvod-1.jpg",
            "assets/img/proizvod-2.jpg",
            "assets/img/proizvod-3.jpg",
            "assets/img/proizvod-4.jpg",
            "assets/img/proizvod-5.jpg",
            "assets/img/proizvod-6.jpg",
            "assets/img/proizvod-7.jpg",
            "assets/img/proizvod-8.jpg",
            "assets/img/proizvod-9.jpg",
            "assets/img/proizvod-10.jpg",
            "assets/img/proizvod-11.jpg",
            "assets/img/proizvod-12.jpg",
            "assets/img/proizvod-13.jpg",
            "assets/img/proizvod-14.jpg",
            "assets/img/proizvod-15.jpg",
            "assets/img/proizvod-16.jpg",
            "assets/img/proizvod-17.jpg",
            "assets/img/proizvod-18.png",
            "assets/img/proizvod-19.jpg",
            "assets/img/proizvod-20.jpg"];

var opisi= ["Viski Beirano","Rum Hendricks","Rakija Gran Grendian","Viski Jim Beam","Rum Citadelle","Viski The Glenlivet","Viski Black Label","Vino Macallan","Rakija Old Monk","Viski Jameson","Rakija Skrewball","Viski Jack Daniels","Vino McClellands + vodka","Rakija Plantation","Viski Red Label","Vino Jacob's Creek","Viski Galantry","Rum Takovo","Rum Humbu","Rum Mayers'Rum"];
var cene = [959,1359,2959,8999,2000,3000,4000,5000,5650,1280,2350,4655,10000,1000,1250,3650,12999,15800,20000,5200];
var kolicine=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var kategorija=["viski","rum","rakija","viski","rum","viski","viski","vino","rakija","viski","rakija","viski","vino","rakija","viski","vino","viski","rum","rum","rum"]
var brojiArtikala;
var ID;
if ((url.indexOf("index.html") != -1 )||(url=="https://destilerija.000webhostapp.com/")){
    brojiArtikala=12;
    ID="najArtikli"
}
else if(url.indexOf("proizvodi.html") != -1 ){
      brojiArtikala=20;
    ID="sviArtikli";
}
function najprodavanijiArtiklii(brojiArtikala,ID){
    var glavniBlok = document.getElementById(ID)
        for(let i=0;i<brojiArtikala;i++){    
            var kartica= document.createElement("div")
            kartica.setAttribute("id","A"+i)
            kartica.setAttribute("class","col-6")
            kartica.classList.add("kartica","col-lg-3");
            
                var slika= document.createElement("img")
                slika.src=slike[i]
                slika.setAttribute("alt", opisi[i])
                slika.setAttribute("class","w-100")
                slika.classList.add("mx-auto","mb-2");

                var pOpis=document.createElement("p");
                pOpisSadrzaj=document.createTextNode(opisi[i]);
                pOpis.appendChild(pOpisSadrzaj);
                pOpis.setAttribute("class","text-center")
                var divCena= document.createElement("div")
                divCena.setAttribute("class","d-flex")
                divCena.classList.add("justify-content-center")
                    var pCena = document.createElement("p")
                    pCena.innerHTML="Cena: "
                    var spanCena= document.createElement("span")
                    spanCena.setAttribute("class","cena")
            
                var divDugme=document.createElement("div")
                divDugme.setAttribute("class","d-flex")
                divDugme.classList.add("justify-content-center")
                    var dugme =document.createElement("button")
                    dugme.addEventListener("click",function(){uvecanjeKorpe(i)});
                    dugme.addEventListener("click", popUp);
                    dugme.setAttribute("class","kupi")
                    dugme.setAttribute("indeksArtikla",i)
                    dugme.innerHTML="Dodaj u korpu";  
                    dugme.classList.add("pozadinaDugmadi","manjFont")

            divDugme.appendChild(dugme)       
            spanCena.innerHTML=cene[i]       
            divCena.appendChild(pCena)
            divCena.appendChild(spanCena)
            kartica.appendChild(slika)
            kartica.appendChild(pOpis);
            kartica.appendChild(divCena)
            kartica.appendChild(divDugme)
            kartica.setAttribute("cena",cene[i]);
            kartica.setAttribute("kategorija",kategorija[i])
            kartica.classList.add("mb-4")
            //if(ID=="sviArtikli") kartica.classList.add("")
            if((i<4 && ID=="najArtikli") ||( i>=8 && ID=="najArtikli")) kartica.style.display="none";
           
            glavniBlok.appendChild(kartica)
            

        }

}
najprodavanijiArtiklii(brojiArtikala,ID)




var pomocnaPromenljivaZaDugmeBrisanja=1;


function uvecanjeKorpe(indeks){
    document.querySelector("#divZaKorpu p").classList.add("nevidljivo")
    var tekuciArtikal = document.getElementById(indeks)
    if(tekuciArtikal){
        if(tekuciArtikal.innerHTML=='10') alert("Maksimalna kolicina jednog proizvoda je 10!!!")
        else tekuciArtikal.innerHTML=parseInt(tekuciArtikal.innerHTML)+1;
    }
    else{
    var trenutniBr=document.getElementById("brProizvodaUKorpi").innerHTML;
    document.getElementById("brProizvodaUKorpi").innerHTML=parseInt(trenutniBr)+1;


    var glavniBlok=document.querySelector("#divZaKorpu")
    glavniBlok.setAttribute("class", "nevidljivo")

    var kartica = document.createElement("div");


    kartica.classList.add("col-12", "d-flex", "justify-content-between", "align-items-center","p-3","kartica","A0")


    kolicine[indeks]+=1;

    var slika= document.createElement("img")
                slika.src=slike[indeks]
                slika.setAttribute("alt", opisi[indeks])
                slika.setAttribute("class","w-25")
    
    var divCena= document.createElement("div")
                divCena.setAttribute("class","d-flex")
                divCena.classList.add("justify-content-center", "divCena")            

    var pCena = document.createElement("p")
                pCena.innerHTML="Cena: "
    var spanCena= document.createElement("span")
                spanCena.setAttribute("class","cena")
                spanCena.classList.add("spanCena")

    var divKolicina= document.createElement("div")
                divKolicina.setAttribute("class","d-flex")
                divKolicina.classList.add("justify-content-center") 
                

    var pKolicina = document.createElement("p")
                pKolicina.innerHTML="Kolicina: "

    var spanKolicina= document.createElement("span")
                spanKolicina.setAttribute("class","kolicinaArtikla")
                spanKolicina.classList.add("spanKolicina")
                spanKolicina.setAttribute("id",indeks)
        /*DUGME ZA BRISANJE SADRZAJA KORPE*/
        
    if(pomocnaPromenljivaZaDugmeBrisanja==1){
        var divZaBrisanje=document.createElement("div")
        divZaBrisanje.setAttribute("id", "obrisiKorpu")
        divZaBrisanje.setAttribute("class","p-3") 
        var dugmeZaPorucivanje = document.createElement("button")
        dugmeZaPorucivanje.setAttribute("id","dugmeZaPorucivanje")
        dugmeZaPorucivanje.addEventListener("click", function(){prikazGlavneKorpe()})
        dugmeZaPorucivanje.textContent="Zavrsi kupovinu"
        dugmeZaPorucivanje.classList.add("pozadinaDugmadiUKorpi")
        var dugmeZaBrisanje = document.createElement("button")
        dugmeZaBrisanje.setAttribute("id","dugmeZaBrisanjeKorpe") 
        dugmeZaBrisanje.innerHTML="Obrisi sav sadrzaj korpe" 
        dugmeZaBrisanje.classList.add("pozadinaDugmadiUKorpi")  
        divZaBrisanje.appendChild(dugmeZaBrisanje)
        divZaBrisanje.appendChild(dugmeZaPorucivanje)
        glavniBlok.appendChild(kartica)
        glavniBlok.appendChild(divZaBrisanje)
        document.getElementById("dugmeZaBrisanjeKorpe").addEventListener("click",brisanjeKorpe);
        pomocnaPromenljivaZaDugmeBrisanja=0;

    }
       
                spanKolicina.innerHTML=kolicine[indeks]      
                divKolicina.appendChild(pKolicina)
                divKolicina.appendChild(spanKolicina)
                spanCena.innerHTML=cene[indeks]    
                divCena.appendChild(pCena)
                divCena.appendChild(spanCena)
                kartica.appendChild(slika)
                kartica.appendChild(divCena)
                kartica.appendChild(divKolicina)
                kartica.classList.add("pozadinaKartice","mb-2")
                //kartica.style.border="solid 1px #000000"
                glavniBlok.appendChild(kartica)
        
    }

}


function brisanjeKorpe(){
   var korpa= document.getElementById("divZaKorpu")
   let y= korpa.childNodes.length;
   y+=2
   for(let i =0;i<y;i++){ 
    let x = document.getElementById(i)
    if(x != null){
        x.remove()
        kolicine[i]=0;
    }
   
   }
   korpa.textContent=""
   document.getElementById("brProizvodaUKorpi").innerHTML=0;
   pomocnaPromenljivaZaDugmeBrisanja=1;
   var pTag= document.createElement("p")
   pTag.classList.add("text-center","pt-5")
   pTag.innerHTML="Vasa korpa je prazna"
   document.querySelector("#divZaKorpu").appendChild(pTag)

   

}



var varijablaZaKorpu=0


function prikazKorpe(){
    var korpa = document.getElementById("korpa");   
    korpa.addEventListener("click",function(){
        if(varijablaZaKorpu%2==0){
            document.getElementById("divZaKorpu").classList.remove("nevidljivo")
            document.getElementById("divZaKorpu").classList.add("vidljivo")
            varijablaZaKorpu++;
        }
        else{
              document.getElementById("divZaKorpu").classList.remove("vidljivo")
              document.getElementById("divZaKorpu").classList.add("nevidljivo")
              varijablaZaKorpu++;
        }
    })

}

prikazKorpe();

/*Prikaz veceg banera preko cele stranice koji slkuzi da zavrsetak kupovine */
function prikazGlavneKorpe(){
    document.querySelector("#senka").classList.remove("nevidljivo")
    document.querySelector("#senka").classList.add("vidljivo");
    var zavrsnaKupovina = document.getElementById("zavrsnaKupovina");
    zavrsnaKupovina.classList.remove("nevidljivo");
    zavrsnaKupovina.classList.add("d-flex")
    document.getElementById("divZaKorpu").classList.remove("vidljivo")
    document.getElementById("divZaKorpu").classList.add("nevidljivo")
    document.getElementById("iksic").addEventListener("click", function(){
        zavrsnaKupovina.classList.remove("d-flex");
        zavrsnaKupovina.classList.add("nevidljivo")
        document.querySelector("#senka").classList.remove("vidljivo");
        document.querySelector("#senka").classList.remove("nevidljivo")

    })
    document.querySelector("body").classList.add("bodyBojaZbogForme");
    var dugmeZaKrajKupovine= document.getElementById("zavrsiKupovinu");
    dugmeZaKrajKupovine.setAttribute("ispravno","ne")
    dugmeZaKrajKupovine.addEventListener("click",function(){
        if(dugmeZaKrajKupovine.getAttribute("ispravno")=="da"){
            if(confirm("Da li ste sigurni")){
                alert("Hvala na kupovini!");
                zavrsnaKupovina.classList.remove("d-flex");
                zavrsnaKupovina.classList.add("nevidljivo")
                brisanjeKorpe();

            }
            dugmeZaKrajKupovine.setAttribute("ispravno","ne");
        }
    })
    dugmeZaKrajKupovine.classList.add("pozadinaDugmadi")




    var ukupnaCena=355.0;
    var nizCena= document.querySelectorAll(".spanCena");
    var nizKolicina = document.querySelectorAll(".spanKolicina")
    for(let i=0;i<nizCena.length;i++){
        ukupnaCena+=parseFloat(nizCena[i].innerHTML)*parseFloat(nizKolicina[i].innerHTML)
    }
    var bex= document.querySelector("#bex")
    var aks= document.querySelector("#aks")
    bex.addEventListener("change",function(){
        if(bex.checked) ukupnaCena+=50;
        document.getElementById("konacnaCena").innerHTML=parseFloat(ukupnaCena).toFixed(2);
    })
    aks.addEventListener("change",function(){
        if(aks.checked) ukupnaCena-=50;
        document.getElementById("konacnaCena").innerHTML=parseFloat(ukupnaCena).toFixed(2)
        })
    var hitno = document.querySelector("#hitno");
    hitno.addEventListener("change",function(){
        if(hitno.checked) ukupnaCena+=ukupnaCena*parseInt(hitno.value)/100;
        else  ukupnaCena-=ukupnaCena*9.1/100; 
        document.getElementById("konacnaCena").innerHTML=parseFloat(ukupnaCena).toFixed(2) 
        })
    
    document.getElementById("konacnaCena").innerHTML=parseFloat(ukupnaCena).toFixed(2)

}
/*popUp koji oznacava da je proizvod dodat ui korpu*/
function popUp(){
    var y= document.getElementById("obavestenjeOUnetomProizvoduUKorpu")
    y.removeAttribute("class")
    var x = setTimeout(function() {y.setAttribute("class","nevidljivo")},1000)
 
}
/*Prekontrolisanje da li su unetii podaci od strane korisnika uredu*/
function kontrolaForme(){
    var kontrolniBroji=0;
    var ime=document.querySelector("#ime"), prezime=document.querySelector("#prezime"), email=document.querySelector("#email"), vasaAdresa=document.querySelector("#vasaAdresa");
    /*Regularni izrazi */
    var reImePrezime=   /^[A-ZČĆŠĐŽ][a-zšđčćž]{2,14}$/;
    var reEmai=/^[a-zA-Z0-9.-?]{3,}[@][a-zA-Z]{2,10}[.][a-zA-Z.]{2,6}$/;
    function fokus(variabla){
        variabla.style.backgroundColor="#e3e3e3";
    }
    function blur(variabla){
        if(!reImePrezime.test(variabla.value)){
            variabla.nextElementSibling.innerHTML="Polje mora sadrzati jedno veliko slovo, min. 3 karakterai max. 15,takodje ne sme sadrzati suvisne znakove(,?.!@#)"
            variabla.nextElementSibling.style.color="red";
            variabla.style.border="3px solid #FF0000"
        
        }
        else{
            variabla.style.border="3px solid #0000FF";
            variabla.nextElementSibling.innerHTML=""  
            

        }
        variabla.style.backgroundColor="#fff"

    }
    ime.addEventListener("focus",function(){fokus(ime)});
    prezime.addEventListener("focus",function(){fokus(prezime)});
    email.addEventListener("fokus", function(){fokus(email)});
    vasaAdresa.addEventListener("focus", function(){fokus(vasaAdresa)})
    vasaAdresa.addEventListener("blur", function(){
        if(vasaAdresa.value.length>5){
        vasaAdresa.style.border="3px solid #0000FF";
        vasaAdresa.nextElementSibling.innerHTML=""  
        }
        else {
            vasaAdresa.style.border="3px solid #FF0000";
        vasaAdresa.nextElementSibling.innerHTML="Niste ispravno uneli adresu";
        vasaAdresa.nextElementSibling.style.color="red"
        }
    })


    ime.addEventListener("blur",function(){blur(ime)});
    prezime.addEventListener("blur",function(){blur(prezime)});
    email.addEventListener("blur", function(){
        if(!reEmai.test(email.value)){
            email.nextElementSibling.innerHTML="Polje mora sadrazti znak @ i polje ne sme sadrzati razmake!"
            email.nextElementSibling.style.color="red";
            email.style.border="3px solid #FF0000"
        
        }
        else{
            email.style.border="3px solid #0000FF";
            email.nextElementSibling.innerHTML=""   

        }
        email.style.backgroundColor="#fff"

    })

    var submit=document.getElementById("zavrsiKupovinu");
    submit.addEventListener("click",function(){
        if((reEmai.test(email.value))&&(reImePrezime.test(ime.value))&&(reImePrezime.test(prezime.value))&&(vasaAdresa.value.length>5)){
            document.getElementById("zavrsiKupovinu").setAttribute("ispravno","da")
        }
        else {
            document.getElementById("zavrsiKupovinu").setAttribute("ispravno","ne")
            alert("Niste ispravno uneli podatke")
        }
            
  

    })
}
kontrolaForme();

if ((url.indexOf("index.html") != -1 )||(url=="https://destilerija.000webhostapp.com/")){
    /*TAJMER */
    function odbrojavanjeZaNoviLokal(){
        const pocetnoVreme=230;
        let ukupnoVreme=pocetnoVreme*60*60;
        const tajmer = document.getElementById("vremeOtvaranja");
        var x=setInterval(odbrojavanje,1000)
        function odbrojavanje(){
            let sati=Math.floor(parseInt(ukupnoVreme)/3600)
            let minuti=Math.floor(parseInt(ukupnoVreme)%3600/60)
            let sekundi=ukupnoVreme%3600%60;
            tajmer.innerHTML=`${sati}H:${minuti}M:${sekundi}`;
            ukupnoVreme--;
            if(ukupnoVreme==0) clearInterval(x)
        }





    }
    odbrojavanjeZaNoviLokal()
}



/*Pretaga proizvoda na stranici proizvodi */
if(url.indexOf("proizvodi.html") != -1 ){
 
    function pretraga(){
        document.getElementById("tragac").addEventListener("keyup",function() {
            var kartice = $(".kartica");
            var polje, filter, p, upis;
            polje = document.getElementById('tragac');
            filter = polje.value.toUpperCase();

            for (i = 0; i < kartice.length; i++) {
                p = kartice[i].getElementsByTagName("p")[0];
                upis = p.textContent || p.innerText;
                if (upis.toUpperCase().indexOf(filter) > -1) {
                    kartice[i].style.display = "block";
                } 
                else {
                    kartice[i].style.display = "none";
                }
            }
        })
    }
    pretraga()
}
/*MOJI JQ KOD */

$(document).ready(function(){

    /*Slajder */

    var pomocnaPromenljicaZaStrelice=0
    $("#levaStrelica i").hover(

        function(){
            if(pomocnaPromenljicaZaStrelice>(-1)) $("#levaStrelica i").css({"opacity":"100%","font-size":"30px"})  
         },
         function(){
             $("#levaStrelica i").css({"opacity":"50%","font-size":"25px"})
         }
    )

    $("#desnaStrelica i").hover(

        function(){
            if(pomocnaPromenljicaZaStrelice<(1))  $("#desnaStrelica i").css({"opacity":"100%","font-size":"30px"})  
         },
         function(){
             $("#desnaStrelica i").css({"opacity":"50%","font-size":"25px"})
         }
    )
    $("#levaStrelica i").click(function(){
      
            if(pomocnaPromenljicaZaStrelice==0){
                $("#najArtikli .col-6:eq(4)").hide()
                $("#najArtikli .col-6:eq(5)").hide()
                $("#najArtikli .col-6:eq(6)").hide()
                $("#najArtikli .col-6:eq(7)").hide() 
                $("#najArtikli .col-6:eq(8)").hide()
                $("#najArtikli .col-6:eq(9)").hide()
                $("#najArtikli .col-6:eq(10)").hide()
                $("#najArtikli .col-6:eq(11)").hide()
                $("#najArtikli .col-6:eq(0)").fadeIn(1800)
                $("#najArtikli .col-6:eq(1)").fadeIn(1800)
                $("#najArtikli .col-6:eq(2)").fadeIn(1800)
                $("#najArtikli .col-6:eq(3)").fadeIn(1800) 
                pomocnaPromenljicaZaStrelice--;
            }
            else if(pomocnaPromenljicaZaStrelice==1){

                $("#najArtikli .col-6:eq(11)").hide()
                $("#najArtikli .col-6:eq(10)").hide()
                $("#najArtikli .col-6:eq(9)").hide()
                $("#najArtikli .col-6:eq(8)").hide() 
                $("#najArtikli .col-6:eq(3)").hide()
                $("#najArtikli .col-6:eq(2)").hide()
                $("#najArtikli .col-6:eq(1)").hide()
                $("#najArtikli .col-6:eq(0)").hide()
                $("#najArtikli .col-6:eq(7)").fadeIn(1800)
                $("#najArtikli .col-6:eq(6)").fadeIn(1800)
                $("#najArtikli .col-6:eq(5)").fadeIn(1800)
                $("#najArtikli .col-6:eq(4)").fadeIn(1800)
                pomocnaPromenljicaZaStrelice--;
            }
            
            
        }
    )  
    $("#desnaStrelica i").click(function(){
        
        if(pomocnaPromenljicaZaStrelice<2){
            if(pomocnaPromenljicaZaStrelice==0){

                $("#najArtikli .col-6:eq(7)").hide()
                $("#najArtikli .col-6:eq(6)").hide()
                $("#najArtikli .col-6:eq(5)").hide()
                $("#najArtikli .col-6:eq(4)").hide() 
                $("#najArtikli .col-6:eq(3)").hide()
                $("#najArtikli .col-6:eq(2)").hide()
                $("#najArtikli .col-6:eq(1)").hide()
                $("#najArtikli .col-6:eq(0)").hide() 
                $("#najArtikli .col-6:eq(11)").fadeIn(1800)
                $("#najArtikli .col-6:eq(10)").fadeIn(1800)
                $("#najArtikli .col-6:eq(9)").fadeIn(1800)
                $("#najArtikli .col-6:eq(8)").fadeIn(1800)
                pomocnaPromenljicaZaStrelice++;
            }
            else if(pomocnaPromenljicaZaStrelice==(-1)){
                $("#najArtikli .col-6:eq(11)").hide()
                $("#najArtikli .col-6:eq(10)").hide()
                $("#najArtikli .col-6:eq(9)").hide()
                $("#najArtikli .col-6:eq(8)").hide() 
                $("#najArtikli .col-6:eq(3)").hide()
                $("#najArtikli .col-6:eq(2)").hide()
                $("#najArtikli .col-6:eq(1)").hide()
                $("#najArtikli .col-6:eq(0)").hide()
                $("#najArtikli .col-6:eq(7)").fadeIn(1800)
                $("#najArtikli .col-6:eq(6)").fadeIn(1800)
                $("#najArtikli .col-6:eq(5)").fadeIn(1800)
                $("#najArtikli .col-6:eq(4)").fadeIn(1800) 
                pomocnaPromenljicaZaStrelice++;
            }
           // pomocnaPromenljicaZaStrelice++;
            
        }   
    })

    /*TOGGLE EFEKAT ZA HAMBURGER MENI */
    $("#hamburger").click(function(){
        $("#meniZaManjeRezolucije").toggle("slow");
    })

  //  var oNama=$(".oNama")
    //var padajuciMeni =$(".padajuciMeni")
    $("#oNama").click(function(){
        $("#padajuciMeni").toggle()
  

    })
    $("#oNama1").click(function(){
        $("#padajuciMeni1").toggle()
  

    })




    /*SKROL EFEKAT ZA STRELICU KOJA VRACA NA VRH STRANICE*/
    function scrollToTopBtn() {
        // BACK TO TOP BUTTON
        const backToTopButton = document.getElementById("skrol")
        function scrollBack () {window.scrollTo(0, 0)}
    
        backToTopButton.addEventListener('click', scrollBack)
    
        function prikaz () {
            if(window.pageYOffset > 300) {
                backToTopButton.style.display="block"
            } 
            else {
                backToTopButton.style.display="none"
            }
        }
    
        window.addEventListener('scroll', prikaz)

    }
    scrollToTopBtn()



    /*SKROL EFEKAT ZA BROJANJE GODINA */
    if((url.indexOf("index.html") != -1 )||(url=="https://destilerija.000webhostapp.com/"))$("#drugiDeo").scroll(brojanje());
    /*STRANICA PROIZVODI*/ 










/*Filtriranje svih proizvoda */
function filtriranje(){

    
    var vrstePica=["viski","rum","vino","rakija"]
    var kartice = $(".kartica");
    var filtriraneKartice=[];
    let daLiJeVecFiltrirano=0;
    for(let k=0;k<vrstePica.length;k++){
            $("#"+vrstePica[k]).click(function(){
                document.getElementById("skalar").value="20000"
                daLiJeVecFiltrirano++;
                for(let i=0;i<vrstePica.length;i++)$("#"+vrstePica[i]).css("border-bottom","none");
                $("#sveKategorije").css("border-bottom","none");
                $("#"+vrstePica[k]).css("border-bottom","1px solid black");
                filtriraneKartice=[];
                for(let i=0;i<kartice.length;i++){
                    if(!(kartice[i].getAttribute("kategorija")==vrstePica[k])){
                        kartice[i].style.display="none";
                    
                    }
                    else{
                        kartice[i].style.display="block";
                    }
                    
                }
                let p=0;
                for(let i=0;i<kartice.length;i++){
                    if(kartice[i].getAttribute("kategorija")==vrstePica[k]){
                        filtriraneKartice[p++]=kartice[i];
                    }
                }


            })
        }
    
    $("#sveKategorije").click(function(){
        document.getElementById("skalar").value="20000"
                filtriraneKartice=kartice;
                for(let i=0;i<kartice.length;i++){
                    
                        kartice[i].style.display="block";
                    
                }
                let p=0;
                for(let i=0;i<kartice.length;i++){

                        filtriraneKartice[p++]=kartice[i];

                }
                for(let i=0;i<vrstePica.length;i++)$("#"+vrstePica[i]).css("border-bottom","none");
                $("#sveKategorije").css("border-bottom","1px solid black")
                
    
    
            })
    $("#skalar").change(function(){

       var x= document.getElementById("skalar")
        if(!daLiJeVecFiltrirano) filtriraneKartice=kartice;

       for(let i=0;i<filtriraneKartice.length;i++){  
        console.log(parseInt(filtriraneKartice[i].getAttribute("cena")))  
                if(parseInt(filtriraneKartice[i].getAttribute("cena")) > x.value){
                   console.log(filtriraneKartice[i])
                    filtriraneKartice[i].style.display="none";
                
                }
                else{   
                    filtriraneKartice[i].style.display="block";
                }    
        }
        $("#merac2").html("<p> DO:"+x.value+"</p>")  
    })
}

filtriranje()


    /*Stranica o Nama */
    $("#kakoSmoNastaliDugme").click(function(){
        $("#kakoSmoNastali").toggle("slow");
    })
    if((url.indexOf("index.html") != -1 )||(url=="https://destilerija.000webhostapp.com/")){
    /*JQuery plug-in */
    var ooo = 0; 			// Start Point
    var images = [];	// Images Array
    var time = 2000;	// Time Between Switch
        
    // Image List
    images[0] = "assets/img/baner4.jpg";
    images[1] = "assets/img/baner1.jpg";
    images[2] = "assets/img/baner2.jpg";
    images[3] = "assets/img/baner3.jpg";
    images[3] = "assets/img/baner4.jpg";

    // Change Image
    function changeImg(){
        document.slide.src = images[ooo];

        // Check If Index Is Under Max
        if(ooo < images.length - 1){
        // Add 1 to Index
        ooo++; 
        } else { 
            // Reset Back To O
            ooo = 0;
        }

        // Run function every x seconds
        setTimeout(function(){changeImg()}, time);
    }

    // Run function when page loads
    window.onload=changeImg;
    }



})

