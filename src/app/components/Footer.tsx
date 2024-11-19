import { SiFacebook, SiMessenger, SiZalo } from "react-icons/si";
import { ImPhone } from "react-icons/im";
import { IoIosMail } from "react-icons/io";

import '@/styles/components/Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="container-lg">
                <div className="row gy-3">
                    <div className="col-xl-4">
                        <div className="footer-heading">
                            <a href="/">
                                <img className="object-fit-contain" src='/imgs/logo.png' alt="logo" />
                            </a>
                            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat venenatis pellentesque in torquent ad iaculis, viverra fermentum. Erat condimentum augue sodales suscipit varius ad.</p>
                            <ul>
                                <li>
                                    <a href="#"><SiFacebook/></a>
                                </li>
                                <li>
                                    <a href="#"><SiMessenger/></a>
                                </li>
                                <li>
                                    <a href="#"><SiZalo/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-2">
                        <div className="footer-menu">
                            <p className="text-lg fw-semibold mb-3">Thông tin</p>
                            <ul>
                                <li>
                                    <a href="/about">Giới thiệu</a>
                                </li>
                                <li>
                                    <a href="/about">Tuyển dụng</a>
                                </li>
                                <li>
                                    <a href="/about">Tin tức</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-2">
                        <div className="footer-menu">
                            <p className="text-lg fw-semibold mb-3">Dịch vụ</p>
                            <ul>
                                <li>
                                    <a href="#">Thuê trọ</a>
                                </li>
                                <li>
                                    <a href="#">Tư vấn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4">
                        <div className="footer-menu">
                            <p className="text-lg fw-semibold mb-3">Liên hệ</p>
                            <ul>
                                <li className="mb-3">Đường Phạm Văn Chiêu, quận Gò Vấp, Hồ Chí minh</li>
                                <li>
                                    <a href="tel:0123456789" className="d-flex align-items-center gap-2">
                                        <ImPhone/>
                                        0123456789
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:exam@gmail.com" className="d-flex align-items-center gap-2">
                                        <IoIosMail/>
                                        exam@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-license d-flex justify-content-between align-items-center">
                    <p>Copyright © 2024 4U All Rights Reserved.</p>
                    <a href="#">Điều khoản và Chính sách</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
