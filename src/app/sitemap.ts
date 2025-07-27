import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rait.org.in';

  const staticRoutes = [
    '/',
    '/about',
    '/blog',
    '/cart',
    '/checkout',
    '/contact',
    '/course-grid',
    '/course-list',
    '/course-sidebar',
    '/enroll-now',
    '/error',
    '/forgot-password',
    '/home-2',
    '/home-3',
    '/inquiries',
    '/instructor',
    '/policy-privacy',
    '/shop',
    '/sign-in',
    '/sign-up',
    '/terms-conditions',
    '/wishlist',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Assuming dynamic routes for blog, course, event, and instructor details
  // You would fetch these from a CMS or database
  const dynamicRoutes = [
    // Example: fetch blog posts
    // { url: `${baseUrl}/blog/some-post`, lastModified: new Date() },
    // Example: fetch courses
    // { url: `${baseUrl}/course-details/some-course`, lastModified: new Date() },
  ];

  return [...staticUrls, ...dynamicRoutes];
}
