import React from "react";
import '@/styles/components/Ads.scss';

const Ads: React.FC = () => {
    return (
        <div className="ads">
            <div className="ads__item">
                <img className="w-100 h-100 object-fit-cover" src='/imgs/h72.jpg' alt="h72" />
                <p className="h5 fw-semibold">
                    <span>Ứng tuyển</span>
                    <br />
                    ngay
                </p>
                <a href="/recruit" className="btn mt-3">Xem thêm</a>
            </div>
        </div>
    );
};

export default Ads;
