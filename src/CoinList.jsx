import React from 'react';
import { Row, Col, Card } from 'antd';
import subscribeTo from 'react-stative';
import coinService from './services/CoinService';

class CoinList extends React.Component {
  async selectCoin(coinId) {
    await coinService.getCoin(coinId);
  }

  render() {
    return (
      <div>
        <Row gutter={8}>
          {this.props.coins.map(coin => {
            return (
              <Col key={coin.id} span={4} style={{ padding: '4px' }}>
                <Card
                  hoverable={true}
                  bordered={false}
                  onClick={() => this.selectCoin(coin.id)}
                >
                  {coin.name}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default subscribeTo(CoinList, ['coins']);
