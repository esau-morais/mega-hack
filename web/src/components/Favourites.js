import React, { Component } from 'react';
import { ThumbUpAltOutlined, ThumbDownAltOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';

class Favourites extends Component {
  state = {
    likeCount: 0,
    unlikeCount: 0
  }

  moreOne = () => {
    if (this.state.likeCount < 1 && this.state.unlikeCount === 0) {
      let newCount = this.state.likeCount + 1
      this.setState({
        likeCount: newCount
      })
    }
  }

  lessOne = () => {
    if (this.state.unlikeCount === 0 && this.state.likeCount < 1) {
      let newCount = this.state.unlikeCount + 1
      this.setState({
        unlikeCount: newCount
      })
    }
  }
  render() {
    return( 
      <div>
        <Button onClick={this.moreOne} style={{ fontSize: 24, color: '#FFF' }}>
          <ThumbUpAltOutlined />
          { this.state.likeCount }
        </Button>
        <Button onClick={this.lessOne} style={{ fontSize: 24, color: '#FFF' }}>
          <ThumbDownAltOutlined />
          { this.state.unlikeCount }
        </Button>
      </div>
    );
  }
}

export default Favourites;