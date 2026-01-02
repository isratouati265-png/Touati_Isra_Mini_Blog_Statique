// Données des articles intégrées directement fel JS au lieu d’un fichier JSON externe pour éviter les problèmes CORS)
const embeddedData = [
  {
    "id": 1,
    "titre": "Comment organiser sa journée quand on est étudiant ?",
    "image": "https://th.bing.com/th/id/OIP.oP36ipaCBGPHdQITGER3OAHaE8?w=208&h=139&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "categorie": "etudiante",
    "contenu": "Organiser sa journée en tant qu'étudiant est essentiel pour équilibrer études, loisirs et repos. Commencez par établir un emploi du temps réaliste qui inclut les cours, les repas et les pauses. Utilisez la technique Pomodoro pour travailler efficacement : 25 minutes de concentration intense suivies d'une pause de 5 minutes. Planifiez vos tâches prioritaires le matin quand votre énergie est au plus haut. Intégrez des pauses régulières pour éviter la fatigue mentale et maintenir votre productivité. Les applications utiles comme Google Calendar ou Todoist peuvent vous aider à gérer vos tâches et rappels. Créez des routines matinales pour bien démarrer la journée : petit-déjeuner équilibré, méditation courte, liste des objectifs. Évitez de procrastiner en divisant les gros projets en petites tâches gérables. Réservez du temps pour les loisirs et le sport pour recharger vos batteries. Apprenez à dire non aux distractions comme les réseaux sociaux pendant les heures d'étude. Utilisez des outils de suivi du temps pour analyser comment vous utilisez vos journées. Ajustez votre planning régulièrement en fonction de votre niveau d'énergie et de vos besoins. N'oubliez pas l'importance du sommeil : visez 7-8 heures par nuit pour une journée productive. Organisez votre espace de travail pour minimiser les distractions visuelles. Créez des rituels de fin de journée pour décompresser avant de dormir. Organisez vos tâches prioritaires pour maximiser l'efficacité.",
    "date": "2025-01-15"
  },
  {
    "id": 2,
    "titre": "Comment réviser efficacement avant un examen ?",
    "image": "https://tse3.mm.bing.net/th/id/OIP.uzKAwi94eXsID28Jv25I_QHaEK?rs=1&pid=ImgDetMain",
    "categorie": "etudiante",
    "contenu": "La révision efficace avant un examen nécessite des méthodes simples et éprouvées. Commencez par créer des fiches de révision synthétiques avec les concepts clés. Utilisez la technique de répétition espacée : révisez régulièrement plutôt que de bachoter la veille. Transformez vos notes en quiz personnels pour tester vos connaissances. Organisez vos révisions par matière et par thème pour une meilleure compréhension. Pratiquez l'explication orale des concepts comme si vous enseigniez à quelqu'un. Utilisez des cartes mémoire pour mémoriser les définitions et formules importantes. Alternez les sujets pendant vos sessions de révision pour éviter la saturation. Prenez des pauses actives : marchez, étirez-vous pour oxygéner votre cerveau. Testez-vous régulièrement avec des examens blancs pour identifier vos lacunes. Concentrez-vous sur la compréhension plutôt que sur la mémorisation pure. Utilisez des couleurs et des schémas pour visualiser les liens entre les concepts. Enseignez le sujet à un ami ou enregistrez-vous en train d'expliquer. Dormez suffisamment la nuit précédant l'examen pour consolider la mémoire. Mangez équilibré et hydratez-vous pendant les sessions de révision. Évitez le stress en préparant votre matériel la veille. Créez un environnement propice : lumière naturelle, silence, espace rangé. Utilisez des applications comme Anki pour la répétition espacée automatisée. Focalisez-vous sur les points faibles identifiés lors des quiz. Célébrez vos progrès pour maintenir la motivation. La clé du succès est la régularité plutôt que l'intensité. Préparez un plan de révision sur plusieurs semaines. Intégrez des pauses actives dans votre routine. Utilisez des techniques de visualisation pour retenir les informations complexes.",
    "date": "2025-01-20"
  },
  {
    "id": 3,
    "titre": "Comment rester motivé même quand tu es débordé ?",
    "image": "https://tse3.mm.bing.net/th/id/OIP.z02gRPd662jpYGvylZvILgHaE8?rs=1&pid=ImgDetMain",
    "categorie": "motivation",
    "contenu": "Rester motivé quand on est débordé demande des habitudes quotidiennes solides. Commencez par définir des objectifs clairs et réalisables pour éviter l'écrasement. Pratiquez la gestion du stress avec des techniques de respiration profonde. Célébrez les petites victoires pour maintenir un sentiment d'accomplissement. Créez des routines matinales qui vous mettent dans un état d'esprit positif. Utilisez des affirmations positives pour renforcer votre confiance. Entourez-vous de personnes motivantes et évitez les énergies négatives. Divisez les tâches complexes en étapes plus petites et gérables. Prenez des pauses régulières pour recharger votre énergie mentale. Visualisez le résultat final pour garder le cap sur vos objectifs. Pratiquez la gratitude en notant trois choses positives chaque jour. Utilisez des récompenses pour vous motiver après avoir accompli des tâches difficiles. Apprenez à prioriser les tâches importantes plutôt que les urgentes. Développez une mentalité de croissance : voyez les défis comme des opportunités. Maintenez un équilibre vie-travail en réservant du temps pour les loisirs. Dormez suffisamment pour préserver votre énergie et votre concentration. Utilisez des applications de suivi d'habitudes pour maintenir la régularité. Acceptez que certains jours soient moins productifs et soyez indulgent envers vous-même. Concentrez-vous sur le progrès plutôt que sur la perfection. Partagez vos objectifs avec un ami pour créer de l'engagement social. Pratiquez des exercices physiques pour réduire le stress et booster l'endorphine. Méditez quelques minutes par jour pour clarifier vos pensées. Souvenez-vous de vos réussites passées pour renforcer votre confiance. Adaptez vos objectifs si nécessaire plutôt que d'abandonner. La motivation durable vient de l'intérieur, cultivez-la patiemment.",
    "date": "2025-01-25"
  },
  {
    "id": 4,
    "titre": "Les 5 erreurs qui te font perdre du temps chaque jour",
    "image": "https://tse3.mm.bing.net/th/id/OIP.HUYdNSDd5Y8Xtoa95oBBCgAAAA?rs=1&pid=ImgDetMain",
    "categorie": "motivation",
    "contenu": "Identifier les erreurs qui font perdre du temps est crucial pour améliorer votre productivité. La première erreur est de ne pas prioriser les tâches : sans liste claire, on se disperse. Les distractions numériques comme les notifications incessantes volent des minutes précieuses. Une mauvaise organisation de l'espace de travail ralentit la concentration. L'absence de routines matinales fait perdre du temps à démarrer la journée. Le perfectionnisme excessif retarde la finalisation des projets. Apprendre à reconnaître ces erreurs permet de les corriger efficacement. Commencez par créer une liste de tâches prioritaires chaque matin. Désactivez les notifications pendant les périodes de travail concentré. Organisez votre bureau pour un accès rapide aux outils nécessaires. Établissez des routines matinales simples et efficaces. Acceptez le 'bon assez' plutôt que la perfection absolue. Utilisez des techniques comme la matrice d'Eisenhower pour prioriser. Limitez le temps passé sur les réseaux sociaux avec des applications de contrôle. Créez des rituels de début et fin de journée pour gagner en efficacité. Apprenez à déléguer les tâches moins importantes. Mesurez votre temps avec des outils de suivi pour identifier les pertes. Développez la discipline pour éviter les procrastinations. Simplifiez vos processus quotidiens pour gagner du temps. Entraînez-vous à dire non aux demandes non essentielles. Organisez vos emails et documents pour un accès rapide. Pratiquez la concentration profonde pendant des périodes définies. Récompensez-vous pour maintenir la motivation. La conscience de ces erreurs est la première étape vers l'amélioration. Petit à petit, ces changements deviennent des habitudes bénéfiques.",
    "date": "2025-01-30"
  },
  {
    "id": 5,
    "titre": "Les meilleures applications pour être organisé en 2025",
    "image": "https://pix4free.org/assets/library/2021-06-16/originals/application.jpg",
    "categorie": "lifestyle",
    "contenu": "En 2025, les applications d'organisation offrent des fonctionnalités avancées pour la productivité. Google Keep est idéale pour les notes rapides et les listes colorées. Notion permet de créer des espaces de travail personnalisables et collaboratifs. Trello utilise le système Kanban pour visualiser les projets en cours. Todoist gère les tâches avec des rappels intelligents et des sous-tâches. Evernote synchronise vos notes sur tous vos appareils avec recherche avancée. Microsoft To Do intègre parfaitement avec l'écosystème Microsoft. Asana excelle pour la gestion d'équipe et les projets complexes. Habitica transforme les tâches en jeu RPG pour motiver. Forest bloque les distractions pendant les sessions de concentration. RescueTime analyse votre utilisation du temps pour optimiser. Focus@Will propose des playlists musicales pour améliorer la concentration. Calendly automatise la prise de rendez-vous pour gagner du temps. Slack centralise les communications d'équipe efficacement. Zoom facilite les réunions virtuelles avec des fonctionnalités avancées. Grammarly améliore l'écriture automatique et professionnelle. Pocket sauvegarde les articles à lire plus tard. Ces applications s'intègrent souvent entre elles pour une expérience fluide. Choisissez selon vos besoins spécifiques : simplicité ou fonctionnalités avancées. Testez plusieurs applications avant de vous engager. La clé est la régularité d'utilisation plutôt que la perfection de l'outil. Formez-vous aux raccourcis pour gagner du temps. Synchronisez vos données pour accéder partout. Utilisez les intégrations pour automatiser les tâches répétitives. Maintenez une routine de sauvegarde pour éviter les pertes. Ces outils deviennent de véritables assistants personnels en 2025.",
    "date": "2025-02-05"
  },
  {
    "id": 6,
    "titre": "Comment créer une routine matin efficace ?",
    "image": "https://tse2.mm.bing.net/th/id/OIP.pleX8DCqIrGZ1i9NyUlTKQHaEK?rs=1&pid=ImgDetMain",
    "categorie": "lifestyle",
    "contenu": "Une routine matin efficace transforme votre journée entière. Commencez par un réveil doux avec une lumière progressive plutôt qu'une alarme stridente. Buvez un verre d'eau immédiatement pour réhydrater votre corps. Pratiquez quelques étirements ou yoga pour réveiller le corps. Préparez un petit-déjeuner équilibré avec protéines, glucides et fruits. Créez une liste rapide des 3 tâches prioritaires de la journée. Méditez 5 minutes pour clarifier vos pensées et réduire le stress. Évitez les écrans pendant les 30 premières minutes pour un démarrage zen. Préparez vos affaires la veille pour éviter le stress matinal. Écoutez un podcast motivant pendant la préparation. Prenez une douche fraîche pour booster l'énergie et la circulation. Appliquez une crème hydratante pour prendre soin de votre peau. Organisez votre espace de vie pour un environnement propice. Cuisinez des repas simples pour la semaine. Planifiez vos repas pour éviter les décisions impulsives. Lisez quelques pages d'un livre inspirant. Écrivez dans un journal de gratitude pour positiver. Visualisez vos objectifs pour renforcer la motivation. Adaptez la routine selon vos besoins énergétiques. Soyez flexible les jours difficiles. Mesurez les bienfaits sur votre productivité. Partagez votre routine avec un ami pour rester engagé. Les routines matinales créent des habitudes durables. Commencez petit pour éviter l'échec. Célébrez les jours réussis pour maintenir la motivation. Une bonne routine matin réduit le stress quotidien. Elle améliore la concentration et l'efficacité globale.",
    "date": "2025-02-10"
  },
  {
    "id": 7,
    "titre": "5 habitudes pour améliorer ta productivité",
    "image": "https://webusupload.apowersoft.info/gitmind/wp-content/uploads/2022/02/productivity.jpg",
    "categorie": "lifestyle",
    "contenu": "Améliorer sa productivité passe par des habitudes simples et durables. Limitez les distractions en créant des zones de travail dédiées. Ranger votre espace régulièrement pour un environnement clair et organisé. Priorisez les tâches avec la matrice d'Eisenhower : urgent/important. Établissez des routines matinales pour un démarrage efficace. Utilisez la technique Pomodoro pour maintenir la concentration. Prenez des pauses actives pour recharger votre énergie mentale. Apprenez à déléguer les tâches non essentielles. Utilisez des outils numériques pour automatiser les processus répétitifs. Fixez des objectifs SMART : spécifiques, mesururables, atteignables, réalistes, temporels. Célébrez les accomplissements pour renforcer la motivation. Dormez suffisamment pour préserver vos capacités cognitives. Mangez équilibré pour maintenir un niveau d'énergie stable. Pratiquez des exercices physiques réguliers pour booster l'endorphine. Méditez pour améliorer la concentration et réduire le stress. Apprenez continuellement de nouvelles méthodes de productivité. Évitez le multitâche qui réduit l'efficacité. Concentrez-vous sur une tâche à la fois pour une meilleure qualité. Utilisez des listes de tâches pour visualiser le progrès. Révisez régulièrement vos méthodes pour les optimiser. Entourez-vous de personnes productives pour l'inspiration. Acceptez que la perfection n'existe pas et visez l'amélioration continue. Mesurez vos progrès avec des indicateurs concrets. Adaptez vos habitudes selon votre rythme personnel. La productivité est un marathon, pas un sprint. Cultivez la patience et la persévérance dans vos efforts quotidiens.",
    "date": "2025-02-15"
  },
  {
    "id": 8,
    "titre": "Astuces pour gérer son stress avant un exposé",
    "image": "https://www.merci-app.com/app/uploads/2023/07/6439609a015c0319b0c94745_64354d4dd142a36d206db076_gerer-son-stress-blog-cover.jpeg",
    "categorie": "conseils",
    "contenu": "Gérer le stress avant un exposé nécessite préparation et techniques de relaxation. Commencez par une préparation approfondie : connaissez votre sujet sur le bout des doigts. Pratiquez votre présentation devant un miroir ou enregistrez-vous. Utilisez des techniques de respiration : inspirez 4 secondes, retenez 4, expirez 4. Visualisez un scénario positif où tout se passe bien. Préparez des notes simples plutôt qu'un texte complet à lire. Dormez suffisamment la nuit précédant pour une meilleure concentration. Mangez léger et équilibré pour éviter les troubles digestifs. Buvez de l'eau pour maintenir l'hydratation et calmer les nerfs. Pratiquez des étirements pour relâcher les tensions musculaires. Écoutez de la musique relaxante pour vous détendre. Parlez positivement à vous-même : remplacez 'j'ai peur' par 'je suis préparé'. Concentrez-vous sur ce que vous contrôlez, pas sur les imprévus. Arrivez en avance sur le lieu pour vous familiariser. Souriez et adoptez une posture confiante. Utilisez des huiles essentielles comme la lavande pour calmer. Méditez quelques minutes avant de commencer. Acceptez que l'anxiété soit normale et temporaire. Concentrez-vous sur le message plutôt que sur votre performance. Pratiquez régulièrement pour gagner en assurance. Récompensez-vous après l'exposé, quel que soit le résultat. Analysez ce qui a bien fonctionné pour améliorer. Le stress diminue avec l'expérience et la préparation. Utilisez des applications de méditation pour des séances guidées. Partagez vos craintes avec un ami de confiance. La préparation est le meilleur antidote au stress.",
    "date": "2025-02-20"
  },
  {
    "id": 9,
    "titre": "Comment améliorer sa communication ?",
    "image": "https://answerfirst.com/wp-content/uploads/2018/04/communication.jpeg",
    "categorie": "conseils",
    "contenu": "Améliorer sa communication transforme les relations personnelles et professionnelles. Parlez clairement en articulant et en contrôlant votre débit. Structurez vos idées avant de parler : introduction, développement, conclusion. Écoutez activement en reformulant ce que dit l'interlocuteur. Utilisez un langage positif et encourageant. Adaptez votre communication au contexte et à l'audience. Pratiquez l'empathie pour comprendre les émotions des autres. Évitez les interruptions qui montrent du manque de respect. Posez des questions ouvertes pour encourager le dialogue. Utilisez le contact visuel pour montrer l'intérêt. Souriez et adoptez une posture ouverte et confiante. Contrôlez votre langage corporel : gestes naturels et expressifs. Préparez vos arguments avant les discussions importantes. Utilisez des mots simples plutôt que du jargon complexe. Pratiquez l'écoute active : concentrez-vous sur l'autre sans penser à votre réponse. Gérez vos émotions pour éviter les réactions impulsives. Utilisez des techniques de respiration pour rester calme. Apprenez à reformuler pour montrer que vous comprenez. Développez votre vocabulaire pour exprimer précisément vos idées. Pratiquez devant un miroir pour améliorer votre présentation. Enregistrez-vous pour analyser vos points forts et faibles. Lisez des livres sur la communication pour enrichir vos connaissances. Participez à des ateliers ou formations pour pratiquer. Acceptez les feedbacks constructifs pour progresser. La communication s'améliore avec la pratique régulière. Soyez patient avec vous-même dans ce processus. Observez les communicateurs efficaces pour vous inspirer. Utilisez des applications pour pratiquer les langues étrangères.",
    "date": "2025-02-25"
  },
  {
    "id": 10,
    "titre": "L'histoire des réseaux sociaux (version simple)",
    "image": "https://f.hellowork.com/blogdumoderateur/2023/06/Chiffres-reseaux-sociaux-2023.jpg",
    "categorie": "culture",
    "contenu": "L'histoire des réseaux sociaux commence avec les premiers échanges en ligne. Facebook, créé en 2004 par Mark Zuckerberg, révolutionne le partage personnel. Il permet de connecter amis et famille à travers le monde. Instagram arrive en 2010, se concentrant sur les photos et vidéos. Il popularise le partage visuel instantané et les filtres créatifs. TikTok émerge en 2016 avec des vidéos courtes et musicales. Il démocratise la création de contenu pour tous les âges. Snapchat introduit les messages éphémères en 2011. Il influence Instagram avec les stories temporaires. Twitter, lancé en 2006, devient le lieu des conversations rapides. Il limite les messages à 280 caractères pour la concision. LinkedIn se spécialise dans le networking professionnel depuis 2003. Il aide les carrières et les recrutements. Pinterest organise les inspirations visuelles depuis 2010. YouTube permet le partage de vidéos longues depuis 2005. Ces plateformes évoluent constamment avec de nouvelles fonctionnalités. Elles deviennent essentielles dans la vie quotidienne. Les réseaux sociaux transforment la communication mondiale. Ils créent de nouvelles formes d'expression et de créativité. Ils influencent les tendances culturelles et les opinions. Ils posent aussi des défis comme la désinformation. L'avenir verra probablement de nouvelles innovations. Les réseaux sociaux continueront d'évoluer avec la technologie. Ils resteront un outil puissant de connexion humaine. Comprendre leur histoire aide à mieux les utiliser. Chaque plateforme répond à des besoins spécifiques. Elles se complémentent dans l'écosystème numérique.",
    "date": "2025-03-01"
  },
  {
    "id": 11,
    "titre": "Comment fonctionnent les QR codes ?",
    "image": "https://cdn.pixabay.com/photo/2023/02/28/01/50/qr-code-7819652_1280.jpg",
    "categorie": "culture",
    "contenu": "Les QR codes sont des codes-barres en deux dimensions faciles à comprendre. Créés au Japon en 1994 par Denso Wave, ils stockent plus d'informations. Ils utilisent des carrés noirs et blancs disposés en grille. Un smartphone avec une application de lecture les scanne. Ils contiennent des données comme des URLs, textes ou coordonnées. Le principe repose sur la reconnaissance de motifs par l'appareil. Les trois carrés dans les coins aident à l'orientation. Les QR codes résistent aux dommages partiels grâce à la redondance. Ils sont utilisés pour accéder rapidement à des sites web. Les restaurants les emploient pour leurs menus numériques. Les entreprises les intègrent dans la publicité pour des offres spéciales. Ils facilitent les paiements mobiles et les transferts d'argent. Les QR codes santé stockent des informations médicales. Ils servent dans l'éducation pour des ressources supplémentaires. La technologie évolue avec des QR codes dynamiques modifiables. Ils améliorent l'expérience utilisateur en simplifiant l'accès. Les applications de scan sont gratuites et intégrées aux smartphones modernes. Ils fonctionnent même avec des angles de vue variés. La sécurité dépend de l'usage : évitez les codes suspects. Les QR codes révolutionnent l'interaction physique-numérique. Ils permettent des connexions instantanées entre monde réel et virtuel. Leur simplicité d'utilisation les rend populaires partout. Ils évoluent avec des versions plus denses en informations. Comprendre leur fonctionnement ouvre de nombreuses possibilités pratiques. Ils deviennent indispensables dans la vie quotidienne moderne.",
    "date": "2025-03-05"
  },
  {
    "id": 12,
    "titre": "Test Article",
    "image": "https://example.com/test.jpg",
    "categorie": "test",
    "contenu": "This is a test article.",
    "date": "2025-03-10"
  }
];

