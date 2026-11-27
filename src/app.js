import { createBackend } from './backend.js';

const TPL={"P":{"Pembersihan lahan":["m²",15000],"Pengukuran & bouwplank":["m'",65000],"Direksi keet & gudang":["ls",7500000],"Mobilisasi & demobilisasi":["ls",5000000],"Air & listrik kerja":["ls",4000000],"Galian tanah pondasi":["m³",103700],"Urugan pasir bawah pondasi":["m³",305500],"Pondasi batu kali 1:4":["m³",1177300],"Footplat beton K-225":["m³",4200000],"Urugan tanah kembali":["m³",85000],"Urugan peninggian lantai":["m³",210000],"Sloof 20/30 beton bertulang":["m³",5693100],"Kolom beton bertulang":["m³",8108200],"Balok 25/40 beton bertulang":["m³",7106300],"Plat lantai t=12 cm":["m³",5111800],"Tangga beton":["m³",5900000],"Ring balk 15/20":["m³",5300000],"Pasangan bata merah 1:4":["m²",162000],"Plesteran 1:4":["m²",86400],"Acian":["m²",50800],"Keramik dinding KM":["m²",245000],"Rangka atap baja ringan":["m²",195000],"Genteng metal pasir":["m²",135000],"Lisplang GRC + cat":["m'",110000],"Talang air":["m'",125000],"Granit 60x60":["m²",399900],"Keramik KM anti-slip":["m²",195000],"Plint granit":["m'",55000],"Kusen aluminium 4\"":["m'",210000],"Daun pintu panel kayu":["unit",2200000],"Pintu KM PVC":["unit",850000],"Jendela kaca 5 mm":["m²",550000],"Kunci, engsel & aksesoris":["ls",4500000],"Plafon gypsum rangka hollow":["m²",145000],"List profil gypsum":["m'",40000],"Cat dinding interior":["m²",29400],"Cat dinding eksterior":["m²",55000],"Cat plafon":["m²",32000],"Waterproofing KM & dak":["m²",110000],"Kloset duduk":["unit",2800000],"Wastafel + kran":["unit",1350000],"Shower set":["unit",950000],"Instalasi air bersih":["ls",7500000],"Instalasi air kotor":["ls",6000000],"Septic tank biofil + resapan":["unit",8500000],"Pompa air + toren":["set",5500000],"Titik lampu":["titik",275000],"Titik stop kontak":["titik",285000],"Panel MCB + grounding":["set",4000000],"Lampu downlight LED":["buah",120000],"Proteksi area & barang pemilik":["ls",1500000],"Bongkar keramik lama":["m²",35000],"Bongkar dinding bata":["m²",45000],"Bongkar plafon lama":["m²",20000],"Bongkar sanitair lama":["ls",750000],"Angkut puing":["m³",175000],"Perbaikan atap bocor":["ls",1500000],"Cat ulang interior (kerok + cat)":["m²",32000],"Instalasi pipa KM baru":["ls",3500000]},"T":{"2lt":{"label":"Rumah 2 lantai (±120 m²)","weeks":24,"sections":[["Persiapan",1,2,[["Pembersihan lahan",150],["Pengukuran & bouwplank",50],["Direksi keet & gudang",1],["Mobilisasi & demobilisasi",1],["Air & listrik kerja",1]]],["Tanah & pondasi",2,5,[["Galian tanah pondasi",45],["Urugan pasir bawah pondasi",3],["Pondasi batu kali 1:4",28],["Footplat beton K-225",6],["Urugan tanah kembali",15],["Urugan peninggian lantai",30]]],["Struktur beton",5,14,[["Sloof 20/30 beton bertulang",5.5],["Kolom beton bertulang",6],["Balok 25/40 beton bertulang",8],["Plat lantai t=12 cm",9],["Tangga beton",1.8],["Ring balk 15/20",2.2]]],["Dinding",8,16,[["Pasangan bata merah 1:4",320],["Plesteran 1:4",640],["Acian",640],["Keramik dinding KM",30]]],["Atap",13,17,[["Rangka atap baja ringan",85],["Genteng metal pasir",85],["Lisplang GRC + cat",40],["Talang air",20]]],["Lantai",17,22,[["Granit 60x60",110],["Keramik KM anti-slip",10],["Plint granit",110]]],["Kusen, pintu & jendela",15,21,[["Kusen aluminium 4\"",120],["Daun pintu panel kayu",6],["Pintu KM PVC",3],["Jendela kaca 5 mm",14],["Kunci, engsel & aksesoris",1]]],["Plafon",18,21,[["Plafon gypsum rangka hollow",120],["List profil gypsum",120]]],["Pengecatan & waterproofing",20,24,[["Cat dinding interior",520],["Cat dinding eksterior",180],["Cat plafon",120],["Waterproofing KM & dak",40]]],["Sanitasi & plumbing",10,23,[["Kloset duduk",3],["Wastafel + kran",3],["Shower set",3],["Instalasi air bersih",1],["Instalasi air kotor",1],["Septic tank biofil + resapan",1],["Pompa air + toren",1]]],["Instalasi listrik",10,22,[["Titik lampu",35],["Titik stop kontak",25],["Panel MCB + grounding",1],["Lampu downlight LED",35]]]]},"1lt":{"label":"Rumah 1 lantai (±70 m²)","weeks":16,"sections":[["Persiapan",1,1,[["Pembersihan lahan",120],["Pengukuran & bouwplank",40],["Direksi keet & gudang",1],["Mobilisasi & demobilisasi",1],["Air & listrik kerja",1]]],["Tanah & pondasi",1,3,[["Galian tanah pondasi",28],["Urugan pasir bawah pondasi",2],["Pondasi batu kali 1:4",18],["Urugan tanah kembali",9],["Urugan peninggian lantai",18]]],["Struktur beton",3,7,[["Sloof 20/30 beton bertulang",3.5],["Kolom beton bertulang",1.8],["Ring balk 15/20",1.5]]],["Dinding",4,9,[["Pasangan bata merah 1:4",190],["Plesteran 1:4",380],["Acian",380],["Keramik dinding KM",18]]],["Atap",8,10,[["Rangka atap baja ringan",95],["Genteng metal pasir",95],["Lisplang GRC + cat",36],["Talang air",12]]],["Lantai",11,14,[["Granit 60x60",64],["Keramik KM anti-slip",6],["Plint granit",70]]],["Kusen, pintu & jendela",10,14,[["Kusen aluminium 4\"",80],["Daun pintu panel kayu",4],["Pintu KM PVC",2],["Jendela kaca 5 mm",9],["Kunci, engsel & aksesoris",1]]],["Plafon",12,14,[["Plafon gypsum rangka hollow",70],["List profil gypsum",75]]],["Pengecatan & waterproofing",13,16,[["Cat dinding interior",300],["Cat dinding eksterior",110],["Cat plafon",70],["Waterproofing KM & dak",14]]],["Sanitasi & plumbing",6,15,[["Kloset duduk",2],["Wastafel + kran",2],["Shower set",2],["Instalasi air bersih",1],["Instalasi air kotor",1],["Septic tank biofil + resapan",1],["Pompa air + toren",1]]],["Instalasi listrik",7,15,[["Titik lampu",18],["Titik stop kontak",14],["Panel MCB + grounding",1],["Lampu downlight LED",18]]]]},"ren":{"label":"Renovasi (dapur, KM, lantai, cat)","weeks":8,"sections":[["Persiapan & bongkaran",1,2,[["Proteksi area & barang pemilik",1],["Bongkar keramik lama",45],["Bongkar dinding bata",12],["Bongkar plafon lama",30],["Bongkar sanitair lama",1],["Angkut puing",6]]],["Struktur & dinding",2,5,[["Galian tanah pondasi",6],["Pondasi batu kali 1:4",4],["Sloof 20/30 beton bertulang",0.6],["Kolom beton bertulang",0.4],["Ring balk 15/20",0.4],["Pasangan bata merah 1:4",28],["Plesteran 1:4",56],["Acian",56]]],["Lantai & keramik",4,7,[["Granit 60x60",45],["Keramik KM anti-slip",6],["Keramik dinding KM",18],["Waterproofing KM & dak",10]]],["Plafon & atap",4,6,[["Plafon gypsum rangka hollow",30],["Rangka atap baja ringan",15],["Genteng metal pasir",15],["Perbaikan atap bocor",1]]],["Sanitasi & listrik",3,7,[["Kloset duduk",1],["Wastafel + kran",1],["Shower set",1],["Instalasi pipa KM baru",1],["Titik lampu",6],["Titik stop kontak",6]]],["Pengecatan",6,8,[["Cat ulang interior (kerok + cat)",220],["Cat dinding eksterior",90],["Cat plafon",30]]]]}}};
const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=v=>{const n=parseFloat(String(v).replace(/\./g,'').replace(',','.'));return isFinite(n)?n:0};
const rp=n=>'Rp '+Math.round(n||0).toLocaleString('id-ID');
const jt=n=>{n=n||0;const a=Math.abs(n);return a>=1e9?'Rp '+(n/1e9).toLocaleString('id-ID',{maximumFractionDigits:2})+' M':a>=1e6?'Rp '+(n/1e6).toLocaleString('id-ID',{maximumFractionDigits:1})+' jt':rp(n)};
const pc=n=>(n||0).toLocaleString('id-ID',{maximumFractionDigits:1})+'%';
const nf=n=>(n||0).toLocaleString('id-ID',{maximumFractionDigits:3});
const uid=p=>p+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const today=()=>{const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10)};
const fdate=s=>s?new Date(s+'T00:00').toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}):'';
const nowIso=()=>new Date().toISOString();
const dvc=dv=>dv<-5?'bad':dv<0?'wrn':'good';
const sgn=dv=>(dv>=0?'+':'')+pc(dv);
const CATS=['Material','Upah tukang','Subkon','Sewa alat','Operasional'];
const STAT=['Belum ditagih','Ditagih','Lunas'];
const ROLES={admin:'Admin',tim:'Tim internal',vendor:'Vendor'};
const PID=/^[a-z0-9]+$/,SID=/^[A-Za-z0-9_-]+$/;

let B=null,db=null,authUser=null,me=null,memberUnsub=null,dataUnsubs=[],vUnsubs={},V=new Map();
let jsp=null,company={},members=[],P=[],curId=null,tab='ringkasan',page='',sub={op:[],daily:[],exp:[]},unsubs=[],dirty=false,loaded=false,loadedOnce=false,chain=Promise.resolve(),delArm=null;
let loginMode='login',lastEmail='',pendingImport=null,ros=[];
const isVendor=()=>!!me&&me.role==='vendor';
const isAdmin=()=>!!me&&me.role==='admin';

function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),3200)}
function fail(e){const c=e&&e.code||'';toast(c==='permission-denied'?'Anda tidak punya akses untuk mengubah data ini.':c==='resource-exhausted'?'Kuota harian database habis. Coba lagi besok.':c==='unavailable'?'Koneksi terputus. Coba lagi.':'Gagal menyimpan. Coba lagi.')}
const proj=()=>P.find(p=>p.id===curId);

function calc(p){
  const secs=p.sections||[],items=p.items||[],secJ={},secR={};
  secs.forEach(s=>{secJ[s.id]=0;secR[s.id]=0});
  let jual=0,rap=0;
  items.forEach(i=>{const j=i.vol*i.price,r=i.vol*i.cost;jual+=j;rap+=r;secJ[i.sec]=(secJ[i.sec]||0)+j;secR[i.sec]=(secR[i.sec]||0)+r});
  const w={};secs.forEach(s=>w[s.id]=jual?secJ[s.id]/jual:0);
  const ppn=jual*(p.ppn||0)/100;
  const bulat=Math.floor((jual+ppn)/1000+1e-9)*1000,kontrak=p.contractValue>0?p.contractValue:bulat,nilai=kontrak/(1+(p.ppn||0)/100);
  return {jual,rap,secJ,secR,w,ppn,kontrak,nilai,bulat,weeks:Math.max(1,...secs.map(s=>+s.end||1))};
}
const planAt=(p,c,wk)=>(p.sections||[]).reduce((a,s)=>{const d=Math.max(1,s.end-s.start+1);return a+(c.w[s.id]||0)*Math.min(1,Math.max(0,(wk-s.start+1)/d))},0)*100;
const realOf=(c,pcts)=>Object.keys(c.w).reduce((a,k)=>a+c.w[k]*Math.min(100,(pcts&&pcts[k])||0)/100,0)*100;
const weekOf=(p,d)=>Math.floor((new Date(d+'T00:00')-new Date((p.startDate||today())+'T00:00'))/6048e5)+1;

function fromTemplate(key){
  const t=TPL.T[key],sections=[],items=[];
  t.sections.forEach(([name,start,end,list])=>{const id=uid('s');sections.push({id,name,start,end});
    list.forEach(([n,vol])=>{const [unit,price]=TPL.P[n];items.push({id:uid('i'),sec:id,name:n,vol,unit,price,cost:Math.round(price*0.88/100)*100})})});
  return {sections,items};
}
function defTermins(key){
  const r=key==='ren'?[['Uang muka (DP)',30,'Tanda tangan kontrak'],['Termin 1',30,'Progres fisik 50%'],['Termin 2',35,'Progres 100% + BAST I (PHO)'],['Retensi',5,'Akhir masa pemeliharaan (FHO)']]
   :[['Uang muka (DP)',20,'Tanda tangan kontrak'],['Termin 1',20,'Progres fisik 25%'],['Termin 2',20,'Progres fisik 50%'],['Termin 3',20,'Progres fisik 75%'],['Termin 4',15,'Progres 100% + BAST I (PHO)'],['Retensi',5,'Akhir masa pemeliharaan (FHO)']];
  return r.map(([name,pct,cond])=>({id:uid('t'),name,pct,cond,status:'Belum ditagih'}));
}

