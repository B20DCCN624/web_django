import './style.css'
import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>Thông tin liên hệ</h4>
                    <p>Địa chỉ: Học viện công nghệ Bưu Chính Viễn Thông</p>
                    <p>Email: tuanva171@gmail.com</p>
                </div>
                <div className="footer-column footer-center">
                    <h4>Liên kết</h4>
                    <ul>
                        <li>
                            <a href="/">Trang chủ</a>
                        </li>
                        <li>
                            <a href="/">Sách mới</a>
                        </li>
                        <li>
                            <a href="/">Giới thiệu</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Theo dõi chúng tôi</h4>
                    <div className="social-icons">
                        <a href="/">
                        <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="/">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="/">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="/">
                            <i className="fa fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;