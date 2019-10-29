import React from 'react';
import subscribeTo from 'react-stative';
import { Row, Col, Card, Divider } from 'antd';

function SelectedCoin(props) {
  if (!props.selectedCoin) {
    return <div></div>;
  }

  return (
    <Row>
      <Col>
        <Card bordered={false}>
          <h1 style={{ margin: 0 }}>{props.selectedCoin.name}</h1>
          <Divider type="vertical"></Divider>
          <h1 style={{ marginBottom: 0, marginLeft: '15px' }}>
            ${props.selectedCoin.close.toFixed(2)}
          </h1>
        </Card>
      </Col>
    </Row>
  );
}

export default subscribeTo(SelectedCoin, ['selectedCoin']);
