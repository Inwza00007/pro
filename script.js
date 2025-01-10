// script.js

// ฟังก์ชันคำนวณระยะทาง
function calculateDistance() {
    var speed = parseFloat(document.getElementById('speed').value); // ความเร็ว (กิโลเมตร/ชั่วโมง)
    var hours = parseFloat(document.getElementById('hours').value); // ชั่วโมง
    var minutes = parseFloat(document.getElementById('minutes').value); // นาที

    // ตรวจสอบความถูกต้องของข้อมูล
    if (isNaN(speed) || isNaN(hours) || isNaN(minutes) || speed <= 0 || hours < 0 || minutes < 0 || minutes >= 60) {
        document.getElementById('distance-result').innerText = "กรุณากรอกข้อมูลให้ถูกต้อง";
        return;
    }

    // คำนวณเวลาในหน่วยชั่วโมง
    var timeInHours = hours + (minutes / 60);

    // คำนวณระยะทาง
    var distance = speed * timeInHours;

    // แสดงผลลัพธ์
    document.getElementById('distance-result').innerText = "ระยะทางที่เดินทางได้: " + distance.toFixed(2) + " กิโลเมตร";
}
