/** @type {import('next').NextConfig} */

console.log(`DEBUG : NEXT START :::::`);

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=(), interest-cohort=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  reactStrictMode: true,

  swcMinify: true,

  images: {
    domains: [
      // TODO: S3 Resource

      // NOTE: IDC Resource
      "files.snaps.com",
      "idc-snaps.com"
    ]
  },

  productionBrowserSourceMaps: false,

  compress: false,

  poweredByHeader: false,

  generateEtags: false, // TODO: Etag νμν κΉ..?

  httpAgentOptions: {
    keepAlive: false, // TODO: Research KeepAlive
  },

  /* TODO: Custom Build ID By github actions
  generateBuildId: async () => {
    return 'build-id'
  }
  */

  trailingSlash: false,
  
}
