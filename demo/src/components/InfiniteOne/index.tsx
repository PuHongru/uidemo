import React, {useState} from 'react';

interface Props {
    renderItem: Function;
    getData: Function;
    height: string;
    itemHeight: string;
}

function InfiniteTwo(props: Props) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [showMsg, setShowMsg] = useState(false);
    const [list, setList] = useState([]);
    const [itemHeight, setItemHeight] = useState(props.itemHeight);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [visibleCount, setVisibleCount] = useState(0);
    return (
        <div ref='scrollWrapper'
            style={{height: props.height, overflow: 'scroll', position: 'relative'}}
        >

        </div>
    )
}

export default InfiniteTwo;