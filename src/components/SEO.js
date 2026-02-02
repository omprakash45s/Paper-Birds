import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Paper Bird Shishukul - Montessori Preschool & Daycare in Indiranagar, Bengaluru",
  description = "Paper Bird Shishukul is a premier Montessori preschool and daycare in Indiranagar, Bengaluru offering holistic early childhood education. Nurturing young minds since 2017 with certified teachers and child-centered learning. Located at Paramahansa Yogananda Rd.",
  keywords = "montessori preschool indiranagar, montessori preschool bengaluru, daycare indiranagar, daycare bengaluru, early childhood education, preschool bangalore, montessori school indiranagar, paper bird shishukul, kindergarten bengaluru, child care center indiranagar, holistic education, montessori certified teachers, best preschool indiranagar",
  image = "https://paperbirdshishukul.com/logo512.png",
  url = "https://paperbirdshishukul.com",
  type = "website"
}) => {
  const siteTitle = "Paper Bird Shishukul";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Paper Bird Shishukul" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru" />
      <meta name="geo.position" content="12.9716;77.6412" />
      <meta name="ICBM" content="12.9716, 77.6412" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
