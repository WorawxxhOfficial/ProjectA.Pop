# ProjectA.Pop
Company website for group project. Contains home page, profile page, and individual portfolios.

วิธีสร้าง Branch ใหม่จาก main
1. เช็คว่าตอนนี้อยู่ที่ branch main
git checkout main

2. ดึงข้อมูลล่าสุดจาก remote (GitHub) มา
git pull origin main

3. สร้าง branch ใหม่และเปลี่ยนไปอยู่ branch นั้นทันที
สมมติชื่อ branch ของคุณคือ ploy-branch (เปลี่ยนเป็นชื่อของคุณได้)
git checkout -b ploy-branch
คำสั่งนี้จะสร้าง branch ใหม่ชื่อ ploy-branch และสลับมาอยู่ branch นี้เลย

4. ตรวจสอบว่าตอนนี้อยู่ branch ไหน
git branch
จะเห็น * ที่อยู่หน้า branch ที่กำลังใช้งานอยู่ เช่น
  main
* ploy-branch

วิธีส่ง branch ขึ้น GitHub (ครั้งแรกที่สร้าง branch นี้)

git push -u origin ploy-branch
-u คือ ตั้งให้ branch นี้เชื่อมกับ remote branch บน GitHub เวลา push หรือ pull ครั้งต่อไปจะง่ายขึ้น

สรุป

git checkout main
git pull origin main
git checkout -b ชื่อ-branch-ของคุณ
git push -u origin ชื่อ-branch-ของคุณ
