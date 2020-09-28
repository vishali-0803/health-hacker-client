import React from 'react';
import { Card, Row, Col, Button, Divider, Input, DatePicker, TimePicker, Select, Alert } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;

function CourseInfo(props){
    const data=[];
    return(
    data.length > 0 ?
    <Row style={{marginTop:24}}>
    <Col span={1} />
    <Col span={22} >
    <Card elevation={3} bordered={false} style={{backgroundColor : "#e6f7ff"}}>
    <Row>
    <Col span={12} >
    <h5 style={{color : "#001529"}}>Course Information</h5>
    <label style={{width:130}}>Course Start Date</label>
    <RangePicker style={{marginTop : 16}}/>
    <br />
    <label style={{width:130}}>Exercise Duration</label>
    <TimePicker onChange={value => console.log(value)} style={{marginTop : 16}}/>
    <br />
    <label style={{width:130}}>Course Level</label>
    <Select defaultValue="jack" style={{marginTop : 16, width: 240}}>
      <Option value="jack">Beginner</Option>
      <Option value="lucy">Intermediate</Option>
      <Option value="Yiminghe">Expert</Option>
    </Select>
    </Col>
    <Col span={2} >
    <Divider type="vertical" style={{height : "100%", marginLeft:"50%"}}/>
    </Col>
    <Col span={8} >
    <h5 style={{color : "#001529"}}>Current BMI</h5>
    <Input placeholder="Enter the height" suffix="cm" style={{marginTop : 16}}/>
    <Input placeholder="Enter the weight" suffix="Kg" style={{marginTop : 16}}/>
    </Col>
    </Row>
    <Row justify="center" style={{marginTop : 16}}>
    <Button type="primary" shape="round" onClick={()=>props.history.push("/workoutPlan")}>
     Submit Details
   </Button>
    </Row>
        </Card>
    </Col>
    <Col span={1} />
    </Row> :
    <Row style={{marginTop:24}}>
    <Col span={1} />
    <Col span={20} >
    <Alert
      message="Course Type : Beginner | Start Date : 28/09/2020 | Progress : 30%"
      type="info"
    />
    </Col>
    <Col span={2} >
    <Button type="primary" style={{height:"100%"}} onClick={()=>props.history.push("/workoutPlan")} block>
     Start
   </Button>
        </Col>
    <Col span={1} />
    </Row>
    )
}

export default CourseInfo;