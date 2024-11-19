'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import '@/styles/pages/home.scss';

import { Autoplay, Parallax } from 'swiper/modules';
import RecruitCta from "./components/RecruitCta";
import ArticleItem from "./components/ArticleItem";

import articles from '../../public/dummy/articles.json';
import useResponsive from './hooks/useResponsive';

import { VscGitStashApply } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
    const isTabletOrBelow = useResponsive();

    return (
        <div className="home">
            <Swiper
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                loop={true}
                parallax={true}
                speed={1200}
                modules={[Autoplay, Parallax]}
            >
                {[
                    {
                        label: 'Không gian',
                        title: 'Căn hộ hiện đại, đầy đủ',
                        subtitle: 'tiện nghi',
                        intro: 'Trải nghiệm không gian sống tiện nghi, hiện đại, nơi mang lại sự thoải mái và phong cách cho cuộc sống của bạn.'
                    },
                    {
                        label: 'An ninh',
                        title: 'Phòng trọ dịch vụ sạch sẽ,',
                        subtitle: 'an ninh',
                        intro: 'Phòng trọ được thiết kế tiện lợi, sạch sẽ, an ninh, mang đến sự an tâm với mức chi phí hợp lý nhất.'
                    },
                    {
                        label: 'Dịch vụ',
                        title: 'Không gian sống phù hợp mọi',
                        subtitle: 'nhu cầu',
                        intro: 'Tận hưởng cuộc sống trọn vẹn với không gian hiện đại, đầy đủ tiện ích và dịch vụ chăm sóc chuyên nghiệp.'
                    }
                    ].map((banner, index) => (
                        <SwiperSlide key={index}>
                            <div className="hero-item">
                                <div className="hero-item__img">
                                    <img className="w-100 h-100 object-fit-cover" src={`imgs/hero${index+1}.jpg`} alt="hero" data-swiper-parallax="500" data-swiper-parallax-scale="1.4"/>
                                </div>
                                <div className="container-lg">
                                    <div className="hero-item__content" data-swiper-parallax-x="30%" data-swiper-parallax-scale=".5" data-swiper-parallax-opacity="0" data-swiper-parallax-duration="1000">
                                        <p className="hero-item__content--label">{banner.label}</p>
                                        <h1 className="hero-item__content--title fw-black">{banner.title} <span className='stroke'>{banner.subtitle}</span></h1>
                                        <p className="hero-item__content--intro">{banner.intro}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                ))}
            </Swiper>
            
            <section className="home-about">
                <div className="container-lg">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="home-about__left">
                                <div className="home-about__left--content d-flex flex-column align-items-start gap-4">
                                    <p className="home-about__left--content--subtitle h4 fw-light">Kiến tạo không gian sống lý tưởng cho mọi nhu cầu</p>
                                    <h2 className="h3 fw-extrabold">Khởi nguồn cho mọi hành trình</h2>
                                    <p className="home-about__left--content--intro">Chúng tôi là 4U, chuyên cung cấp dịch vụ thuê căn hộ và nhà trọ tiện nghi, an toàn, phù hợp với mọi nhu cầu. Với sứ mệnh mang đến không gian sống thoải mái, chúng tôi đồng hành cùng bạn trên hành trình tìm kiếm một nơi chốn thuộc về.</p>
                                    <a href="/about" className='btn btn-outline'>Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="home-about__imgs">
                                <div className="home-about__imgs__item">
                                    <img className="w-100 h-100 object-fit-cover" src="imgs/habout1.jpg" alt="image1" />
                                    <div className="home-about__imgs__item--info">
                                        <span className="home-about__imgs__item--info--title">Kinh nghiệm</span>
                                        <p className="home-about__imgs__item--info--label">Năm</p>
                                        <p className="home-about__imgs__item--info--number">10</p>
                                    </div>
                                </div>
                                <div className="home-about__imgs__item">
                                    <img className="w-100 h-100 object-fit-cover" src="imgs/habout2.jpg" alt="image2" />
                                </div>
                                <div className="home-about__imgs__item">
                                    <img className="w-100 h-100 object-fit-cover" src="imgs/habout3.jpg" alt="image3" />
                                </div>
                                <div className="home-about__imgs__item">
                                    <img className="w-100 h-100 object-fit-cover" src="imgs/habout4.jpg" alt="image3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <RecruitCta />

            <section className="home-article">
                <div className="container-lg">
                    <div className="text-center mb-3 mb-lg-4">
                        <p>News & Updates</p>
                        <h2 className="h3 fw-extrabold">Recent Articles</h2>
                    </div>
                    { isTabletOrBelow ?
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={24}
                            autoplay
                            loop={true}
                            speed={1250}
                            modules={[Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: "auto",
                                },
                            }}
                            className="swiper-article"
                        >
                            { articles
                            .filter(item => item.isFeatured === true)
                            .map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ArticleItem 
                                        id={item.id}
                                        title={item.title}
                                        intro={item.intro}
                                        thumbnail={item.thumbnail}
                                        author={item.author}
                                        publishAt={item.publishAt}
                                        tag={item.tag}
                                        isCard
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        :
                        <div className="home-article__wrapper">
                            { articles
                            .filter(item => item.isFeatured === true)
                            .map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ArticleItem 
                                        id={item.id}
                                        title={item.title}
                                        intro={item.intro}
                                        thumbnail={item.thumbnail}
                                        author={item.author}
                                        publishAt={item.publishAt}
                                        tag={item.tag}
                                        isCard={index==0 ? true : false}
                                    />
                                </SwiperSlide>
                            ))}
                        </div>
                    }
                    <div className="text-center mt-lg-4">
                        <a href="/article" className="btn icon-decor">
                            Xem tất cả
                            <IoIosArrowRoundForward/>
                        </a>
                    </div>
                </div>
            </section>

            <section className='contact'>
                <div className="container-lg">
                    <div className='row gy-4 justify-content-center justify-content-lg-between'>
                        <div className='col-11 col-sm-10 col-md-8 col-lg-6'>
                            <div className='contact-heading'>
                                <h2 className='h4'>
                                    <span className='fw-semibold'>Bạn đã sẵn sàng</span>
                                    <br />
                                    <span className='h5'>cho một cuộc hành trình mới</span>
                                </h2>
                                <p className='mt-2 mt-lg-3'>Mọi cuộc hành trình đều bắt đầu từ một bước nhỏ. Hãy để chúng tôi trở thành đối tác của bạn! Dưới đây là các kênh liên hệ thuận tiện để bạn gửi thắc mắc hoặc yêu cầu hỗ trợ</p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.518076121442!2d106.64740547691352!3d10.848144589305132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529f6a71a06c3%3A0x7847cb03321c5b9e!2zUGjhuqFtIHbEg24gY2hpw6p1!5e0!3m2!1svi!2s!4v1731997031195!5m2!1svi!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className='col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5'>
                            <div className='contact-form'>
                                <div className='mb-4'>
                                    <p className='text-md fw-semibold mb-2'>Điền vào form dưới đây để đăng ký tư vấn từ 4U Chúng tôi!</p>
                                    <p className='text-sm'>Sau khi nhấn gửi bạn sẽ được bộ phận hỗ trợ tư vấn liên hệ ngay nhé! Sẽ không lâu đâu</p>
                                </div>
                                <form action="">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingName" placeholder="Họ và tên" />
                                        <label htmlFor="floatingName">Họ và tên</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="tel" className="form-control" id="floatingPhone" placeholder="Số điện thoại" />
                                        <label htmlFor="floatingEmail">Số điện thoại</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                                        <label htmlFor="floatingEmail">Email</label>
                                    </div>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Lời nhắn" id="floatingTextarea"></textarea>
                                        <label htmlFor="floatingTextarea">Lời nhắn</label>
                                    </div>
                                    <button className="btn justify-content-center rounded-4 w-100 mt-4">
                                        <VscGitStashApply/>
                                        Ứng tuyển
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partner my-4 my-lg-5">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={32}
                    autoplay={{
                        delay: 1,
                    }}
                    loop={true}
                    speed={7000}
                    modules={[Autoplay]}
                    breakpoints={{
                        576: {
                            spaceBetween: 64,
                        },
                        992: {
                            spaceBetween: 92,
                        },
                    }}
                    className="swiper-partner"
                >
                    {['google', 'facebook', 'airbnb', 'traveloka', 'agoda', 'booking', 'trivago', 'go2joy', 'chotot'].map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className="w-100 h-100 object-fit-contain" src={`imgs/${item}.png`} alt="partner"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
}
