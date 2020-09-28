import React from 'react';
import { Layout, Button, Row } from 'antd';
import DietChartComponent from './diet-chart-component';

const { Header, Content, Footer } = Layout;

function DietPlanComponent(props){
    return(
        <Layout>
          <Header style={{ background: '#001529', padding: 0 }}>
          <span style={{marginLeft : 16}}>
            <label style={{color : "aliceblue", fontSize: "x-large"}}>Diet Plan Schedule</label></span>
          </Header>
          <Content style={{ background: '#001529c7', overflowY:"auto", overflowX:"hidden"}}>
           <DietChartComponent/>
          </Content>
          <Footer style={{ background: '#001529c7'}}>
          <Row justify="center">
          <Button type="primary" shape="round" onClick={()=>props.history.push("/dailyReport")}>
          Go to Result
        </Button>
              </Row>
          </Footer>
        </Layout>
    )
}

export default DietPlanComponent;