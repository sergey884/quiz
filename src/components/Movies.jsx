import React, { Component } from 'react';
import MoviesItem from '<components>/MoviesItem';
import '<styles>/movies.scss';

export default class Movies extends Component {
  render() {
    console.log('NotFound');
    const { moviesList } = this.props;
    return (
      <div className="moviesList">
        {moviesList.map(item => <MoviesItem item={item} key={item.id} /> )}
      </div>
    );
  }
}
