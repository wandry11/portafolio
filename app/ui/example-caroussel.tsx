// components/ExampleCarouselImage.js
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function ExampleCarouselImage({ text }: {text: string}) {
//   const imageUrl = `https://via.placeholder.com/800x400`;

  return (
    <Image
      className="d-block w-100"
      src={"/changes.png"}
      alt={text}
      width={1000}
      height={400}
    />
  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
