'use client'

import React, { useState, useRef } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

import { FaNewspaper } from "react-icons/fa";
import { TiPhone } from "react-icons/ti";
import { VscGitStashApply } from "react-icons/vsc";
import { TbInfoSquareRounded } from "react-icons/tb";
import { MdPhonelink } from "react-icons/md";

import useResponsive from '../hooks/useResponsive';

import '@/styles/components/Header.scss';

const links = [
    { name: "Website 1", url: "#", img: '/imgs/link/link1.png' },
    { name: "Website 2", url: "#", img: '/imgs/link/link2.png' },
    { name: "Website 3", url: "#", img: '/imgs/link/link3.png' },
    { name: "Website 4", url: "#", img: '/imgs/link/link4.png' },
];
const pcMenus = [
    { name: "Trang chủ", url: "/" },
    { name: "Giới thiệu", url: "/about" },
    { 
        name: "Tin tức",
        url: "/article",
        children: [
            { name: "Xu hướng", url: "/article" },
            { name: "Mẹo", url: "/article" },
            { name: "Kinh nghiệm", url: "/article" }
        ]
    },
    {
        name: "Tuyển dụng",
        url: "/recruit",
        children: [
            { name: "Quản lý nhà trọ", url: "/recruit" },
            { name: "Chuyên viên kinh doanh", url: "/recruit" },
            { name: "Bảo trì kỹ thuật", url: "/recruit" },
            { name: "Chăm sóc khách hàng", url: "/recruit" }
        ]
    }
];
const mobileMenus = [
    { 
        name: "Tin tức",
        url: "/article",
        children: [
            { name: "Xu hướng", url: "/article" },
            { name: "Mẹo", url: "/article" },
            { name: "Kinh nghiệm", url: "/article" }
        ]
    },
    { name: "Giới thiệu", url: "/about" },
    { name: "Trang chủ", url: "/" },
    {
        name: "Tuyển dụng",
        url: "/recruit",
        children: [
            { name: "Quản lý nhà trọ", url: "/recruit" },
            { name: "Chuyên viên kinh doanh", url: "/recruit" },
            { name: "Bảo trì kỹ thuật", url: "/recruit" },
            { name: "Chăm sóc khách hàng", url: "/recruit" }
        ]
    },
];
const iconMapping = {
    "/about": <TbInfoSquareRounded />,
    "/article": <FaNewspaper />,
    "/recruit": <VscGitStashApply />,
};

const Header: React.FC = () => {
    const isTabletOrBelow = useResponsive(768);

    return (
        <>
            { isTabletOrBelow ?
                <HeaderMobile />
                :
                <HeaderPC />
            }
        </>
    );
};

export default Header;

const HeaderPC: React.FC = () => {
    return (
        <header className="header-pc">
            <div className="container-lg">
                <div className="header-pc__wrapper d-flex align-items-center column-gap-2">
                    <a href="/">
                        <img className="object-fit-contain" src='/imgs/logo.png' alt="logo" />
                    </a>
                    <ul className="ms-2">
                        { pcMenus.map((menu, index) => (
                            <li key={index}>
                                <a href={menu.url}>{menu.name}</a>
                                {menu.children && menu.children.length > 0 && (
                                    <ul>
                                        {menu.children.map((child) => (
                                        <li key={child.url}>
                                            <a href={child.url}>{child.name}</a>
                                        </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="header-pc__link ms-auto">
                        <button className="btn btn-outline">
                            <MdPhonelink />
                        </button>
                        <div>
                            <div className="header-pc__link__list">
                                { links.map((link, index) => (
                                    <a href={link.url} key={index}>
                                        <div>
                                            <p className="h4 fw-bold">{link.name}</p>
                                        </div>
                                        <img className="object-fit-contain" src={link.img} alt="logo" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <a href="tel:#" className="btn icon-decor d-none d-sm-inline-flex">
                        Liên hệ
                        <TiPhone className="phone-ring" />
                    </a>
                </div>
            </div>
        </header>
    );
}

const HeaderMobile: React.FC = () => {
    const [show, setShow] = useState(false);
    const currentMenu = useRef<{ name: string; children?: Array<{ name: string; url: string }> }>({
        name: "",
        children: [],
    });

    return(
        <>
            <header className="header-mobile">
                <ul>
                    {mobileMenus.map((menu, index) => {
                        const isRoot = menu.url === "/";
                        const hasChildren = menu.children && menu.children.length > 0;
                        return (
                            <li key={index}>
                                {hasChildren ? (
                                <div className="d-flex flex-column justify-content-center align-items-center row-gap-1 text-center"
                                    onClick={() => {
                                        currentMenu.current = { name: menu.name, children: menu.children };
                                        setShow(true)
                                    }}
                                >
                                    {isRoot ? (
                                        <div className="header-mobile__logo">
                                            <img className="object-fit-contain" src="/imgs/logo.png" alt="logo" />
                                            <div></div>
                                        </div>
                                    ) : (
                                        <>
                                            {iconMapping[menu.url as keyof typeof iconMapping] || null}
                                        </>
                                    )}
                                    <p>{menu.name}</p>
                                </div>
                                ) : (
                                <a href={menu.url} className="d-flex flex-column justify-content-center align-items-center row-gap-1 text-center">
                                    {isRoot ? (
                                        <div className="header-mobile__logo">
                                            <img className="object-fit-contain" src="/imgs/logo.png" alt="logo" />
                                            <div></div>
                                        </div>
                                    ) : (
                                        <>
                                            {iconMapping[menu.url as keyof typeof iconMapping] || null}
                                        </>
                                    )}
                                    <p>{menu.name}</p>
                                </a>
                                )}
                            </li>
                        );
                    })}
                    <li>
                        <div className="d-flex flex-column justify-content-center align-items-center row-gap-1 text-center"
                            onClick={() => {
                                currentMenu.current = { name: "Liên kết", children: links };
                                setShow(true)
                            }}
                        >
                            <MdPhonelink />
                            <p>Liên kết</p>
                        </div>
                    </li>
                </ul>
            </header>
            <OffcanvasMenuMobile
                show={show}
                onHide={() => setShow(false)}
                menu={currentMenu.current}
            />
        </>
    );
}

const OffcanvasMenuMobile: React.FC<{
    show: boolean;
    onHide: () => void;
    menu: { name: string; children?: Array<{ name: string; url: string }> };
}> = ({ show, onHide, menu }) => {
    return (
        <Offcanvas placement="bottom" show={show} onHide={onHide}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{menu.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div>
                    <ul>
                        {menu.children && menu.children.map((child, index) => (
                            <li key={index}>
                                <a href={child.url}>{child.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};