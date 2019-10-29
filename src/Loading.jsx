import React from 'react';
import { Spin } from 'antd';
import subscribeTo from 'react-stative';

class Loading extends React.Component {
  render() {
    if (!this.props.loading) {
      return <div></div>;
    }

    return (
      <div
        style={{
          position: 'fixed',
          zIndex: 9999,
          height: '100%',
          width: '100%',
          textAlign: 'center',
          background: '#fff',
          opacity: 0.7
        }}
      >
        <Spin style={{ marginTop: '128px' }} />
      </div>
    );
  }
}

export default subscribeTo(Loading, ['loading']);
