/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/parallax-demo' : undefined,
  images: {
    unoptimized: isGithubActions ? true : undefined,
  },
};

export default nextConfig;
