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
  },
  // Optimize build performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
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
