function generateCV() {
    var name = document.getElementById('inputName').value;
    var title = document.getElementById('inputTitle').value;
    var phone = document.getElementById('inputPhone').value;
    var website = document.getElementById('inputWebsite').value;
    var address = document.getElementById('inputAddress').value;
    var about = document.getElementById('inputAbout').value;
    var education1 = document.getElementById('inputEducation1').value;
    var education2 = document.getElementById('inputEducation2').value;
    var experience1 = document.getElementById('inputExperience1').value;
    var experience2 = document.getElementById('inputExperience2').value;
    var skill1 = document.getElementById('inputSkill1').value;
    var skill2 = document.getElementById('inputSkill2').value;
    var skill3 = document.getElementById('inputSkill3').value;
    var language1 = document.getElementById('inputLanguage1').value;
    var language2 = document.getElementById('inputLanguage2').value;
    var language3 = document.getElementById('inputLanguage3').value;

    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    // إضافة الصورة في الجزء العلوي
    var file = document.getElementById('inputPhoto').files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imgData = e.target.result;

            // إضافة الصورة (التأكد من أنها صغيرة وفي الأعلى)
            doc.addImage(imgData, 'JPEG', 85, 20, 40, 40); // الصورة صغيرة ومربعة

            finishPDF(); // استكمال توليد PDF بعد تحميل الصورة
        }
        reader.readAsDataURL(file);
    } else {
        finishPDF(); // استكمال PDF بدون صورة إذا لم يتم التحميل
    }

    function finishPDF() {
        doc.setFontSize(24);
        doc.text(name, 105, 80, null, null, 'center');  // النص في المنتصف
        doc.setFontSize(18);
        doc.text(title, 105, 100, null, null, 'center');  // النص في المنتصف

        doc.setFontSize(14);
        doc.text('Contact', 40, 140);
        doc.text(phone, 40, 160);
        doc.text(website, 40, 180);
        doc.text(address, 40, 200);

        doc.text('Skills', 40, 240);
        doc.text(skill1, 40, 260);
        doc.text(skill2, 40, 280);
        doc.text(skill3, 40, 300);

        doc.text('Languages', 40, 340);
        doc.text(language1, 40, 360);
        doc.text(language2, 40, 380);
        doc.text(language3, 40, 400);

        doc.text('About Me', 160, 140);
        doc.text(about, 160, 160);

        doc.text('Education', 160, 200);
        doc.text(education1, 160, 220);
        doc.text(education2, 160, 240);

        doc.text('Experience', 160, 280);
        doc.text(experience1, 160, 300);
        doc.text(experience2, 160, 320);

        doc.save('CV.pdf');
    }
}
