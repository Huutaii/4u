import { SiFacebook, SiMessenger, SiZalo } from "react-icons/si";
import { RiSeedlingFill, RiFireFill, RiCoreosFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

import '@/styles/pages/about.scss';
import team from '../../../public/dummy/team.json';
import RecruitCta from "../components/RecruitCta";

export default function About() {
    return (
        <div className="about">
            <section className='heading'>
                <img className="w-100 h-100 object-fit-cover" src='imgs/heading.jpg' alt="article" />
                <div className='position-relative'>
                    <div className='container-lg'>
                        <h1 className='fw-black'>
                            Về Chúng Tôi
                        </h1>
                    </div>
                </div>
            </section>

            <section className="story">
                <div className='container-lg'>
                    <div className="row gx-5 gy-4">
                        <div className="col-lg-4">
                            <div className="story-heading">
                                <h2 className="fw-bold text-capitalize mb-2">Câu chuyện</h2>
                                <div>
                                    <img src="/imgs/arrow-svg.png" className="d-block mx-auto" alt="" />
                                </div>
                                <div className="text-end">
                                    <span className="story-heading__text--number">10</span>
                                </div>
                                <div className="text-end">
                                    <p className='story-heading__text--year stroke'>Năm</p>
                                    <p className="story-heading__text--exp">Kinh Nghiệm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="story-article">
                                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque neque penatibus porta morbi eu phasellus faucibus egestas potenti. Sollicitudin rhoncus cras aliquet nec cursus non magnis</p>
                                <p>Cursus erat molestie senectus porttitor a mauris lacus morbi. Phasellus tellus enim posuere vulputate metus volutpat dis? Sodales porta pharetra placerat amet fusce montes curae scelerisque. Molestie lectus hendrerit mi potenti iaculis aliquet mollis. Dapibus rhoncus accumsan consectetur ac taciti. Efficitur ornare ante facilisis fermentum ante duis.</p>
                                <p>Natoque feugiat commodo litora tempor convallis sagittis imperdiet? Inceptos massa est nam per fringilla bibendum ipsum. Netus netus velit orci massa in id nibh. Metus egestas platea viverra purus laoreet tempor imperdiet. Tortor class vulputate lobortis eros erat tincidunt adipiscing adipiscing. Parturient vehicula parturient aptent; porta sapien placerat. Fusce in quisque natoque massa mollis volutpat. Dolor leo quam mus nunc parturient; urna tortor senectus aenean.</p>
                                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className="story-strategic">
                                <div>
                                    <RiSeedlingFill />
                                    <p className="h6 fw-bold mb-2">Tầm nhìn</p>
                                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper viverra sociosqu venenatis vel, in sapien. Faucibus id at lobortis litora accumsan platea cursus vitae.</p>
                                </div>
                                <div>
                                    <RiFireFill />
                                    <p className="h6 fw-bold mb-2">Sứ mệnh</p>
                                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper viverra sociosqu venenatis vel, in sapien. Faucibus id at lobortis litora accumsan platea cursus vitae.</p>
                                </div>
                                <div>
                                    <RiCoreosFill />
                                    <p className="h6 fw-bold mb-2">Giá trị cốt lõi</p>
                                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper viverra sociosqu venenatis vel, in sapien. Faucibus id at lobortis litora accumsan platea cursus vitae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="team">
                <div className='container-lg'>
                    <div className='row justify-content-between align-items-center gy-4 gy-sm-5 gx-5'>
                        <div className='col-lg-4'>
                            <div className="team-info">
                                <h2 className="fw-bold text-capitalize">Đội ngũ</h2>
                                <div>
                                    <p className="mb-2 mb-lg-3">Đội ngũ nhân viên của chúng tôi không chỉ được đào tạo bài bản, mà còn được khuyến khích để thể hiện sự chân thành và nhiệt tình trong từng khoảnh khắc.</p>
                                    <p>Chúng tôi tin rằng, thái độ phục vụ tốt nhất sẽ tạo ra những ấn tượng mạnh mẽ, và chính điều đó sẽ khiến khách hàng quay lại với chúng tôi.</p>
                                </div>
                                <a href="/job" className="btn icon-decor">
                                    Tham gia
                                    <IoIosArrowRoundForward/>
                                </a>
                                <p className="h6">Chúng tôi <span>mang lại</span> những kết quả <span>xuất sắc</span>.</p>
                            </div>
                        </div>
                        <div className='col-lg-8 col-xl-7 col-xxl-6'>
                            <div className="position-relative">
                                <svg width="250" viewBox="0 0 300 1404" fill="none" xmlns="http://www.w3.org/2000/svg" className="mil-lines">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z" className="mil-move"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z" className="mil-move"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z" className="mil-move"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M300 1175H0V1174H300V1175Z" className="mil-move"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z" className="mil-move"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z" className="mil-move"></path>
                                </svg>
                                <div className='team-list'>
                                    { team.map((member, index) => (
                                        <div className='team-item' key={index}>
                                            <img className="object-fit-cover" src={member.thumbnail} alt={member.name} />
                                            <div className="team-item__body">
                                                <p className="team-item__body--title text-lg">{member.name}</p>
                                                <p className="team-item__body--subtitle text-sm text-uppercase mt-1">{member.position}</p>
                                                <ul className="mt-3">
                                                    <li><SiFacebook/></li>
                                                    <li><SiMessenger/></li>
                                                    <li><SiZalo/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="award">
                <div className='container-lg'>
                    <div className='row justify-content-between gy-4 gx-5'>
                        <div className='col-lg-5'>
                            <div className="award-heading">
                                <p className="text-lg mb-3">Thành tựu</p>
                                <h2 className="h3 fw-bold text-capitalize">Những Dấu Ấn Trong Hành Trình Phát Triển</h2>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className="award-list">
                                {[
                                    {
                                        time: "2017 - 2019",
                                        title: "Tỷ Lệ Lấp Đầy Trên 95% Trong Mùa Cao Điểm",
                                        subtitle: "Duy trì tỷ lệ lấp đầy trên 95% trong mùa cao điểm, đảm bảo hiệu quả và hài lòng cho chủ nhà.",
                                    },
                                    {
                                        time: "2019 - 2021",
                                        title: "Đạt Mốc 10,000 Lượt Thuê Thành Công Mỗi Năm",
                                        subtitle: "Hơn 10,000 lượt thuê nhà thành công mỗi năm, minh chứng cho sự tin tưởng từ khách hàng.",
                                    },
                                    {
                                        time: "2021 - 2022",
                                        title: "Giải Thưởng Dịch Vụ Khách Hàng Xuất Sắc 2023",
                                        subtitle: "Nhận giải “Dịch Vụ Khách Hàng Xuất Sắc” 2023 từ Hiệp hội Bất động sản Việt Nam.",
                                    },
                                    {
                                        time: "2022 - 2024",
                                        title: "Mở Rộng Quy Mô Với Hơn 500 Đối Tác Bất Động Sản",
                                        subtitle: "Hợp tác với hơn 500 đối tác bất động sản trên toàn quốc, phục vụ nhu cầu đa dạng.",
                                    },
                                ].map((item, index) => (
                                    <div key={index}>
                                        <p>{item.time}</p>
                                        <h3 className="h6 fw-bold">{item.title}</h3>
                                        <p className="mt-2 mt-sm-3">{item.subtitle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RecruitCta/>
        </div>
    );
}
