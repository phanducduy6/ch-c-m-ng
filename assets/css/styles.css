/* Sử dụng Biến CSS (CSS Variables) để dễ dàng thay đổi Theme */
:root {
    --primary-color: #8a2be2; /* Tím Violet */
    --secondary-color: #ff69b4; /* Hồng kẹo ngọt */
    --background-color: #f0f4f8; /* Xanh xám nhạt */
    --text-color: #333;
    --card-bg: #ffffff;
    --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.1);
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.main-container {
    background-color: var(--card-bg);
    padding: 30px;
    border-radius: 12px;
    box-shadow: var(--shadow-light);
    max-width: 700px;
    width: 100%;
    text-align: center;
}

header h1 {
    color: var(--primary-color);
    font-size: 2.2em;
    margin-bottom: 5px;
}

header h2 {
    color: #999;
    font-size: 0.9em;
    font-weight: 300;
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

/* Input Section */
.input-section label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--primary-color);
}

#nameInput {
    padding: 10px 15px;
    width: 80%;
    max-width: 300px;
    margin: 0 auto 20px;
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    font-size: 1em;
}

/* Button */
.cta-button {
    background-color: var(--secondary-color);
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 25px;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(255, 105, 180, 0.4);
}

.cta-button:hover {
    background-color: #e959a4;
    transform: translateY(-2px);
}

/* Result Section */
.hidden {
    display: none;
}

.result-section {
    margin-top: 40px;
    padding: 30px;
    background: linear-gradient(135deg, #fffafa, var(--background-color));
    border: 3px solid var(--secondary-color);
    border-radius: 15px;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.congratulations {
    color: var(--primary-color);
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 10px;
}

.main-compliment {
    font-size: 1.3em;
    font-style: italic;
    color: #444;
    line-height: 1.5;
    margin: 15px 0;
}

.signature {
    font-size: 0.9em;
    color: #888;
    margin-top: 20px;
}

/* Hiệu ứng lấp lánh */
.sparkle-container {
    font-size: 2em;
    margin-bottom: 15px;
    animation: sparkle 1s infinite alternate;
}

@keyframes sparkle {
    from { opacity: 0.5; text-shadow: 0 0 5px var(--secondary-color); }
    to { opacity: 1; text-shadow: 0 0 15px var(--secondary-color), 0 0 20px var(--primary-color); }
}

/* Media Query cho Responsive Design (Chuẩn Đồ án) */
@media (max-width: 600px) {
    .main-container {
        padding: 20px;
    }
    header h1 {
        font-size: 1.8em;
    }
    .main-compliment {
        font-size: 1.1em;
    }
    #nameInput {
        width: 90%;
    }
}
