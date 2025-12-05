const content = {
ar:{
title:"مركز العناية بالعيون",
heroTitle:"خدمات طبية متقدمة للعناية بالعيون",
heroText:"مركز متخصص بتصحيح البصر، المعالجة بالليزر، تشخيص مشاكل الرؤية، ورعاية صحة العين باستخدام أحدث التقنيات.",
btnServices:"عرض الخدمات",
s1Title:"تصحيح البصر بالليزر",
s1Text:"إجراء تصحيح نظر دقيق باستخدام أجهزة حديثة على يد أطباء مختصين.",
s2Title:"فحص شامل للعين",
s2Text:"تشخيص كامل بأجهزة متطورة لضمان أعلى دقة.",
s3Title:"رعاية عيون الأطفال",
s3Text:"برامج خاصة للأطفال مع متابعة آمنة.",
s4Title:"وصفات العدسات",
s4Text:"قياس دقيق لوصفات العدسات الطبية والعدسات اللاصقة."
},
en:{
title:"EYE CARE CENTER",
heroTitle:"Advanced Eye Care Services",
heroText:"A specialized center offering advanced eye care and laser correction.",
btnServices:"View Services",
s1Title:"Laser Vision Correction",
s1Text:"Accurate correction performed by specialists.",
s2Title:"Complete Eye Check",
s2Text:"Full diagnosis with advanced equipment.",
s3Title:"Children's Eye Care",
s3Text:"Early detection and safe follow‑up.",
s4Title:"Lens Prescription",
s4Text:"Accurate measurement for lenses."
}
};
function setLang(l){
const t = content[l];
document.getElementById("title").innerText = t.title;
document.getElementById("hero-title").innerText = t.heroTitle;
document.getElementById("hero-text").innerText = t.heroText;
document.getElementById("btn-services").innerText = t.btnServices;
document.getElementById("s1-title").innerText = t.s1Title;
document.getElementById("s1-text").innerText = t.s1Text;
document.getElementById("s2-title").innerText = t.s2Title;
document.getElementById("s2-text").innerText = t.s2Text;
document.getElementById("s3-title").innerText = t.s3Title;
document.getElementById("s3-text").innerText = t.s3Text;
document.getElementById("s4-title").innerText = t.s4Title;
document.getElementById("s4-text").innerText = t.s4Text;
}

function sendToWhatsapp(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const name = document.getElementById("ph-name").value;
    const phone = document.getElementById("ph-phone").value;
    const date = document.getElementById("booking-date").value;

    const phoneNumber = "963992369841"; // رقم العيادة

    // تنسيق الرسالة
    const message = `مرحباً، أريد حجز موعد في العيادة.%0a` +
                    `👤 الاسم: ${name}%0a` +
                    `📱 الهاتف: ${phone}%0a` +
                    `📅 التاريخ المطلوب: ${date}`;

    // فتح رابط واتساب
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}