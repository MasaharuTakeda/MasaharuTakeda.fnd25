'use strict';

// 1行目に記載している 'use strict' は削除しないでください

// 忘れないで！： テストの定型文を script.js の先頭に書きましょう。
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("OK! Test PASSED.");
    } else {
      console.error("Test FAILED. Try again!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
      console.trace();
      console.groupEnd();
    }
  }

function formatDate(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

// ランダムなCSVデータを生成する関数
function generateRandomCSVData(numRows) {
    let csvData = "日時,num1,num2,num3,num4,num5,num6\n";
    let currentTime = new Date();

    for (let i = 0; i < numRows; i++) {
        // 現在時刻から60分間隔で時間を減算
        let dateTime = formatDate(new Date(currentTime.getTime() - (i * 60 * 60 * 1000)));
        let num2 = Math.floor(Math.random() * 3); // 0～2のランダムな整数を生成
        let num3 = (Math.random() * (100.0 - 99.0) + 99.0).toFixed(1); // 99.0～100.0の範囲のランダムな小数を生成
        let num4 = Math.floor(Math.random() * 3); // 0～2のランダムな整数を生成
        let num5 = Math.floor(Math.random() * 3); // 0～2のランダムな整数を生成
        let num6 = Math.floor(Math.random() * 3); // 0～2のランダムな整数を生成

        csvData += `${dateTime},${1},${num2},${num3},${num4},${num5},${num6}\n`;
    }

    return csvData;
}

// ダウンロード用の関数
function downloadCSVFile() {
    // 3000回分のデータを生成
    let csvData = generateRandomCSVData(3000);

    // CSVデータをBlobオブジェクトに変換
    let blob = new Blob([csvData], { type: 'text/csv' });

    // ダウンロード用のURLを作成
    let url = URL.createObjectURL(blob);

    // a要素を作成し、ダウンロード用のURLを設定
    let downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'random_data.csv'; // ダウンロード時のファイル名を指定

    // a要素をクリックしてファイルをダウンロード
    downloadLink.click();
}

// ボタンなどの要素をクリックしたときにダウンロード関数を呼び出す
document.getElementById('downloadButton').addEventListener('click', downloadCSVFile);