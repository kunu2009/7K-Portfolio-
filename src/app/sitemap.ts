import { MetadataRoute } from 'next';
<<<<<<< HEAD
import { appsData } from '@/lib/apps-data';
=======
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://7kc.me';
  
<<<<<<< HEAD
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
=======
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 1.0,
    },
    {
      url: `${baseUrl}/galaksi`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
=======
      changeFrequency: 'monthly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 0.8,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
=======
      changeFrequency: 'monthly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 0.9,
    },
    {
      url: `${baseUrl}/books/ethos`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
=======
      changeFrequency: 'monthly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 0.8,
    },
    {
      url: `${baseUrl}/books/kupgames`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
=======
      changeFrequency: 'monthly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 0.8,
    },
    {
      url: `${baseUrl}/arcade`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
=======
      changeFrequency: 'monthly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mobile`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
=======
      changeFrequency: 'monthly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terminal`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
=======
      changeFrequency: 'monthly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 0.7,
    },
    {
      url: `${baseUrl}/slider`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
=======
      changeFrequency: 'monthly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 0.7,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
=======
      changeFrequency: 'monthly',
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
      priority: 0.7,
    },
    {
      url: `${baseUrl}/settings`,
      lastModified: new Date(),
<<<<<<< HEAD
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    // Apps index page
    {
      url: `${baseUrl}/apps`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
  ];

  // Dynamic app routes
  const appRoutes = appsData.map((app) => ({
    url: `${baseUrl}/apps/${app.id}`,
    lastModified: new Date(app.launchDate),
    changeFrequency: 'monthly' as const,
    priority: app.status === 'live' ? 0.85 : 0.7,
  }));
  
  return [...staticRoutes, ...appRoutes];
=======
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
>>>>>>> 57c4e05366ec22bc3b098d34e1785d1104533f14
}
