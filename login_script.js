document.querySelector('button[type="submit"]').addEventListener('click', function() {
  var passwordInput = document.querySelector('input[name="password"]');
  var password = passwordInput.value;

  // パスワードのチェック
  if (password === 'toyota') { 
      //alert('ログイン成功！');
      window.location.href = 'index_monitor.html'; // index.htmlにリダイレクト
  } else {
      alert('パスワードが間違っています。もう一度お試しください。');
      passwordInput.value = ''; // パスワードをクリア
      passwordInput.focus(); // パスワード入力フィールドにフォーカスを戻す
  }
});