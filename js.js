function countWordOccurrences() {
    // Yêu cầu người dùng nhập đoạn văn bản
    const text = prompt("Nhập vào một đoạn văn bản:");

    if (!text) {
        console.log("Bạn chưa nhập đoạn văn bản nào.");
        return;
    }

    // Chuyển đổi đoạn văn bản thành chữ thường và tách thành các từ
    const words = text.toLowerCase().split(/\s+/);

    // Tạo một đối tượng để lưu trữ số lần xuất hiện của từng từ
    const wordCount = {};

    // Đếm số lần xuất hiện của từng từ
    words.forEach(word => {
        if (word) { // Bỏ qua các từ rỗng (nếu có)
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });

    // Hiển thị kết quả
    console.log("Số lần xuất hiện của các từ:");
    for (const [word, count] of Object.entries(wordCount)) {
        console.log(`${word}: ${count}`);
    }
}

// Gọi hàm để chạy chương trình
countWordOccurrences();