import React from 'react';
import { Layout, Button, Row, Image, Progress } from 'antd';
import dumbbell from '../images/dumbbells.jpg';

const { Header, Content } = Layout;

function DailyReportComponent(props){
    return(
        <Layout>
          <Header style={{ background: '#001529', padding: 0 }}>
          <span style={{marginLeft : 16}}>
            <label style={{color : "aliceblue", fontSize: "x-large"}}>Daily Health Report</label></span>
          </Header>
          <Content style={{ background: '#001529c7', overflowY:"hidden", overflowX:"hidden"}}>
          <Image src={dumbbell} className="bg-image"/>
          <div class="bg-text">
  <h1 style={{color : "aliceblue"}}>Well Done!!!</h1>
  <Row justify="center">
  <label style={{color : "aliceblue", marginTop:16}}>Calories Burnt : 
  <span style={{marginLeft:16}}  class="badge badge-success">138 Calories</span></label>
  </Row>
  <Row justify="center">
  <label style={{color : "aliceblue", marginTop:16}}>Predictor : 
  <span style={{marginLeft:16}}  class="badge badge-secondary">3000 Calories/week</span></label>
  </Row>
  <Row justify="center">
  <label style={{color : "aliceblue", marginTop:16}}>Progress : <span style={{marginLeft:16}} class="badge badge-info">60% of Progress</span></label>
  </Row>
  <Row justify="center" style={{marginTop:16}}>
  <Progress type="circle" percent={60} />
  </Row>
  <Row justify="center" style={{marginTop:16}}>
          <Button type="primary" shape="round" onClick={()=>props.history.push("/homePage")}>
          Back Home
        </Button>
              </Row>
</div>
          </Content>
        </Layout>
    )
}

export default DailyReportComponent;