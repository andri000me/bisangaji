(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{L6id:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class t{}var i=u("pMnS"),b=["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}.bullet.button[_ngcontent-%COMP%]{padding:15px;height:70px;width:70px;border:1px solid #fff;border-radius:100%;text-align:center;margin:auto}ion-icon[_ngcontent-%COMP%]{font-size:2.5rem;text-align:center;color:#ddd;font-weight:600;width:30px;margin:auto}.border-radius[_ngcontent-%COMP%]{border-radius:10px;background-image:url(masjid.78f73a18c067d2d1c6ae.jpg);background-size:cover;padding:20px 0}.border-radius2[_ngcontent-%COMP%]{border-radius:10px}.jam[_ngcontent-%COMP%]{font-size:2rem;font-weight:600;display:inline-block}.description-subtitle[_ngcontent-%COMP%]{font-weight:300;font-size:1.5rem}.title[_ngcontent-%COMP%], ion-col.md.hydrated[_ngcontent-%COMP%]{text-align:center}.quran[_ngcontent-%COMP%]{background:#ec6607;border:1px solid #ec6607!important;-webkit-columns:#000!important;-moz-columns:#000!important;columns:#000!important}.ayongaji[_ngcontent-%COMP%]{background:#4fc6db;border:1px solid #4fc6db!important;-webkit-columns:#000!important;-moz-columns:#000!important;columns:#000!important}.waktu-sholat[_ngcontent-%COMP%]{background:#e73968;border:1px solid #e73968!important;-webkit-columns:#000!important;-moz-columns:#000!important;columns:#000!important}.arah-kiblat[_ngcontent-%COMP%], .dzikir[_ngcontent-%COMP%]{background:#656565;border:1px solid #656565!important;-webkit-columns:#000!important;-moz-columns:#000!important;columns:#000!important}.doa[_ngcontent-%COMP%]{background:#e73968;border:1px solid #e73968!important;-webkit-columns:#000!important;-moz-columns:#000!important;columns:#000!important}.hadist[_ngcontent-%COMP%]{background:#ec6607;border:1px solid #ec6607!important;-webkit-columns:#000!important;-moz-columns:#000!important;columns:#000!important}.lainnya[_ngcontent-%COMP%]{background:#4fc6db;border:1px solid #4fc6db!important;-webkit-columns:#000!important;-moz-columns:#000!important;columns:#000!important}.text-left[_ngcontent-%COMP%]{text-align:left;display:block}.text-right[_ngcontent-%COMP%]{text-align:right}.text-3rem[_ngcontent-%COMP%]{font-size:2rem}ion-card[_ngcontent-%COMP%]:hover{background:#333;-webkit-transition:.6s;transition:ease all .6s}"],e=u("MKJQ"),a=u("sZkV"),r=u("s7LF"),c=u("SVse"),s=u("yTNM"),h=u("IheW");class k{constructor(l,n){this.http=l,this.route=n,this.loading="1"}ngOnInit(){setInterval(()=>{this.http.worldDate().subscribe(l=>{this.loading="0";let n=l.abbreviation,u=l.day_of_week,o="";o="1"==u?"Senin":"2"==u?"Selasa":"3"==u?"Rabu":"4"==u?"Kamis":"5"==u?"Jum-at":"6"==u?"Sabtu":"7"==u?"Minggu":"Uhuy";let t=l.timezone.split("/");console.log(t);let i=l.datetime.split("T");console.log(i);let b=i[0].substr(0,4),e=i[0].substr(5,2),a=i[0].substr(8,2),r="";"01"==e?r="Januari":"02"==e?r="Februari":"03"==e?r="Maret":"04"==e?r="April":"05"==e?r="Mei":"06"==e?r="Juni":"07"==e?r="Juli":"08"==e?r="Agustus":"09"==e?r="September":"10"==e?r="Oktober":"11"==e?r="November":"12"==e&&(r="Desember"),this.hari=o,this.jam=i[1].substr(0,5),this.waktu_bagian=n,this.tanggal=a+" "+r+" "+b},l=>{console.log(l)})},1e4)}quran(){this.route.navigate(["/tabs-nav/home/quran"])}jadwal_sholat(){this.route.navigate(["/tabs-nav/home/sholat"])}lainnya(){}arah_kiblat(){}dzikir(){}doa_harian(){}}var d=u("iInd"),m=o.mb({encapsulation:0,styles:[b],data:{}});function x(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,4,"ion-content",[],null,null,null,e.H,e.j)),o.nb(1,49152,null,0,a.s,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.ob(2,0,null,0,1,"ion-progress-bar",[["type","indeterminate"]],null,null,null,e.L,e.n)),o.nb(3,49152,null,0,a.U,[o.h,o.k,o.x],{type:[0,"type"]},null),(l()(),o.Db(-1,0,[" Loading page ... mohon tunggu sebentar ya :)\n"]))],(function(l,n){l(n,1,0,!0),l(n,3,0,"indeterminate")}),null)}function g(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,104,"ion-content",[],null,null,null,e.H,e.j)),o.nb(1,49152,null,0,a.s,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.ob(2,0,null,0,31,"ion-card",[["class","border-radius"]],null,null,null,e.F,e.d)),o.nb(3,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,29,"ion-row",[],null,null,null,e.M,e.o)),o.nb(5,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(6,0,null,0,27,"ion-col",[],null,null,null,e.G,e.i)),o.nb(7,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(8,0,null,0,22,"ion-row",[],null,null,null,e.M,e.o)),o.nb(9,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(10,0,null,0,10,"ion-col",[],null,null,null,e.G,e.i)),o.nb(11,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(12,0,null,0,8,"ion-card-header",[],null,null,null,e.C,e.f)),o.nb(13,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(14,0,null,0,2,"ion-card-subtitle",[["class","description-subtitle"]],null,null,null,e.D,e.g)),o.nb(15,49152,null,0,a.n,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,["Waktu Saat Ini"])),(l()(),o.ob(17,0,null,0,2,"ion-card-title",[["class","jam"]],null,null,null,e.E,e.h)),o.nb(18,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.Db(19,0,["",""])),(l()(),o.Db(20,0,[" "," "])),(l()(),o.ob(21,0,null,0,9,"ion-col",[["style","text-align: right;"]],null,null,null,e.G,e.i)),o.nb(22,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(23,0,null,0,7,"ion-card-header",[],null,null,null,e.C,e.f)),o.nb(24,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(25,0,null,0,2,"ion-card-subtitle",[["class","description-subtitle"]],null,null,null,e.D,e.g)),o.nb(26,49152,null,0,a.n,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,["Waktu Dhuhur"])),(l()(),o.ob(28,0,null,0,2,"ion-card-title",[["class","jam"]],null,null,null,e.E,e.h)),o.nb(29,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,["11:58"])),(l()(),o.ob(31,0,null,0,2,"ion-card-content",[["style","text-align: center;"]],null,null,null,e.B,e.e)),o.nb(32,49152,null,0,a.l,[o.h,o.k,o.x],null,null),(l()(),o.Db(33,0,[" ",", "," "])),(l()(),o.ob(34,0,null,0,3,"ion-card",[],null,null,null,e.F,e.d)),o.nb(35,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(36,0,null,0,1,"ion-card-subtitle",[],null,null,null,e.D,e.g)),o.nb(37,49152,null,0,a.n,[o.h,o.k,o.x],null,null),(l()(),o.ob(38,0,null,0,63,"ion-card",[],null,null,null,e.F,e.d)),o.nb(39,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(40,0,null,0,61,"ion-card-content",[],null,null,null,e.B,e.e)),o.nb(41,49152,null,0,a.l,[o.h,o.k,o.x],null,null),(l()(),o.ob(42,0,null,0,29,"ion-row",[],null,null,null,e.M,e.o)),o.nb(43,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(44,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(45,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(46,0,null,0,2,"button",[["class","bullet button ayongaji"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.quran()&&o),o}),null,null)),(l()(),o.ob(47,0,null,null,1,"ion-icon",[["name","chatbubbles"]],null,null,null,e.J,e.l)),o.nb(48,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(49,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),o.Db(-1,null,[" AyoNgaji "])),(l()(),o.ob(51,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(52,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(53,0,null,0,2,"button",[["class","bullet button quran"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.quran()&&o),o}),null,null)),(l()(),o.ob(54,0,null,null,1,"ion-icon",[["name","book"]],null,null,null,e.J,e.l)),o.nb(55,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(56,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),o.Db(-1,null,[" Al-Qur'an "])),(l()(),o.ob(58,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(59,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(60,0,null,0,2,"button",[["class","bullet button waktu-sholat"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.jadwal_sholat()&&o),o}),null,null)),(l()(),o.ob(61,0,null,null,1,"ion-icon",[["name","timer"]],null,null,null,e.J,e.l)),o.nb(62,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(63,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),o.Db(-1,null,[" Waktu Sholat "])),(l()(),o.ob(65,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(66,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(67,0,null,0,2,"button",[["class","bullet button arah-kiblat"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.arah_kiblat()&&o),o}),null,null)),(l()(),o.ob(68,0,null,null,1,"ion-icon",[["name","compass"]],null,null,null,e.J,e.l)),o.nb(69,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(70,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),o.Db(-1,null,[" Arah Kiblat "])),(l()(),o.ob(72,0,null,0,29,"ion-row",[],null,null,null,e.M,e.o)),o.nb(73,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(74,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(75,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(76,0,null,0,2,"button",[["class","bullet button dzikir"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.dzikir()&&o),o}),null,null)),(l()(),o.ob(77,0,null,null,1,"ion-icon",[["name","hand-left"]],null,null,null,e.J,e.l)),o.nb(78,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(79,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),o.Db(-1,null,[" Dzikir "])),(l()(),o.ob(81,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(82,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(83,0,null,0,2,"button",[["class","bullet button doa"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doa_harian()&&o),o}),null,null)),(l()(),o.ob(84,0,null,null,1,"ion-icon",[["name","cloudy-night"]],null,null,null,e.J,e.l)),o.nb(85,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(86,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),o.Db(-1,null,[" Do'a Harian "])),(l()(),o.ob(88,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(89,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(90,0,null,0,2,"button",[["class","bullet button hadist"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.jadwal_sholat()&&o),o}),null,null)),(l()(),o.ob(91,0,null,null,1,"ion-icon",[["name","qr-code"]],null,null,null,e.J,e.l)),o.nb(92,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(93,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),o.Db(-1,null,[" Hadist "])),(l()(),o.ob(95,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(96,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(97,0,null,0,2,"button",[["class","bullet button lainnya"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.lainnya()&&o),o}),null,null)),(l()(),o.ob(98,0,null,null,1,"ion-icon",[["name","grid"]],null,null,null,e.J,e.l)),o.nb(99,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(100,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),o.Db(-1,null,[" Lainnya "])),(l()(),o.ob(102,0,null,0,2,"ion-card",[],null,null,null,e.F,e.d)),o.nb(103,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(104,0,null,0,0,"img",[["src","./../../assets/kajian.png"]],null,null,null,null,null))],(function(l,n){l(n,1,0,!0),l(n,48,0,"chatbubbles"),l(n,55,0,"book"),l(n,62,0,"timer"),l(n,69,0,"compass"),l(n,78,0,"hand-left"),l(n,85,0,"cloudy-night"),l(n,92,0,"qr-code"),l(n,99,0,"grid")}),(function(l,n){var u=n.component;l(n,19,0,u.jam),l(n,20,0,u.waktu_bagian),l(n,33,0,u.hari,u.tanggal)}))}function p(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,5,"ion-header",[],null,null,null,e.I,e.k)),o.nb(1,49152,null,0,a.z,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.ob(2,0,null,0,3,"ion-searchbar",[],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==o.zb(l,5)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.zb(l,5)._handleInputEvent(u.target)&&t),t}),e.N,e.p)),o.Ab(5120,null,r.b,(function(l){return[l]}),[a.Gb]),o.nb(4,49152,null,0,a.fb,[o.h,o.k,o.x],null,null),o.nb(5,16384,null,0,a.Gb,[o.k],null,null),(l()(),o.db(16777216,null,null,1,null,x)),o.nb(7,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(l()(),o.db(16777216,null,null,1,null,g)),o.nb(9,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,7,0,"1"==u.loading),l(n,9,0,"0"==u.loading)}),null)}function f(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,2,"app-home",[],null,null,null,p,m)),o.Ab(512,null,s.a,s.a,[h.c]),o.nb(2,114688,null,0,k,[s.a,d.m],null,null)],(function(l,n){l(n,2,0)}),null)}var v=o.kb("app-home",k,f,{},{},[]);class z{constructor(l){this.http=l,this.segment="Surat",this.kondition="1"}ngOnInit(){"Surat"==this.segment?this.http.alquranSurah().subscribe(l=>{this.surat=l},l=>{console.log(l)}):"Juz"==this.segment?this.http.alquranJuz().subscribe(l=>{this.juz=l,console.log(this.juz)},l=>{console.log(l)}):this.bookmark="Mohon maaf fitur ini masih dalam pengembangan"}segmentChanged(l){this.segment=l.detail.value,"Surat"==this.segment?this.http.alquranSurah().subscribe(l=>{this.surat=l},l=>{console.log(l)}):"Juz"==this.segment?this.http.alquranJuz().subscribe(l=>{this.juz=l},l=>{console.log(l)}):this.bookmark="Mohon maaf fitur ini masih dalam pengembangan"}quran_surah(l){this.kondition="2",this.http.alquranDetail2(l).subscribe(n=>{console.log(n),this.surat_detail=n[l]},l=>{console.log(l)})}}var y=o.mb({encapsulation:0,styles:[b],data:{}});function D(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,6,"ion-header",[],null,null,null,e.I,e.k)),o.nb(1,49152,null,0,a.z,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,e.V,e.x)),o.nb(3,49152,null,0,a.xb,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,2,"ion-title",[["size","large"]],null,null,null,e.U,e.w)),o.nb(5,49152,null,0,a.vb,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Db(-1,0,["Al Qur'an"]))],(function(l,n){l(n,5,0,"large")}),null)}function M(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,11,"ion-header",[],null,null,null,e.I,e.k)),o.nb(1,49152,null,0,a.z,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,9,"ion-toolbar",[],null,null,null,e.V,e.x)),o.nb(3,49152,null,0,a.xb,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,e.A,e.c)),o.nb(5,49152,null,0,a.j,[o.h,o.k,o.x],null,null),(l()(),o.ob(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,8).onClick(u)&&t),t}),e.z,e.b)),o.nb(7,49152,null,0,a.e,[o.h,o.k,o.x],null,null),o.nb(8,16384,null,0,a.f,[[2,a.db],a.Cb],null,null),(l()(),o.ob(9,0,null,0,2,"ion-title",[["size","large"]],null,null,null,e.U,e.w)),o.nb(10,49152,null,0,a.vb,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Db(11,0,[""," - "," "]))],(function(l,n){l(n,10,0,"large")}),(function(l,n){var u=n.component;l(n,11,0,u.surat_detail.name_latin,u.surat_detail.name)}))}function _(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,6,"ion-card",[],null,null,null,e.F,e.d)),o.nb(1,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,4,"ion-card-content",[],null,null,null,e.B,e.e)),o.nb(3,49152,null,0,a.l,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,2,"ion-card-title",[],null,null,null,e.E,e.h)),o.nb(5,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.Db(6,0,[" "," "]))],null,(function(l,n){l(n,6,0,n.context.$implicit.i+1)}))}function w(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,3,"ion-content",[],null,null,null,e.H,e.j)),o.nb(1,49152,null,0,a.s,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.db(16777216,null,0,1,null,_)),o.nb(3,278528,null,0,c.h,[o.L,o.I,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,3,0,u.surat_detail.text)}),null)}function C(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,17,"ion-card",[["class","border-radius2"]],null,null,null,e.F,e.d)),o.nb(1,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,15,"ion-card-content",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.quran_surah(l.context.index+1)&&o),o}),e.B,e.e)),o.nb(3,49152,null,0,a.l,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,3,"ion-card-title",[["class","text-left"]],null,null,null,e.E,e.h)),o.nb(5,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(6,0,null,0,1,"span",[["class","text-left"]],null,null,null,null,null)),(l()(),o.Db(7,null,["",""])),(l()(),o.ob(8,0,null,0,3,"ion-card-title",[["class","text-right"]],null,null,null,e.E,e.h)),o.nb(9,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(10,0,null,0,1,"span",[["class","text-3rem text-right"]],null,null,null,null,null)),(l()(),o.Db(11,null,["",""])),(l()(),o.ob(12,0,null,0,5,"div",[["class","text-left"]],null,null,null,null,null)),(l()(),o.ob(13,0,null,null,1,"span",[["class","text-left"]],null,null,null,null,null)),(l()(),o.Db(14,null,["Surat Ke: "," [ "," ]"])),(l()(),o.Db(15,null,[" "," | ",""])),(l()(),o.ob(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.Db(17,null,[" Jumlah Ayat: "," "]))],null,(function(l,n){l(n,7,0,n.context.$implicit.title),l(n,11,0,n.context.$implicit.titleAr),l(n,14,0,n.context.index+1,n.context.$implicit.title),l(n,15,0,n.context.$implicit.place,n.context.$implicit.type),l(n,17,0,n.context.$implicit.count)}))}function E(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,5,"ion-row",[],null,null,null,e.M,e.o)),o.nb(1,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,3,"ion-col",[],null,null,null,e.G,e.i)),o.nb(3,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.db(16777216,null,0,1,null,C)),o.nb(5,278528,null,0,c.h,[o.L,o.I,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.surat)}),null)}function I(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,11,"ion-card",[],null,null,null,e.F,e.d)),o.nb(1,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,9,"ion-card-content",[],null,null,null,e.B,e.e)),o.nb(3,49152,null,0,a.l,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,4,"ion-card-title",[],null,null,null,e.E,e.h)),o.nb(5,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(6,0,null,0,2,"ion-label",[["class","text-left"]],null,null,null,e.K,e.m)),o.nb(7,49152,null,0,a.L,[o.h,o.k,o.x],null,null),(l()(),o.Db(8,0,[" Juz: ",""])),(l()(),o.ob(9,0,null,0,2,"ion-label",[["class","text-left"]],null,null,null,e.K,e.m)),o.nb(10,49152,null,0,a.L,[o.h,o.k,o.x],null,null),(l()(),o.Db(11,0,[""," (",") - "," (",")"]))],null,(function(l,n){l(n,8,0,n.context.$implicit.index);var u=n.context.$implicit.start.name,o=null==n.context.$implicit.start.verse?null:n.context.$implicit.start.verse.substr(6,4),t=n.context.$implicit.end.name,i=null==n.context.$implicit.end.verse?null:n.context.$implicit.end.verse.substr(6,4);l(n,11,0,u,o,t,i)}))}function O(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,5,"ion-row",[],null,null,null,e.M,e.o)),o.nb(1,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,3,"ion-col",[],null,null,null,e.G,e.i)),o.nb(3,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.db(16777216,null,0,1,null,I)),o.nb(5,278528,null,0,c.h,[o.L,o.I,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.juz)}),null)}function J(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,10,"ion-row",[],null,null,null,e.M,e.o)),o.nb(1,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,8,"ion-col",[],null,null,null,e.G,e.i)),o.nb(3,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,6,"ion-card",[],null,null,null,e.F,e.d)),o.nb(5,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(6,0,null,0,4,"ion-card-header",[],null,null,null,e.C,e.f)),o.nb(7,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(8,0,null,0,2,"ion-card-title",[],null,null,null,e.E,e.h)),o.nb(9,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.Db(10,0,[" "," "]))],null,(function(l,n){l(n,10,0,n.component.bookmark)}))}function A(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,26,"ion-content",[],null,null,null,e.H,e.j)),o.nb(1,49152,null,0,a.s,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.ob(2,0,null,0,18,"ion-segment",[],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==o.zb(l,5)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.zb(l,5)._handleChangeEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.segmentChanged(u)&&t),t}),e.P,e.q)),o.Ab(5120,null,r.b,(function(l){return[l]}),[a.Fb]),o.nb(4,49152,null,0,a.gb,[o.h,o.k,o.x],null,null),o.nb(5,16384,null,0,a.Fb,[o.k],null,null),(l()(),o.ob(6,0,null,0,4,"ion-segment-button",[["value","Surat"]],null,null,null,e.O,e.r)),o.nb(7,49152,null,0,a.hb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.ob(8,0,null,0,2,"ion-label",[],null,null,null,e.K,e.m)),o.nb(9,49152,null,0,a.L,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,["Surat"])),(l()(),o.ob(11,0,null,0,4,"ion-segment-button",[["value","Juz"]],null,null,null,e.O,e.r)),o.nb(12,49152,null,0,a.hb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.ob(13,0,null,0,2,"ion-label",[],null,null,null,e.K,e.m)),o.nb(14,49152,null,0,a.L,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,["Juz"])),(l()(),o.ob(16,0,null,0,4,"ion-segment-button",[["value","Bookmark"]],null,null,null,e.O,e.r)),o.nb(17,49152,null,0,a.hb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.ob(18,0,null,0,2,"ion-label",[],null,null,null,e.K,e.m)),o.nb(19,49152,null,0,a.L,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,["Bookmark"])),(l()(),o.db(16777216,null,0,1,null,E)),o.nb(22,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(l()(),o.db(16777216,null,0,1,null,O)),o.nb(24,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(l()(),o.db(16777216,null,0,1,null,J)),o.nb(26,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,7,0,"Surat"),l(n,12,0,"Juz"),l(n,17,0,"Bookmark"),l(n,22,0,"Surat"==u.segment),l(n,24,0,"Juz"==u.segment),l(n,26,0,"Bookmark"==u.segment)}),null)}function j(l){return o.Eb(0,[(l()(),o.db(16777216,null,null,1,null,D)),o.nb(1,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(l()(),o.db(16777216,null,null,1,null,M)),o.nb(3,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(l()(),o.db(16777216,null,null,1,null,w)),o.nb(5,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(l()(),o.db(16777216,null,null,1,null,A)),o.nb(7,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"1"==u.kondition),l(n,3,0,"2"==u.kondition),l(n,5,0,"2"==u.kondition),l(n,7,0,"1"==u.kondition)}),null)}function P(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,2,"app-home-quran",[],null,null,null,j,y)),o.Ab(512,null,s.a,s.a,[h.c]),o.nb(2,114688,null,0,z,[s.a],null,null)],(function(l,n){l(n,2,0)}),null)}var G=o.kb("app-home-quran",z,P,{},{},[]);class F{constructor(l){this.http=l}}var q=o.mb({encapsulation:0,styles:[b],data:{}});function L(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,6,"ion-header",[],null,null,null,e.I,e.k)),o.nb(1,49152,null,0,a.z,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,e.V,e.x)),o.nb(3,49152,null,0,a.xb,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,2,"ion-title",[["size","large"]],null,null,null,e.U,e.w)),o.nb(5,49152,null,0,a.vb,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Db(-1,0,["Diskusi"])),(l()(),o.ob(7,0,null,null,1,"ion-content",[],null,null,null,e.H,e.j)),o.nb(8,49152,null,0,a.s,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null)],(function(l,n){l(n,1,0,!0),l(n,5,0,"large"),l(n,8,0,!0)}),null)}function S(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,2,"app-home-diskusi",[],null,null,null,L,q)),o.Ab(512,null,s.a,s.a,[h.c]),o.nb(2,49152,null,0,F,[s.a],null,null)],null,null)}var B=o.kb("app-home-diskusi",F,S,{},{},[]);class ${constructor(l){this.http=l}}var H=o.mb({encapsulation:0,styles:[b],data:{}});function K(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,6,"ion-header",[],null,null,null,e.I,e.k)),o.nb(1,49152,null,0,a.z,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,e.V,e.x)),o.nb(3,49152,null,0,a.xb,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,2,"ion-title",[["size","large"]],null,null,null,e.U,e.w)),o.nb(5,49152,null,0,a.vb,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Db(-1,0,["Jadwal Sholat"])),(l()(),o.ob(7,0,null,null,143,"ion-content",[],null,null,null,e.H,e.j)),o.nb(8,49152,null,0,a.s,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.ob(9,0,null,0,3,"ion-text",[["color","dark"]],null,null,null,e.T,e.v)),o.nb(10,49152,null,0,a.sb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.ob(11,0,null,0,1,"h5",[["align","center"]],null,null,null,null,null)),(l()(),o.Db(-1,null,["05 Agustus 2020"])),(l()(),o.ob(13,0,null,0,22,"ion-card",[["style","border-radius: 20px;"]],null,null,null,e.F,e.d)),o.nb(14,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(15,0,null,0,20,"ion-card-header",[],null,null,null,e.C,e.f)),o.nb(16,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(17,0,null,0,18,"ion-row",[],null,null,null,e.M,e.o)),o.nb(18,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(19,0,null,0,9,"ion-col",[],null,null,null,e.G,e.i)),o.nb(20,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(21,0,null,0,3,"ion-card-title",[],null,null,null,e.E,e.h)),o.nb(22,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(23,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["04:45"])),(l()(),o.ob(25,0,null,0,3,"ion-card-subtitle",[],null,null,null,e.D,e.g)),o.nb(26,49152,null,0,a.n,[o.h,o.k,o.x],null,null),(l()(),o.ob(27,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["Subuh"])),(l()(),o.ob(29,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(30,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(31,0,null,0,4,"ion-card-title",[["style","float:right;"]],null,null,null,e.E,e.h)),o.nb(32,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(33,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),o.ob(34,0,null,null,1,"ion-icon",[["name","partly-sunny"]],null,null,null,e.J,e.l)),o.nb(35,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(36,0,null,0,22,"ion-card",[["style","border-radius: 20px;"]],null,null,null,e.F,e.d)),o.nb(37,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(38,0,null,0,20,"ion-card-header",[],null,null,null,e.C,e.f)),o.nb(39,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(40,0,null,0,18,"ion-row",[],null,null,null,e.M,e.o)),o.nb(41,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(42,0,null,0,9,"ion-col",[],null,null,null,e.G,e.i)),o.nb(43,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(44,0,null,0,3,"ion-card-title",[],null,null,null,e.E,e.h)),o.nb(45,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(46,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["04:45"])),(l()(),o.ob(48,0,null,0,3,"ion-card-subtitle",[],null,null,null,e.D,e.g)),o.nb(49,49152,null,0,a.n,[o.h,o.k,o.x],null,null),(l()(),o.ob(50,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["Syuruq"])),(l()(),o.ob(52,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(53,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(54,0,null,0,4,"ion-card-title",[["style","float:right;"]],null,null,null,e.E,e.h)),o.nb(55,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(56,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),o.ob(57,0,null,null,1,"ion-icon",[["name","sunny"]],null,null,null,e.J,e.l)),o.nb(58,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(59,0,null,0,22,"ion-card",[["style","border-radius: 20px;"]],null,null,null,e.F,e.d)),o.nb(60,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(61,0,null,0,20,"ion-card-header",[],null,null,null,e.C,e.f)),o.nb(62,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(63,0,null,0,18,"ion-row",[],null,null,null,e.M,e.o)),o.nb(64,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(65,0,null,0,9,"ion-col",[],null,null,null,e.G,e.i)),o.nb(66,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(67,0,null,0,3,"ion-card-title",[],null,null,null,e.E,e.h)),o.nb(68,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(69,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["04:45"])),(l()(),o.ob(71,0,null,0,3,"ion-card-subtitle",[],null,null,null,e.D,e.g)),o.nb(72,49152,null,0,a.n,[o.h,o.k,o.x],null,null),(l()(),o.ob(73,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["Dzuhur"])),(l()(),o.ob(75,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(76,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(77,0,null,0,4,"ion-card-title",[["style","float:right;"]],null,null,null,e.E,e.h)),o.nb(78,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(79,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),o.ob(80,0,null,null,1,"ion-icon",[["name","sunny"]],null,null,null,e.J,e.l)),o.nb(81,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(82,0,null,0,22,"ion-card",[["style","border-radius: 20px;"]],null,null,null,e.F,e.d)),o.nb(83,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(84,0,null,0,20,"ion-card-header",[],null,null,null,e.C,e.f)),o.nb(85,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(86,0,null,0,18,"ion-row",[],null,null,null,e.M,e.o)),o.nb(87,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(88,0,null,0,9,"ion-col",[],null,null,null,e.G,e.i)),o.nb(89,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(90,0,null,0,3,"ion-card-title",[],null,null,null,e.E,e.h)),o.nb(91,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(92,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["04:45"])),(l()(),o.ob(94,0,null,0,3,"ion-card-subtitle",[],null,null,null,e.D,e.g)),o.nb(95,49152,null,0,a.n,[o.h,o.k,o.x],null,null),(l()(),o.ob(96,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["Ashar"])),(l()(),o.ob(98,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(99,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(100,0,null,0,4,"ion-card-title",[["style","float:right;"]],null,null,null,e.E,e.h)),o.nb(101,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(102,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),o.ob(103,0,null,null,1,"ion-icon",[["name","partly-sunny"]],null,null,null,e.J,e.l)),o.nb(104,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(105,0,null,0,22,"ion-card",[["style","border-radius: 20px;"]],null,null,null,e.F,e.d)),o.nb(106,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(107,0,null,0,20,"ion-card-header",[],null,null,null,e.C,e.f)),o.nb(108,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(109,0,null,0,18,"ion-row",[],null,null,null,e.M,e.o)),o.nb(110,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(111,0,null,0,9,"ion-col",[],null,null,null,e.G,e.i)),o.nb(112,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(113,0,null,0,3,"ion-card-title",[],null,null,null,e.E,e.h)),o.nb(114,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(115,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["04:45"])),(l()(),o.ob(117,0,null,0,3,"ion-card-subtitle",[],null,null,null,e.D,e.g)),o.nb(118,49152,null,0,a.n,[o.h,o.k,o.x],null,null),(l()(),o.ob(119,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["Magrib"])),(l()(),o.ob(121,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(122,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(123,0,null,0,4,"ion-card-title",[["style","float:right;"]],null,null,null,e.E,e.h)),o.nb(124,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(125,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),o.ob(126,0,null,null,1,"ion-icon",[["name","cloudy-night"]],null,null,null,e.J,e.l)),o.nb(127,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.ob(128,0,null,0,22,"ion-card",[["style","border-radius: 20px;"]],null,null,null,e.F,e.d)),o.nb(129,49152,null,0,a.k,[o.h,o.k,o.x],null,null),(l()(),o.ob(130,0,null,0,20,"ion-card-header",[],null,null,null,e.C,e.f)),o.nb(131,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(132,0,null,0,18,"ion-row",[],null,null,null,e.M,e.o)),o.nb(133,49152,null,0,a.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(134,0,null,0,9,"ion-col",[],null,null,null,e.G,e.i)),o.nb(135,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(136,0,null,0,3,"ion-card-title",[],null,null,null,e.E,e.h)),o.nb(137,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(138,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["04:45"])),(l()(),o.ob(140,0,null,0,3,"ion-card-subtitle",[],null,null,null,e.D,e.g)),o.nb(141,49152,null,0,a.n,[o.h,o.k,o.x],null,null),(l()(),o.ob(142,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Db(-1,null,["Isya"])),(l()(),o.ob(144,0,null,0,6,"ion-col",[],null,null,null,e.G,e.i)),o.nb(145,49152,null,0,a.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(146,0,null,0,4,"ion-card-title",[["style","float:right;"]],null,null,null,e.E,e.h)),o.nb(147,49152,null,0,a.o,[o.h,o.k,o.x],null,null),(l()(),o.ob(148,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),o.ob(149,0,null,null,1,"ion-icon",[["name","moon"]],null,null,null,e.J,e.l)),o.nb(150,49152,null,0,a.A,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,!0),l(n,5,0,"large"),l(n,8,0,!0),l(n,10,0,"dark"),l(n,35,0,"partly-sunny"),l(n,58,0,"sunny"),l(n,81,0,"sunny"),l(n,104,0,"partly-sunny"),l(n,127,0,"cloudy-night"),l(n,150,0,"moon")}),null)}function U(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,2,"app-home-sholat",[],null,null,null,K,H)),o.Ab(512,null,s.a,s.a,[h.c]),o.nb(2,49152,null,0,$,[s.a],null,null)],null,null)}var V=o.kb("app-home-sholat",$,U,{},{},[]);class N{constructor(l){this.http=l}}var W=o.mb({encapsulation:0,styles:[b],data:{}});function Q(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,6,"ion-header",[],null,null,null,e.I,e.k)),o.nb(1,49152,null,0,a.z,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,e.V,e.x)),o.nb(3,49152,null,0,a.xb,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,2,"ion-title",[["size","large"]],null,null,null,e.U,e.w)),o.nb(5,49152,null,0,a.vb,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Db(-1,0,["Lainnya"])),(l()(),o.ob(7,0,null,null,1,"ion-content",[],null,null,null,e.H,e.j)),o.nb(8,49152,null,0,a.s,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null)],(function(l,n){l(n,1,0,!0),l(n,5,0,"large"),l(n,8,0,!0)}),null)}function T(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,2,"app-lainnya-sholat",[],null,null,null,Q,W)),o.Ab(512,null,s.a,s.a,[h.c]),o.nb(2,49152,null,0,N,[s.a],null,null)],null,null)}var Y=o.kb("app-lainnya-sholat",N,T,{},{},[]);u.d(n,"HomePageModuleNgFactory",(function(){return R}));var R=o.lb(t,[],(function(l){return o.wb([o.xb(512,o.j,o.W,[[8,[i.a,v,G,B,V,Y]],[3,o.j],o.v]),o.xb(4608,c.k,c.j,[o.s,[2,c.q]]),o.xb(4608,r.d,r.d,[]),o.xb(4608,a.a,a.a,[o.x,o.g]),o.xb(4608,a.Bb,a.Bb,[a.a,o.j,o.p]),o.xb(4608,a.Eb,a.Eb,[a.a,o.j,o.p]),o.xb(1073742336,c.b,c.b,[]),o.xb(1073742336,r.c,r.c,[]),o.xb(1073742336,r.a,r.a,[]),o.xb(1073742336,a.zb,a.zb,[]),o.xb(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),o.xb(1073742336,t,t,[]),o.xb(1024,d.k,(function(){return[[{path:"",component:k},{path:"quran",component:z},{path:"diskusi",component:F},{path:"sholat",component:$},{path:"lainnya",component:N}]]}),[])])}))}}]);