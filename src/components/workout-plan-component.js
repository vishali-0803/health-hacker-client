import React from 'react';
import { Layout, Button, Row } from 'antd';
import WorkoutSchedule from './workout-schedule-component';
import WorkoutTimer from './workout-timer-component';

const { Header, Content, Footer } = Layout;

function WorkoutPlanComponent(props){
    return(
        <Layout>
          <Header style={{ background: '#001529', padding: 0 }}>
          <span style={{marginLeft : 16}}>
            <label style={{color : "aliceblue", fontSize: "x-large"}}>Workout Plan Exercises</label></span>
          </Header>
          <Content style={{ background: '#001529c7'}}>
           <WorkoutSchedule />
           <WorkoutTimer />
          </Content>
          <Footer style={{ background: '#001529c7'}}>
          <Row justify="center">
          <Button type="primary" shape="round" onClick={()=>props.history.push("/dietPlan")}>
          Go to Diet Plan
        </Button>
              </Row>
          </Footer>
        </Layout>
    )
}

export default WorkoutPlanComponent;