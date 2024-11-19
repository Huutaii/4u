'use client'
import { useEffect } from 'react';
import tocbot from 'tocbot';

import { LuUser2 } from "react-icons/lu";
import { SiFacebook, SiZalo, SiLinkedin } from "react-icons/si";

import 'tocbot/dist/tocbot.css';
import '@/styles/pages/article-detail.scss';

import articles from '../../../../public/dummy/articles.json';
import ArticleSlider from "@/app/components/ArticleSlider";
import Ads from '@/app/components/Ads';
import CategoryTop from '@/app/components/CategoryTop';

interface ArticleParams {
    id: string;
}

function addIdsToHeadings(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          // Tạo id dựa trên nội dung của tiêu đề hoặc chỉ số nếu cần
          const text = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
          heading.id = text || `heading-${index}`;
        }
      });
    }
  }

export default function ArticleDetail({ params }: { params: ArticleParams }) {
    const article = articles.find((item) => item.id === parseInt(params.id));
    if (!article) {
        return <div>Article not found</div>;
    }

    useEffect(() => {
        addIdsToHeadings('.article-content');
        tocbot.init({
          tocSelector: '.toc',
          contentSelector: '.article-content',
          headingSelector: 'h2, h3',
          scrollSmooth: true,
        });
    
        return () => {
          tocbot.destroy();
        };
    }, []);

    return (
        <div className="article-detail">
            <section className='heading'>
                <img className="w-100 h-100 object-fit-cover" src={article.thumbnail} alt="article" />
                <div className='position-relative'>
                    <div className='container-lg'>
                        <div className="article-detail__heading">
                            <h1 className='fw-extrabold'>{article.title}</h1>
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-4 mt-3">
                                <div className="article-detail__heading--author d-flex align-items-center gap-2">
                                    <LuUser2 />
                                    <div>
                                        <p className="text-sm">{article.author}</p>
                                        <p className="text-sm">{article.publishAt}</p>
                                    </div>
                                </div>
                                <div className="article-detail__heading--social d-flex align-items-center column-gap-2">
                                    <p>Chia sẻ</p>
                                    /
                                    <ul className="column-gap-3">
                                        <li><SiFacebook /></li>
                                        <li><SiZalo /></li>
                                        <li><SiLinkedin /></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4">{article.intro}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container-lg'>
                    <div className='row justify-content-center gy-4'>
                        <div className='col-md-10 col-lg-8'>
                            <article className='article-content'>
                                <p>The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.</p>
                                <p>Quisque eleifend dolor ac dui rutrum lacinia. Aenean fringilla gravida risus eu posuere. Integer et facilisis magna, ac pulvinar neque. Suspendisse potenti. Etiam quis tellus scelerisque purus tincidunt dignissim. Curabitur fermentum a nisl eu porta.</p>
                                <p>Ligula lacus blandit magna, consectetur iaculis dolor enim non diam. Ut non auctor diam. Mauris eu semper facilisis, ex enim placerat ante, ac elementum est nisi nec nulla. Praesent eget turpis eu diam porttitor mattis ullamcorper vel ligula.</p>
                                <figure>
                                    <img src='/imgs/hero1.jpg' alt="figure" />
                                    <figcaption>The Essential Beach Packing List</figcaption>
                                </figure>
                                <h2>What to expect from here on out</h2>
                                <p>What follows from here is just a bunch of absolute nonsense I’ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like bold text, unordered lists, ordered lists, code blocks, block quotes, and even italics.</p>
                                <p>It’s important to cover all of these use cases for a few reasons:</p>
                                <ol>
                                    <li>We want everything to look good out of the box.</li>
                                    <li>Really just the first reason, that’s the whole point of the plugin.</li>
                                    <li>Here’s a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
                                </ol>
                                <p>Now we’re going to try out another header style.</p>
                                <figure>
                                    <img src='/imgs/hero2.jpg' alt="figure" />
                                    <figcaption>99 Ways to Enjoy a Long Car Ride</figcaption>
                                </figure>
                                <p>Maecenas a ligula tempus enim interdum bibendum. Vivamus elementum dapibus. Suspendisse vitae ante lacus. Vivamus a fringilla libero. Vivamus tempor pharetra semper, nascetur ridiculus mus.</p>
                                <h3>Good design is obvious. Great design is transparent</h3>
                                <p>Quisque faucibus est purus, et gravida urna molestie eget. Suspendisse vel leo est. Duis blandit rhoncus nisi, eget tristique ex. Pellentesque habitant morbi tristique senectus.</p>
                                <figure>
                                    <img src='/imgs/hero3.jpg' alt="figure" />
                                    <figcaption>Photo: Vulputate Nisl | Nam Mattis</figcaption>
                                </figure>
                                <p>Quisque vehicula ultricies pellentesque. Vivamus id magna ex. Phasellus ac tellus erat in, rutrum erat. Pellentesque sit amet pharetra sapien id elit aliquet. Proin eu erat interdum curabitur vel eros tempus lacus dignissim tellus.</p>
                                <h3>Conclusion</h3>
                                <p>Morbi quis mauris quis enim finibus luctus in vel mauris. Aliquam nec eros augue. In quis pellentesque orci. Suspendisse vitae elit ut ligula efficitur sollicitudin ut sit amet risus.</p>
                            </article>
                        </div>
                        <div className='col-md-10 col-lg-4'>
                            <div className='sidebar'>
                                <div className="toc"></div>
                                <CategoryTop/>
                                <Ads/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container-lg'>
                    <ArticleSlider title="Có thể bạn quan tâm"/>
                </div>
            </section>
        </div>
    );
}
