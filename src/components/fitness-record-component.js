import React from 'react';
import {Table, Row, Empty} from 'antd';

function FitnessResult(){

  const columns = [
    { title: 'Course Name', dataIndex: 'name', key: 'name' },
    { title: 'Level', dataIndex: 'level', key: 'age' },
    { title: 'Workout Date', dataIndex: 'date', key: 'address' },
  ];
  
  const data = [
    {
      key: 1,
      name: 'John Brown',
      level: 1,
      date: 'Sat Sep 26 2020',
      calories: 138,
      percentage: '50%'
    },
    {
      key: 2,
      name: 'Jim Green',
      level: 1,
      date: 'Sat Sep 26 2020',
      calories: 122,
      percentage: '57%'
    },
    {
      key: 3,
      name: 'Jim Green',
      level: 1,
      date: 'Sat Sep 26 2020',
      calories: 196,
      percentage: '100%'
    },
    {
      key: 4,
      name: 'Joe Black',
      level: 1,
      date: 'Sat Sep 26 2020',
      calories: 208,
      percentage: '89%'
    },
  ];

    return(
      data.length > 0 ? <Table
      columns={columns}
      expandable={{
        expandedRowRender: record => <div>
        <Row>
        <label>Calories Burnt : {record.calories} calories</label>
        </Row>
        <Row>
        <label>Percentage completed: {record.percentage}</label>
        </Row>
      </div>
      }}
      dataSource={data}/> :
    <Empty style={{marginTop: "12%"}} description="Sorry, No Records Found, Start your course!"/>
    )
}

export default FitnessResult;