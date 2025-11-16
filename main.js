document.addEventListener('DOMContentLoaded', function() {
    
    const contactBtn = document.getElementById('contactBtn');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('Terima kasih atas ketertarikan Anda! 🙏\n\nAnda dapat menghubungi saya melalui:\n📧 Email: sayedfurqan10@gmail.com');
            console.log('Tombol kontak diklik!');
        });
    }
    
});