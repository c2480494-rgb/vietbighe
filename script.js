document.addEventListener('DOMContentLoaded', () => {
  // === Thêm sản phẩm vào giỏ ===
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existing = cart.find(i => i.name === name);
      if (existing) existing.quantity++;
      else cart.push({ name, price, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} đã được thêm vào giỏ hàng!`);
    });
  });

  // === Hiển thị giỏ hàng ===
  const cartContainer = document.getElementById('cartItems');
  if (cartContainer) renderCart();

  // === Hàm tìm kiếm sản phẩm ===
  window.timKiem = function() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    localStorage.setItem('search', keyword);
    window.location.href = 'sanpham.html';
  };

  if (window.location.pathname.includes('sanpham.html')) {
    const search = localStorage.getItem('search');
    if (search) {
      document.querySelectorAll('.product').forEach(p => {
        const name = p.querySelector('h3').textContent.toLowerCase();
        p.style.display = name.includes(search) ? 'block' : 'none';
      });
      localStorage.removeItem('search');
    }
  }
});

function renderCart() {
  const cartContainer = document.getElementById('cartItems');
  const totalContainer = document.getElementById('cartTotal');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!cart.length) {
    cartContainer.innerHTML = '<p>Giỏ hàng trống.</p>';
    totalContainer.innerHTML = '';
    return;
  }
  let html = `<table>
      <tr><th>Tên</th><th>Số lượng</th><th>Giá</th><th>Tổng</th><th>Xóa</th></tr>`;
  let total = 0;
  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    html += `
      <tr>
        <td>${item.name}</td>
        <td>
          <button onclick="changeQty(${index}, -1)">-</button>
          ${item.quantity}
          <button onclick="changeQty(${index}, 1)">+</button>
        </td>
        <td>${item.price.toLocaleString()}₫</td>
        <td>${subtotal.toLocaleString()}₫</td>
        <td><button onclick="removeItem(${index})">🗑️</button></td>
      </tr>`;
  });
  html += '</table>';
  cartContainer.innerHTML = html;
  totalContainer.innerHTML = `<strong>Tổng cộng: ${total.toLocaleString()}₫</strong>`;
}

function changeQty(i, delta) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart[i].quantity += delta;
  if (cart[i].quantity <= 0) cart.splice(i, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function removeItem(i) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart.splice(i, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  if (confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng?')) {
    localStorage.removeItem('cart');
    renderCart();
  }
}// === Banner Slider ===
let slideIndex = 0;
let slides, dots;
let slideTimer;

document.addEventListener('DOMContentLoaded', function() {
  slides = document.querySelectorAll('.slides img');
  dots = document.querySelectorAll('.dots span');
  showSlide(slideIndex);
  slideTimer = setInterval(nextSlide, 4000);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function currentSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
  resetTimer();
}

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, 4000);
}
// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== FADE-IN ELEMENTS ON SCROLL =====
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => observer.observe(el));
});

