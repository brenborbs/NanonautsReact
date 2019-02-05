import React, { Component } from 'react';

 class singerDetail extends Component {
  render() {
    const { naut } = this.props;
    return (
      <section >
        <h2>{naut.name}</h2>
        <p><img className="small" src={naut.img} alt="pics"/></p>
        <p>{naut.desc}</p>
      </section>
    )
  }
}

export default singerDetail;
