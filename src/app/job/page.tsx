'use client'

import { useState, useRef } from "react";
import { useRouter } from 'next/navigation';
import Lottie from "lottie-react";
import { CiSearch, CiDollar, CiLocationOn } from "react-icons/ci";

import '@/styles/pages/job.scss';
import cv from "../../../public/animations/cv.json";
import test from "../../../public/animations/test.json";
import interview from "../../../public/animations/interview.json";
import work from "../../../public/animations/work.json";
import jobsData from '../../../public/dummy/jobs.json';
import useResponsive from "../hooks/useResponsive";
import JobDesc from "../components/JobDesc";

interface JobDescProps {
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

const jobs: JobDescProps[] = jobsData as JobDescProps[];

export default function Job() {
    const router = useRouter();
    const isTabletOrBelow = useResponsive();
    const topListRef = useRef<HTMLDivElement | null>(null);

    const [selectedJob, setSelectedJob] = useState<JobDescProps | null>(
        jobs.length > 0 ? jobs[0] : null
    );

    const handleJobSlect = (item: JobDescProps) => {
        setSelectedJob(item);
        
        const topElement = topListRef.current as HTMLElement;

        if (topElement) {
            window.scrollTo({
                top: topElement.offsetTop - 98,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="job">
            <section className='heading'>
                <img className="w-100 h-100 object-fit-cover" src='imgs/heading.jpg' alt="article" />
                <div className='job-heading position-relative'>
                    <div className='container-lg'>
                        <h1 className='fw-black'>
                            Xây Dựng Tương Lai Cùng
                            <br />
                            <span className="stroke">Chúng Tôi</span>
                        </h1>
                        <p className="job-heading__intro">Chúng tôi không chỉ tìm kiếm nhân sự, mà còn tìm kiếm những người đồng hành đam mê và nhiệt huyết. Hãy gia nhập đội ngũ của chúng tôi để cùng nhau vượt qua giới hạn, xây dựng giá trị và tạo nên những thành tựu đáng tự hào.</p>
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
            <section className="job-main">
                <div className="container-lg">
                    <div className="row">
                        <div className='col-lg-4'>
                                <div className="job-list">
                                    { jobs.map((item, index) => (
                                        <div key={index} className="job-item"
                                            onClick={() => isTabletOrBelow ? router.push(`/job/${item.id}`) : handleJobSlect(item)}
                                        >
                                            <div>
                                                <p className="job-item__time text-sm">Đăng tuyển 3 ngày trước</p>
                                                <p className="job-item__title text-md fw-bold">{item.title}</p>
                                            </div>
                                            <ul className="job-item__info">
                                                <li className="text-sm mb-1">
                                                    <CiDollar />
                                                    <p>{item.salary}</p>
                                                </li>
                                                <li className="text-sm">
                                                    <CiLocationOn />
                                                    <p>{item.location}</p>
                                                </li>
                                            </ul>
                                            <ul className="job-item__more">
                                                <li className="text-sm">{item.type}</li>
                                                <li className="text-sm">{item.experience}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                        </div>
                        <div className='col-lg-8'>
                        {( !isTabletOrBelow && selectedJob) && 
                            <div ref={topListRef}>
                                <JobDesc {...selectedJob} />
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </section>
            <section className="job-process">
                <div className="container-lg">
                    <div className="mb-3 mb-sm-4">
                        <p className="text-md">Từng Bước Chạm Tới Thành Công</p>
                        <h2 className="h3 fw-black">Quy trình tuyển dụng</h2>
                    </div>
                    <div className="job-process__wrapper">
                        <div className="job-process__item d-flex flex-row flex-lg-column align-items-center align-items-lg-start column-gap-3">
                            <Lottie animationData={cv} />
                            <div>
                                <p className="h6 fw-bold text-capitalize mb-2">Nộp CV</p>
                                <p>Gửi CV và thông tin cá nhân của bạn qua email hoặc hệ thống của chúng tôi. Hãy đảm bảo thông tin chính xác và đầy đủ</p>
                            </div>
                        </div>
                        <div className="job-process__item d-flex flex-row flex-lg-column align-items-center align-items-lg-start column-gap-3">
                            <Lottie animationData={test} />
                            <div>
                                <p className="h6 fw-bold text-capitalize mb-2">Làm test</p>
                                <p>Hoàn thành bài test để chúng tôi hiểu rõ hơn về kỹ năng và khả năng của bạn</p>
                            </div>
                        </div>
                        <div className="job-process__item d-flex flex-row flex-lg-column align-items-center align-items-lg-start column-gap-3">
                            <Lottie animationData={interview} />
                            <div>
                                <p className="h6 fw-bold text-capitalize mb-2">Phỏng vấn</p>
                                <p>Trò chuyện trực tiếp với đội ngũ của chúng tôi để tìm hiểu và khẳng định sự phù hợp</p>
                            </div>
                        </div>
                        <div className="job-process__item d-flex flex-row flex-lg-column align-items-center align-items-lg-start column-gap-3">
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
