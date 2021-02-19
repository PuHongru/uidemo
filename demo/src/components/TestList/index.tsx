import React from 'react';
import Card from '../Card';
import '../Card/index.css';

const initData = {
    avatar: "https://img.ljcdn.com/growth-activity/1567046979333.jpg.480x640.jpg",
    name: "刘蕴德",
    englishName: "Steven",
    introFeature: "为高净值家庭定制全球资产配置",
    businessArea: "负责美国、英国、澳大利亚、日本、泰国",
    reason: "5年工作经验",
    school: "北京城市学院",
    recommendHouse: "名仕公馆",
    recommendReason: "开发商租赁保障，价格低，位置优越"
}

function TestList() {

    return (
        <div className='test-list'>
            <div className='card-list'>
            <h1>方案一</h1>
            <div className="component-agent-hw-m-9">
                <Card item={initData} index={1}/>
            </div>
            </div>
        </div>
    )
}

export default TestList;