/* ---------- ringkasan progres untuk vendor (tanpa angka uang) ---------- */
function progressOf(p){
  const c=calc(p);
  return {name:p.name||'',location:p.location||'',kind:p.kind||'',startDate:p.startDate||'',weeks:c.weeks,
    sections:(p.sections||[]).map(s=>({id:s.id,name:s.name||'',start:+s.start||1,end:+s.end||1,w:Math.round((c.w[s.id]||0)*1e6)/1e6})),
    realPct:p.realPct||0};
}
const syncT={},lastSig={};
function syncProgress(id){
  const p=P.find(x=>x.id===id);if(!p||isVendor())return Promise.resolve();
  const v=progressOf(p),sig=JSON.stringify(v);if(lastSig[id]===sig)return Promise.resolve();lastSig[id]=sig;
  return db.doc('progress/'+id).set({...v,updated:nowIso()}).catch(()=>{delete lastSig[id]});
}
function scheduleSync(id){clearTimeout(syncT[id]);syncT[id]=setTimeout(()=>syncProgress(id),1200)}

/* ---------- data ---------- */
function saveProject(fields){
  const id=curId,i=P.findIndex(p=>p.id===id);if(i<0)return;
  P[i]={...P[i],...fields};
  chain=chain.then(()=>db.doc('projects/'+id).update({...fields,updated:nowIso()})).catch(fail);
  scheduleSync(id);
}
function openSubs(id){
  unsubs.forEach(u=>u());unsubs=[];sub={op:[],daily:[],exp:[]};if(!id)return;
  const list=isVendor()?[['op','opname']]:[['op','opname'],['daily','daily'],['exp','expenses']];
  list.forEach(([k,c])=>{
    unsubs.push(db.collection('projects/'+id+'/'+c).orderBy('date','desc').limit(500).onSnapshot(s=>{sub[k]=s.docs.map(d=>({id:d.id,...d.data()}));render()},()=>toast('Sebagian data proyek gagal dimuat.')));
  });
  if(!isVendor())syncProgress(id);
}
function route(force){
  const h=location.hash;
  const m=/^#p-([a-z0-9]+)(?:-([a-z]+))?$/.exec(h);
  const id=m&&P.some(p=>p.id===m[1])?m[1]:null;
  const nt=m&&m[2]?m[2]:'ringkasan';
  const pg=!id&&h==='#pengguna'&&isAdmin()?'pengguna':'';
  if(id!==curId){curId=id;openSubs(id);force=true}
  if(nt!==tab){tab=nt;force=true}
  if(pg!==page){page=pg;force=true}
  if(force)delArm=null;
  render(force);if(force)scrollTo(0,0);
}
addEventListener('hashchange',()=>{if(me)route(true)});
function render(force){
  if(!me)return;
  const a=document.activeElement;
  if(!force&&a&&($('#view').contains(a)||$('#dlg').contains(a))&&/INPUT|SELECT|TEXTAREA/.test(a.tagName)){dirty=true;return}
  dirty=false;const y=scrollY;draw();if(!force)scrollTo(0,y);
}
document.addEventListener('focusout',()=>setTimeout(()=>{const a=document.activeElement;if(dirty&&!(a&&$('#view').contains(a)&&/INPUT|SELECT|TEXTAREA/.test(a.tagName)))render()},50));

/* ---------- views ---------- */
function drawAcct(){
  const a=$('#acct');if(!authUser){a.innerHTML='';return}
  a.innerHTML=`<span><b>${esc(me&&me.name||authUser.email)}</b>${me?` · ${esc(ROLES[me.role]||'')}`:''}</span><button data-act="logout">Keluar</button>`;
}
function draw(){
  drawAcct();
  if(!loaded)return;
  ros.forEach(r=>r.disconnect());ros=[];
  if(isVendor())return curId?drawVendorProject():drawVendorHome();
  if(page==='pengguna')return drawUsers();
  const p=proj();
  if(!p)return drawHome();
  const c=calc(p),tabs=[['ringkasan','Ringkasan'],['rab','RAB'],['progres','Progres & Kurva S'],['keuangan','Keuangan'],['harian','Laporan harian']];
  $('#top').innerHTML=`<div class="row"><div><small><a href="#start">← Semua proyek</a> · ${esc(p.kind||'')}</small><h1>${esc(p.name)}</h1><div class="meta" style="color:#aab1b8">${[p.client,p.location].filter(Boolean).map(esc).join(' · ')}${p.client||p.location?' · ':''}mulai ${fdate(p.startDate)} · ${c.weeks} minggu</div></div></div>
  <nav class="tabs">${tabs.map(([k,l])=>`<button data-go="${k}" aria-current="${k===tab}">${l}</button>`).join('')}</nav>`;
  if(tab==='keuangan'||tab==='harian')loadPdf().catch(()=>{});
  $('#view').innerHTML=({ringkasan:vSum,rab:vRab,progres:vProg,keuangan:vFin,harian:vDaily}[tab]||vSum)(p,c);
  document.querySelectorAll('.fig[data-curve]').forEach(el=>curve(el,p,c));
  fillPhotos();
}
function status(m,actions=''){$('#acct').innerHTML=authUser?`<button data-act="logout">Keluar</button>`:'';$('#top').innerHTML=`<div class="row"><div><small>Papan proyek kontraktor</small><h1>Papan Proyek</h1></div></div>`;$('#view').innerHTML=`<div class="empty"><p>${esc(m)}</p>${actions}</div>`}

function drawHome(){
  $('#top').innerHTML=`<div class="row"><div><small>Papan proyek kontraktor</small><h1>Semua proyek berjalan</h1></div><div style="display:flex;gap:8px;flex-wrap:wrap">${isAdmin()?'<button class="btn" data-act="users">Pengguna & akses</button>':''}<button class="btn" data-act="company">Data perusahaan</button><button class="btn pri" data-act="new">+ Proyek baru</button></div></div>`;
  if(!P.length){$('#view').innerHTML=`<div class="empty"><h2>Belum ada proyek</h2><p>Buat proyek pertama dari template rumah 1 lantai, 2 lantai, atau renovasi. RAB, jadwal, dan termin langsung terisi dan bisa diubah.${isAdmin()?' Atau pindahkan data dari versi lama lewat <b>Pengguna & akses → Impor data</b>.':''}</p><button class="btn pri" data-act="new">+ Proyek baru</button></div>`;return}
  let tk=0,ts=0;
  const cards=[...P].sort((a,b)=>(b.updated||'').localeCompare(a.updated||'')).map(p=>{
    const c=calc(p),wk=Math.min(c.weeks,Math.max(0,weekOf(p,today()))),pl=planAt(p,c,wk),re=p.realPct||0,dv=re-pl,sp=p.spent||0;tk+=c.kontrak;ts+=sp;
    const bud=c.rap?sp/c.rap*100:0;
    return `<a class="proj" href="#p-${esc(p.id)}"><div style="display:flex;justify-content:space-between;gap:8px"><h3>${esc(p.name)}</h3><span class="tag">${esc(p.kind||'')}</span></div>
    <div class="meta">${p.client?esc(p.client)+' · ':''}minggu ${wk} dari ${c.weeks}</div>
    <div class="meta" style="margin-top:10px">Rencana ${pc(pl)}</div><div class="bar"><i style="width:${Math.min(100,pl)}%;background:var(--steel)"></i></div>
    <div class="meta">Realisasi ${pc(re)} · <span class="${dvc(dv)}">deviasi ${sgn(dv)}</span></div><div class="bar"><i style="width:${Math.min(100,re)}%;background:var(--brick)"></i></div>
    <div class="meta">Biaya ${jt(sp)} dari RAP ${jt(c.rap)} · <span class="${bud>re+10?'bad':''}">${pc(bud)} terpakai</span></div></a>`}).join('');
  $('#view').innerHTML=`<div class="grid g4"><div class="card kpi"><span>Proyek</span><b>${P.length}</b></div><div class="card kpi"><span>Total nilai kontrak</span><b>${jt(tk)}</b></div><div class="card kpi"><span>Total biaya tercatat</span><b>${jt(ts)}</b></div></div>
  <section><div class="grid g2">${cards}</div></section>`;
}

function kpis(p,c){
  const wk=Math.min(c.weeks,Math.max(0,weekOf(p,today()))),pl=planAt(p,c,wk),re=sub.op[0]?sub.op[0].realPct:(p.realPct||0),dv=re-pl;
  const sp=sub.exp.reduce((a,e)=>a+(e.amount||0),0),eac=Math.max(sp,c.rap*re/100)+c.rap*(1-re/100),laba=c.nilai-eac;
  return {wk,pl,re,dv,sp,eac,laba};
}
function vendorAccess(p){
  const vs=members.filter(m=>m.role==='vendor'&&(m.projects||[]).includes(p.id));
  return `<section><div class="card"><h3>Vendor yang bisa melihat progres proyek ini</h3><p>${vs.length?vs.map(m=>esc(m.name||m.id)+(m.company?` <span class="meta">(${esc(m.company)})</span>`:'')).join(', '):'<span class="meta">Belum ada.</span>'}</p><p class="meta">Vendor hanya melihat Kurva S, progres per pekerjaan, jadwal, dan riwayat opname. RAB, harga, keuangan, data klien, dan laporan harian tidak terlihat. <a href="#pengguna">Atur di Pengguna & akses</a></p></div></section>`;
}
function vSum(p,c){
  const k=kpis(p,c),tm=p.termins||[],paid=tm.filter(t=>t.status==='Lunas').reduce((a,t)=>a+t.pct,0)*c.kontrak/100;
  const next=tm.find(t=>t.status!=='Lunas'),d=sub.daily[0];
  return `<div class="grid g4">
  <div class="card kpi"><span>Nilai kontrak (incl. PPN)</span><b>${jt(c.kontrak)}</b><span>RAP ${jt(c.rap)} · margin rencana ${pc(c.nilai?(c.nilai-c.rap)/c.nilai*100:0)}</span></div>
  <div class="card kpi"><span>Progres fisik minggu ${k.wk}</span><b>${pc(k.re)}</b><span>rencana ${pc(k.pl)} · <span class="${dvc(k.dv)}">${sgn(k.dv)}</span></span></div>
  <div class="card kpi"><span>Biaya aktual</span><b>${jt(k.sp)}</b><span>${pc(c.rap?k.sp/c.rap*100:0)} dari RAP</span></div>
  <div class="card kpi"><span>Proyeksi laba</span><b class="${k.laba<0?'bad':''}">${jt(k.laba)}</b><span>${pc(c.nilai?k.laba/c.nilai*100:0)} dari nilai pekerjaan</span></div></div>
  <section><header><h2>Kurva S</h2><div class="legend"><span><i style="background:var(--steel)"></i>Rencana</span><span><i style="background:var(--brick)"></i>Realisasi (opname)</span></div></header><div class="fig" data-curve><svg role="img" aria-label="Kurva S rencana dan realisasi"></svg></div></section>
  <section class="grid g2"><div class="card"><h3>Termin berikutnya</h3>${next?`<p><b>${esc(next.name)}</b> · ${pc(next.pct)} = ${rp(next.pct*c.kontrak/100)}<br><span class="meta">${esc(next.cond)} · status: ${esc(next.status)}</span></p>`:'<p class="meta">Semua termin lunas.</p>'}<p class="meta">Diterima ${jt(paid)} dari ${jt(c.kontrak)}</p></div>
  <div class="card"><h3>Laporan harian terakhir</h3>${d?`<p><b>${fdate(d.date)}</b> · ${esc(d.weather)} · ${esc(d.tukang)} tukang, ${esc(d.pekerja)} pekerja<br>${esc(d.work)}</p>${d.issue?`<p class="wrn">Kendala: ${esc(d.issue)}</p>`:''}`:'<p class="meta">Belum ada laporan. Isi di tab Laporan harian.</p>'}</div></section>
  ${isAdmin()?vendorAccess(p):''}`;
}

