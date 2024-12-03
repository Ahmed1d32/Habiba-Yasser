
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع التحديث الافتراضي للصفحة
    const word = document.querySelector('#word').value;
    const resultDiv = document.querySelector('#result');
    
    if (word) {
        resultDiv.textContent = `نتيجة البحث عن "${word}": ... (هنا يمكنك إضافة وظيفة البحث).`;
    } else {
        resultDiv.textContent = 'يرجى إدخال كلمة!';
    }
});
