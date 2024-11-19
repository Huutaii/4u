import { MdPhoneInTalk } from "react-icons/md";

import '@/styles/components/RecruitCta.scss';

const RecruitCta: React.FC = () => {
    return (
        <div className="recruit-cta">
            <img className="w-100 h-100 object-fit-cover" src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="logo" />
            <div className="container-lg">
                <div className="row justify-content-center justify-content-lg-end ">
                    <div className="col-lg-6">
                        <div className="recruit-cta__main">
                            <p className="h3 text-capitalize">
                                <span className="fw-extrabold">Dẫn lối tương lai</span>
                                <br />
                                <span className="h4">Gia nhập cùng chúng tôi</span>
                            </p>
                            <div className="d-flex flex-wrap-reverse align-items-center row-gap-3 column-gap-5 mt-3 mt-xl-4">
                                <a href="/recruit" className="btn">Ứng tuyển</a>
                                <a href="tel:0123456789" className="recruit-cta__main--btn d-flex align-items-center column-gap-3">
                                    <MdPhoneInTalk />
                                    <div>
                                        <p className="text-sm">Cần tư vấn</p>
                                        <p className="text-lg fw-semibold">+0123 456 789</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecruitCta;