function vRab(p,c){
  const secs=p.sections||[],items=p.items||[];
  const rows=secs.map((s,si)=>{
    const its=items.filter(i=>i.sec===s.id);
    return `<tr class="sec"><td>${String.fromCharCode(65+si)}</td><td colspan="5"><input data-k="sec:${s.id}:name" value="${esc(s.name)}" aria-label="Nama kelompok"></td><td class="num">${rp(c.secJ[s.id])}</td><td class="num">${pc(c.w[s.id]*100)}</td><td style="white-space:nowrap"><button class="btn sm" data-act="addItem" data-id="${s.id}">+ item</button> <button class="btn sm ghost" data-act="delSec" data-id="${s.id}">${delArm==='s'+s.id?'Yakin hapus?':'Hapus'}</button></td></tr>`+
    its.map((i,n)=>`<tr><td class="meta">${n+1}</td><td><input data-k="item:${i.id}:name" value="${esc(i.name)}" aria-label="Uraian" style="min-width:200px"></td><td><input class="num" data-k="item:${i.id}:vol" value="${nf(i.vol)}" inputmode="decimal" style="width:80px" aria-label="Volume"></td><td><input data-k="item:${i.id}:unit" value="${esc(i.unit)}" style="width:64px" aria-label="Satuan"></td><td><input class="num" data-k="item:${i.id}:price" value="${nf(i.price)}" inputmode="numeric" style="width:120px" aria-label="Harga jual"></td><td><input class="num" data-k="item:${i.id}:cost" value="${nf(i.cost)}" inputmode="numeric" style="width:120px" aria-label="Harga RAP"></td><td class="num">${rp(i.vol*i.price)}</td><td class="num meta">${c.jual?pc(i.vol*i.price/c.jual*100):''}</td><td><button class="btn sm ghost" data-act="delItem" data-id="${i.id}" aria-label="Hapus item">✕</button></td></tr>`).join('')}).join('');
  return `<section style="margin-top:0"><header><h2>Data proyek</h2><button class="btn sm ghost" data-act="delProj">${delArm==='p'?'Klik lagi untuk menghapus proyek ini':'Hapus proyek'}</button></header>
  <div class="form"><label>Nama proyek<input data-k="p:name" value="${esc(p.name)}"></label><label>Klien<input data-k="p:client" value="${esc(p.client)}"></label><label>Lokasi<input data-k="p:location" value="${esc(p.location)}"></label><label>Tanggal mulai<input type="date" data-k="p:startDate" value="${esc(p.startDate)}"></label><label>PPN (%)<input data-k="p:ppn" value="${nf(p.ppn)}" inputmode="decimal"></label></div>
  <h3 style="margin:16px 0 8px">Untuk invoice & kwitansi</h3><div class="form"><label>Nama perusahaan / keterangan klien<input data-k="p:clientOrg" value="${esc(p.clientOrg)}" placeholder="mis. Owner Tarumanegara Kav D"></label><label>Alamat klien<input data-k="p:clientAddress" value="${esc(p.clientAddress)}"></label><label>Telp/HP klien<input data-k="p:clientPhone" value="${esc(p.clientPhone)}"></label><label>Uraian pekerjaan di invoice<input data-k="p:jobDesc" value="${esc(p.jobDesc)}" placeholder="mis. Pembangunan Rumah 2 Lt"></label><label>Nilai kontrak disepakati (Rp, kosongkan bila = RAB)<input data-k="p:contractValue" value="${p.contractValue?nf(p.contractValue):''}" inputmode="numeric"></label></div></section>
  <section><header><h2>Rencana Anggaran Biaya</h2><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn sm" data-act="rapPct">Set RAP = % harga jual</button><button class="btn sm" data-act="copyRab">Salin ke Excel</button><button class="btn sm" data-act="addSec">+ Kelompok pekerjaan</button></div></header>
  <div class="scroll"><table><thead><tr><th>No</th><th>Uraian pekerjaan</th><th>Volume</th><th>Sat</th><th class="num">Harga jual</th><th class="num">Harga RAP</th><th class="num">Jumlah jual</th><th class="num">Bobot</th><th></th></tr></thead><tbody>${rows}</tbody>
  <tfoot><tr class="foot"><td></td><td colspan="5">Jumlah biaya pekerjaan</td><td class="num">${rp(c.jual)}</td><td></td><td></td></tr><tr class="foot"><td></td><td colspan="5">PPN ${nf(p.ppn)}%</td><td class="num">${rp(c.ppn)}</td><td></td><td></td></tr><tr class="foot"><td></td><td colspan="5">Total RAB${p.ppn?' + PPN':''}</td><td class="num">${rp(c.jual+c.ppn)}</td><td></td><td></td></tr><tr class="foot"><td></td><td colspan="5">Dibulatkan</td><td class="num">${rp(c.bulat)}</td><td></td><td></td></tr>${p.contractValue>0?`<tr class="foot"><td></td><td colspan="5">Nilai kontrak disepakati (dipakai untuk termin)</td><td class="num">${rp(c.kontrak)}</td><td></td><td></td></tr>`:''}<tr class="foot"><td></td><td colspan="5" class="meta">Total RAP (biaya internal) · margin</td><td class="num meta">${rp(c.rap)} · ${pc(c.nilai?(c.nilai-c.rap)/c.nilai*100:0)}</td><td></td><td></td></tr></tfoot></table></div>
  <p class="note">Harga template adalah contoh dari analisa AHSP dan perkiraan pasar. Sesuaikan dengan harga daerah Anda. RAP awal = 88% harga jual. Perubahan tersimpan otomatis.</p></section>`;
}

function vProg(p,c){
  const secs=p.sections||[],last=sub.op[0]?.pcts||{},k=kpis(p,c);
  const opRows=secs.map(s=>`<tr><td data-l="Pekerjaan">${esc(s.name)}</td><td class="num" data-l="Bobot">${pc(c.w[s.id]*100)}</td><td class="num" data-l="Opname lalu">${pc(last[s.id]||0)}</td><td data-l="Selesai (%)"><input name="o_${s.id}" value="${nf(last[s.id]||0)}" inputmode="decimal" class="num" style="width:90px"></td></tr>`).join('');
  const gRows=secs.map(s=>`<tr><td>${esc(s.name)}</td><td><input class="num" data-k="sec:${s.id}:start" value="${s.start}" inputmode="numeric" style="width:60px" aria-label="Minggu mulai"></td><td><input class="num" data-k="sec:${s.id}:end" value="${s.end}" inputmode="numeric" style="width:60px" aria-label="Minggu selesai"></td><td style="width:45%"><div class="gantt"><i style="left:${(s.start-1)/c.weeks*100}%;width:${(s.end-s.start+1)/c.weeks*100}%"></i></div></td></tr>`).join('');
  const hist=sub.op.map(o=>{const w=weekOf(p,o.date),pl=planAt(p,c,w),dv=(o.realPct||0)-pl;return `<tr><td data-l="Tanggal">${fdate(o.date)}</td><td class="num" data-l="Minggu">${w}</td><td class="num" data-l="Rencana">${pc(pl)}</td><td class="num" data-l="Realisasi">${pc(o.realPct)}</td><td class="num ${dvc(dv)}" data-l="Deviasi">${sgn(dv)}</td><td data-l="Catatan">${esc(o.note)}</td><td><button class="btn sm ghost" data-act="delOp" data-id="${o.id}">${delArm==='o'+o.id?'Yakin?':'Hapus'}</button></td></tr>`}).join('');
  return `<div class="grid g4"><div class="card kpi"><span>Minggu ke</span><b>${k.wk} / ${c.weeks}</b></div><div class="card kpi"><span>Rencana</span><b>${pc(k.pl)}</b></div><div class="card kpi"><span>Realisasi</span><b>${pc(k.re)}</b></div><div class="card kpi"><span>Deviasi</span><b class="${dvc(k.dv)}">${sgn(k.dv)}</b></div></div>
  <section><header><h2>Kurva S</h2><div class="legend"><span><i style="background:var(--steel)"></i>Rencana</span><span><i style="background:var(--brick)"></i>Realisasi</span></div></header><div class="fig" data-curve><svg role="img" aria-label="Kurva S"></svg></div></section>
  <section><header><h2>Input opname progres</h2></header><form data-form="op" class="card"><div class="form" style="margin-bottom:12px"><label>Tanggal opname<input type="date" name="date" value="${today()}" required></label><label style="grid-column:span 2">Catatan<input name="note" placeholder="mis. cor plat lantai 2 selesai"></label></div>
  <table class="stack"><thead><tr><th>Kelompok pekerjaan</th><th class="num">Bobot</th><th class="num">Opname lalu</th><th>Selesai (%)</th></tr></thead><tbody>${opRows}</tbody></table><p><button class="btn pri">Simpan opname</button></p><p class="note">Catatan opname ikut terlihat oleh vendor yang punya akses ke proyek ini.</p></form></section>
  <section><header><h2>Riwayat opname</h2></header>${hist?`<table class="stack"><thead><tr><th>Tanggal</th><th class="num">Minggu</th><th class="num">Rencana</th><th class="num">Realisasi</th><th class="num">Deviasi</th><th>Catatan</th><th></th></tr></thead><tbody>${hist}</tbody></table>`:'<p class="meta">Belum ada opname.</p>'}</section>
  <section><header><h2>Jadwal pelaksanaan (minggu)</h2></header><div class="scroll"><table><thead><tr><th>Kelompok pekerjaan</th><th>Mulai</th><th>Selesai</th><th>Bagan</th></tr></thead><tbody>${gRows}</tbody></table></div><p class="note">Bobot tiap kelompok dihitung dari nilai RAB. Rencana Kurva S = bobot × porsi minggu yang sudah lewat.</p></section>`;
}

function vFin(p,c){
  const k=kpis(p,c),tm=p.termins||[];
  const sumBy=s=>tm.filter(t=>t.status===s).reduce((a,t)=>a+t.pct,0)*c.kontrak/100;
  const lunas=sumBy('Lunas'),tagih=sumBy('Ditagih');
  const tRows=tm.map(t=>`<tr><td data-l="Tahap"><input data-k="term:${t.id}:name" value="${esc(t.name)}"></td><td data-l="Syarat"><input data-k="term:${t.id}:cond" value="${esc(t.cond)}"></td><td data-l="%"><input class="num" data-k="term:${t.id}:pct" value="${nf(t.pct)}" style="width:60px" inputmode="decimal"></td><td class="num" data-l="Nilai">${rp(t.pct*c.kontrak/100)}</td><td data-l="Status"><select data-k="term:${t.id}:status">${STAT.map(s=>`<option ${s===t.status?'selected':''}>${s}</option>`).join('')}</select></td><td data-l="Invoice" style="white-space:nowrap"><button class="btn sm" data-act="inv" data-id="${t.id}">Invoice PDF</button>${t.status==='Lunas'?` <button class="btn sm" data-act="kw" data-id="${t.id}">Kwitansi PDF</button>`:''}${t.invNo?`<div class="meta">${esc(t.invNo)}</div>`:''}${t.kwNo&&t.kwNo!==t.invNo?`<div class="meta">${esc(t.kwNo)}</div>`:''}</td><td><button class="btn sm ghost" data-act="delTerm" data-id="${t.id}" aria-label="Hapus termin">✕</button></td></tr>`).join('');
  const tp=tm.reduce((a,t)=>a+t.pct,0);
  const spSec={};sub.exp.forEach(e=>spSec[e.sec]=(spSec[e.sec]||0)+(e.amount||0));
  const bRows=(p.sections||[]).map(s=>{const r=c.secR[s.id]||0,a=spSec[s.id]||0,u=r?a/r*100:0;return `<tr><td data-l="Pekerjaan">${esc(s.name)}</td><td class="num" data-l="RAP">${rp(r)}</td><td class="num" data-l="Aktual">${rp(a)}</td><td data-l="Terpakai" style="min-width:140px"><div class="bar" style="margin:0"><i style="width:${Math.min(100,u)}%;background:${u>100?'var(--brick)':u>90?'var(--warn)':'var(--ok)'}"></i></div><span class="meta">${pc(u)}</span></td></tr>`}).join('')+(spSec.umum?`<tr><td>Umum / overhead</td><td class="num">–</td><td class="num">${rp(spSec.umum)}</td><td></td></tr>`:'');
  const secName=id=>id==='umum'?'Umum / overhead':(p.sections||[]).find(s=>s.id===id)?.name||'–';
  const eRows=sub.exp.slice(0,200).map(e=>`<tr><td data-l="Tanggal">${fdate(e.date)}</td><td data-l="Pekerjaan">${esc(secName(e.sec))}</td><td data-l="Kategori">${esc(e.cat)}</td><td data-l="Keterangan">${esc(e.desc)}</td><td class="num" data-l="Jumlah">${rp(e.amount)}</td><td><button class="btn sm ghost" data-act="delExp" data-id="${e.id}">${delArm==='e'+e.id?'Yakin?':'Hapus'}</button></td></tr>`).join('');
  return `<div class="grid g4"><div class="card kpi"><span>Uang diterima (termin lunas)</span><b>${jt(lunas)}</b><span>ditagih, belum dibayar: ${jt(tagih)}</span></div><div class="card kpi"><span>Biaya aktual</span><b>${jt(k.sp)}</b><span>RAP ${jt(c.rap)}</span></div><div class="card kpi"><span>Kas proyek (diterima − biaya)</span><b class="${lunas-k.sp<0?'bad':''}">${jt(lunas-k.sp)}</b></div><div class="card kpi"><span>Proyeksi laba akhir</span><b class="${k.laba<0?'bad':''}">${jt(k.laba)}</b><span>biaya aktual + sisa RAP; bila biaya belum dicatat, dianggap sesuai RAP</span></div></div>
  <section><header><h2>Catat pengeluaran</h2></header><form data-form="exp" class="card form"><label>Tanggal<input type="date" name="date" value="${today()}" required></label><label>Kelompok pekerjaan<select name="sec">${(p.sections||[]).map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('')}<option value="umum">Umum / overhead</option></select></label><label>Kategori<select name="cat">${CATS.map(x=>`<option>${x}</option>`).join('')}</select></label><label>Keterangan<input name="desc" placeholder="mis. semen 50 sak" required></label><label>Jumlah (Rp)<input name="amount" inputmode="numeric" required></label><button class="btn pri">Simpan</button></form></section>
  <section><header><h2>Termin pembayaran</h2><button class="btn sm" data-act="addTerm">+ Termin</button></header><table class="stack"><thead><tr><th>Tahap</th><th>Syarat penagihan</th><th>%</th><th class="num">Nilai</th><th>Status</th><th>Invoice</th><th></th></tr></thead><tbody>${tRows}</tbody></table><p class="note ${Math.abs(tp-100)>0.01?'bad':''}">Total persentase termin: ${pc(tp)}${Math.abs(tp-100)>0.01?' (harus 100%)':''}</p>${company.name?'':'<p class="note wrn">Isi Data perusahaan (di halaman Semua proyek) supaya kop dan rekening muncul di invoice.</p>'}</section>
  <section><header><h2>Anggaran vs aktual per pekerjaan</h2></header><table class="stack"><thead><tr><th>Kelompok pekerjaan</th><th class="num">RAP</th><th class="num">Aktual</th><th>Terpakai</th></tr></thead><tbody>${bRows}</tbody></table></section>
  <section><header><h2>Daftar pengeluaran</h2></header>${eRows?`<table class="stack"><thead><tr><th>Tanggal</th><th>Pekerjaan</th><th>Kategori</th><th>Keterangan</th><th class="num">Jumlah</th><th></th></tr></thead><tbody>${eRows}</tbody></table>`:'<p class="meta">Belum ada pengeluaran.</p>'}</section>`;
}

