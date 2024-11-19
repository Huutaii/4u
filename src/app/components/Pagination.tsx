import React from "react";
import '@/styles/components/Pagination.scss';
import { RxCaretRight } from "react-icons/rx";

const Pagination: React.FC = () => {
    return (
        <ul className="pagination mt-4">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>...</li>
            <li><RxCaretRight /></li>
        </ul>
    );
};

export default Pagination;
