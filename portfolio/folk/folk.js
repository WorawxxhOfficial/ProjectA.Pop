function openPreview(img){
  const p = document.getElementById('preview');
  const t = document.getElementById('preview-img');
  t.src = img.src; 
  t.alt = img.alt;
  p.style.display = 'flex';
}

// ทำเมนู active + เลื่อนนุ่ม ๆ
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click', e=>{
    if(a.hash){ 
      e.preventDefault();
      document.querySelector(a.hash)?.scrollIntoView({behavior:'smooth'});
      document.querySelectorAll('.menu a').forEach(x=>x.classList.remove('active'));
      a.classList.add('active');
      history.replaceState(null,'',a.hash);
    }
  });
});

// เดโมฟอร์ม
document.getElementById('msg')?.addEventListener('submit', e=>{
  e.preventDefault(); 
  alert('รับข้อความแล้ว ขอบคุณครับ!'); 
  e.target.reset();
});