function waText(p,d){return `*Laporan harian ${p.name}*\n${fdate(d.date)} · ${d.weather}\nTenaga: ${d.tukang} tukang, ${d.pekerja} pekerja\nPekerjaan: ${d.work}${d.material?`\nMaterial masuk: ${d.material}`:''}${d.issue?`\nKendala: ${d.issue}`:''}`}
function vDaily(p){
  const list=sub.daily.map(d=>`<div class="rep"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><b>${fdate(d.date)} · ${esc(d.weather)}</b><span><button class="btn sm" data-act="copyWa" data-id="${d.id}">Salin untuk WhatsApp</button> <button class="btn sm ghost" data-act="delDaily" data-id="${d.id}">${delArm==='d'+d.id?'Yakin?':'Hapus'}</button></span></div>
  <p>${esc(d.tukang)} tukang · ${esc(d.pekerja)} pekerja</p><p>${esc(d.work)}</p>${d.material?`<p class="meta">Material masuk: ${esc(d.material)}</p>`:''}${d.issue?`<p class="wrn">Kendala: ${esc(d.issue)}</p>`:''}${(d.photos||[]).length?`<div class="ph">${d.photos.filter(x=>SID.test(x)).map(x=>`<a target="_blank" rel="noopener"><img data-ph="${x}" alt="Foto lapangan"></a>`).join('')}</div>`:''}</div>`).join('');
  return `${weeklyBox(p)}<section><header><h2>Isi laporan hari ini</h2></header><form data-form="daily" class="card"><div class="form"><label>Tanggal<input type="date" name="date" value="${today()}" required></label><label>Cuaca<select name="weather"><option>Cerah</option><option>Berawan</option><option>Hujan</option></select></label><label>Jumlah tukang<input name="tukang" inputmode="numeric" value="0"></label><label>Jumlah pekerja<input name="pekerja" inputmode="numeric" value="0"></label></div>
  <div class="form" style="margin-top:10px"><label>Pekerjaan yang dilaksanakan<textarea name="work" rows="2" required></textarea></label><label>Material masuk<textarea name="material" rows="2"></textarea></label><label>Kendala / catatan<textarea name="issue" rows="2"></textarea></label></div><label style="margin-top:10px">Foto lapangan (maks. 6, otomatis diperkecil)<input type="file" name="photos" accept="image/*" multiple></label><p><button class="btn pri">Simpan laporan</button></p></form></section>
  <section><header><h2>Riwayat laporan</h2></header>${list||'<p class="meta">Belum ada laporan.</p>'}</section>`;
}

function curve(el,p,c){
  const ops=[...sub.op].sort((a,b)=>a.date<b.date?-1:1),svg=el.querySelector('svg');
  const f=()=>{const W=el.clientWidth,H=el.clientHeight;if(!W)return;const n=c.weeks,L=44,R=18,T=14,B=30,X=w=>L+(W-L-R)*w/n,Y=v=>T+(H-T-B)*(1-v/100);
    let s='';for(let v=0;v<=100;v+=25)s+=`<line x1="${L}" x2="${W-R}" y1="${Y(v)}" y2="${Y(v)}" class="g"/><text x="${L-8}" y="${Y(v)+4}" text-anchor="end" class="t">${v}%</text>`;
    const st=Math.max(1,Math.ceil(n/(W<520?4:10)));for(let w=0;w<=n;w+=st)s+=`<text x="${X(w)}" y="${H-8}" text-anchor="middle" class="t">${w?'M'+w:'0'}</text>`;
    const pts=[];for(let w=0;w<=n;w++)pts.push(X(w)+','+Y(planAt(p,c,w)));s+=`<polyline points="${pts.join(' ')}" class="pl"/>`;
    const wn=weekOf(p,today());if(wn>0&&wn<=n)s+=`<line x1="${X(wn)}" x2="${X(wn)}" y1="${T}" y2="${H-B}" class="now"/><text x="${X(wn)+5}" y="${T+12}" class="t">hari ini</text>`;
    if(ops.length){const r=[[0,0],...ops.map(o=>[Math.min(n,Math.max(0,weekOf(p,o.date))),o.realPct||0])];s+=`<polyline points="${r.map(q=>X(q[0])+','+Y(q[1])).join(' ')}" class="rl"/>`+r.slice(1).map(q=>`<circle cx="${X(q[0])}" cy="${Y(q[1])}" r="4" class="rd"/>`).join('')}
    svg.innerHTML=s};
  const ro=new ResizeObserver(f);ro.observe(el);ros.push(ro);
}

/* ---------- tampilan vendor: hanya progres ---------- */
function vcalc(pr){const w={};(pr.sections||[]).forEach(s=>w[s.id]=s.w||0);return {w,weeks:Math.max(1,pr.weeks||1)}}
function drawVendorHome(){
  $('#top').innerHTML=`<div class="row"><div><small>Papan proyek kontraktor · akses vendor</small><h1>Proyek Anda</h1></div></div>`;
  if(!P.length){$('#view').innerHTML=`<div class="empty"><h2>Belum ada proyek</h2><p>Akun Anda belum diberi akses ke proyek mana pun, atau datanya sedang disiapkan. Hubungi kontraktor yang mengundang Anda.</p></div>`;return}
  $('#view').innerHTML=`<div class="grid g2">${P.map(pr=>{const c=vcalc(pr),wk=Math.min(c.weeks,Math.max(0,weekOf(pr,today()))),pl=planAt(pr,c,wk),re=pr.realPct||0,dv=re-pl;
    return `<a class="proj" href="#p-${esc(pr.id)}"><div style="display:flex;justify-content:space-between;gap:8px"><h3>${esc(pr.name)}</h3><span class="tag">${esc(pr.kind||'')}</span></div><div class="meta">${pr.location?esc(pr.location)+' · ':''}minggu ${wk} dari ${c.weeks}</div>
    <div class="meta" style="margin-top:10px">Rencana ${pc(pl)}</div><div class="bar"><i style="width:${Math.min(100,pl)}%;background:var(--steel)"></i></div>
    <div class="meta">Realisasi ${pc(re)} · <span class="${dvc(dv)}">deviasi ${sgn(dv)}</span></div><div class="bar"><i style="width:${Math.min(100,re)}%;background:var(--brick)"></i></div></a>`}).join('')}</div><p class="note">Halaman ini hanya menampilkan progres pekerjaan.</p>`;
}
function drawVendorProject(){
  const pr=proj(),c=vcalc(pr),wk=Math.min(c.weeks,Math.max(0,weekOf(pr,today()))),pl=planAt(pr,c,wk),last=sub.op[0],re=last?last.realPct||0:(pr.realPct||0),dv=re-pl,pcts=last&&last.pcts||{};
  const secs=pr.sections||[];
  $('#top').innerHTML=`<div class="row"><div><small><a href="#start">← Proyek Anda</a> · ${esc(pr.kind||'')}</small><h1>${esc(pr.name)}</h1><div class="meta" style="color:#aab1b8">${pr.location?esc(pr.location)+' · ':''}mulai ${fdate(pr.startDate)} · ${c.weeks} minggu</div></div></div>`;
  const rows=secs.map(s=>{const d=Math.min(100,pcts[s.id]||0);return `<tr><td data-l="Pekerjaan">${esc(s.name)}</td><td class="num" data-l="Jadwal">M${s.start}–M${s.end}</td><td class="num" data-l="Bobot">${pc(s.w*100)}</td><td data-l="Selesai" style="min-width:150px"><div class="bar" style="margin:0"><i style="width:${d}%;background:var(--brick)"></i></div><span class="meta">${pc(d)}</span></td></tr>`}).join('');
  const gRows=secs.map(s=>`<tr><td>${esc(s.name)}</td><td class="num">M${s.start}–M${s.end}</td><td style="width:55%"><div class="gantt"><i style="left:${(s.start-1)/c.weeks*100}%;width:${(s.end-s.start+1)/c.weeks*100}%"></i></div></td></tr>`).join('');
  const hist=sub.op.map(o=>{const w=weekOf(pr,o.date),p2=planAt(pr,c,w),d2=(o.realPct||0)-p2;return `<tr><td data-l="Tanggal">${fdate(o.date)}</td><td class="num" data-l="Minggu">${w}</td><td class="num" data-l="Rencana">${pc(p2)}</td><td class="num" data-l="Realisasi">${pc(o.realPct)}</td><td class="num ${dvc(d2)}" data-l="Deviasi">${sgn(d2)}</td><td data-l="Catatan">${esc(o.note)}</td></tr>`}).join('');
  $('#view').innerHTML=`<div class="grid g4"><div class="card kpi"><span>Minggu ke</span><b>${wk} / ${c.weeks}</b></div><div class="card kpi"><span>Rencana</span><b>${pc(pl)}</b></div><div class="card kpi"><span>Realisasi</span><b>${pc(re)}</b></div><div class="card kpi"><span>Deviasi</span><b class="${dvc(dv)}">${sgn(dv)}</b></div></div>
  <section><header><h2>Kurva S</h2><div class="legend"><span><i style="background:var(--steel)"></i>Rencana</span><span><i style="background:var(--brick)"></i>Realisasi</span></div></header><div class="fig" data-curve><svg role="img" aria-label="Kurva S rencana dan realisasi"></svg></div></section>
  <section><header><h2>Progres per pekerjaan</h2><span class="meta">${last?'opname '+fdate(last.date):'belum ada opname'}</span></header><table class="stack"><thead><tr><th>Kelompok pekerjaan</th><th class="num">Jadwal</th><th class="num">Bobot</th><th>Selesai</th></tr></thead><tbody>${rows}</tbody></table></section>
  <section><header><h2>Jadwal pelaksanaan</h2></header><div class="scroll"><table><thead><tr><th>Kelompok pekerjaan</th><th class="num">Minggu</th><th>Bagan</th></tr></thead><tbody>${gRows}</tbody></table></div></section>
  <section><header><h2>Riwayat opname</h2></header>${hist?`<table class="stack"><thead><tr><th>Tanggal</th><th class="num">Minggu</th><th class="num">Rencana</th><th class="num">Realisasi</th><th class="num">Deviasi</th><th>Catatan</th></tr></thead><tbody>${hist}</tbody></table>`:'<p class="meta">Belum ada opname.</p>'}</section>`;
  document.querySelectorAll('.fig[data-curve]').forEach(el=>curve(el,pr,c));
}

