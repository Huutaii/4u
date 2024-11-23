'use client'

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Lottie from "lottie-react";
import { Link as ScrollLink, Element } from "react-scroll";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CiSearch, CiDollar, CiLocationOn, CiMedal, CiPen } from "react-icons/ci";
import { PiBriefcaseLight, PiGenderIntersex } from "react-icons/pi";
import { VscGitStashApply } from "react-icons/vsc";

import '@/styles/pages/recruit.scss';
import cv from "../../../public/animations/cv.json";
import test from "../../../public/animations/test.json";
import interview from "../../../public/animations/interview.json";
import work from "../../../public/animations/work.json";
import jobsData from '../../../public/dummy/jobs.json';
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

const jobs: RecruitDescProps[] = jobsData as RecruitDescProps[];

export default function Recruit() {
    const isTabletOrBelow = useResponsive();
    const [selectedJob, setSelectedJob] = useState<RecruitDescProps | null>(
        jobs.length > 0 ? jobs[0] : null
    );

    return (
        <div className="recruit">
            <section className='heading'>
                <img className="w-100 h-100 object-fit-cover" src='imgs/heading.jpg' alt="article" />
                <div className='recruit-heading position-relative'>
                    <div className='container-lg'>
                        <h1 className='fw-black'>
                            Xây Dựng Tương Lai Cùng
                            <br />
                            <span className="stroke">Chúng Tôi</span>
                        </h1>
                        <p className="recruit-heading__intro">Chúng tôi không chỉ tìm kiếm nhân sự, mà còn tìm kiếm những người đồng hành đam mê và nhiệt huyết. Hãy gia nhập đội ngũ của chúng tôi để cùng nhau vượt qua giới hạn, xây dựng giá trị và tạo nên những thành tựu đáng tự hào.</p>
                        <form action="" className="search">
                            <input type="text" placeholder="Tìm kiếm công việc bạn mơ ước..."/>
                            <button className="btn">
                                <CiSearch />
                                <p>Tìm kiếm</p>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="recruit-main">
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
                                                    <p className="recruit-item__title text-md fw-bold">{item.title}</p>
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
                                        <ScrollLink to="target" duration={1000} offset={-100} key={index}>
                                            <div className="recruit-item" onClick={() => setSelectedJob(item)}>
                                                <div>
                                                    <p className="recruit-item__time text-sm">Đăng tuyển 3 ngày trước</p>
                                                    <p className="recruit-item__title text-md fw-bold">{item.title}</p>
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
                                        </ScrollLink>
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
                        <h2 className="h3 fw-black">Quy trình tuyển dụng</h2>
                    </div>
                    <div className="recruit-process__wrapper">
                        <div className="recruit-process__item d-flex flex-row flex-lg-column align-items-center align-items-lg-start column-gap-3">
                            <Lottie animationData={cv} />
                            <div>
                                <p className="h6 fw-bold text-capitalize mb-2">Nộp CV</p>
                                <p>Gửi CV và thông tin cá nhân của bạn qua email hoặc hệ thống của chúng tôi. Hãy đảm bảo thông tin chính xác và đầy đủ</p>
                            </div>
                        </div>
                        <div className="recruit-process__item d-flex flex-row flex-lg-column align-items-center align-items-lg-start column-gap-3">
                            <Lottie animationData={test} />
                            <div>
                                <p className="h6 fw-bold text-capitalize mb-2">Làm test</p>
                                <p>Hoàn thành bài test để chúng tôi hiểu rõ hơn về kỹ năng và khả năng của bạn</p>
                            </div>
                        </div>
                        <div className="recruit-process__item d-flex flex-row flex-lg-column align-items-center align-items-lg-start column-gap-3">
                            <Lottie animationData={interview} />
                            <div>
                                <p className="h6 fw-bold text-capitalize mb-2">Phỏng vấn</p>
                                <p>Trò chuyện trực tiếp với đội ngũ của chúng tôi để tìm hiểu và khẳng định sự phù hợp</p>
                            </div>
                        </div>
                        <div className="recruit-process__item d-flex flex-row flex-lg-column align-items-center align-items-lg-start column-gap-3">
                            <Lottie animationData={work} />
                            <div>
                                <p className="h6 fw-bold text-capitalize mb-2">Nhận việc</p>
                                <p>Chúc mừng! Bạn đã sẵn sàng trở thành một phần của chúng tôi và bắt đầu hành trình mới</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const RecruitDesc: React.FC<RecruitDescProps> = ({ id, title, salary, location, type, qualification, experience, gender, publishAt, skill, description }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Element name="target">
            <div className="recruit-desc">
                <div className="recruit-desc__heading">
                    <p className="h4 fw-bold text-center text-capitalize mb-3">{title}</p>
                    <ul>
                        <li className="text-sm">
                            <CiLocationOn />
                            <div>
                                <p className="text-sm fw-bold">Địa điểm</p>
                                <p>{location}</p>
                            </div>
                        </li>
                        <li>
                            <CiDollar />
                            <div>
                                <p className="text-sm fw-bold">Mức lương</p>
                                <p>{salary}</p>
                            </div>
                        </li>
                        <li>
                            <PiBriefcaseLight />
                            <div>
                                <p className="text-sm fw-bold">Hình thức</p>
                                <p>{type}</p>
                            </div>
                        </li>
                        <li>
                            <CiMedal />
                            <div>
                                <p className="text-sm fw-bold">Trình độ</p>
                                <p>{qualification}</p>
                            </div>
                        </li>
                        <li>
                            <CiPen />
                            <div>
                                <p className="text-sm fw-bold">Kinh nghiệm</p>
                                <p>{experience}</p>
                            </div>
                        </li>
                        <li>
                            <PiGenderIntersex />
                            <div>
                                <p className="text-sm fw-bold">Giới tính</p>
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
                <button className="btn justify-content-center rounded-4 w-100 mt-4" onClick={() => setModalShow(true)}>
                    <VscGitStashApply/>
                    Ứng tuyển
                </button>
            </div>

            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </Element>
    );
};

interface MyVerticallyCenteredModalProps {
    show: boolean;
    onHide: () => void;
}
const MyVerticallyCenteredModal: React.FC<MyVerticallyCenteredModalProps> = (props) => {
    return (
        <Modal
            {...props}
            scrollable={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="recruit-modal"
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <Form>
                    <h4 className="fw-bold mb-3">Biểu mẫu ứng tuyển</h4>
                    <div>
                        <FloatingLabel controlId="floatingName" label="Họ và tên" className="mb-2">
                            <Form.Control type="name" placeholder="Họ và tên" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPhone" label="Số điện thoại" className="mb-2">
                            <Form.Control type="phone" placeholder="Số điện thoại" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-2">
                            <Form.Control type="email" placeholder="Email" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea" label="Mô tả đôi chút về bản thân" className="mb-2">
                            <Form.Control as="textarea" placeholder="Mô tả đôi chút về bản thân" style={{ height: '200px' }} />
                        </FloatingLabel>
                        <Form.Group className="position-relative">
                            <Form.Control
                                type="file"
                                required
                                name="file"
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <h4 className="fw-bold mb-3 mt-4">Đánh giá năng lực</h4>
                    <div>
                        <div className="mb-2">
                            <p className="mb-1"><span className="fw-bold">Câu 1:</span> Aliquet blandit erat commodo laoreet faucibus; turpis lorem maecenas elementum.</p>
                            <Form.Control as="textarea" rows={3} />
                        </div>
                        <div className="mb-2">
                            <p className="mb-1"><span className="fw-bold">Câu 2:</span> Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                            <Form.Control as="textarea" rows={3} />
                        </div>
                        <div>
                            <p className="mb-1"><span className="fw-bold">Câu 3:</span> Duis non mattis leo molestie natoque montes neque. Pharetra facilisi morbi ullamcorper elit taciti dapibus.</p>
                            <Form.Check type="radio" name='sentences1' id='sentences1-1' label='Diam potenti consequat a molestie' />
                            <Form.Check type="radio" name='sentences1' id='sentences1-2' label='Condimentum in leo eu neque' />
                            <Form.Check type="radio" name='sentences1' id='sentences1-3' label='Venenatis curae mollis phasellus felis vivamus laoreet vel placerat.' />
                            <Form.Check type="radio" name='sentences1' id='sentences1-4' label='Pharetra facilisi morbi ullamcorper elit taciti dapibus' />
                        </div>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline" onClick={props.onHide}>Huỷ</button>
                <button className="btn">Nộp CV</button>
            </Modal.Footer>
        </Modal>
    );
}