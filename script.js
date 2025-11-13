// Hiển thị chi tiết sản phẩm
function xemChiTiet(id) {
  localStorage.setItem("spChon", id);
  window.location.href = "chitiet.html";
}

// Dữ liệu sản phẩm mẫu
const dsSanPham = {
  1: { ten: "Sản phẩm 1", gia: "45.000₫", moTa: "Sản phẩm cao cấp, bền và đẹp.", img: "sp1.jpg" },
  2: { ten: "Sản phẩm 2", gia: "35.000₫", moTa: "Sản phẩm giá rẻ, tiện dụng.", img: "sp2.jpg" }
};

// Tải chi tiết sản phẩm
if (document.getElementById("chitiet")) {
  const id = localStorage.getItem("spChon");
  const sp = dsSanPham[id];
  if (sp) {
    document.getElementById("chitiet").innerHTML = `
      <h2>${sp.ten}</h2>
      <img src="${sp.img}" width="300">
      <p>${sp.moTa}</p>
      <p><b>Giá:</b> ${sp.gia}</p>
      <button onclick="themVaoGioHang('${id}')">Thêm vào giỏ hàng</button>
    `;
  }
}

// Giỏ hàng
function themVaoGioHang(id) {
  let gio = JSON.parse(localStorage.getItem("gio")) || [];
  gio.push(dsSanPham[id]);
  localStorage.setItem("gio", JSON.stringify(gio));
  alert("Đã thêm vào giỏ hàng!");
}

// Hiển thị giỏ hàng
if (document.getElementById("cartItems")) {
  let gio = JSON.parse(localStorage.getItem("gio")) || [];
  if (gio.length === 0) {
    document.getElementById("cartItems").innerHTML = "<li>Giỏ hàng trống.</li>";
  } else {
    document.getElementById("cartItems").innerHTML = gio
      .map(sp => `<li>${sp.ten} - ${sp.gia}</li>`)
      .join("");
  }
}

function xoaGioHang() {
  localStorage.removeItem("gio");
  alert("Đã xóa giỏ hàng!");
  location.reload();
}

// Đăng nhập giả lập
function dangNhap(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "123") {
    localStorage.setItem("user", user);
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}

// Hiển thị trạng thái đăng nhập
const loginLink = document.getElementById("loginLink");
if (loginLink && localStorage.getItem("user")) {
  loginLink.textContent = "Đăng xuất";
  loginLink.href = "#";
  loginLink.onclick = () => {
    localStorage.removeItem("user");
    alert("Đã đăng xuất!");
    location.reload();
  };
}
