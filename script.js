// 登録済みテキスト
const textList = [
    "今日", "昨日", "買う", "欲しい", "高い", "ので", "て", "た", "で", "を", "れ／られ",
    "なぜか", "人", "ときおり", "は", "の", "が", "する", "本", "経済", "商い", "書斎", "物品",
    "道路", "右往左往"
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