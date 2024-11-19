'use client'

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Lottie from "lottie-react";
import { CiSearch, CiDollar, CiLocationOn, CiMedal, CiPen } from "react-icons/ci";
import { PiBriefcaseLight, PiGenderIntersex } from "react-icons/pi";
import { VscGitStashApply } from "react-icons/vsc";

import '@/styles/pages/recruit.scss';
import cv from "../../../public/animations/cv.json";
import test from "../../../public/animations/test.json";
import interview from "../../../public/animations/interview.json";
import work from "../../../public/animations/work.json";
import jobs from '../../../public/dummy/jobs.json';
import useResponsive from "../hooks/useResponsive";

interface RecruitDescProps {
    id: number;
    title: string;
    salary: string;
    location: string;
    type: string;
    qualification: string;
    experience: string;
    gender: number;
    publishAt: string;
    skill: string[];
    description: string;
}

export default function Recruit() {
    const isTabletOrBelow = useResponsive();
    const [selectedJob, setSelectedJob] = useState<RecruitDescProps | null>(jobs.length > 0 ? jobs[0] : null);

    return (
        <div className="recruit">
            <section className='heading'>
                <img className="w-100 h-100 object-fit-cover" src='imgs/heading.jpg' alt="article" />
                <div className='position-relative'>
                    <div className='container-lg'>
                        <h1 className='fw-extrabold'>
                            Xây Dựng Tương Lai Cùng
                            <br />
                            <span className="stroke">Chúng Tôi</span>
                        </h1>
                        <form action="" className="search mt-4">
                            <input type="text" placeholder="Tìm kiếm công việc bạn mơ ước..."/>
                            <button className="btn">
                                <CiSearch />
                                <p>Tìm kiếm</p>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-lg">
                    <div className="row">
                        <div className='col-lg-4'>
                            { isTabletOrBelow ?
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={24}
                                    speed={1250}
                                    breakpoints={{
                                        425: {
                                            slidesPerView: "auto",
                                        },
                                    }}
                                    className="swiper-recruit"
                                >
                                    { jobs.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="recruit-item" onClick={() => setSelectedJob(item)}>
                                                <div>
                                                    <p className="recruit-item__time text-sm">Đăng tuyển 3 ngày trước</p>
                                                    <p className="recruit-item__title text-md fw-semibold">{item.title}</p>
                                                </div>
                                                <ul className="recruit-item__info">
                                                    <li className="text-sm mb-1">
                                                        <CiDollar />
                                                        <p>{item.salary}</p>
                                                    </li>
                                                    <li className="text-sm">
                                                        <CiLocationOn />
                                                        <p>{item.location}</p>
                                                    </li>
                                                </ul>
                                                <ul className="recruit-item__more">
                                                    <li className="text-sm">{item.type}</li>
                                                    <li className="text-sm">{item.experience}</li>
                                                </ul>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                :
                                <div className="recruit-list">
                                    { jobs.map((item, index) => (
                                        <div className="recruit-item" key={index} onClick={() => setSelectedJob(item)}>
                                            <div>
                                                <p className="recruit-item__time text-sm">Đăng tuyển 3 ngày trước</p>
                                                <p className="recruit-item__title text-md fw-semibold">{item.title}</p>
                                            </div>
                                            <ul className="recruit-item__info">
                                                <li className="text-sm mb-1">
                                                    <CiDollar />
                                                    <p>{item.salary}</p>
                                                </li>
                                                <li className="text-sm">
                                                    <CiLocationOn />
                                                    <p>{item.location}</p>
                                                </li>
                                            </ul>
                                            <ul className="recruit-item__more">
                                                <li className="text-sm">{item.type}</li>
                                                <li className="text-sm">{item.experience}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                        <div className='col-lg-8'>
                        {selectedJob ? (
                            <RecruitDesc {...selectedJob} />
                        ) : (
                            <p>Chọn một công việc để xem chi tiết</p>
                        )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="recruit-process">
                <div className="container-lg">
                    <div className="mb-3 mb-sm-4">
                        <p className="text-md">Từng Bước Chạm Tới Thành Công</p>
                        <h2 className="h3 fw-extrabold">Quy trình tuyển dụng</h2>
                    </div>
                    <div className="recruit-process__wrapper">
                        <div className="recruit-process__item">
                            <Lottie animationData={cv} loop={true} />
                            <p className="h6 fw-semibold text-capitalize mb-2">Nộp CV</p>
                            <p className="text-sm">Gửi CV và thông tin cá nhân của bạn qua email hoặc hệ thống của chúng tôi. Hãy đảm bảo thông tin chính xác và đầy đủ</p>
                        </div>
                        <div className="recruit-process__item">
                            <Lottie animationData={test} loop={true} />
                            <p className="h6 fw-semibold text-capitalize mb-2">Làm test</p>
                            <p className="text-sm">Hoàn thành bài test để chúng tôi hiểu rõ hơn về kỹ năng và khả năng của bạn</p>
                        </div>
                        <div className="recruit-process__item">
                            <Lottie animationData={interview} loop={true} />
                            <p className="h6 fw-semibold text-capitalize mb-2">Phỏng vấn</p>
                            <p className="text-sm">Trò chuyện trực tiếp với đội ngũ của chúng tôi để tìm hiểu và khẳng định sự phù hợp</p>
                        </div>
                        <div className="recruit-process__item">
                            <Lottie animationData={work} loop={true} />
                            <p className="h6 fw-semibold text-capitalize mb-2">Nhận việc</p>
                            <p className="text-sm">Chúc mừng! Bạn đã sẵn sàng trở thành một phần của chúng tôi và bắt đầu hành trình mới</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const RecruitDesc: React.FC<RecruitDescProps> = ({ id, title, salary, location, type, qualification, experience, gender, publishAt, skill, description }) => {
    return (
        <div className="recruit-desc">
            <div className="recruit-desc__heading">
                <p className="h4 fw-bold text-center text-capitalize mb-3">{title}</p>
                <ul>
                    <li className="text-sm">
                        <CiLocationOn />
                        <div>
                            <p className="text-sm fw-semibold">Địa điểm</p>
                            <p>{location}</p>
                        </div>
                    </li>
                    <li>
                        <CiDollar />
                        <div>
                            <p className="text-sm fw-semibold">Mức lương</p>
                            <p>{salary}</p>
                        </div>
                    </li>
                    <li>
                        <PiBriefcaseLight />
                        <div>
                            <p className="text-sm fw-semibold">Hình thức</p>
                            <p>{type}</p>
                        </div>
                    </li>
                    <li>
                        <CiMedal />
                        <div>
                            <p className="text-sm fw-semibold">Trình độ</p>
                            <p>{qualification}</p>
                        </div>
                    </li>
                    <li>
                        <CiPen />
                        <div>
                            <p className="text-sm fw-semibold">Kinh nghiệm</p>
                            <p>{experience}</p>
                        </div>
                    </li>
                    <li>
                        <PiGenderIntersex />
                        <div>
                            <p className="text-sm fw-semibold">Giới tính</p>
                            <p>{gender === 0 ? "Nữ" : gender === 1 ? "Nam" : "Không"}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <article dangerouslySetInnerHTML={{ __html: description }}>
            </article>
            <div className="recruit-desc__footer">
                <p>Kỹ năng</p>
                <ul>
                    {skill.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <button className="btn justify-content-center rounded-4 w-100 mt-4">
                <VscGitStashApply/>
                Ứng tuyển
            </button>
        </div>
    );
};