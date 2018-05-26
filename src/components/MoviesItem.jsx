import React, { Component } from 'react';

export default class MoviesItem extends Component {
  render() {
    console.log('NotFound');
    const { item } = this.props;
    const {
      poster_path,
      title,
    } = item;
    return (
      <div className="movie">
        <img src={poster_path} alt={title} />
      </div>
    );
  }
}

/*
    {
      "id": 287947,
      "title": "Shazam!",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 5,
      "release_date": "2019-04-05",
      "poster_path": "https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg",
      "overview": "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word--SHAZAM!--this streetwise 14-year-old foster kid can turn into the adult superhero Shazam, courtesy of an ancient wizard.Still a kid at heart--inside a ripped, godlike body--Shazam revels in this adult version of himself by doing what any teen would do with superpowers: have fun with them! Can he fly? Does he have X-ray vision? Can he shoot lightning out of his hands? Can he skip his social studies test? Shazam sets out to test the limits of his abilities with the joyful recklessness of a child. But he'll need to master these powers quickly in order to fight the deadly forces of evil controlled by Doctor Thaddeus Sivana.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Fantasy",
        "Science Fiction"
      ],
      "runtime": null
    },
    */