/* ---------- pengguna & akses (admin) ---------- */
function drawUsers(){
  $('#top').innerHTML=`<div class="row"><div><small><a href="#start">← Semua proyek</a></small><h1>Pengguna & akses</h1></div><div><button class="btn pri" data-act="addMember">+ Tambah pengguna</button></div></div>`;
  const pn=id=>P.find(p=>p.id===id)?.name;
  const order={admin:0,tim:1,vendor:2};
  const rows=[...members].sort((a,b)=>(order[a.role]??9)-(order[b.role]??9)||a.id.localeCompare(b.id)).map(m=>`<tr><td data-l="Nama"><b>${esc(m.name||'–')}</b>${m.company?`<div class="meta">${esc(m.company)}</div>`:''}</td><td data-l="Email">${esc(m.id)}</td><td data-l="Peran"><span class="tag ${esc(m.role)}">${esc(ROLES[m.role]||m.role)}</span></td><td data-l="Akses proyek">${m.role==='vendor'?((m.projects||[]).map(pn).filter(Boolean).map(esc).join(', ')||'<span class="bad">belum ada proyek</span>'):'<span class="meta">Semua proyek</span>'}</td><td style="white-space:nowrap"><button class="btn sm" data-act="editMember" data-id="${esc(m.id)}">Ubah</button> ${m.id===me.email?'<span class="meta">(Anda)</span>':`<button class="btn sm ghost" data-act="delMember" data-id="${esc(m.id)}">${delArm==='m'+m.id?'Yakin hapus?':'Hapus'}</button>`}</td></tr>`).join('');
  $('#view').innerHTML=`<div class="grid g2"><div class="card"><h3>Cara memberi akses</h3><p class="meta">1. Tambahkan email orangnya di sini dan pilih perannya.<br>2. Kirimkan alamat aplikasi ini: <b>${esc(location.origin)}</b><br>3. Mereka masuk dengan akun Google, atau daftar dengan email dan password, memakai email yang sama persis dengan yang didaftarkan di sini.</p></div>
  <div class="card"><h3>Peran</h3><p class="meta"><b>Admin</b>: semua data dan kelola pengguna.<br><b>Tim internal</b>: semua proyek, RAB, keuangan, laporan; tidak bisa kelola pengguna.<br><b>Vendor</b>: hanya progres (Kurva S, jadwal, opname) proyek yang dicentang. Tidak melihat harga, RAB, keuangan, data klien, atau laporan harian.</p></div></div>
  <section><header><h2>Daftar pengguna</h2></header>${rows?`<table class="stack"><thead><tr><th>Nama</th><th>Email</th><th>Peran</th><th>Akses proyek</th><th></th></tr></thead><tbody>${rows}</tbody></table>`:'<p class="meta">Belum ada pengguna.</p>'}</section>
  <section><header><h2>Cadangan & pindah data</h2></header><div class="card"><p class="meta">Ekspor menyimpan semua proyek, opname, pengeluaran, laporan harian, data perusahaan, dan daftar pengguna ke satu file JSON (foto tidak ikut). Impor menambahkan data dari file seperti itu, termasuk file pindahan dari versi claude.ai. Proyek dengan ID yang sama akan ditimpa.</p><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn" data-act="export">Ekspor data (JSON)</button><label class="btn" style="display:inline-flex;align-items:center;color:var(--ink);font-weight:600">Impor data…<input type="file" id="importFile" accept="application/json,.json" hidden></label></div></div></section>`;
}
function memberDialog(m){
  const isNew=!m;m=m||{role:'vendor',projects:[]};const self=m.id===me.email;
  $('#dlg').innerHTML=`<div class="ov"><form class="card" data-form="member" data-id="${esc(m.id||'')}"><h2>${isNew?'Tambah pengguna':'Ubah pengguna'}</h2><div class="grid" style="margin-top:12px">
  <label>Email login (akun Google atau email)<input name="email" type="email" required value="${esc(m.id||'')}" ${isNew?'':'readonly'}></label>
  <label>Nama<input name="name" value="${esc(m.name)}" required></label>
  <label>Peran<select name="role" ${self?'disabled':''}>${Object.entries(ROLES).map(([k,l])=>`<option value="${k}" ${k===m.role?'selected':''}>${l}</option>`).join('')}</select>${self?'<span class="note">Anda tidak bisa mengubah peran sendiri.</span>':''}</label>
  <label data-vendor>Perusahaan / keterangan<input name="company" value="${esc(m.company)}" placeholder="mis. CV Baja Ringan Jaya"></label>
  <div data-vendor><label>Proyek yang boleh dilihat progresnya</label><div class="chk">${P.length?P.map(p=>`<label><input type="checkbox" name="proj" value="${esc(p.id)}" ${(m.projects||[]).includes(p.id)?'checked':''}>${esc(p.name)}</label>`).join(''):'<span class="meta">Belum ada proyek.</span>'}</div></div>
  </div><p style="display:flex;gap:8px;justify-content:flex-end"><button type="button" class="btn" data-act="close">Batal</button><button class="btn pri">Simpan</button></p></form></div>`;
  toggleVendorFields();$('#dlg input:not([readonly])').focus();
}
function toggleVendorFields(){const f=$('[data-form=member]');if(!f)return;const v=f.role.value==='vendor';f.querySelectorAll('[data-vendor]').forEach(x=>x.style.display=v?'':'none')}

/* ---------- foto (disimpan di Firestore supaya tetap paket gratis) ---------- */
async function encodeImage(file,max,png){
  const bmp=await createImageBitmap(file);let m=max,q=0.75,url='';
  for(let i=0;i<5;i++){
    const k=Math.min(1,m/Math.max(bmp.width,bmp.height)),cv=document.createElement('canvas');cv.width=Math.round(bmp.width*k);cv.height=Math.round(bmp.height*k);
    const g=cv.getContext('2d');if(!png){g.fillStyle='#fff';g.fillRect(0,0,cv.width,cv.height)}g.drawImage(bmp,0,0,cv.width,cv.height);
    url=png?cv.toDataURL('image/png'):cv.toDataURL('image/jpeg',q);if(url.length<850000)return url;
    m=Math.round(m*0.75);q=Math.max(0.5,q-0.1);if(png&&i>=1)png=false;
  }
  return url;
}
async function putPhoto(file,{max=1280,png=false}={}){
  const data=await encodeImage(file,max,png),id=uid('f');
  await db.doc('photos/'+id).set({data,created:nowIso(),pid:curId||''});return id;
}
const phCache=new Map();
function photoUrl(id){
  if(!SID.test(id||''))return Promise.resolve(null);
  if(!phCache.has(id))phCache.set(id,db.doc('photos/'+id).get().then(async s=>{if(!s.exists)return null;const b=await (await fetch(s.data().data)).blob();return URL.createObjectURL(b)}).catch(()=>{phCache.delete(id);return null}));
  return phCache.get(id);
}
async function photoBlob(id){const u=await photoUrl(id);return u?(await fetch(u)).blob():null}
function fillPhotos(){document.querySelectorAll('img[data-ph]').forEach(async im=>{const u=await photoUrl(im.dataset.ph);if(u){im.src=u;const a=im.closest('a');if(a)a.href=u}})}
function delPhotos(ids){(ids||[]).filter(x=>SID.test(x)).forEach(x=>{db.doc('photos/'+x).delete().catch(()=>{});phCache.delete(x)})}

