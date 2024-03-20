'use strict';

// テストの定型文を script.js の先頭に書きましょう。
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

// ファイルが選択されたときの処理
document.getElementById('fileInput').addEventListener('change', function(event) {
  let file = event.target.files[0];
  let reader = new FileReader();

  reader.onload = function(event) {
      var contents = event.target.result;
      document.getElementById('fileContent').innerText = contents;

      // フォントサイズを変更する
      document.getElementById('fileContent').style.fontSize = '35px'; // 例として20pxに設定

      // 合計を計算
      var lines = contents.split('\n');
      let total1 = 0;
      let total2 = 0;
      let total3 = 0;
      let total4 = 0;
      let total5 = 0;
      let total6 = 0;
      let lineCount = 0; // 行数をカウントする変数
      let average3 = 0;


      lines.forEach(function(line) {
          let parts = line.split(',');
          if (parts.length === 7) {
              let number1 = parseFloat(parts[1].trim()); // 数値の部分を取得し、数値に変換
              if (!isNaN(number1)) {
                  total1 += number1;
              }
            let number2 = parseFloat(parts[2].trim()); // 数値の部分を取得し、数値に変換
            if (!isNaN(number2)) {
                total2 += number2;
            }
            let number3 = parseFloat(parts[3].trim()); // 数値の部分を取得し、数値に変換
            if (!isNaN(number3)) {
                total3 += number3;
                lineCount++;// 行数をカウント
                average3 = (total3 / lineCount).toFixed(2);// 平均3を計算
            }
            let number4 = parseFloat(parts[4].trim()); // 数値の部分を取得し、数値に変換
            if (!isNaN(number4)) {
                total4 += number4;
            }
            let number5 = parseFloat(parts[5].trim()); // 数値の部分を取得し、数値に変換
            if (!isNaN(number5)) {
                total5 += number5;
            }
            let number6 = parseFloat(parts[6].trim()); // 数値の部分を取得し、数値に変換
            if (!isNaN(number6)) {
                total6 += number6;
            }
          }
      });

      // 合計値を赤い四角に表示
      document.getElementById('totalBox').innerText = '生産数: ' + total1;

      // 合計値をnum1～num6に表示
      document.getElementById('num1Box').innerText = '生産数: ' + total1;
      document.getElementById('num2Box').innerText = '稼働率: ' + average3;
      document.getElementById('num3Box').innerText = 'ライン停止分: ' + total2;
      document.getElementById('num4Box').innerText = '呼出し回数: ' + total4;
      document.getElementById('num5Box').innerText = '作業遅れ回数: ' + total5;
      document.getElementById('num6Box').innerText = '設備異常件数: ' + total6;

      // 合計値をそれぞれの箱に表示
      document.getElementById('num1Value').innerText = total1;
      document.getElementById('num2Value').innerText = average3;
      document.getElementById('num3Value').innerText = total2;
      document.getElementById('num4Value').innerText = total4;
      document.getElementById('num5Value').innerText = total5;
      document.getElementById('num6Value').innerText = total6;

  };

  reader.readAsText(file);
});

