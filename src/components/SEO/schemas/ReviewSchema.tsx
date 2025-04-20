
import React from 'react';

interface ReviewSchemaProps {
  name: string;
  ratingValue: number;
  reviewCount: number;
  reviews?: {
    author: string;
    reviewBody: string;
    reviewRating: number;
    datePublished: string;
  }[];
}

const ReviewSchema = ({
  name,
  ratingValue,
  reviewCount,
  reviews = []
}: ReviewSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ReviewSchema;
