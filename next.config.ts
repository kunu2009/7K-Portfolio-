import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Image optimization for mobile
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Optimize build performance and bundle size
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion'],
    webpackMemoryOptimizations: true,
    optimizeCss: true,
  },
  // Enable compression
  compress: true,
  // Performance optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  // Exclude AI files from build to speed up deployment
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude genkit and AI dependencies from client bundle
      config.resolve.alias = {
        ...config.resolve.alias,
        '@genkit-ai/googleai': false,
        '@genkit-ai/next': false,
        'genkit': false,
        '@opentelemetry/sdk-node': false,
        '@opentelemetry/exporter-jaeger': false,
        'handlebars': false,
      };
    }
    return config;
  },
};

export default nextConfig;
