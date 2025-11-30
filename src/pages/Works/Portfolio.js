import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Portfolio.css";

const Portfolio = ()=>{
    return(
        <div className="Works">
            <div className="work-title-and-back">
                <Link to={"/Works"}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
                <h1>ポートフォリオ</h1>
            </div>

            <div className="portfolio-content-body">
                <section className="portfolio-section">
                    <h2>1.概要</h2>
                    <p>
                        現在ご覧いただいているこのWebサイトです。<br/>
                        フロントエンドの学習も兼ねて作成しました。<br/>
                        自身の制作物や写真等を掲載しています。
                    </p>
                </section>
                <section className="portfolio-section">
                    <h2>2.使用技術</h2>
                    <ul className="tech-list">
                        <li>React</li>
                        <li>CSS</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Portfolio;