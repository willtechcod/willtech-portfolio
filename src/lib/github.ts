export async function getGithubRepos(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
    next: { revalidate: 3600 } // Revalida a cada hora
  });
  
  if (!response.ok) throw new Error('Falha ao buscar dados do GitHub');
  
  return response.json();
}