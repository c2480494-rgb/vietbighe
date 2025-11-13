// Hiển thị form đăng ký
function showRegister() {
  document.getElementById('loginForm').classList.remove('active');
  setTimeout(() => {
    document.getElementById('registerForm').classList.add('active');
  }, 200);
}

// Hiển thị form đăng nhập
function showLogin() {
  document.getElementById('registerForm').classList.remove('active');
  setTimeout(() => {
    document.getElementById('loginForm').classList.add('active');
  }, 200);
}

// Xử lý đăng nhập (giả lập)
document.getElementById('loginFormElement').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'admin' && pass === '123') {
    alert('Đăng nhập thành công!');
    window.location.href = 'index.html';
  } else {
    alert('Sai tên đăng nhập hoặc mật khẩu!');
  }
});

// Xử lý đăng ký (giả lập)
document.getElementById('registerFormElement').addEventListener('submit', function (e) {
  e.preventDefault();
  const u = document.getElementById('newUsername').value;
  const p = document.getElementById('newPassword').value;
  const c = document.getElementById('confirmPassword').value;

  if (p !== c) {
    alert('Mật khẩu nhập lại không khớp!');
    return;
  }

  alert('Đăng ký thành công! Hãy đăng nhập.');
  showLogin();
});
