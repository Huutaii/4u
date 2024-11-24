'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import '@/styles/pages/home.scss';

import { Autoplay, Parallax } from 'swiper/modules';
import RecruitCta from "./components/RecruitCta";
import ArticleSlider from './components/ArticleSlider';
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
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-9 col-lg-6">
                            <div className="home-about__left">
                                <div className="home-about__left--content d-flex flex-column align-items-start gap-2 gap-sm-3 gap-lg-4">
                                    <p className="home-about__left--content--subtitle h5 fw-light">Kiến tạo không gian sống lý tưởng cho mọi nhu cầu</p>
                                    <h2 className="h3 fw-black">Khởi nguồn cho mọi hành trình</h2>
                                    <p className="home-about__left--content--intro">Chúng tôi là 4U, chuyên cung cấp dịch vụ thuê căn hộ và nhà trọ tiện nghi, an toàn, phù hợp với mọi nhu cầu. Với sứ mệnh mang đến không gian sống thoải mái, chúng tôi đồng hành cùng bạn trên hành trình tìm kiếm một nơi chốn thuộc về.</p>
                                    <a href="/about" className='btn btn-outline'>Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-6">
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
                    <div className="home-article__heading text-center mb-3 mb-lg-4">
                        <p>Tâm Điểm</p>
                        <h2 className="h3 fw-black">Thông Tin Hữu Ích</h2>
                    </div>
                    { isTabletOrBelow ?
                        <ArticleSlider />
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

            <section className="partner">
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
                            <img className="w-100 h-100 object-fit-contain" src={`imgs/partner/${item}.png`} alt="partner"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            
            <section className="contact">
                <div className="container-lg">
                    <div className="position-relative">
                        <div className="contact__content">
                            <div className="contact__content__top">
                                <div className="dots-decoration"></div>
                            </div>
                            <div className="contact__content__body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="contact__content__body--title h4 mb-2 mb-md-3">Bạn đã sẵn sàng cho một cuộc hành trình mới</p>
                                        <p className="contact__content__body--des mb-2 mb-md-3">Mọi cuộc hành trình đều bắt đầu từ một bước nhỏ. Hãy để chúng tôi trở thành đối tác của bạn! Dưới đây là các kênh liên hệ thuận tiện để bạn gửi thắc mắc hoặc yêu cầu hỗ trợ</p>
                                        <div className='contact__content__body--btn d-flex flex-wrap align-items-center gap-2 mb-3 mb-md-4'>
                                            <a href="#" className='btn'>
                                                <img className="" src='imgs/facebook-logo.png'/>
                                                <div>
                                                    <p>Find us on</p>
                                                    <p>Facebook</p>
                                                </div>
                                            </a>
                                            <a href="#" className='btn'>
                                                <img className="" src='imgs/zalo-logo.png'/>
                                                <div>
                                                    <p>Tư vấn ngay</p>
                                                    <p>Zalo</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="contact__content__body--qrcode d-flex align-items-center gap-3">
                                            <div>
                                                <img className="" src='imgs/qr.jpeg'/>
                                            </div>
                                            <p className='text-sm'>Quét mã để biết thêm thông tin trên ứng dụng Zalo!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact__img">
                            <div className="contact__img--wrap d-flex justify-content-center align-items-center gap-3">
                                <img className="hover lazy" src='imgs/mockup.png'/>
                                <img className="hang lazy" src='imgs/mockup.png'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