/// ドロップダウンが変更されたときの処理
document.getElementById('period').addEventListener('change', function(event) {
  let period = event.target.value;
  let lines = document.getElementById('fileContent').innerText.split('\n');
  let total1 = 0;
  let total2 = 0;
  let total3 = 0;
  let total4 = 0;
  let total5 = 0;
  let total6 = 0;
  let lineCount = 0;
  let average3 = 0;

  let today = new Date();
  let firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  let firstDayOfYear = new Date(today.getFullYear(), 0, 1);

  lines.forEach(function(line) {
      let parts = line.split(',');
      if (parts.length === 7) {
          let date = new Date(parts[0].trim());
          let number1 = parseFloat(parts[1].trim());
          if (!isNaN(number1)) {
              if (period === 'today' && date.toDateString() === today.toDateString()) {
                  total1 += number1;
              } else if (period === 'thisWeek' && date >= firstDayOfWeek) {
                  total1 += number1;
              } else if (period === 'thisMonth' && date >= firstDayOfMonth) {
                  total1 += number1;
              } else if (period === 'thisYear' && date >= firstDayOfYear) {
                  total1 += number1;
              }
          }
          let number2 = parseFloat(parts[2].trim());
          if (!isNaN(number2)) {
            if (period === 'today' && date.toDateString() === today.toDateString()) {
                total2 += number2;
            } else if (period === 'thisWeek' && date >= firstDayOfWeek) {
                total2 += number2;
            } else if (period === 'thisMonth' && date >= firstDayOfMonth) {
                total2 += number2;
            } else if (period === 'thisYear' && date >= firstDayOfYear) {
                total2 += number2;
            }
          }
          let number3 = parseFloat(parts[3].trim());
          if (!isNaN(number3)) {
            if (period === 'today' && date.toDateString() === today.toDateString()) {
                total3 += number3;
                lineCount++;// 行数をカウント
                average3 = (total3 / lineCount).toFixed(2);// 平均3を計算
            } else if (period === 'thisWeek' && date >= firstDayOfWeek) {
                total3 += number3;
                lineCount++;// 行数をカウント
                average3 = (total3 / lineCount).toFixed(6);// 平均3を計算
            } else if (period === 'thisMonth' && date >= firstDayOfMonth) {
                total3 += number3;
                lineCount++;// 行数をカウント
                average3 = (total3 / lineCount).toFixed(6);// 平均3を計算
            } else if (period === 'thisYear' && date >= firstDayOfYear) {
                total3 += number3;
                lineCount++;// 行数をカウント
                average3 = (total3 / lineCount).toFixed(6);// 平均3を計算
            }
          }
          let number4 = parseFloat(parts[4].trim());
          if (!isNaN(number4)) {
            if (period === 'today' && date.toDateString() === today.toDateString()) {
                total4 += number4;
            } else if (period === 'thisWeek' && date >= firstDayOfWeek) {
                total4 += number4;
            } else if (period === 'thisMonth' && date >= firstDayOfMonth) {
                total4 += number4;
            } else if (period === 'thisYear' && date >= firstDayOfYear) {
                total4 += number4;
            }
          }
          let number5 = parseFloat(parts[5].trim());
          if (!isNaN(number5)) {
            if (period === 'today' && date.toDateString() === today.toDateString()) {
                total5 += number5;
            } else if (period === 'thisWeek' && date >= firstDayOfWeek) {
                total5 += number5;
            } else if (period === 'thisMonth' && date >= firstDayOfMonth) {
                total5 += number5;
            } else if (period === 'thisYear' && date >= firstDayOfYear) {
                total5 += number5;
            }
          }
          let number6 = parseFloat(parts[6].trim());
          if (!isNaN(number6)) {
            if (period === 'today' && date.toDateString() === today.toDateString()) {
                total6 += number6;
            } else if (period === 'thisWeek' && date >= firstDayOfWeek) {
                total6 += number6;
            } else if (period === 'thisMonth' && date >= firstDayOfMonth) {
                total6 += number6;
            } else if (period === 'thisYear' && date >= firstDayOfYear) {
                total6 += number6;
            }
          }

          
      }
  });

  // 合計値を赤い四角に表示
  document.getElementById('totalBox').innerText = '生産数ﾄﾞﾛｯﾌﾟﾀﾞｳﾝ: ' + total1;

  // 合計値をnum1～num6に表示
  document.getElementById('num1Box').innerText = '生産数: ' + total1;
  document.getElementById('num2Box').innerText = '稼働率: ' + average3;
  document.getElementById('num3Box').innerText = 'ライン停止分: ' + total2;
  document.getElementById('num4Box').innerText = '呼出し回数: ' + total4;
  document.getElementById('num5Box').innerText = '作業遅れ回数: ' + total5;
  document.getElementById('num6Box').innerText = '設備異常件数: ' + total6;

  // 合計値をそれぞれの箱に表示
  document.getElementById('num1Value').innerText = total1;
  document.getElementById('num2Value').innerText = average3;
  document.getElementById('num3Value').innerText = total2;
  document.getElementById('num4Value').innerText = total4;
  document.getElementById('num5Value').innerText = total5;
  document.getElementById('num6Value').innerText = total6;
});
