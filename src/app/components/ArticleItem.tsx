import React from "react";
import Link from 'next/link';
import '@/styles/components/ArticleItem.scss';
import { LuUser2, LuClock } from "react-icons/lu";

interface ArticleItemProps {
    id: number;
    title: string;
    intro: string;
    thumbnail: string;
    author: string;
    publishAt: string;
    tag: string[];
    isCard?: boolean;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ id, title, intro, thumbnail, author, publishAt, tag, isCard = false }) => {
    return (
        <div className={`article-item ${isCard ? 'is-card' : '' }`}>
            <div className="article-item__thumbnail">
                <Link href={`/article/${id}`}>
                    <img className="w-100 h-100 object-fit-cover" src={thumbnail} alt="article" />
                </Link>
            </div>
            <div className="article-item__body">
                <div className="article-item__body--tag">
                    {tag.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <h3 className="article-item__body--title">
                    <Link href={`/article/${id}`} className="text-lg fw-bold">{title}</Link>
                </h3>
                <p className="article-item__body--intro">{intro}</p>
                <div className="article-item__body--more mt-auto">
                    <div className="article-item__body--more--author d-flex align-items-center gap-2">
                        <LuUser2 />
                        <p>{author}</p>
                    </div>
                    <div className="article-item__body--more--time d-flex align-items-center gap-1">
                        <LuClock />
                        <p>{publishAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleItem;
