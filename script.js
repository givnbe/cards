// 登録済みテキスト
const textList = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry",
    "Fig", "Grape", "Honeydew", "Kiwi", "Lemon",
    "Mango", "Orange", "Peach", "Pear", "Plum",
    "Strawberry", "Watermelon"
];

const button = document.getElementById("drawButton");
const textArea = document.getElementById("textArea");

button.addEventListener("click", () => {
    // 表示をクリア
    textArea.innerHTML = "";

    // シャッフルして先頭10個を使う（「ほぼランダム」）
    const shuffled = [...textList].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);

    selected.forEach(text => {
        const div = document.createElement("div");
        div.className = "textBox";
        div.textContent = text;
        textArea.appendChild(div);
    });
});