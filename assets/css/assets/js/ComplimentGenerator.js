// ComplimentGenerator.js

class ComplimentGenerator {
    constructor(buttonId, messageDivId, inputId) {
        this.button = document.getElementById(buttonId);
        this.messageDiv = document.getElementById(messageDivId);
        this.inputField = document.getElementById(inputId);
        this.compliments = [
            "Chúc mừng ${name}, người có nhan sắc lộng lẫy vượt qua mọi định luật vật lý! Bạn là nguồn cảm hứng vô tận!",
            "Gửi lời chúc đến ${name}, người phụ nữ sở hữu trí tuệ sắc sảo và nụ cười làm tan chảy cả băng tuyết Bắc Cực!",
            "Chào mừng ${name}, vẻ đẹp của bạn là một hiện tượng quang học hiếm có, xứng đáng được đưa vào sách giáo khoa!",
            "Không chỉ xinh đẹp, ${name} còn là minh chứng cho sự hoàn hảo của tạo hóa! Chúc bạn mọi điều tốt đẹp nhất!",
            "${name}, bạn là viên kim cương sáng nhất. Mong rằng mọi dự định của bạn đều thành công rực rỡ và đầy kiêu hãnh!"
        ];
        this.setupEventListeners();
    }

    setupEventListeners() {
        if (this.button) {
            this.button.addEventListener('click', () => this.generateCompliment());
        }
    }

    getRandomCompliment(name) {
        const randomIndex = Math.floor(Math.random() * this.compliments.length);
        let compliment = this.compliments[randomIndex];
        // Thay thế placeholder ${name} bằng tên người dùng nhập
        return compliment.replace(/\$\{(\w+)\}/g, name);
    }

    generateCompliment() {
        const name = this.inputField ? this.inputField.value.trim() : "Nàng Thơ";

        if (!name) {
            alert("Vui lòng nhập Tên để nhận lời chúc cá nhân hóa!");
            this.inputField.focus();
            return;
        }

        const personalizedMessage = this.getRandomCompliment(name);
        
        // Cập nhật nội dung hiển thị
        this.messageDiv.innerHTML = `
            <p class="congratulations">✨ THÔNG BÁO QUAN TRỌNG ✨</p>
            <p class="main-compliment">${personalizedMessage}</p>
            <p class="signature">Chúc bạn một ngày tuyệt vời và luôn giữ vững khí chất này!</p>
        `;
        
        // Hiển thị và áp dụng hiệu ứng động
        this.messageDiv.classList.remove('hidden');
        this.messageDiv.style.opacity = '0';
        setTimeout(() => {
            this.messageDiv.style.opacity = '1';
        }, 50); // Delay nhỏ để kích hoạt CSS transition
        
        // Thêm hiệu ứng hạt lấp lánh (Particle Effect - chỉ là text, nhưng chuyên nghiệp hơn)
        this.applySparkleEffect();
    }
    
    // Phương thức mô phỏng hiệu ứng hạt lấp lánh (chuyên nghiệp hóa lời nịnh hót)
    applySparkleEffect() {
        const sparkles = ['🌟', '💖', '✨', '💎'];
        let originalText = this.messageDiv.innerHTML;
        let sparkleText = '';
        for(let i = 0; i < 5; i++) {
             sparkleText += sparkles[Math.floor(Math.random() * sparkles.length)];
        }
        this.messageDiv.innerHTML = `<div class="sparkle-container">${sparkleText}</div>` + originalText;
    }
}
