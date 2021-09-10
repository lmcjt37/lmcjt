import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const BlobImage = ({ filename }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 350, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;

      return (
        <div className="blob">
          <svg
            viewBox="0 0 350 350"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            width="400"
            height="400"
          >
            <clipPath id="mask">
              <path
                d="M24.1,-35.9C31.6,-32.6,38.3,-26.6,46.2,-18.4C54.1,-10.2,63.2,0.1,64.4,11C65.5,21.9,58.7,33.5,49.5,41.5C40.3,49.5,28.8,54,15.4,62.4C2.1,70.8,-13,83.1,-28.1,84.1C-43.3,85,-58.6,74.5,-62,59.7C-65.3,45,-56.8,26,-57.2,9.5C-57.7,-7,-67.1,-21,-63.3,-28.6C-59.4,-36.3,-42.2,-37.5,-29.4,-38.5C-16.6,-39.4,-8.3,-39.9,0,-39.9C8.3,-39.9,16.6,-39.3,24.1,-35.9Z"
                transform="translate(175 130) scale(2)"
              />
            </clipPath>
            <image
              width="100%"
              height="100%"
              clipPath="url(#mask)"
              preserveAspectRatio="xMidYMid meet"
              href={imageFixed.src}
            />
          </svg>
        </div>
      );
    }}
  />
);

export default BlobImage;

BlobImage.propTypes = {
  filename: PropTypes.string,
};
