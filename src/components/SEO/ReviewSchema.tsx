
interface ReviewSchemaProps {
  itemName: string;
  itemType?: string;
  rating: number;
  author: string;
  reviewBody: string;
  datePublished?: string;
}

const ReviewSchema = ({
  itemName,
  itemType = "LocalBusiness",
  rating,
  author,
  reviewBody,
  datePublished = new Date().toISOString().split('T')[0]
}: ReviewSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": itemType,
      "name": itemName
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": author
    },
    "reviewBody": reviewBody,
    "datePublished": datePublished
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ReviewSchema;
