export default function prefix() {
  return process.env.GITHUB_ACTIONS ? '/parallax-demo' : '';
}
