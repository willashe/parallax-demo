/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  basePath = `/${repo}`;
}

const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath,
};

export default nextConfig;
