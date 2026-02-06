import React from 'react';
import { Helmet } from 'react-helmet';

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Paper Bird Shishukul Montessori",
    "image": "https://paperbirdshishukul.com/logo512.png",
    "description": "Premier Montessori preschool and daycare in Indiranagar, Bengaluru",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1321, Paramahansa Yogananda Rd, Eshwara Layout, Indiranagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560008",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.6412"
    },
    "url": "https://paperbirdshishukul.com",
    "telephone": "+91-9741563692",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Paper Bird Shishukul Montessori",
    "alternateName": "Paper Bird Shishukul",
    "url": "https://paperbirdshishukul.com",
    "logo": "https://paperbirdshishukul.com/logo512.png",
    "description": "Premier Montessori preschool and daycare in Indiranagar, Bengaluru offering holistic early childhood education since 2017.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1321, Paramahansa Yogananda Rd, Eshwara Layout, Indiranagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560008",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.6412"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9741563692",
      "contactType": "Admissions",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    },
    "sameAs": [
      "https://www.instagram.com/paperbirdshishukul/",
      "https://www.facebook.com/people/Paper-Bird-Preschool-and-daycare/100064875279846/#"
    ],
    "founder": {
      "@type": "Person",
      "name": "Malini Selvarajan"
    },
    "foundingDate": "2017",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const JobPostingSchema = ({ job, jobId }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.content.purpose,
    "datePosted": "2025-12-08",
    "validThrough": "2026-01-31",
    "employmentType": job.content.employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Paper Bird Shishukul",
      "sameAs": "https://paperbirdshishukul.com",
      "logo": "https://paperbirdshishukul.com/logo512.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1321, Paramahansa Yogananda Rd, Eshwara Layout, Indiranagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560008",
        "addressCountry": "IN"
      }
    },
    "applicantLocationRequirements": {
      "@type": "City",
      "name": "Bengaluru"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "unitText": "YEAR"
      }
    },
    "url": `https://paperbirdshishukul.com/job/${jobId}`
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const WhitefieldBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Paper Bird Shishukul Whitefield",
    "image": "https://paperbirdshishukul.com/logo512.png",
    "description": "Premier Montessori preschool and daycare in Whitefield, Bengaluru",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Site No 16, Ashton Park, Borewell Road, Whitefield",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560066",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9640",
      "longitude": "77.7390"
    },
    "url": "https://paperbirdshishukul.com",
    "telephone": "+91-9845127859",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
