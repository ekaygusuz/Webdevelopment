const express=require("express");
const app= express();
app.set("view engine","ejs");
app.use(express.static(__dirname + "/dosyalar"));

var ucTaneKitap = [
  {kitapismi : "Sefiller" ,
   fiyat: 20 ,
   index : 0,
   yazar:"Victor Hugo",
   resimlinki:"/resimler/sefiller.jpg",
   yayinevi:"DnR",
   aciklama:"İlk olarak 1862'de yayınlandı. 19. yüzyılın en büyük eserlerinden biri olarak kabul gördü. Hikâye 1815'te başlar ve 1832'deki Paris Haziran Ayaklanması'nda son bulur. Birkaç karakterin yaşamını ve birbirleriyle alakasını ele alan roman daha çok eski mahkûm Jean Valjean'ın yaşam mücadelesi ve kefaretini ödemeye çalışmasına odaklanır.Yasa ve merhametin doğasının incelendiği roman ayrıca Fransa tarihi, Paris'in mimarisi ve kentsel tasarımı, siyaset, ahlak felsefesi, antimonarşizm, adalet, din, ailevi ve romantik sevginin türleri ve doğası gibi konuları özenle ele alır"
 },
  {kitapismi : "Suç ve Ceza" ,
   fiyat: 50,
   index : 1,
   yazar:"Victor Hugo",
   resimlinki:"/resimler/sucveceza.jpg",
   yayinevi:"Papatya",
   aciklama:"ceza adlı dev romanının önnıyan bir eserdir."
 },
  {kitapismi : "Tehlikeli Oyunlar" ,
   fiyat: 30,
   index: 2
 }
];
app.get("/" , function(req , res){
    res.render("anasayfa" , { kitaplar : ucTaneKitap } );
});

app.get("/kitap/:isim/:index", function(req, res){
    var indexDegeri=req.params.index;
    var kitapIsmi= ucTaneKitap[indexDegeri].kitapismi;
    var kitapFiyati=ucTaneKitap[indexDegeri].fiyat;
    var kitapYayinEvi=ucTaneKitap[indexDegeri].yayinevi;
    var kitapResim=ucTaneKitap[indexDegeri].resimlinki;
    var kitapAciklama=ucTaneKitap[indexDegeri].aciklama;
    var kitapYazar=ucTaneKitap[indexDegeri].yazar;


    res.render("kitap",{yayinevi:kitapYayinEvi,
      resim:kitapResim,
      aciklama:kitapAciklama,
      yazar:kitapYazar,
      isim:kitapIsmi,
      fiyat:kitapFiyati,
      kitaplar:ucTaneKitap});
});


app.listen(8000);
