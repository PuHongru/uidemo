import React from 'react';
import './index.css';

interface Props {
    item: any;
    index: number
}
function Card(props: Props) {
    return (
        <div className="agent-item-list" key={props.index}>
            <span className="contact-wrapper">
                {/* <a className="ke-agent-sj-phone"></a>
                <a className="ke-agent-sj-im"></a> */}
            </span>
            <div className="ke-agent-sj-card">
                <div className="ke-agent-sj-avatar" style={{}}>
                    <img src={props.item.avatar} alt='avatar' style={{width: '50px'}}></img>
                </div>
                <div className="agent-info">
                    <div className="ke-agent-sj-name ke-agent-sj-name-100001322 ke-agent-sj-name-1000000020346125">
                        <span className="name">{props.item.name}({props.item.englishName})</span></div>
                    <div className="agent-desc"><span className="agent-desc-first">{props.item.introFeature}</span>
                    </div>
                    <div className="agent-desc"><span>{props.item.businessArea} </span>
                        <span className="agent-divider">|</span> <span>{props.item.reason}</span></div>
                    <div className="agent-desc">毕业于{props.item.school}</div>
                </div>
            </div>
            <div className="recommend-info ke-agent-sj-recommend ke-agent-sj-recommend-100001322 ke-agent-sj-recommend-1000000020346125">
                <div className="recommend-info-detail">
                    <div className="bubble-tail"></div>
                    <div className="recommend-item">
                        <span className="title">推荐房源：</span>
                        <span className="recommend-reason">{props.item.recommendHouse}</span>
                    </div>
                    <div className="recommend-item">
                        <span className="title">推荐理由：</span>
                        <span className="recommend-reason">{props.item.recommendReason}</span>
                    </div>
                </div>
                <div className="recommend-shape"></div>
            </div>
        </div>
    )
}

export default Card;