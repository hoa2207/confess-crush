<!DOCTYPE html>
<html>
<meta charset='UTF-8'/><meta content='width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5' name='viewport'/><meta content='IE=edge' http-equiv='X-UA-Compatible'/>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Shippori+Antique:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js"></script><link href="https://feeldreams.github.io/heibuka/style.css" rel="stylesheet" type="text/css" />
  <script src="https://unpkg.com/typeit@8.7.0/dist/index.umd.js"></script>
  
<head>
<title>Mylove</title>
<link rel="icon" type="image/x-icon" href="https://i.imgur.com/SgYOQNB.png">
<meta name="description" content="HTML Replit Coding">
</head>
<body>
	
  <!--Thay nhạc -->
   <audio src="https://thhlam77.github.io/music/nhac.mp3" id="linkmp3" class="sembunyi"></audio>
   <!--Thay nền (nếu muốn) -->
   <div id="bodyblur">
     <!-- Wallpaper --><img src="https://i.pinimg.com/736x/53/4a/ca/534aca075a4dc2f7586c57497c50f896.jpg" id="wallpaper"/><div id="beneranblur"></div>
   </div>
   
   <div id='Content'>

     <div id="kadoIn">
       <!-- Tombol Surat --><img src="https://feeldreams.github.io/kadoin.png"/>
     </div>
     <p id="ket">Mở quà đii bé iuu :3</p>

     <div class="kumpulanstiker">
         <!-- Stiker untuk Konten -->
         <img src="https://feeldreams.github.io/peach6.gif" id="fotostiker"/>
         <img src="https://feeldreams.github.io/bunga.gif" id="fotostiker1"/>
         <img src="https://feeldreams.github.io/pandacoklat.gif" id="fotostiker2"/>
         <img src="https://feeldreams.github.io/gumush.gif" id="fotostiker3"/>
         <img src="https://feeldreams.github.io/emawh.gif" id="fotostiker4"/>
         
         <img src="https://feeldreams.github.io/pandacoklat.gif" id="fotostiker5"/>
     </div>
     
     <p id="halo" class="halo"></p>
     
     <div><blockquote id='bq' data-text='💞'>
       <p id="kalimat">Hôm nay anh ở đây muốn nói với em một điều nhỏ nhoyy hoyy 👉👈</p>

       <!-- Pesan -->
       <p id="pesan1">Chạm đủ 4 love nhoo  ❤️</p>
       <div id="kolombaru">
         <li id="lv1"> ❤️</li>
         <li id="lv2"> ❤️</li>
         <li id="lv3"> ❤️</li>
         <li id="lv4"> ❤️</li>
       </div>

       <p id="pesan2">Tuỵt zờiiiii! 💘</p>
       <p id="pesan3">Anh muốn nóiii với em là là là.....</p>
       <p id="pesan4" class="sty2">Anh iuu emmm nhìu lắmmm lắm nhunnn</p>
       <p id="pesan5" class="sty2">hong biết aiii đó có nhớ anhhh khonnggg hàaaaa</p>
       <p id="pesan6" class="sty2">Còn anhh trong đầuuu bây giờ chỉ có hình póngg dáng em thoaii🤧</p>

       <!-- Tombol Lanjut -->
       <p id="opsL">Bấm vào màn hình đi nàaaaa bbii</p>
     </blockquote></div>

     <!-- Tombol Kirim Pesan -->
     <div id="Tombol"><a id="By">&#128140; Click</a></div>
     
     <!-- Pesan Ditolak -->
     <div id="pesanditolak">
       <img id="stikerditolak" src="https://feeldreams.github.io/weee.gif"/>
       <p id="kataditolak">Bộ em thích từ chối lắm hả ? Nhưng mà em bị lừa rồiii cục cưng 😆</p>
     </div>

   </div>

<script>
  const body = document.querySelector("body");const swalst = Swal.mixin({timer: 2300, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 90,}); audio = new Audio('' + linkmp3.src); ftganti=0;fungsi=0;fungsiAwal=0;deffotostiker=fotostiker.src;Content.style = "opacity:1;margin-top:16vh"; const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageHeight: 80,}); 

  document.getElementById("kadoIn").onclick = function() {if(fungsiAwal==0){audio.play();fungsiAwal=1;kadoIn.style="transition:all .8s ease;transform:scale(10);opacity:0";wallpaper.style="transform: scale(1.5);";ket.style="display:none";setTimeout(initengahan,300);setTimeout(inipesan,500)}}
  
  async function inipesan(){
    var { value: nama } = await swals.fire({
           title: 'Tên của bé iuu là gì?', input: 'text',
       });
       if(nama && nama.length < 11){
         window.nama = nama;
         vketikhalo="Hai, " + nama + " 💑";
         mulainama();
         } else {
           await swals.fire('Bộ em hong có tên hả!', 'Tên của người đẹp chỉ chứa 10 ký tự hoii nhaaa, ya!');inipesan();
    }
  }

  
  var tanya = 'có rảnh hongg nói chuyện với anh chút nhéee 😳';
  var opstanya = 'Lựa chọn của em là......';
  var tompositif = 'Em đồng ý';
  var tomnegatif = 'Em hong chịu';
  
  async function pertanyaan(){var { isConfirmed: prtanya } = await swals.fire({title: nama + ' ' + tanya, text: '' + opstanya, imageUrl: '' + fotostiker5.src, showCancelButton: true, confirmButtonText: '' + tompositif, cancelButtonText: '' + tomnegatif,});
    if(prtanya){
	pesanwhatsapp = "Iyaa " + nama + " kangen kamu juga kok! ><";
	menuju();
    } else {
	pesanwhatsapp = nama + " engga kangen kamu wleee! :p";
	await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
	menuju();
    }
    }
</script>
<script src="a.js"></script>

</body>
</html>
