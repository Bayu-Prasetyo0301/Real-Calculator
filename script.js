let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                // Evaluasi ekspresi matematika
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error"; // Penanganan error
            }
        } else if (value === 'AC') {
            string = ""; // Reset input
            input.value = string;
        } else if (value === 'DEL') {
            string = string.substring(0, string.length - 1); // Hapus karakter terakhir
            input.value = string;
        } else if (value === '%') {
            // Tangani persentase untuk angka terakhir
            const match = string.match(/(\d+(\.\d+)?)$/); // Cari angka terakhir
            if (match) {
                const number = parseFloat(match[0]);
                const percentage = number / 100; // Hitung persentase
                string = string.replace(/(\d+(\.\d+)?)$/, percentage); // Ganti angka terakhir dengan persentase
            }
            input.value = string;
        } else {
            string += value; // Tambahkan input tombol ke string
            input.value = string;
        }
    });
});
