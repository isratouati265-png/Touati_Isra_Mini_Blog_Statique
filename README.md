Nom et Description du Projet :
Mini Blog Statique - Votre espace d'idées, d'infos et de découvertes
c'est une application web interactive qui affiche des articles de blog depuis un fichier JSON. L'utilisateur peut filtrer les articles par catégorie, les rechercher par titre, et naviguer entre les pages. Chaque article peut être ouvert dans une fenêtre contextuelle pour une lecture complète.
Le projet comprend 11 articles répartis en 5 catégories:
- Vie Étudiante: Organisation, révisions, gestion du temps
- Motivation : Rester motivé, surmonter les obstacles  
- Lifestyle : Applications, routines, productivité
- Conseils : Gestion du stress, communication
- Culture : Réseaux sociaux, technologies

Le lien du dépôt GitHub: https://github.com/isratouati265-png/Touati_Isra_Mini_Blog_Statique
Le lien du rendu final hébergé sur GitHub Pages: https://isratouati265-png.github.io/Touati_Isra_Mini_Blog_Statique/

Technologies Utilisées :
- HTML : Structure de la page web
- CSS : Styles, animations...
- JS : Logique de l'application (filtrage, recherche, pagination)
- JSON : Stockage des données des articles
- Google Font : Police décorative "Great Vibes"

Statistiques du Projet
- Lignes de code : ~700 (HTML + CSS + JS + JSON)
- Nombre d'articles : 11
- Catégories : 5
- Fichiers : 4 (index.html, style.css, script.js, data.json)

Fonctionnalités Principales :
Affichage des Articles
- Chargement des articles depuis JSON 
- Grille responsive affichant 6 articles par page
- Chaque carte montre : image, titre et catégorie
Effets Visuels Interactifs :
- Animation au survol : quand la souris passe sur une carte d'article, celle-ci se soulève légèrement et l'ombre s'agrandit
- Dégradés de couleurs roses et violets pour le design
Système de Filtrage par Catégorie :
- Menu déroulant permettant de choisir une catégorie spécifique
- Options : Toutes, Vie Étudiante, Motivation, Lifestyle, Conseils, Culture
Recherche :
- Barre de recherche dans l'en-tête
- Recherche insensible à la casse : peu importe si vous écrivez en majuscules ou minuscules, la recherche fonctionne (ex: MOTIVATION=motivation=Motivation)
Fenêtre Contextuelle (Modal)
- Modal de lecture : une fenêtre qui s'ouvre par-dessus la page principale quand on clique sur un article
- Affiche le contenu complet de l'article avec titre, date et texte
- Fermeture possible par bouton x ou en cliquant à l'extérieur
- Design harmonieux avec fond dégradé
Pagination
- Navigation entre les pages (6 articles par page)
- Boutons "Précédent" et "Suivant" 
- Indicateur "Page X sur Y"

Ce que j'ai appris durant ce projet : 
Le DOM est la représentation de la page HTML que JavaScript peut modifier. J'ai utilisé le DOM pour :
- Créer dynamiquement des éléments : ddocument.createElement('div') pour créer les cartes d'articles
- Modifier le contenu : innerHTML pour insérer le HTML des articles
- Ajouter des écouteurs d'événements : addEventListener('click') pour détecter les clics
- Sélectionner des éléments : document.getElementById()..
Travail avec les Données JSON:
- Structure de données pour stocker les articles (titre, image, contenu, catégorie, date)
- Parcours du tableau avec forEach()..
Animations et Transitions CSS:
- @keyframes pour les animations (fadeIn, slideIn)
- transition pour les effets au survol (hover)
- Dégradés linéaires linear-gradient()

Difficultés Rencontrées:
JavaScript,c'était ma première fois à écrire autant de fonctions JavaScript complexes. Je ne savais pas comment organiser le code, comment faire communiquer les différentes parties, et la syntaxe JavaScript était parfois difficile à maîtriser.
CSS ,Choix et Cohérence des couleurs ,je voyais des couleurs harmonieuses, mais quand je les appliquais, le résultat ne correspondait pas à mon imagination. Les couleurs se mélangeaient mal, certains textes étaient illisibles sur les fonds, et l'ensemble manquait de cohérence.
aussi difficulté à centrer les éléments correctement
Création du Modal :Je ne comprenais pas bien le concept de modal au début. Comment faire apparaître une fenêtre par-dessus la page ? Comment la fermer ? Comment éviter que le contenu de la page principale ne défile derrière ?

Solutions Apportées
J'ai utilisé Claude AI pour m'expliquer les concepts JavaScript pas à pas
J'ai revu le cours 
Pour les Couleurs ,jai fait plusieurs tests pour avoir cette couleur finale
Pour la Police jai utilisé Google Fonts
