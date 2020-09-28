import React from 'react';
import { Card, Row, Col, Progress } from 'antd';

function LevelDetails(){
    return(
      <Row style={{width:"100%", height:"100%"}}>
      <Col span={1}/>
      <Col span={6}>
      <Card className="card-style" elevation={3} hoverable bordered={false}>
        <label style={{color : "aliceblue", fontSize: "large", fontWeight: "bolder"}}>Beginners Tutorial</label><br />
        <label style={{color : "aliceblue", fontSize: "medium"}}>Workout Schedule : 
        <span style={{marginLeft : 16}} class="badge badge-secondary">30days</span></label>
        <Progress percent={30} size="small" strokeColor="#52c41a"/>
        </Card>
      </Col>
      <Col span={2}/>
      <Col span={6}>
      <Card className="card-style" elevation={3} hoverable bordered={false}>
      <label style={{color : "aliceblue", fontSize: "large", fontWeight: "bolder"}}>Intermediate Tutorial</label><br />
        <label style={{color : "aliceblue", fontSize: "medium"}}>Workout Schedule : 
        <span style={{marginLeft : 16}} class="badge badge-secondary">30days</span></label>
        <Progress percent={0} size="small" strokeColor="#52c41a"/>
        </Card>
      </Col>
      <Col span={2}/>
      <Col span={6}>
      <Card className="card-style" elevation={3} hoverable bordered={false}>
      <label style={{color : "aliceblue", fontSize: "large", fontWeight: "bolder"}}>Expert Tutorial</label><br />
        <label style={{color : "aliceblue", fontSize: "medium"}}>Workout Schedule : 
        <span style={{marginLeft : 16}} class="badge badge-secondary">30days</span></label>
        <Progress percent={0} size="small" strokeColor="#52c41a"/>
        </Card>
      </Col>
      <Col span={1}/>
    </Row>
    )
}

export default LevelDetails;