## 1- Kod temel prompt (*Gemini 1.5 Pro*):
Bana HTML5 ve CSS3 ile web sitesi oluştur ve gereksiz açıklamalar yapma. Direkt sonuca varalım. Beni anladıysan cevabın başında "ANLADIM" yazman yeterli olacaktır:

Web sitesinin özellikleri arasında responsive ve semantik etiketler dediğimiz (header, main, nav, section, article, aside, footer) kullanılması gerek.
Site Galeri tarzında 4 bölümden oluşacak şekilde olmalı.
Birinci bölümde üst tarafta ortada enine tam olmayan ve alt köşeleri radius almış butonlar genişliğinde, bağlantıları sayfa aşağısında olan yerine atan ve sayfa aşağı kaydırıldığında üst tarafta gözüken navigasyon menüsü,
ikinci bölümde ilk site açıldığında sağda profil resmim ve sol tarafında hakkımda kısa bilginin içerdiği ve bu bilginin son kısmında ise devamına ulaşabilecek bir buton olan,
üçüncü bölüm olarak aşağı inildiği zaman projelerimin galeri şeklinde isimlerinin ve ufak açıklamalarının olduğu aralarında boşluk olan kutular,
dördüncü bölüm olarak sosyal medya logolarının yanında kullanıcı adlarının yazılı olduğu ve her sitede olan footer bilgileri olmalı.
Reset css kullan.
Logolar için biri şeyler ayarla.
Javascript gerekiyorsa kullan.
Dosyalar ayrı ayrı olacak. 
Fotoğraflara bağlantı verme. onun yerine "###" işareti bırak ve fotoğraf boyutu için bir piksellerini girerek kare kırmızı kutu yap.
Fotoğraflar, linkler ve diğer gerekli açıklamaları kodlardan sonra "ÖNEMLİ" başlığı altında madde madde açıkla.
Kod düzeni ve gerekli yerlere kod içinde yorum satırı olarak açıklamalar yap.
<hr>

## 2- Proje içeriği için prompt (*Chat GPT 3.5*):
Bana basitten zora doğru örnek projeler ver ve altta yazdığım section etiketleri arasında proje divleri olarak yaz 15 tane yazman yeterli olacaktır:

 ```<section id="projeler">
        <h2>Projeler</h2>
        <div class="galeri">
            <div class="proje">
                <div class="foto">###</div> <!-- Proje fotoğrafı -->
                <h3>Proje Adı</h3>
                <p>Proje hakkında kısa açıklama...</p>
            </div>
            <!-- Diğer proje kutularını buraya ekleyin -->
        </div>
    </section>
```
<hr>

## 3- Fotoğraflar için etiketler el ile düzenlendi ve resimlerin bir kısmı oluşturuldu. (*Microsoft Copilot*):
Az sonra vereceğim kod üzerinde olan proje 1 proje 2 diye yazan kısımda olan proje bilgileri için ben hangi projenin numarasını yazdıysam bir açıklama yapmadan o proje ile alakalı bir fotoğraf oluşturmanı istiyorum. Fotoğraflar yaratıcı olsun.

```
<div class="proje">
    <div class="foto"><img src="proje1.jpg" alt="Proje 1 Fotoğrafı"></div>
        <h3>Web Sitesi Tasarımı</h3>
        <p>Basit bir web sitesi tasarımı örneği.</p>
    </div>
    <div class="proje">
        <div class="foto"><img src="proje2.jpg" alt="Proje 2 Fotoğrafı"></div>
        <h3>Blog Oluşturma</h3>
        <p>Bir blog platformunda yeni bir blog oluşturma.</p>
    </div>
    <div class="proje">
        <div class="foto"><img src="proje3.jpg" alt="Proje 3 Fotoğrafı"></div>
        <h3>Hava Durumu Uygulaması</h3>
        <p>Basit bir hava durumu uygulaması yapma.</p>
    </div>
    <div class="proje">
        <div class="foto"><img src="proje4.jpg" alt="Proje 4 Fotoğrafı"></div>
        <h3>Todo List Uygulaması</h3>
        <p>Kullanıcıların yapılacaklar listesi oluşturabileceği bir uygulama.</p>
    </div>
    <div class="proje">
        <div class="foto"><img src="proje5.jpg" alt="Proje 5 Fotoğrafı"></div>
        <h3>E-Ticaret Sitesi Tasarımı</h3>
        <p>Basit bir e-ticaret sitesi tasarımı.</p>
    </div>
    <div class="proje">
        <div class="foto"><img src="proje6.jpg" alt="Proje 6 Fotoğrafı"></div>
        <h3>Giriş Sayfası Tasarımı</h3>
        <p>Bir web sitesi için basit bir giriş sayfası tasarımı.</p>
    </div>
```
Eğer anlaşıldıysa sadece ANLADIM yazman yeterli olacaktır.

<hr>

## 4- Profil resmi oluşturuldu (*Microsoft Copilot*):
Bana yaşı 24 olan, Türkiye'de yaşayan ve yaşam tarzının ortanın üstünde olan, saçları kısa uzunlukta olan ve modern giyinimli bir müslüman gencin bir tepeden denizi gören ve arkasında denizle kesişen bir vadinin olduğu bir resim çiz.

<hr>

## Profil resminin kutuya düzgün sığması için bir prompt (*Gemini 1.5 Pro*):
profil resminin yuvarlak kutuya girmesi için büyük fotoğrafın belirli bir kısmını küçülterek nasıl ekleyebilirim?

<hr>

## 6- Resimlerde olan problem için prompt yazıldı (*Gemini 1.5 Pro*)
peki proje resimlerini nasıl kutuya sürekli sığdırabilirim? Bir ölçek verdiğim zaman pencere boyutu değiştiği zaman farklı boyut alıyor

<hr>

## 7- Proje fotoğrafları için fotoğrafların üzerine tıklandığında büyükmek için bir prompt denendi fakat olmadı (*Gemini 1.5 Pro*):
Proje resimlerine tıkladığım zaman ekranda resmi büyütmek istiyorum ve kenarda olan boşluğa tıkladığım zaman veya sağ üstte kapatmama butonuna tıklandığım zaman normal görünüme geçmesini istiyorum. Bunu yapar mısın*