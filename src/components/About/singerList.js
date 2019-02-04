import React, { Component } from 'react';
import SingerDetails from './singerDetail';

 class singerList extends Component {
  render() {
    const { nauts } = this.props;
    return (
      <React.Fragment>
        {nauts.map((naut) => (
          <SingerDetails 
          key={naut.id}
          naut={naut}
          />
        ))}
      </React.Fragment>
    )
  }
}

export default singerList;
