<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <title>Cửa hàng của Chương - Laptop Store</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>
  <header>
    <div class="logo">Cửa hàng của Chương</div>

    <div class="search-bar">
      <input id="searchInput" placeholder="Tìm laptop ...">
      <button title="Tìm"><i class="fas fa-search"></i></button>
    </div>

    <nav>
      <a href="index.html" class="active">Trang chủ</a>
      <a href="sanpham.html">Sản phẩm</a>
      <a href="gioithieu.html">Giới thiệu</a>
      <a href="chitiet.html">Chi tiết</a>
    </nav>

    <div class="icons">
      <a href="giohang.html" title="Giỏ hàng"><i class="fas fa-shopping-cart"></i></a>
      <a href="dangnhap.html" title="Tài khoản"><i class="fas fa-user-circle"></i></a>
    </div>
  </header>

  <main class="page-content">
    <!-- Banner -->
    <section class="banner">
      <div class="slides">
        <img src="banner1.jpg" class="active" alt="Sale laptop">
        <img src="banner2.jpg" alt="Laptop mới">
        <img src="banner3.jpg" alt="Ưu đãi">
      </div>
      <button class="prev" onclick="prevSlide()">❮</button>
      <button class="next" onclick="nextSlide()">❯</button>
    </section>

    <!-- Intro -->
    <section>
      <h2>Chào mừng đến Cửa hàng của Chương</h2>
      <p class="center small">Chuyên laptop cao cấp: gaming, đồ họa, làm việc — bảo hành chính hãng và giao hàng toàn quốc.</p>
    </section>

    <!-- Categories -->
    <section>
      <h2>Danh mục nổi bật</h2>
      <div class="cat-grid">
        <div class="cat-item"><img src="cat1.jpg" alt=""><p>Gaming</p></div>
        <div class="cat-item"><img src="cat2.jpg" alt=""><p>Office</p></div>
        <div class="cat-item"><img src="cat3.jpg" alt=""><p>Ultrabook</p></div>
        <div class="cat-item"><img src="cat4.jpg" alt=""><p>Phụ kiện</p></div>
      </div>
    </section>

    <!-- Products (10 laptops) -->
    <section>
      <h2>Danh sách sản phẩm</h2>
      <div class="product-grid">
        <!-- Each product: ensure data-name & data-price for script hooks -->
        <div class="product"><img src="sp1.jpg" alt=""><h3>Sản phẩm 1 - Legion</h3><p class="price">45.000₫</p><button data-name="Sản phẩm 1 - Legion" data-price="45000" data-add>Thêm vào giỏ</button></div>

        <div class="product"><img src="sp2.jpg" alt=""><h3>Sản phẩm 2 - Legion</h3><p class="price">35.000₫</p><button data-name="Sản phẩm 2 - Legion" data-price="35000" data-add>Thêm vào giỏ</button></div>

        <div class="product"><img src="sp3.jpg" alt=""><h3>Sản phẩm 3 - UltraBook</h3><p class="price">50.000₫</p><button data-name="Sản phẩm 3 - UltraBook" data-price="50000" data-add>Thêm vào giỏ</button></div>

        <div class="product"><img src="sp4.jpg" alt=""><h3>Sản phẩm 4 - Gaming Pro</h3><p class="price">65.000₫</p><button data-name="Sản phẩm 4 - Gaming Pro" data-price="65000" data-add>Thêm vào giỏ</button></div>

        <div class="product"><img src="sp5.jpg" alt=""><h3>Sản phẩm 5 - ThinkBook</h3><p class="price">70.000₫</p><button data-name="Sản phẩm 5 - ThinkBook" data-price="70000" data-add>Thêm vào giỏ</button></div>

        <div class="product"><img src="sp6.jpg" alt=""><h3>Sản phẩm 6 - Slim</h3><p class="price">55.000₫</p><button data-name="Sản phẩm 6 - Slim" data-price="55000" data-add>Thêm vào giỏ</button></div>

        <div class="product"><img src="sp7.jpg" alt=""><h3>Sản phẩm 7 - Legion X</h3><p class="price">80.000₫</p><button data-name="Sản phẩm 7 - Legion X" data-price="80000" data-add>Thêm vào giỏ</button></div>

        <div class="product"><img src="sp8.jpg" alt=""><h3>Sản phẩm 8 - Nano</h3><p class="price">25.000₫</p><button data-name="Sản phẩm 8 - Nano" data-price="25000" data-add>Thêm vào giỏ</button></div>

        <div class="product"><img src="sp9.jpg" alt=""><h3>Sản phẩm 9 - Studio</h3><p class="price">90.000₫</p><button data-name="Sản phẩm 9 - Studio" data-price="90000" data-add>Thêm vào giỏ</button></div>

        <div class="product"><img src="sp10.jpg" alt=""><h3>Sản phẩm 10 - Legion Pro</h3><p class="price">60.000₫</p><button data-name="Sản phẩm 10 - Legion Pro" data-price="60000" data-add>Thêm vào giỏ</button></div>
      </div>
    </section>

    <!-- Advertisement -->
    <section class="ad">
      <img src="ad1.jpg" alt="ad1">
      <img src="ad2.jpg" alt="ad2">
    </section>

    <!-- News (with modal) -->
    <section id="tintuc" class="news">
      <h2>Tin tức & Bài viết</h2>
      <div class="news-grid">
        <article class="news-item" data-title="Xu hướng laptop 2025" data-image="news1.jpg" data-content="Bài viết: Xu hướng...">
          <img src="news1.jpg" alt="">
          <div class="news-body"><h3>Xu hướng laptop 2025</h3><p>Tổng quan xu hướng: màn hình cao, GPU mạnh...</p></div>
        </article>
        <article class="news-item" data-title="Chọn laptop đồ họa" data-image="news2.jpg" data-content="Bài viết: Chọn laptop đồ họa...">
          <img src="news2.jpg" alt="">
          <div class="news-body"><h3>Chọn laptop đồ họa</h3><p>Lời khuyên chọn card, RAM, SSD...</p></div>
        </article>
        <article class="news-item more" data-title="Bảo quản pin laptop" data-image="news3.jpg" data-content="Bài viết: Bảo quản pin...">
          <img src="news3.jpg" alt="">
          <div class="news-body"><h3>Bảo quản pin laptop</h3><p>Mẹo sạc và sử dụng để kéo dài tuổi thọ pin...</p></div>
        </article>
      </div>
      <div class="center" style="margin-top:14px;"><button id="btnMore" class="btn-more" style="background:#19d6b2;border:none;padding:8px 12px;border-radius:8px;cursor:pointer;">Xem thêm bài viết</button></div>
    </section>

    <!-- Reviews -->
    <section class="reviews">
      <h2>Khách hàng nói gì</h2>
      <div class="review-grid">
        <div class="review"><p>“Mua máy xịn, giao nhanh”</p><strong>- Minh</strong></div>
        <div class="review"><p>“Hỗ trợ nhiệt tình, bảo hành tốt”</p><strong>- Hương</strong></div>
        <div class="review"><p>“Giá hợp lý, chất lượng đạt”</p><strong>- Nam</strong></div>
      </div>
    </section>

    <!-- Brands -->
    <section class="brands">
      <h2>Thương hiệu đối tác</h2>
      <div class="center">
        <img src="brand1.png" alt="">
        <img src="brand2.png" alt="">
        <img src="brand3.png" alt="">
        <img src="brand4.png" alt="">
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer>
    <div class="footer-container">
      <div class="footer-section">
        <h3>Liên hệ</h3>
        <p>📞 0369535877</p>
        <p>✉ cuahangchuong@gmail.com</p>
      </div>
      <div class="footer-section">
        <h3>Về chúng tôi</h3>
        <p>Cửa hàng chuyên laptop gaming & làm việc, bảo hành chính hãng.</p>
      </div>
      <div class="footer-section">
        <h3>Kết nối</h3>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <p class="copyright center">&copy; 2025 Cửa hàng của Chương</p>
  </footer>

  <!-- News modal -->
  <div id="modalBackdrop" class="modal-backdrop">
    <div class="modal" role="dialog" aria-modal="true">
      <div style="position:relative;">
        <div id="modalClose" class="close" style="position:absolute;right:12px;top:10px;cursor:pointer;color:#022;background:#19d6b2;padding:6px;border-radius:999px;">✕</div>
        <h2 id="modalTitle"></h2>
        <img id="modalImage" src="" style="width:100%;border-radius:8px;margin:12px 0;">
        <div id="modalContent"></div>
      </div>
    </div>
  </div>

</body>
</html>