let articles = []; 
let filteredArticles = []; 
let currentPage = 1;
const articlesPerPage = 6;

function loadArticles() {
    // Vérifier si des articles existent déjà dans localStorage
    const storedArticles = localStorage.getItem('blogArticles');
    if (storedArticles) {    // Si oui, on les récupère
        articles = JSON.parse(storedArticles);
   } else {
         // Sinon, on utilise les données intégrées
        articles = embeddedData.map(article => ({
            ...article,
            pinned: article.pinned || false,
            resume: article.resume || article.contenu.substring(0, 100) + '...'
        }));
        saveArticles();
    }
    filteredArticles = [...articles]; // Copier tous les articles dans filteredArticles
    renderArticles(); 
    updateNavigation(); 
}

function saveArticles() {
    localStorage.setItem('blogArticles', JSON.stringify(articles));
}

// Afficher les articles dans la page
function renderArticles() {
    const container = document.getElementById('articles-container');
    container.innerHTML = '';

    // Trier les articles : épinglés d’abord puis par date
    const sortedArticles = [...filteredArticles].sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.date) - new Date(a.date);
    });

    // Calcul des indices pour la pagination
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = sortedArticles.slice(startIndex, endIndex);

    // Articles à afficher sur la page actuelle
    articlesToShow.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = `article ${article.pinned ? 'pinned' : ''}`;
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.titre}">
            <div class="article-content">
                <h2>${article.titre}</h2>
                ${article.pinned ? '<span class="pin-indicator">📌</span>' : ''}
            </div>
        `;
        articleElement.addEventListener('click', () => showArticleDetail(article));
        container.appendChild(articleElement);
    });
}

function filterArticles(category) {
    if (category === 'lkol') {
        filteredArticles = articles;
    } else {
        filteredArticles = articles.filter(article => article.categorie === category);
    }
    currentPage = 1;
    renderArticles();
    updateNavigation();
}

function searchArticles(query) {
    if (query.trim() === '') {
        filteredArticles = articles;
    } else {
        filteredArticles = articles.filter(article =>
            article.titre.toLowerCase().includes(query.toLowerCase())
        );
    }
    currentPage = 1;
    renderArticles();
    updateNavigation();
}

function updateNavigation() {
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    pageInfo.textContent = `Page ${currentPage} sur ${totalPages}`;
}

function changePage(direction) {
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    }
    renderArticles();
    updateNavigation();
}

function showArticleDetail(article) {
    const modal = document.getElementById('article-modal');
    const detail = document.getElementById('article-detail');
    detail.innerHTML = `
        <div class="article-actions">
            <button class="action-btn edit-btn" onclick="editArticle(${article.id})">Modifier</button>
            <button class="action-btn delete-btn" onclick="deleteArticle(${article.id})">Supprimer</button>
            <button class="action-btn pin-btn" onclick="togglePin(${article.id})">${article.pinned ? 'Désépingler' : 'Épingler'}</button>
        </div>
        <h2 style="color: #5D4E37; margin-bottom: 10px;">${article.titre}</h2>
        <p style="margin-bottom: 20px; color: #8B7355; font-size: 0.9em;">Publié le ${new Date(article.date).toLocaleDateString('fr-FR')}</p>
        <div style="line-height: 1.8; color: #5D4E37;">
            ${article.contenu}
        </div>
    `;
    modal.style.display = 'block';
}

function addArticle() {
    document.getElementById('form-title').textContent = 'Ajouter un article';
    document.getElementById('article-id').value = '';
    document.getElementById('article-form').reset();
    document.getElementById('article-form-modal').style.display = 'block';
}

function editArticle(id) {
    const article = articles.find(a => a.id === id);
    if (article) {
        document.getElementById('form-title').textContent = 'Modifier l\'article';
        document.getElementById('article-id').value = article.id;
        document.getElementById('article-titre').value = article.titre;
        document.getElementById('article-image').value = article.image;
        document.getElementById('article-categorie').value = article.categorie;
        document.getElementById('article-contenu').value = article.contenu;
        document.getElementById('article-form-modal').style.display = 'block';
        document.getElementById('article-modal').style.display = 'none';
    }
}

function deleteArticle(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        articles = articles.filter(a => a.id !== id);
        saveArticles();
        filteredArticles = [...articles];
        renderArticles();
        updateNavigation();
        document.getElementById('article-modal').style.display = 'none';
    }
}

// Épingler ou désépingler un article
function togglePin(id) {
    const article = articles.find(a => a.id === id);
    if (article) {
        article.pinned = !article.pinned;
        saveArticles();
        filteredArticles = [...articles];
        renderArticles();
        updateNavigation();
        document.getElementById('article-modal').style.display = 'none';
    }
}

function saveArticle(event) {
    event.preventDefault();
    const id = document.getElementById('article-id').value;
    const titre = document.getElementById('article-titre').value;
    const image = document.getElementById('article-image').value;
    const categorie = document.getElementById('article-categorie').value;
    const contenu = document.getElementById('article-contenu').value;

    if (id) { //modification
        const article = articles.find(a => a.id == id);
        if (article) {
            article.titre = titre;
            article.image = image;
            article.categorie = categorie;
            article.contenu = contenu;
        }
    } else { //add
        const newId = Math.max(...articles.map(a => a.id), 0) + 1;
        const newArticle = {
            id: newId,
            titre,
            image,
            categorie,
            contenu,
            date: new Date().toISOString().split('T')[0],
            pinned: false
        };
        articles.push(newArticle);
    }

    saveArticles();
    filteredArticles = [...articles];
    renderArticles();
    updateNavigation();
    document.getElementById('article-form-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    loadArticles();// Charger les articles au démarrage

    // Bouton ajouter dun article
    document.getElementById('add-article-btn').addEventListener('click', addArticle);

    // Filtrer les articles quand on change la catégorie
    document.getElementById('choix-categorie').addEventListener('change', (e) => {
        filterArticles(e.target.value);
    });

    //filtrer les articles selon le titre pendant que l’utilisateur écrit
    document.getElementById('search-input').addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            searchArticles(query);
        } else {
            const currentCategory = document.getElementById('choix-categorie').value;
            filterArticles(currentCategory);
        }
    });

    // Bouton page précédente
    document.getElementById('prev-btn').addEventListener('click', () => {
        changePage('prev');
    });

    // Bouton page suivante
    document.getElementById('next-btn').addEventListener('click', () => {
        changePage('next');
    });

    const articleModal = document.getElementById('article-modal');
    const articleCloseBtn = articleModal.getElementsByClassName('close')[0];
    articleCloseBtn.onclick = function() {
        articleModal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == articleModal) {
            articleModal.style.display = 'none';
        }
    }
    const formModal = document.getElementById('article-form-modal');
    const formCloseBtn = formModal.getElementsByClassName('close')[0];
    formCloseBtn.onclick = function() {
        formModal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == formModal) {
            formModal.style.display = 'none';
        }
    }
    document.getElementById('article-form').addEventListener('submit', saveArticle);
    document.querySelector('.cancel-btn').addEventListener('click', () => {
        document.getElementById('article-form-modal').style.display = 'none';
    });
});
