import { FaPhone } from "react-icons/fa";

import '@/styles/components/Header.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="container-lg">
                <div className="header-wraper">
                    <div className="d-flex justify-content-between align-items-center">
                        <a href="/">
                            <img className="object-fit-contain" src='/imgs/logo.png' alt="logo" />
                        </a>
                        <div className="d-flex align-items-center column-gap-4">
                            <ul>
                                <li>
                                    <a href="/about">Về chúng tôi</a>
                                </li>
                                <li>
                                    <a href="/recruit">Tuyển dụng</a>
                                </li>
                                <li>
                                    <a href="/article">Tin tức</a>
                                </li>
                            </ul>
                            <a href="tel:#" className="btn">
                                Liên hệ
                                <FaPhone />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