/* ---------- PDF ---------- */
function loadPdf(){return jsp||(jsp=import('jspdf').then(m=>m.jsPDF).catch(e=>{jsp=null;throw e}))}
function saveBlob(filename,blob){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),20000)}
function terbilang(n){
  const a=['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];
  const f=n=>n<12?a[n]:n<20?f(n-10)+' belas':n<100?f(Math.floor(n/10))+' puluh '+f(n%10):n<200?'seratus '+f(n-100):n<1000?f(Math.floor(n/100))+' ratus '+f(n%100):n<2000?'seribu '+f(n-1000):n<1e6?f(Math.floor(n/1000))+' ribu '+f(n%1000):n<1e9?f(Math.floor(n/1e6))+' juta '+f(n%1e6):n<1e12?f(Math.floor(n/1e9))+' miliar '+f(n%1e9):f(Math.floor(n/1e12))+' triliun '+f(n%1e12);
  const r=f(n).replace(/\s+/g,' ').trim();return n?r[0].toUpperCase()+r.slice(1):'Nol';
}
const isoD=x=>{const z=new Date(x);z.setMinutes(z.getMinutes()-z.getTimezoneOffset());return z.toISOString().slice(0,10)};
function weekRange(p,w){const s=new Date((p.startDate||today())+'T00:00').getTime()+(w-1)*6048e5;return [isoD(s),isoD(s+6*864e5)]}
function pdfHead(d,co,title,color){
  let y=20;d.setFont('helvetica','bold');d.setFontSize(14);d.setTextColor(0);d.text(co.name||'Nama Perusahaan',20,y);
  d.setFont('helvetica','normal');d.setFontSize(8.5);
  [co.address,[co.phone,co.email].filter(Boolean).join('  |  ')].filter(Boolean).forEach(l=>{const L=d.splitTextToSize(l,100);d.text(L,20,y+5);y+=L.length*4.2});
  d.setFont('helvetica','bold');d.setFontSize(title.length>12?15:22);d.setTextColor(...color);d.text(title,190,22,{align:'right'});d.setTextColor(0);
  return Math.max(y+4,30);
}
function pdfFoot(d){const n=d.getNumberOfPages();for(let i=1;i<=n;i++){d.setPage(i);d.setFont('helvetica','normal');d.setFontSize(7.5);d.setTextColor(130);d.text('Dibuat dengan Papan Proyek Kontraktor',20,288);d.text(`Halaman ${i} dari ${n}`,190,288,{align:'right'});d.setTextColor(0)}}
async function imgData(id){
  try{const b=await photoBlob(id);if(!b)return null;const bmp=await createImageBitmap(b),k=Math.min(1,900/Math.max(bmp.width,bmp.height)),cv=document.createElement('canvas');
    cv.width=Math.round(bmp.width*k);cv.height=Math.round(bmp.height*k);cv.getContext('2d').drawImage(bmp,0,0,cv.width,cv.height);return {url:cv.toDataURL('image/jpeg',0.8),w:cv.width,h:cv.height}}catch{return null}
}
async function weekly(p,w){
  const J=await loadPdf(),c=calc(p),co=company||{},[a,z]=weekRange(p,w);
  const ops=[...sub.op].filter(o=>o.date<=z).sort((x,y)=>x.date<y.date?-1:1),op=ops.at(-1),pl=planAt(p,c,w),re=op?op.realPct||0:0,dv=re-pl;
  const days=sub.daily.filter(x=>x.date>=a&&x.date<=z).sort((x,y)=>x.date<y.date?-1:1);
  const d=new J({unit:'mm',format:'a4'});let y=pdfHead(d,co,'LAPORAN MINGGUAN',[47,93,124]);
  d.setFont('helvetica','normal');d.setFontSize(9);d.text(`Minggu ke-${w}  |  ${fdate(a)} - ${fdate(z)}`,190,29,{align:'right'});
  d.setDrawColor(47,93,124);d.setLineWidth(0.8);d.line(20,y,190,y);y+=8;
  const ensure=h=>{if(y+h>280){d.addPage();y=20}};
  d.setFont('helvetica','bold');d.setFontSize(13);const T=d.splitTextToSize(p.name||'',170);d.text(T,20,y);y+=T.length*5.5;
  d.setFont('helvetica','normal');d.setFontSize(9);d.text([p.client?'Pemilik: '+p.client:'',p.location?'Lokasi: '+p.location:'',`Mulai ${fdate(p.startDate)}  |  durasi rencana ${c.weeks} minggu`].filter(Boolean),20,y+1);y+=16;
  [['Rencana kumulatif',pc(pl),[47,93,124]],['Realisasi (opname)',pc(re),[180,67,43]],['Deviasi',sgn(dv),dv<-5?[180,67,43]:dv<0?[168,111,18]:[44,122,76]]].forEach(([l,v,col],i)=>{
    const x=20+i*58;d.setFillColor(242,243,244);d.rect(x,y,54,18,'F');d.setFontSize(8);d.setTextColor(95);d.text(l,x+4,y+6);d.setFont('helvetica','bold');d.setFontSize(15);d.setTextColor(...col);d.text(v,x+4,y+14);d.setFont('helvetica','normal');d.setTextColor(0)});
  y+=22;d.setFontSize(8);d.setTextColor(95);d.text(op?`Opname terakhir: ${fdate(op.date)}${op.note?' - '+op.note:''}`:'Belum ada opname sampai minggu ini.',20,y);d.setTextColor(0);y+=8;
  d.setFont('helvetica','bold');d.setFontSize(11);d.text('Kurva S',20,y);y+=4;
  const bx=30,bw=160,bh=58,by=y,X=k=>bx+bw*k/c.weeks,Y=v=>by+bh*(1-v/100);
  d.setFont('helvetica','normal');d.setFontSize(7);d.setLineWidth(0.15);d.setDrawColor(215);
  for(let v=0;v<=100;v+=25){d.line(bx,Y(v),bx+bw,Y(v));d.setTextColor(110);d.text(v+'%',bx-2,Y(v)+1,{align:'right'})}
  const st=Math.max(1,Math.ceil(c.weeks/12));for(let k=0;k<=c.weeks;k+=st)d.text(k?'M'+k:'0',X(k),by+bh+4,{align:'center'});d.setTextColor(0);
  d.setDrawColor(140);d.setLineDashPattern([0.8,0.8],0);d.line(X(w),by,X(w),by+bh);d.setLineDashPattern([],0);
  d.setDrawColor(47,93,124);d.setLineWidth(0.6);for(let k=1;k<=c.weeks;k++)d.line(X(k-1),Y(planAt(p,c,k-1)),X(k),Y(planAt(p,c,k)));
  const rpts=[[0,0],...ops.map(o=>[Math.min(c.weeks,Math.max(0,weekOf(p,o.date))),o.realPct||0])];d.setDrawColor(180,67,43);d.setFillColor(180,67,43);
  for(let i=1;i<rpts.length;i++){d.line(X(rpts[i-1][0]),Y(rpts[i-1][1]),X(rpts[i][0]),Y(rpts[i][1]));d.circle(X(rpts[i][0]),Y(rpts[i][1]),0.9,'F')}
  y=by+bh+9;d.setFontSize(8);d.setFillColor(47,93,124);d.rect(30,y-2.5,6,1.2,'F');d.text('Rencana',38,y-1.3);d.setFillColor(180,67,43);d.rect(62,y-2.5,6,1.2,'F');d.text('Realisasi',70,y-1.3);d.text(`garis putus-putus = minggu ke-${w}`,100,y-1.3);y+=8;
  ensure(20);d.setFont('helvetica','bold');d.setFontSize(11);d.text('Progres per kelompok pekerjaan',20,y);y+=3;
  d.setFillColor(242,243,244);d.rect(20,y,170,7,'F');d.setFontSize(8.5);['Pekerjaan','Bobot','Selesai','Kontribusi'].forEach((h,i)=>d.text(h,i?[0,130,158,187][i]:23,y+4.8,{align:i?'right':'left'}));y+=7;d.setFont('helvetica','normal');
  (p.sections||[]).forEach(s=>{ensure(7);const done=op?.pcts?.[s.id]||0;d.text(d.splitTextToSize(s.name,95)[0],23,y+4.8);d.text(pc(c.w[s.id]*100),130,y+4.8,{align:'right'});d.text(pc(done),158,y+4.8,{align:'right'});d.text(pc(c.w[s.id]*done),187,y+4.8,{align:'right'});y+=7;d.setDrawColor(225);d.setLineWidth(0.15);d.line(20,y,190,y)});
  y+=8;ensure(16);d.setFont('helvetica','bold');d.setFontSize(11);d.text('Kegiatan minggu ini',20,y);y+=6;d.setFontSize(9);
  if(!days.length){d.setFont('helvetica','normal');d.text('Tidak ada laporan harian pada minggu ini.',20,y);y+=6}
  days.forEach(x=>{const L=d.splitTextToSize(`${x.work}${x.material?'\nMaterial masuk: '+x.material:''}${x.issue?'\nKendala: '+x.issue:''}`,165);ensure(8+L.length*4.3);
    d.setFont('helvetica','bold');d.text(`${fdate(x.date)}  |  ${x.weather}  |  ${x.tukang} tukang, ${x.pekerja} pekerja`,20,y);d.setFont('helvetica','normal');d.text(L,23,y+5);y+=8+L.length*4.3});
  const ph=days.flatMap(x=>(x.photos||[]).map(id=>({id,date:x.date}))).filter(q=>SID.test(q.id)).slice(0,9);
  if(ph.length){y+=4;ensure(52);d.setFont('helvetica','bold');d.setFontSize(11);d.text('Dokumentasi',20,y);y+=4;
    const imgs=await Promise.all(ph.map(q=>imgData(q.id)));let col=0;
    imgs.forEach((im,i)=>{if(col===0)ensure(48);const x=20+col*58,cw=54,ch=40;d.setFillColor(242,243,244);d.rect(x,y,cw,ch,'F');
      if(im){const k=Math.min(cw/im.w,ch/im.h),iw=im.w*k,ih=im.h*k;d.addImage(im.url,'JPEG',x+(cw-iw)/2,y+(ch-ih)/2,iw,ih)}else{d.setFontSize(8);d.setTextColor(120);d.text('Foto tidak dapat dimuat',x+cw/2,y+ch/2,{align:'center'});d.setTextColor(0)}
      d.setFont('helvetica','normal');d.setFontSize(7.5);d.text(fdate(ph[i].date),x,y+ch+3.5);col++;if(col===3){col=0;y+=47}});if(col)y+=47}
  pdfFoot(d);return {blob:d.output('blob'),file:`Laporan-minggu-${w}-${(p.name||'proyek').replace(/[^A-Za-z0-9]+/g,'-').slice(0,40)}.pdf`};
}
async function savePdf(b,make){
  const old=b.textContent;b.disabled=true;b.textContent='Membuat PDF…';
  try{const r=await make();saveBlob(r.file,r.blob);return r}
  catch(err){toast('Gagal membuat PDF. Periksa koneksi lalu coba lagi.');return null}
  finally{b.disabled=false;b.textContent=old}
}
function weeklyBox(p){
  const c=calc(p),now=Math.min(c.weeks,Math.max(1,weekOf(p,today())));
  return `<section style="margin-top:0"><header><h2>Laporan mingguan untuk klien</h2></header><div class="card form"><label>Minggu<select id="wkSel">${Array.from({length:c.weeks},(_,i)=>i+1).map(w=>{const [a,z]=weekRange(p,w);return `<option value="${w}" ${w===now?'selected':''}>Minggu ${w} (${fdate(a)} - ${fdate(z)})</option>`}).join('')}</select></label><button class="btn pri" data-act="weekly">Buat PDF</button></div><p class="note">Berisi progres rencana vs realisasi, Kurva S, progres per pekerjaan, ringkasan laporan harian, dan hingga 9 foto minggu tersebut.</p></section>`;
}

/* ---------- invoice & kwitansi ---------- */
const ROMAN=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
const fdateL=s=>s?new Date(s+'T00:00').toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}):'';
const titleCase=s=>s.replace(/\b\w/g,m=>m.toUpperCase());
const rp2=v=>Math.round(v).toLocaleString('id-ID')+',00';
function docNo(p,t,date){if(t.invNo)return t.invNo;const i=(p.termins||[]).findIndex(x=>x.id===t.id)+1;return `KW/${String(i).padStart(3,'0')}/${ROMAN[+date.slice(5,7)-1]}/${date.slice(0,4)}`}
async function imgAsset(id,jpg){
  if(!id||!SID.test(id))return null;
  try{const b=await photoBlob(id);if(!b)return null;const bmp=await createImageBitmap(b),k=Math.min(1,500/Math.max(bmp.width,bmp.height)),cv=document.createElement('canvas');
    cv.width=Math.round(bmp.width*k);cv.height=Math.round(bmp.height*k);const g=cv.getContext('2d');if(jpg){g.fillStyle='#fff';g.fillRect(0,0,cv.width,cv.height)}g.drawImage(bmp,0,0,cv.width,cv.height);
    return {url:cv.toDataURL(jpg?'image/jpeg':'image/png',0.85),w:cv.width,h:cv.height,f:jpg?'JPEG':'PNG'}}catch{return null}
}
function fitImg(d,im,x,y,w,h,align){if(!im)return;const k=Math.min(w/im.w,h/im.h),iw=im.w*k,ih=im.h*k;d.addImage(im.url,im.f,align==='right'?x+w-iw:x+(w-iw)/2,y+(h-ih)/2,iw,ih)}
async function kop(d,co){
  const logo=await imgAsset(co.logo);
  d.setTextColor(0);d.setFont('helvetica','bold');d.setFontSize(13);d.text(co.name||'Nama Perusahaan',20,20);
  d.setFont('helvetica','normal');d.setFontSize(8.5);let y=25;
  d.splitTextToSize(co.address||'',95).concat(co.phone?['Tel.  '+co.phone]:[]).forEach(l=>{d.text(l,20,y);y+=4});
  fitImg(d,logo,140,10,50,21,'right');
  y=Math.max(y,36);d.setDrawColor(214,137,32);d.setLineWidth(0.7);d.line(20,y,190,y);return y+10;
}
function notes(d,co,y){
  d.setFont('helvetica','normal');d.setFontSize(8);d.text('Catatan:',22,y);
  d.text('1.  Mohon pembayaran ditransfer ke rekening berikut ini :',22,y+5);
  d.text([co.bank||'-','No Rek. '+(co.account||'-'),'a.n. '+(co.accountName||co.name||'-')],28,y+9.5);
  d.text('2.  Pembayaran baru dianggap sah setelah cek/giro telah dicairkan',22,y+24);
}
async function signBlock(d,co,x,y,date){
  const sg=await imgAsset(co.sign,true);d.setFont('courier','bold');d.setFontSize(10);
  d.text(`${co.city||''}${co.city?', ':''}${fdateL(date)}`,x,y);fitImg(d,sg,x+8,y+4,40,22);
  const nm=co.signer||'';d.text(nm,x+28,y+32,{align:'center'});const w=d.getTextWidth(nm);d.setLineWidth(0.3);d.setDrawColor(0);d.line(x+28-w/2,y+33,x+28+w/2,y+33);
  if(co.title){d.setFont('helvetica','normal');d.setFontSize(8.5);d.text(co.title,x+28,y+38,{align:'center'})}
}
function clientLines(p){return [p.clientOrg,p.client?(p.clientOrg?'Attn. ':'')+p.client:'',p.clientAddress,'Telp/HP. '+(p.clientPhone||'')].filter(Boolean)}
const payDesc=(p,t)=>`${t.name} - ${p.jobDesc||p.name||''}`;
async function invoice(p,t){
  const J=await loadPdf(),c=calc(p),co=company||{},date=t.invDate||today(),no=docNo(p,t,date),amt=c.kontrak*t.pct/100;
  const d=new J({unit:'mm',format:'a4'});let y=await kop(d,co);
  d.setFont('helvetica','bold');d.setFontSize(17);const T='I N V O I C E';d.text(T,105,y,{align:'center'});const tw=d.getTextWidth(T);d.setLineWidth(0.4);d.setDrawColor(0);d.line(105-tw/2,y+1.2,105+tw/2,y+1.2);
  d.setFont('helvetica','normal');d.setFontSize(9.5);d.text('No : '+no,105,y+6,{align:'center'});y+=17;
  d.setFont('helvetica','bold');d.text('Kepada Yth.',22,y);d.setFont('helvetica','normal');clientLines(p).forEach((l,i)=>d.text(l,22,y+5+i*5));y+=5+clientLines(p).length*5+7;
  d.text('Dengan ini kami memohon kepada Saudara untuk melakukan pembayaran dengan rincian sebagai berikut:',22,y);y+=5;
  const x0=24,x1=128,x2=158,x3=188,hb=36;d.setLineWidth(0.3);d.setDrawColor(0);
  d.rect(x0,y,x3-x0,6.5);d.line(x1,y,x1,y+6.5+hb);d.line(x2,y,x2,y+6.5+hb+7);d.rect(x0,y+6.5,x3-x0,hb);
  d.setFont('helvetica','bold');d.setFontSize(9.5);d.text('Deskripsi',(x0+x1)/2,y+4.6,{align:'center'});d.text('Banyaknya',(x1+x2)/2,y+4.6,{align:'center'});d.text('Jumlah Harga',(x2+x3)/2,y+4.6,{align:'center'});
  d.setFont('helvetica','italic');const desc=d.splitTextToSize(payDesc(p,t),x1-x0-4);d.text(desc,x0+2,y+11.5);
  d.setFont('helvetica','normal');d.text(rp2(amt),x3-2,y+11.5,{align:'right'});
  if((p.ppn||0)>0){d.setFontSize(8);d.setTextColor(90);d.text(`Termasuk PPN ${nf(p.ppn)}%`,x0+2,y+11.5+desc.length*4.5);d.setTextColor(0);d.setFontSize(9.5)}
  const yt=y+6.5+hb;d.setFillColor(217,217,217);d.rect(x2,yt,x3-x2,7,'FD');d.setFont('helvetica','bolditalic');d.text('Total',x2-3,yt+5,{align:'right'});d.setFont('helvetica','bold');d.text(rp2(amt),x3-2,yt+5,{align:'right'});
  y=yt+15;d.setFont('helvetica','bolditalic');d.setFontSize(9.5);const tb=d.splitTextToSize('Terbilang : '+titleCase(terbilang(Math.round(amt)))+' Rupiah',166);d.text(tb,22,y);y+=tb.length*5+6;
  notes(d,co,y);await signBlock(d,co,122,y+24,date);
  return {blob:d.output('blob'),no,date,file:no.replace(/\//g,'-')+'-Invoice.pdf'};
}
async function receipt(p,t){
  const J=await loadPdf(),c=calc(p),co=company||{},date=t.kwDate||t.invDate||today(),no=t.invNo||docNo(p,t,date),amt=c.kontrak*t.pct/100;
  const d=new J({unit:'mm',format:'a4'});let y=await kop(d,co);
  d.setFont('helvetica','bold');d.setFontSize(17);const T='K W I T A N S I';d.text(T,105,y,{align:'center'});const tw=d.getTextWidth(T);d.setLineWidth(0.4);d.setDrawColor(0);d.line(105-tw/2,y+1.2,105+tw/2,y+1.2);
  d.setFont('helvetica','italic');d.setFontSize(9);d.text('RECEIPT',105,y+5.5,{align:'center'});y+=14;
  const row=(id,en,val,shade)=>{d.setFont('helvetica','bold');d.setFontSize(10);d.text(id,22,y);d.setFont('helvetica','italic');d.setFontSize(8);d.setTextColor(90);d.text(en,22,y+4);d.setTextColor(0);d.setFontSize(10);d.text(':',66,y);
    const L=d.splitTextToSize(val,118);if(shade){d.setFillColor(235,235,235);d.rect(69,y-4.5,121,L.length*5.2+3,'F')}d.setFont('helvetica',shade?'bolditalic':'normal');d.text(L,71,y);y+=Math.max(10,L.length*5.2+5)};
  row('No.','Number',no);
  row('Sudah Terima Dari','Received From',[p.client,p.clientOrg].filter(Boolean).join(' - ')||'-');
  row('Banyaknya Uang','Amount Received',titleCase(terbilang(Math.round(amt)))+' Rupiah',true);
  row('Untuk Pembayaran','In Payment Of',payDesc(p,t));
  y+=4;d.setLineWidth(0.5);d.setDrawColor(0);d.rect(22,y,70,12);d.setFont('helvetica','bold');d.setFontSize(13);d.text('Rp.',25,y+8);d.text(rp2(amt),89,y+8,{align:'right'});
  if(amt>5e6){d.setDrawColor(150);d.setLineWidth(0.3);d.setLineDashPattern([1.2,1],0);d.rect(112,y+10,22,16);d.setLineDashPattern([],0);d.setFont('helvetica','normal');d.setFontSize(6.5);d.setTextColor(120);d.text(['Meterai','Rp10.000'],123,y+17,{align:'center'});d.setTextColor(0)}
  await signBlock(d,co,122,y+2,date);
  notes(d,co,y+48);
  return {blob:d.output('blob'),no,date,file:no.replace(/\//g,'-')+'-Kwitansi.pdf'};
}
function companyDialog(){
  const co=company||{},f=(k,l,ph='')=>`<label>${l}<input name="${k}" value="${esc(co[k])}" placeholder="${ph}"></label>`;
  const img=(k,l)=>`<label>${l}${co[k]&&SID.test(co[k])?`<img data-ph="${co[k]}" alt="" style="display:block;max-height:48px;margin:6px 0">`:''}<input type="file" name="${k}File" accept="image/png,image/jpeg"></label>`;
  $('#dlg').innerHTML=`<div class="ov"><form class="card" data-form="company"><h2>Data perusahaan</h2><p class="meta">Dipakai untuk kop, rekening, dan tanda tangan di invoice dan kwitansi.</p><div class="grid">
  ${f('name','Nama perusahaan','CV / PT …')}${f('address','Alamat')}<div class="form">${f('phone','Telepon / WA')}${f('email','Email')}</div>${f('npwp','NPWP (opsional)')}
  <div class="form">${f('bank','Bank','BCA')}${f('account','No. rekening')}</div>${f('accountName','Atas nama rekening')}
  <div class="form">${f('signer','Nama penanda tangan')}${f('title','Jabatan','Direktur')}</div>${f('city','Kota penandatanganan','Jakarta Selatan')}
  <div class="form">${img('logo','Logo (PNG/JPG)')}${img('sign','Tanda tangan (opsional)')}</div></div>
  <p style="display:flex;gap:8px;justify-content:flex-end"><button type="button" class="btn" data-act="close">Batal</button><button class="btn pri">Simpan</button></p></form></div>`;
  fillPhotos();
}

/* ---------- impor & ekspor ---------- */
async function exportAll(btn){
  btn.disabled=true;
  try{
    const out={app:'papan-proyek',version:2,exported:nowIso(),company,members:members.map(({id,...m})=>({...m,email:id})),projects:[]};
    for(const p of P){const pr={...p};for(const c of ['opname','daily','expenses']){const s=await db.collection('projects/'+p.id+'/'+c).get();pr[c]=s.docs.map(d=>({id:d.id,...d.data()}))}out.projects.push(pr)}
    saveBlob(`papan-proyek-cadangan-${today()}.json`,new Blob([JSON.stringify(out,null,1)],{type:'application/json'}));toast('File cadangan diunduh.');
  }catch(e){fail(e)}finally{btn.disabled=false}
}
async function prepImport(file){
  let j;try{j=JSON.parse(await file.text())}catch{toast('File bukan JSON yang valid.');return}
  if(!j||!Array.isArray(j.projects)){toast('Format file tidak dikenali.');return}
  const native=j.app==='papan-proyek',ops=[],now=nowIso(),names=[];let nSub=0,over=0;
  for(const pr of j.projects){
    const {id,opname=[],daily=[],expenses=[],...rest}=pr||{};if(!PID.test(id||''))continue;
    if(P.some(p=>p.id===id))over++;names.push(rest.name||id);
    ops.push(['projects/'+id,{...rest,updated:rest.updated||now}]);
    ops.push(['progress/'+id,{...progressOf(rest),updated:now}]);
    [['opname',opname],['daily',daily],['expenses',expenses]].forEach(([c,list])=>(Array.isArray(list)?list:[]).forEach(({id:sid,...v})=>{if(SID.test(sid||'')){nSub++;ops.push([`projects/${id}/${c}/${sid}`,c==='daily'&&!native?{...v,photos:[]}:v])}}));
  }
  if(j.company&&typeof j.company==='object'){const {logo,sign,...co}=j.company;ops.push(['settings/company',{...co,logo:native?logo||'':company.logo||'',sign:native?sign||'':company.sign||''}])}
  let nMem=0;
  if(Array.isArray(j.members))j.members.forEach(m=>{const e=String(m.email||'').toLowerCase();if(!/^[^\s@/]+@[^\s@/]+\.[^\s@/]+$/.test(e)||!ROLES[m.role]||e===me.email)return;nMem++;ops.push(['members/'+e,{email:e,name:m.name||'',role:m.role,company:m.company||'',projects:(m.projects||[]).filter(x=>PID.test(x)),updated:now}])});
  if(!names.length&&!nMem){toast('Tidak ada proyek yang bisa diimpor dari file ini.');return}
  pendingImport=ops;
  $('#dlg').innerHTML=`<div class="ov"><div class="card"><h2>Impor data</h2><p>${names.length} proyek: <b>${names.map(esc).join(', ')}</b>, ${nSub} catatan opname/pengeluaran/laporan${j.company?', data perusahaan':''}${nMem?`, ${nMem} pengguna`:''}.</p>${over?`<p class="wrn">${over} proyek dengan ID yang sama sudah ada dan akan ditimpa.</p>`:''}${!native?'<p class="meta">Foto, logo, dan tanda tangan dari versi lama tidak ikut. Unggah ulang logo dan tanda tangan di Data perusahaan.</p>':''}
  <p style="display:flex;gap:8px;justify-content:flex-end"><button class="btn" data-act="close">Batal</button><button class="btn pri" data-act="doImport">Impor sekarang</button></p></div></div>`;
}

/* ---------- aksi ---------- */
function newDialog(){
  $('#dlg').innerHTML=`<div class="ov"><form class="card" data-form="new"><h2>Proyek baru</h2><p class="meta">RAB, jadwal, dan termin terisi dari template dan bisa diubah setelahnya.</p>
  <div class="grid"><label>Nama proyek<input name="name" required placeholder="mis. Rumah Ibu Sari, Cibubur"></label><label>Klien<input name="client"></label><label>Lokasi<input name="location"></label>
  <label>Template<select name="tpl">${Object.entries(TPL.T).map(([k,t])=>`<option value="${k}">${esc(t.label)}</option>`).join('')}<option value="kosong">Kosong</option></select></label>
  <div class="form"><label>Tanggal mulai<input type="date" name="startDate" value="${today()}" required></label><label>PPN (%)<input name="ppn" value="11" inputmode="decimal"></label></div></div>
  <p style="display:flex;gap:8px;justify-content:flex-end"><button type="button" class="btn" data-act="close">Batal</button><button class="btn pri">Buat proyek</button></p></form></div>`;
  $('#dlg input').focus();
}
function arm(key){if(delArm===key){delArm=null;return true}delArm=key;render(true);setTimeout(()=>{if(delArm===key){delArm=null;render()}},4000);return false}
async function copy(t){try{await navigator.clipboard.writeText(t);toast('Tersalin.')}catch{toast('Browser menolak menyalin.')}}

document.addEventListener('click',async e=>{
  const g=e.target.closest('[data-go]');if(g){location.hash='p-'+curId+(g.dataset.go==='ringkasan'?'':'-'+g.dataset.go);return}
  const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,id=b.dataset.id;
  if(a==='logout'){stopAll();location.hash='';B.auth.signOut().catch(()=>{});return}
  if(a==='google'){b.disabled=true;try{await B.auth.google()}catch(err){authErr(err)}finally{b.disabled=false}return}
  if(a==='mode'){loginMode=id;drawLogin();return}
  if(a==='verified'){b.disabled=true;const u=await B.auth.refresh().catch(()=>null);b.disabled=false;if(u&&u.emailVerified){authUser={...authUser,...u};status('Memeriksa akses…');resolveMember()}else toast('Email belum terverifikasi. Klik link di email terlebih dahulu.');return}
  if(a==='resend'){B.auth.sendVerify().then(()=>toast('Link verifikasi dikirim ulang.')).catch(authErr);return}
  if(a==='recheck'){status('Memeriksa akses…');resolveMember();return}
  if(!me)return;
  if(a==='close'){pendingImport=null;return $('#dlg').innerHTML=''}
  if(isVendor())return;
  if(a==='new')return newDialog();
  if(a==='company')return companyDialog();
  if(a==='users'){location.hash='pengguna';return}
  if(a==='addMember')return memberDialog();
  if(a==='editMember')return memberDialog(members.find(m=>m.id===id));
  if(a==='delMember'){if(arm('m'+id))db.doc('members/'+id).delete().then(()=>toast('Pengguna dihapus.')).catch(fail);return}
  if(a==='export')return exportAll(b);
  if(a==='doImport'){const ops=pendingImport;if(!ops)return;b.disabled=true;b.textContent='Mengimpor…';
    try{await db.setMany(ops);pendingImport=null;$('#dlg').innerHTML='';ops.forEach(([p])=>{const m=/^progress\/(.+)$/.exec(p);if(m)delete lastSig[m[1]]});toast('Impor selesai.')}catch(err){b.disabled=false;b.textContent='Impor sekarang';fail(err)}return}
  const p=proj();if(!p)return;
  const items=structuredClone(p.items||[]),secs=structuredClone(p.sections||[]),tm=structuredClone(p.termins||[]);
  if(a==='addItem'){items.push({id:uid('i'),sec:id,name:'Item baru',vol:1,unit:'ls',price:0,cost:0});saveProject({items});render(true)}
  if(a==='delItem'){saveProject({items:items.filter(i=>i.id!==id)});render(true)}
  if(a==='addSec'){const s={id:uid('s'),name:'Kelompok baru',start:1,end:Math.max(1,calc(p).weeks)};saveProject({sections:[...secs,s]});render(true)}
  if(a==='delSec'&&arm('s'+id)){saveProject({sections:secs.filter(s=>s.id!==id),items:items.filter(i=>i.sec!==id)});render(true)}
  if(a==='addTerm'){tm.push({id:uid('t'),name:'Termin baru',pct:0,cond:'',status:'Belum ditagih'});saveProject({termins:tm});render(true)}
  if(a==='inv'){const t=tm.find(x=>x.id===id);if(!t)return;
    b.disabled=true;b.textContent='Membuat PDF…';
    try{const r=await invoice(p,t);saveBlob(r.file,r.blob);
      if(!t.invNo||t.status==='Belum ditagih'){saveProject({termins:tm.map(x=>x.id===id?{...x,invNo:r.no,invDate:r.date,status:x.status==='Belum ditagih'?'Ditagih':x.status}:x)});toast('Invoice diunduh. Status termin menjadi Ditagih.')}else toast('Invoice diunduh.')}
    catch(err){toast('Gagal membuat PDF. Periksa koneksi lalu coba lagi.')}
    finally{render(true)}return}
  if(a==='kw'){const t=tm.find(x=>x.id===id);if(!t)return;const r=await savePdf(b,()=>receipt(p,t));
    if(r){if(!t.kwNo)saveProject({termins:tm.map(x=>x.id===id?{...x,kwNo:r.no,kwDate:r.date}:x)});toast('Kwitansi diunduh.')}return}
  if(a==='weekly'){const w=+$('#wkSel').value||1;const r=await savePdf(b,()=>weekly(p,w));if(r)toast('Laporan mingguan diunduh.');return}
  if(a==='delTerm'){saveProject({termins:tm.filter(t=>t.id!==id)});render(true)}
  if(a==='rapPct'){const box=b.parentElement;box.innerHTML=`<label style="display:flex;gap:6px;align-items:center">RAP =<input id="rapv" value="88" style="width:70px" inputmode="decimal">% harga jual</label><button class="btn sm pri" data-act="rapApply">Terapkan</button>`;return}
  if(a==='rapApply'){const v=num($('#rapv').value);saveProject({items:items.map(i=>({...i,cost:Math.round(i.price*v/100/100)*100}))});toast('RAP diperbarui.');render(true)}
  if(a==='copyRab'){const c=calc(p);let t='Kelompok\tUraian\tVolume\tSatuan\tHarga jual\tHarga RAP\tJumlah jual\n';secs.forEach(s=>items.filter(i=>i.sec===s.id).forEach(i=>t+=[s.name,i.name,i.vol,i.unit,i.price,i.cost,i.vol*i.price].join('\t')+'\n'));t+=`\t\t\t\tJumlah\t${c.rap}\t${c.jual}\n\t\t\t\tPPN\t\t${c.ppn}\n\t\t\t\tNilai kontrak\t\t${c.kontrak}\n`;copy(t)}
  if(a==='copyWa'){const d=sub.daily.find(x=>x.id===id);if(d)copy(waText(p,d))}
  const delSub=(k,col)=>{if(arm(k+id))db.doc(`projects/${p.id}/${col}/${id}`).delete().then(()=>afterSub(p)).catch(fail)};
  if(a==='delOp')delSub('o','opname');
  if(a==='delExp')delSub('e','expenses');
  if(a==='delDaily'){const dd=sub.daily.find(x=>x.id===id);if(arm('d'+id))db.doc(`projects/${p.id}/daily/${id}`).delete().then(()=>delPhotos(dd&&dd.photos)).catch(fail)}
  if(a==='delProj'&&arm('p')){
    const subs=[...sub.op.map(x=>'opname/'+x.id),...sub.daily.map(x=>'daily/'+x.id),...sub.exp.map(x=>'expenses/'+x.id)],ph=sub.daily.flatMap(x=>x.photos||[]);
    Promise.all([db.doc('progress/'+p.id).delete(),...subs.map(s=>db.doc(`projects/${p.id}/${s}`).delete())]).then(()=>db.doc('projects/'+p.id).delete()).then(()=>{delPhotos(ph);location.hash='start';toast('Proyek dihapus.')}).catch(fail)}
});
function afterSub(p){setTimeout(()=>{if(curId!==p.id)return;const f={realPct:sub.op[0]?.realPct||0,spent:sub.exp.reduce((a,e)=>a+(e.amount||0),0)};if(f.realPct!==p.realPct||f.spent!==p.spent)saveProject(f)},600)}

document.addEventListener('change',e=>{
  if(e.target.id==='importFile'){const f=e.target.files[0];e.target.value='';if(f)prepImport(f);return}
  if(e.target.name==='role'&&e.target.closest('[data-form=member]')){toggleVendorFields();return}
  const k=e.target.dataset.k;if(!k||isVendor())return;const p=proj();if(!p)return;const [t,id,f]=k.split(':'),v=e.target.value;
  if(t==='p')saveProject({[id]:id==='ppn'||id==='contractValue'?num(v):v.trim()});
  if(t==='item')saveProject({items:p.items.map(i=>i.id===id?{...i,[f]:['vol','price','cost'].includes(f)?num(v):v}:i)});
  if(t==='sec')saveProject({sections:p.sections.map(s=>s.id===id?{...s,[f]:f==='name'?v:Math.max(1,Math.round(num(v)))}:s)});
  if(t==='term')saveProject({termins:p.termins.map(x=>x.id===id?{...x,[f]:f==='pct'?num(v):v}:x)});
});

document.addEventListener('submit',async e=>{
  const f=e.target.closest('[data-form]');if(!f)return;e.preventDefault();const d=Object.fromEntries(new FormData(f)),kind=f.dataset.form,p=proj();
  const btn=f.querySelector('.btn.pri');if(btn)btn.disabled=true;
  if(kind==='login'){
    const email=(d.email||'').trim();lastEmail=email;
    try{
      if(loginMode==='reset'){await B.auth.reset(email);loginMode='login';drawLogin();toast('Link atur ulang password dikirim ke '+email+'. Cek juga folder Spam.');return}
      if(loginMode==='signup'){await B.auth.signUp(email,d.pass);return}
      await B.auth.signIn(email,d.pass);
    }catch(err){authErr(err)}finally{if(btn)btn.disabled=false}
    return;
  }
  if(!me||isVendor()){if(btn)btn.disabled=false;return}
  try{
    if(kind==='new'){const id=uid('p'),t=d.tpl==='kosong'?{sections:[{id:uid('s'),name:'Persiapan',start:1,end:4}],items:[]}:fromTemplate(d.tpl);
      const pr={name:d.name.trim(),client:d.client.trim(),location:d.location.trim(),kind:d.tpl==='kosong'?'Proyek':TPL.T[d.tpl].label.split(' (')[0],startDate:d.startDate,ppn:num(d.ppn),...t,termins:defTermins(d.tpl),realPct:0,spent:0,created:nowIso(),updated:nowIso()};
      await db.doc('projects/'+id).set(pr);db.doc('progress/'+id).set({...progressOf(pr),updated:nowIso()}).catch(()=>{});
      $('#dlg').innerHTML='';location.hash='p-'+id;toast('Proyek dibuat.');return}
    if(kind==='company'){const v={logo:company.logo||'',sign:company.sign||''};['name','address','phone','email','npwp','bank','account','accountName','signer','title','city'].forEach(k=>v[k]=(d[k]||'').trim());
      for(const k of ['logo','sign']){const fl=f[k+'File']?.files?.[0];if(fl){try{v[k]=await putPhoto(fl,{max:k==='logo'?600:500,png:fl.type==='image/png'});if(company[k]&&company[k]!==v[k])delPhotos([company[k]])}catch{toast('Gagal mengunggah '+(k==='logo'?'logo':'tanda tangan')+'.')}}}
      await db.doc('settings/company').set(v);$('#dlg').innerHTML='';toast('Data perusahaan tersimpan.');return}
    if(kind==='member'){
      const email=(f.dataset.id||d.email||'').trim().toLowerCase();
      if(!/^[^\s@/]+@[^\s@/]+\.[^\s@/]+$/.test(email)){toast('Email tidak valid.');return}
      if(!f.dataset.id&&members.some(m=>m.id===email)){toast('Email ini sudah terdaftar. Pilih Ubah di daftar.');return}
      const role=f.role.disabled?(members.find(m=>m.id===email)?.role||me.role):d.role;
      const projects=role==='vendor'?[...f.querySelectorAll('input[name=proj]:checked')].map(x=>x.value):[];
      await db.doc('members/'+email).set({email,name:(d.name||'').trim(),role,company:role==='vendor'?(d.company||'').trim():'',projects,updated:nowIso()});
      if(role==='vendor')await Promise.all(projects.map(syncProgress));
      $('#dlg').innerHTML='';toast('Pengguna tersimpan.');return}
    if(!p)return;const base='projects/'+p.id+'/';
    if(kind==='op'){const c=calc(p),pcts={};(p.sections||[]).forEach(s=>pcts[s.id]=Math.min(100,Math.max(0,num(d['o_'+s.id]))));const realPct=Math.round(realOf(c,pcts)*100)/100;
      await db.collection(base+'opname').doc(uid('o')).set({date:d.date,note:d.note.trim(),pcts,realPct});afterSub(p);toast('Opname tersimpan: realisasi '+pc(realPct))}
    if(kind==='exp'){const amount=num(d.amount);if(!amount){toast('Isi jumlah pengeluaran.');return}
      await db.collection(base+'expenses').doc(uid('e')).set({date:d.date,sec:d.sec,cat:d.cat,desc:d.desc.trim(),amount});f.reset();f.date.value=today();afterSub(p);toast('Pengeluaran tersimpan.')}
    if(kind==='daily'){const photos=[],files=[...(f.photos?.files||[])].slice(0,6);
      for(let i=0;i<files.length;i++){toast(`Mengunggah foto ${i+1} dari ${files.length}…`);try{photos.push(await putPhoto(files[i]))}catch(err){toast('Gagal mengunggah foto '+(i+1)+'.');await new Promise(r=>setTimeout(r,1500))}}
      await db.collection(base+'daily').doc(uid('d')).set({photos,date:d.date,weather:d.weather,tukang:num(d.tukang),pekerja:num(d.pekerja),work:d.work.trim(),material:d.material.trim(),issue:d.issue.trim()});f.reset();toast('Laporan tersimpan.')}
  }catch(err){fail(err)}finally{if(btn)btn.disabled=false;document.activeElement?.blur?.();render(true)}
});

/* ---------- masuk & sesi ---------- */
const AUTHMSG={'auth/invalid-credential':'Email atau password salah.','auth/wrong-password':'Email atau password salah.','auth/user-not-found':'Email belum terdaftar. Pilih Daftar untuk membuat password.','auth/email-already-in-use':'Email ini sudah punya akun. Pilih Masuk, atau Lupa password.','auth/weak-password':'Password minimal 6 karakter.','auth/invalid-email':'Format email tidak valid.','auth/too-many-requests':'Terlalu banyak percobaan. Tunggu beberapa menit lalu coba lagi.','auth/network-request-failed':'Koneksi internet bermasalah. Coba lagi.','auth/operation-not-allowed':'Metode masuk ini belum diaktifkan di Firebase Authentication.','auth/unauthorized-domain':'Alamat aplikasi ini belum diizinkan di Firebase Authentication (Authorized domains).','auth/popup-closed-by-user':'','auth/cancelled-popup-request':''};
function authErr(e){const m=AUTHMSG[e&&e.code];if(m==='')return;const msg=m||'Gagal masuk ('+(e&&e.code||'error')+').';if(!authUser)drawLogin(msg);else toast(msg)}
function drawLogin(msg){
  $('#acct').innerHTML='';const m=loginMode;
  $('#top').innerHTML=`<div class="row"><div><small>Papan proyek kontraktor</small><h1>Papan Proyek</h1></div></div>`;
  $('#view').innerHTML=`<div class="login"><div class="card">
  <h2>${m==='signup'?'Daftar dengan email':m==='reset'?'Atur ulang password':'Masuk'}</h2>
  <p class="meta" style="margin-top:6px">Hanya email yang sudah didaftarkan admin yang bisa membuka data.</p>
  ${m==='login'?`<button class="btn gbtn" data-act="google">Masuk dengan Google</button><div class="or">atau dengan email</div>`:''}
  <form data-form="login"><label>Email<input name="email" type="email" autocomplete="email" required value="${esc(lastEmail)}"></label>${m!=='reset'?`<label>Password<input name="pass" type="password" autocomplete="${m==='signup'?'new-password':'current-password'}" minlength="6" required></label>`:''}
  <button class="btn pri">${m==='signup'?'Daftar':m==='reset'?'Kirim link atur ulang':'Masuk'}</button></form>
  <p style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;margin:12px 0 0">${m==='login'?`<button class="linkbtn" data-act="mode" data-id="signup">Belum punya password? Daftar</button><button class="linkbtn" data-act="mode" data-id="reset">Lupa password</button>`:`<button class="linkbtn" data-act="mode" data-id="login">← Kembali ke Masuk</button>`}</p>
  ${msg?`<p class="bad" role="alert">${esc(msg)}</p>`:''}</div></div>`;
}
function drawGate(kind,err){
  drawAcctBare();
  $('#top').innerHTML=`<div class="row"><div><small>Papan proyek kontraktor</small><h1>Papan Proyek</h1></div></div>`;
  const e=esc(authUser&&authUser.email);
  $('#view').innerHTML=`<div class="login"><div class="card">${kind==='verify'?`<h2>Verifikasi email</h2><p>Kami sudah mengirim link verifikasi ke <b>${e}</b>. Buka email itu (cek juga folder Spam), klik linknya, lalu kembali ke sini.</p><p style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn pri" data-act="verified">Saya sudah verifikasi</button><button class="btn" data-act="resend">Kirim ulang link</button></p>`
  :kind==='notmember'?`<h2>Belum ada akses</h2><p>Email <b>${e}</b> belum didaftarkan. Minta admin menambahkan email ini di menu <b>Pengguna & akses</b>, lalu tekan Cek lagi.</p><p><button class="btn pri" data-act="recheck">Cek lagi</button></p>`
  :`<h2>Gagal memuat</h2><p>Tidak bisa memeriksa akses (${esc(err&&err.code||'error')}). Periksa koneksi internet lalu coba lagi.</p><p><button class="btn pri" data-act="recheck">Coba lagi</button></p>`}</div></div>`;
}
function drawAcctBare(){$('#acct').innerHTML=authUser?`<span>${esc(authUser.email)}</span><button data-act="logout">Keluar</button>`:''}

function stopData(){
  dataUnsubs.forEach(u=>u());dataUnsubs=[];Object.values(vUnsubs).forEach(u=>u());vUnsubs={};V.clear();unsubs.forEach(u=>u());unsubs=[];
  sub={op:[],daily:[],exp:[]};P=[];members=[];company={};curId=null;page='';tab='ringkasan';loaded=false;loadedOnce=false;$('#dlg').innerHTML='';
  Object.keys(lastSig).forEach(k=>delete lastSig[k]);
}
function stopAll(){if(memberUnsub){memberUnsub();memberUnsub=null}stopData();me=null;const t=$('#toast');clearTimeout(t._t);t.classList.remove('on')}

async function onAuth(u){
  stopAll();authUser=u;
  if(!u){loginMode='login';drawLogin();return}
  if(!u.emailVerified){drawGate('verify');return}
  status('Memeriksa akses…');resolveMember();
}
async function resolveMember(){
  const email=(authUser.email||'').toLowerCase();
  try{
    let s=await db.doc('members/'+email).get();
    if(!s.exists){
      // Pemilik (email yang ditulis di aturan keamanan) otomatis jadi Admin saat pertama masuk.
      try{await db.doc('members/'+email).set({email,name:authUser.name||'',role:'admin',company:'',projects:[],updated:nowIso()});s=await db.doc('members/'+email).get()}catch{}
    }
    if(!s.exists){drawGate('notmember');return}
    startSession(email);
  }catch(err){drawGate('error',err)}
}
function startSession(email){
  if(memberUnsub)memberUnsub();
  memberUnsub=db.doc('members/'+email).onSnapshot(s=>{
    if(!s.exists){stopData();me=null;drawGate('notmember');return}
    const prev=me&&me.role;me={email,...s.data()};
    if(prev!==me.role)startData();
    else{if(isVendor())syncVendorSubs();render()}
  },err=>{stopData();me=null;drawGate('error',err)});
}
function startData(){
  stopData();
  if(isVendor()){loaded=true;syncVendorSubs();route(true);return}
  const timer=setTimeout(()=>{if(!loaded)status('Data belum bisa dijangkau. Periksa koneksi internet lalu buka ulang halaman.')},12000);
  dataUnsubs.push(db.doc('settings/company').onSnapshot(s=>{company=s.exists?s.data():{};render()},()=>{}));
  if(isAdmin())dataUnsubs.push(db.collection('members').onSnapshot(s=>{members=s.docs.map(d=>({id:d.id,...d.data()}));render()},()=>{}));
  dataUnsubs.push(db.collection('projects').onSnapshot(s=>{clearTimeout(timer);loaded=true;P=s.docs.map(d=>({id:d.id,...d.data()}));
    if(curId&&!P.some(p=>p.id===curId)&&!s.metadata.fromCache)location.hash='start';route(!loadedOnce);loadedOnce=true},
    err=>{clearTimeout(timer);status('Gagal memuat data ('+(err.code||'error')+').')}));
}
function syncVendorSubs(){
  const want=new Set((me.projects||[]).filter(x=>PID.test(x)));
  const upd=()=>{P=[...V.values()].sort((a,b)=>(a.name||'').localeCompare(b.name||''));route()};
  Object.keys(vUnsubs).forEach(id=>{if(!want.has(id)){vUnsubs[id]();delete vUnsubs[id];V.delete(id)}});
  want.forEach(id=>{if(vUnsubs[id])return;vUnsubs[id]=db.doc('progress/'+id).onSnapshot(s=>{if(s.exists)V.set(id,{id,...s.data()});else V.delete(id);upd()},()=>{V.delete(id);upd()})});
  upd();
}

(async()=>{
  try{B=window.__PAPAN_BACKEND||await createBackend()}
  catch(e){status('Aplikasi belum terhubung ke Firebase. Isi konfigurasi di file config.js atau host di Firebase Hosting.');return}
  db=B.db;
  B.auth.onChange(u=>{onAuth(u)});
})();
