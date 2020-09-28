import React from 'react';
import Timer from 'react-timer';
import {Row} from 'antd';

function WorkoutTimer(){
    const OPTIONS = { prefix: 'seconds elapsed!', delay: 100, autoplay: false}
    return(
        <Row justify="center">
           <Timer options={OPTIONS} />
        </Row>
    )
}
export default WorkoutTimer;