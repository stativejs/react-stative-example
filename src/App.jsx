import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Loading from './Loading';
import CoinList from './CoinList';
import SelectedCoin from './SelectedCoin';
import coinService from './services/CoinService';

const { Header, Footer, Content } = Layout;

class App extends React.Component {
  async componentDidMount() {
    await coinService.getCoins();
  }

  render() {
    return (
      <Layout>
        <Loading />
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <h1>Coins</h1>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ padding: 24, minHeight: 380 }}>
            <SelectedCoin />
            <CoinList />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          React Stative Example App ©2019 Created by Alan Castro
        </Footer>
      </Layout>
    );
  }
}

export default App;
