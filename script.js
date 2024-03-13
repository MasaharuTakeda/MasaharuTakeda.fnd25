'use strict'
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
  

document.getElementById('fileInput').addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(event) {
      var contents = event.target.result;
      document.getElementById('fileContent').innerText = contents;

      // 合計を計算
      var lines = contents.split('\n');
      var total = 0;
      lines.forEach(function(line) {
          var parts = line.split(',');
          if (parts.length === 7) {
              var number = parseFloat(parts[2].trim()); // 数値の部分を取得し、数値に変換
              if (!isNaN(number)) {
                  total += number;
              }
          }
      });

      // 合計値を赤い四角の中に表示
      document.getElementById('totalBox').innerText = 'ライン停止分: ' + total;

       // 各合計を計算
       var lines = contents.split('\n');
       var num1Total = 0;
       var num2Total = 0;
       var num3Total = 0;
       var num4Total = 0;
       var num5Total = 0;
       var num6Total = 0;

       lines.forEach(function(line) {
           var parts = line.split(',');
           if (parts.length === 7) {
               num1Total += parseFloat(parts[1].trim());
               num2Total += parseFloat(parts[2].trim());
               num3Total += parseFloat(parts[3].trim());
               num4Total += parseFloat(parts[4].trim());
               num5Total += parseFloat(parts[5].trim());
               num6Total += parseFloat(parts[6].trim());
               
        }
           
       });

       // 各合計値をそれぞれの箱に表示
       document.getElementById('num1Value').innerText = num1Total;
       document.getElementById('num2Value').innerText = num2Total;
       document.getElementById('num3Value').innerText = num3Total;
       document.getElementById('num4Value').innerText = num4Total;
       document.getElementById('num5Value').innerText = num5Total;
       document.getElementById('num6Value').innerText = num6Total;

  };

  reader.readAsText(file);
});
