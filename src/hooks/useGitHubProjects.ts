import { useState, useEffect } from 'react';

export interface Project {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  link: string;
  completeness: number;
  stars: number;
  updated_at: string;
}

type GitHubRepo = {
  html_url: string;
  name: string;
  description: string | null;
  topics?: string[];
  stargazers_count: number;
  updated_at: string;
  language: string | null;
  homepage: string | null;
  private: boolean;
};

async function fetchAllPublicRepos(username: string): Promise<GitHubRepo[]> {
  const all: GitHubRepo[] = [];
  let page = 1;

  for (;;) {
    const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&page=${page}`;
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('GitHub API rate limit exceeded. Please try again later.');
      }
      throw new Error('Failed to fetch repositories from GitHub.');
    }

    const data: GitHubRepo[] = await response.json();
    if (!Array.isArray(data) || data.length === 0) break;

    for (const repo of data) {
      if (!repo.private) all.push(repo);
    }

    if (data.length < 100) break;
    page += 1;
  }

  return all;
}

export const useGitHubProjects = (username: string) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const repos = await fetchAllPublicRepos(username);

        const mappedProjects: Project[] = repos.map((repo) => {
          const statusTopic = repo.topics?.find((t) => t.startsWith('status:'));
          let completeness = 100;
          if (statusTopic) {
            const value = parseInt(statusTopic.split(':')[1], 10);
            if (!Number.isNaN(value)) completeness = value;
          } else if (!repo.homepage && repo.description?.toLowerCase().includes('wip')) {
            completeness = 60;
          }

          const tags = (repo.topics || []).filter((t) => t !== 'portfolio' && !t.startsWith('status:'));

          const lang = repo.language;
          if (lang && !tags.some((t) => t.toLowerCase() === lang.toLowerCase())) {
            tags.unshift(lang);
          }

          let icon = '🚀';
          const lowerDesc = (repo.description || '').toLowerCase();
          const lowerName = repo.name.toLowerCase();

          if (lowerDesc.includes('data') || lowerDesc.includes('analytics') || tags.includes('d3')) icon = '📊';
          else if (lowerDesc.includes('design') || lowerDesc.includes('ui') || lowerName.includes('css')) icon = '🎨';
          else if (lowerDesc.includes('api') || lowerDesc.includes('backend')) icon = '⚙️';
          else if (lowerDesc.includes('bot') || lowerDesc.includes('ai')) icon = '🤖';
          else if (lowerName.includes('cloud')) icon = '☁️';
          else if (lowerName.includes('mobile') || lowerName.includes('app')) icon = '📱';

          return {
            title: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
            description: repo.description || 'No description provided.',
            icon,
            tags: tags.slice(0, 8),
            link: repo.html_url,
            completeness,
            stars: repo.stargazers_count,
            updated_at: repo.updated_at,
          };
        });

        mappedProjects.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime() ||
            b.stars - a.stars,
        );

        setProjects(mappedProjects);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Something went wrong.';
        setError(message);
        console.error('Error fetching GitHub projects:', err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      void load();
    }
  }, [username]);

  return { projects, loading, error };
};
