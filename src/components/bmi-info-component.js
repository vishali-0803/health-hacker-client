import React from 'react';
import {Result, Button, Descriptions, Slider, Row, Modal, Table} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

function BmiInfo(props){
    const bmiInfo=[1];
    var weight = 79.5;
    var height = 176.5;
    var finalBmi = weight/(height/100*height/100);

    
const columns = [
  {
    title: 'Category',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'BMI range - kg/m2',
    dataIndex: 'bmi',
    key: 'bmi',
  }
];

const data = [
  {
    key: '1',
    name: 'Severe Thinness',
    bmi: '< 16'
  },
  {
    key: '2',
    name: 'Moderate Thinness',
    bmi: '16 - 17'
  },
  {
    key: '3',
    name: 'Mild Thinness',
    bmi: '17 - 18.5'
  },
  {
    key: '4',
    name: 'Normal',
    bmi: '18.5 - 25'
  },
  {
    key: '5',
    name: 'Overweight',
    bmi: '25 - 30'
  },
  {
    key: '6',
    name: 'Obese Class I',
    bmi: '30 - 35'
  },
  {
    key: '7',
    name: 'Obese Class II',
    bmi: '35 - 40'
  },
  {
    key: '8',
    name: 'Obese Class III',
    bmi: '> 40'
  },
];

    function info() {
      Modal.info({
        title: 'Details about BMI chart',
        content: (
          <Table columns={columns} dataSource={data} pagination={false} size="small"/>
        ),
        onOk() {},
      });
    }

    return(
      bmiInfo.length > 0 ?
      <Descriptions title="BMI Info" bordered>
        <Descriptions.Item label="Height(in cm)">
         <label style={{color : "aliceblue"}}>{height}</label> 
          </Descriptions.Item>
        <Descriptions.Item label="Weight(in Kg)" span={2}>
        <label style={{color : "aliceblue"}}>{weight}</label> 
        </Descriptions.Item>
        <Descriptions.Item label="BMI Value(in units)" span={3}>
        <label style={{color : "aliceblue"}}>{finalBmi}</label> 
        </Descriptions.Item>
        <Descriptions.Item label="BMI Scale">
        <Slider defaultValue={finalBmi} />
    <Row justify="center">
    <span class="badge badge-info">Normal</span>
    <span style={{marginLeft : 16, color : "aliceblue"}}><InfoCircleOutlined onClick={info}/></span>
    </Row>
    </Descriptions.Item>
  </Descriptions> :
        <Result style={{color : "aliceblue"}}
    status="404"
    title="Sorry, Fill the BMI information in home page!"
    extra={<Button type="primary" onClick={()=>props.onMenuSelect("home")}>Back Home</Button>}
  />
    )
}

export default BmiInfo;