# SEO Quick Reference Guide

## 🎯 How to Add SEO to New Pages

### Step 1: Import SEO Component
```javascript
import SEO from "../../components/SEO";
```

### Step 2: Add SEO Component in Render
```javascript
<SEO 
  title="Your Page Title"
  description="Your page description (150-160 characters)"
  keywords="keyword1, keyword2, keyword3"
  url="https://paperbirdshishukul.com/your-page"
/>
```

### Step 3: Add to Sitemap
Update `public/sitemap.xml`:
```xml
<url>
  <loc>https://paperbirdshishukul.com/your-page</loc>
  <lastmod>2025-12-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## 📝 SEO Best Practices

### Title Tags
- Keep under 60 characters
- Include primary keyword
- Include location (Indiranagar, Bengaluru)
- Format: "Page Name | Paper Bird Shishukul"

### Meta Descriptions
- Keep 150-160 characters
- Include call-to-action
- Include phone number: 097415 63692
- Include location keywords

### Keywords
**Always include:**
- Indiranagar (high-value local keyword)
- Bengaluru/Bangalore
- Montessori
- Preschool/Daycare

## 🏢 Business Information (Use Consistently)

**Name:** Paper Bird Shishukul Montessori

**Address:** 1321, Paramahansa Yogananda Rd, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560008

**Phone:** +91-9741563692 or 097415 63692

**Coordinates:** 12.9716, 77.6412

**Website:** https://paperbirdshishukul.com

**Email (Careers):** careersatpaperbird@gmail.com

## 🔑 Primary Keywords by Page Type

### Home Page
- Montessori preschool Indiranagar
- Daycare Indiranagar
- Best preschool Bengaluru

### About Page
- Montessori education Bengaluru
- Holistic education Indiranagar
- Early childhood development

### Careers Page
- Montessori teacher jobs Bengaluru
- Teaching jobs Indiranagar
- Preschool jobs Bangalore

### Contact Page
- Preschool admission Indiranagar
- Montessori school contact
- Daycare enrollment Bengaluru

## 📱 Social Media Tags

Always include Open Graph tags for better social sharing:
- og:title
- og:description
- og:image
- og:url
- og:type

## ✅ SEO Checklist for New Content

- [ ] Unique page title with keywords
- [ ] Meta description under 160 characters
- [ ] Relevant keywords included
- [ ] SEO component added to page
- [ ] URL added to sitemap.xml
- [ ] Images have alt text
- [ ] Internal links added
- [ ] Mobile-friendly tested
- [ ] Page loads fast
- [ ] Structured data added (if applicable)

## 🚀 Quick Wins

1. **Add location to every page title**
   - "Services in Indiranagar, Bengaluru"

2. **Include phone number in descriptions**
   - "Call 097415 63692 for admission"

3. **Use local landmarks**
   - "Near Paramahansa Yogananda Road"

4. **Add action words**
   - "Enroll now", "Visit us", "Call today"

## 📊 Monitor These URLs

- Google Search Console: https://search.google.com/search-console
- Google Business Profile: https://business.google.com
- Google Analytics: https://analytics.google.com

## 🔧 Common SEO Issues & Fixes

### Issue: Page not indexed
**Fix:** Submit URL in Google Search Console

### Issue: Low click-through rate
**Fix:** Improve title and description with compelling copy

### Issue: Not ranking for local searches
**Fix:** Add more location-specific keywords

### Issue: Duplicate content
**Fix:** Use canonical tags, ensure unique descriptions

## 📞 Contact for SEO Updates

When updating business information, update in:
1. `src/components/StructuredData.js`
2. `src/components/SEO.js`
3. `public/index.html`
4. `public/sitemap.xml`
5. Google Business Profile
6. Social media profiles
