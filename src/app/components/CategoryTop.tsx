import React from "react";
import { TbListNumbers } from "react-icons/tb";
import { HiOutlineFire } from "react-icons/hi2";

import '@/styles/components/CategoryTop.scss';

import categories from '../../../public/dummy/categories.json';

const CategoryTop: React.FC = () => {
    return (
        <section className="category">
            <div className="d-flex align-items-center gap-2">
                <TbListNumbers />
                <p className="text-sm fw-semibold">Top 5 danh mục</p>
            </div>
            <ul>
                { categories.map((item, index) => (
                    <li key={index}>
                        <a href="#">
                            <img className="object-fit-cover" src={item.thumbnail} alt={item.title} />
                        </a>
                        <div>
                            <a href="#" className="fw-semibold">{item.title}</a>
                            <p className="text-sm d-flex align-items-center gap-1"><HiOutlineFire/> {item.children} bài</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CategoryTop;
