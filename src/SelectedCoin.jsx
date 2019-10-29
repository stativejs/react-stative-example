import React from 'react';
import { Row, Col, Card } from 'antd';
import subscribeTo from 'react-stative';

class SelectedCoin extends React.Component {
  render() {
    if (!this.props.selectedCoin) {
      return <div></div>;
    }

    return (
      <Row style={{ marginBottom: '16px' }}>
        <Col>
          <Card bordered={false}>
            <h1 style={{ margin: 0, color: '#000' }}>
              {this.props.selectedCoin.name}
            </h1>
            <h1 style={{ color: '#000', marginBottom: 0, marginLeft: '15px' }}>
              ${this.props.selectedCoin.close.toFixed(2)}
            </h1>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default subscribeTo(SelectedCoin, ['selectedCoin']);
