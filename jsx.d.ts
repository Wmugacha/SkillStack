import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Define types for built-in HTML elements
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      // Add more elements as needed
    }
  }
}