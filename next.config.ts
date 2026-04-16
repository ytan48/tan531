import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY;
const defaultProjectRepo = "tan531";
const repoName =
  process.env.REPO_NAME ?? repository?.split("/")[1] ?? defaultProjectRepo;
const isGitHubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.NODE_ENV === "production";
const isUserPagesRepo = repoName?.toLowerCase().endsWith(".github.io");
const basePath =
  isGitHubPages && repoName && repoName.length > 0 && !isUserPagesRepo
    ? `/${repoName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
