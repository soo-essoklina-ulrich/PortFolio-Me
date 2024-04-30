// Fonction pour récupérer les données de GitHub Readme Stats
async function fetchGitHubStats(username) {
	const response = (
		await fetch(
			`https://github-readme-stats.vercel.app/api?username=${username}`,
			{ mode: "no-cors" }
		)
	);
	//console.log(response);
	const data = response;
	return data;
}

// Fonction pour afficher les statistiques dans la page HTML
function displayStats(stats) {
	const statsContainer = document.getElementById("github-stats");
	statsContainer.innerHTML = `
        <h2>Statistiques GitHub</h2>
        <p>Nombre de dépôts: ${stats.total_repos}</p>
        <p>Followers: ${stats.followers}</p>
        <p>Following: ${stats.following}</p>
        <!-- Ajoutez d'autres données de statistiques ici -->
    `;
}

// Utilisation de la fonction fetchGitHubStats pour récupérer les données et les afficher
fetchGitHubStats("soo-essoklina-ulrich")
	.then((stats) => displayStats(stats))
	.catch((error) =>
		console.error(
			"Erreur lors de la récupération des statistiques GitHub:",
			error
		)
	);
