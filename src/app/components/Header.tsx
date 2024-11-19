import { FaPhone, FaNewspaper } from "react-icons/fa";
import { VscHome, VscGitStashApply } from "react-icons/vsc";
import { TbInfoSquareRounded } from "react-icons/tb";

import '@/styles/components/Header.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="container-lg">
                <div className="header-wraper">
                    <div className="header-menu d-flex justify-content-between align-items-center">
                        <a href="/" className="d-none d-sm-block">
                            <img className="object-fit-contain" src='/imgs/logo.png' alt="logo" />
                        </a>
                        <div className="d-flex align-items-center column-gap-4">
                            <ul>
                                <li>
                                    <a href="/" className="d-flex d-sm-none flex-column flex-sm-row align-items-center gap-1">
                                        <VscHome/>
                                        <span>Trang chủ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="d-flex flex-column flex-sm-row align-items-center gap-1">
                                        <TbInfoSquareRounded/>
                                        <span>Về chúng tôi</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/recruit" className="d-flex flex-column flex-sm-row align-items-center gap-1">
                                        <VscGitStashApply/>
                                        <span>Tuyển dụng</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/article" className="d-flex flex-column flex-sm-row align-items-center gap-1">
                                        <FaNewspaper/>
                                        <span>Tin tức</span>
                                    </a>
                                </li>
                            </ul>
                            <a href="tel:#" className="btn d-none d-sm-inline-flex">
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
