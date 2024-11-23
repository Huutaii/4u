import ArticleItem from "../components/ArticleItem";
import ArticleSlider from '../components/ArticleSlider';
import Pagination from "../components/Pagination";

import '@/styles/pages/article.scss';

import articles from '../../../public/dummy/articles.json';
import CategoryTop from "../components/CategoryTop";
import Ads from "../components/Ads";

export default function Article() {
    return (
        <div className="article">
            <section className='heading'>
                <img className="w-100 h-100 object-fit-cover" src='imgs/heading.jpg' alt="article" />
                <div className='position-relative'>
                    <div className='container-lg'>
                        <h1 className='fw-black'>
                            Khám Phá Các Bài Viết
                            <br />
                            <span className="stroke">Nổi Bật</span>
                        </h1>
                    </div>
                </div>
            </section>
            <ArticleSlider />
            <section className='article-main'>
                <div className="container-lg">
                    <div className='mb-4'>
                        <h2 className="h4 fw-black">Thư Viện Bài Viết Đặc Sắc</h2>
                        <p className="">Nơi hội tụ các ý tưởng sáng tạo và thông tin hữu ích.</p>
                    </div>
                    <div className="row gy-4">
                        <div className='col-md-8'>
                            <div className='article-main__grid'>
                            { articles
                            .filter(item => item.isFeatured === false)
                            .map((item, index) => (
                                <ArticleItem 
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    intro={item.intro}
                                    thumbnail={item.thumbnail}
                                    author={item.author}
                                    publishAt={item.publishAt}
                                    tag={item.tag}
                                    
                                />
                            ))}
                            </div>
                            <Pagination />
                        </div>
                        <div className='col-md-4'>
                            <div className="sidebar">
                                <Ads/>
                                <CategoryTop/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
