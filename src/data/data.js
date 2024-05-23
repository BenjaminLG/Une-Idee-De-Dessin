const data = {
  characters: [
    { name: "Mario", source: "Super Mario Bros. - Jeu vidéo" },
    { name: "Luigi", source: "Super Mario Bros. - Jeu vidéo" },
    { name: "Wario", source: "Super Mario Bros. - Jeu vidéo" },
    { name: "Princesse Peach", source: "Super Mario Bros. - Jeu vidéo" },
    { name: "Master Chief", source: "Halo - Jeu vidéo" },
    { name: "Lara Croft", source: "Tomb Raider - Jeu vidéo" },
    { name: "Nathan Drake", source: "Uncharted - Jeu vidéo" },
    { name: "Geralt de Riv", source: "The Witcher - Jeu vidéo/Netflix" },
    { name: "Kratos", source: "God of War - Jeu vidéo" },
    { name: "Ezio Auditore", source: "Assassin's Creed - Jeu vidéo" },
    { name: "Chun-Li", source: "Street Fighter - Jeu vidéo" },
    { name: "Captain Price", source: "Call of Duty - Jeu vidéo" },
    { name: "Tracer", source: "Overwatch - Jeu vidéo" },
    { name: "Goku", source: "Dragon Ball - Manga/Anime" },
    { name: "Vegeta", source: "Dragon Ball - Manga/Anime" },
    { name: "Picolo", source: "Dragon Ball - Manga/Anime" },
    { name: "Bulma", source: "Dragon Ball - Manga/Anime" },
    { name: "Naruto Uzumaki", source: "Naruto - Manga/Anime" },
    { name: "Wonder Woman", source: "DC Comics" },
    { name: "Iron Man", source: "Marvel Comics" },
    { name: "Harley Quinn", source: "DC Comics" },
    { name: "Deadpool", source: "Marvel Comics" },
    { name: "Lara Jean Covey", source: "À tous les garçons que j'ai aimés - Jenny Han" },
    { name: "Sheldon Cooper", source: "The Big Bang Theory - Série TV" },
    { name: "Rick Sanchez", source: "Rick and Morty - Série TV" },
    { name: "Daenerys Targaryen", source: "Game of Thrones - Série TV" },
    { name: "Arya Stark", source: "Game of Thrones - Série TV" },
    { name: "Tony Stark", source: "Iron Man - Film" },
    { name: "Black Widow", source: "Marvel Cinematic Universe" },
    { name: "Spider-Man", source: "Marvel Comics" },
    { name: "Hermione Granger", source: "Harry Potter - J.K. Rowling" },
    { name: "Katniss Everdeen", source: "Hunger Games - Suzanne Collins" },
    { name: "Legolas", source: "Le Seigneur des Anneaux - J.R.R. Tolkien" },
    { name: "Aragon", source: "Le Seigneur des Anneaux - J.R.R. Tolkien" },
    { name: "Gimli", source: "Le Seigneur des Anneaux - J.R.R. Tolkien" },
    { name: "Jon Snow", source: "Game of Thrones - Série TV" },
    { name: "L", source: "Death Note - Manga/Anime" },
    { name: "Light Yagami", source: "Death Note - Manga/Anime" },
    { name: "Monkey D. Luffy", source: "One Piece - Manga/Anime" },
    { name: "Ken Kaneki", source: "Tokyo Ghoul - Manga/Anime" },
    { name: "Saitama", source: "One Punch Man - Manga/Anime" },
    { name: "Serena Williams", source: "Tennis" },
    { name: "LeBron James", source: "Basketball" },
    { name: "Wemby", source: "Basketball" },
    { name: "Kobe", source: "Basketball" },
    { name: "Lionel Messi", source: "Football" },
    { name: "Cristiano Ronaldo", source: "Football" },
    { name: "Michael Phelps", source: "Natation" },
    { name: "Usain Bolt", source: "Athlétisme" },
    { name: "Billie Eilish", source: "Musique" },
    { name: "Stan Lee", source: "Créateur de Marvel Comics" },
    { name: "Elon Musk", source: "Entrepreneur - SpaceX, Tesla" },
    { name: "Banksy", source: "Street Art" },
    { name: "Link", source: "The Legend of Zelda - Jeu vidéo" },
    { name: "Samus Aran", source: "Metroid - Jeu vidéo" },
    { name: "Solid Snake", source: "Metal Gear Solid - Jeu vidéo" },
    { name: "Aloy", source: "Horizon Zero Dawn - Jeu vidéo" },
    { name: "Dante", source: "Devil May Cry - Jeu vidéo" },
    { name: "Sonic", source: "Sonic the Hedgehog - Jeu vidéo" },
    { name: "Miles Morales", source: "Spider-Man - Marvel Comics" },
    { name: "Wolverine", source: "Marvel Comics" },
    { name: "Thor", source: "Marvel Comics" },
    { name: "Hulk", source: "Marvel Comics" },
    { name: "Captain America", source: "Marvel Comics" },
    { name: "Doctor Strange", source: "Marvel Comics" },
    { name: "Cyclops", source: "Marvel Comics" },
    { name: "Magneto", source: "Marvel Comics" },
    { name: "Charles Xavier", source: "Marvel Comics" },
    { name: "Green Lantern", source: "DC Comics" },
    { name: "The Flash", source: "DC Comics" },
    { name: "Aquaman", source: "DC Comics" },
    { name: "Cyborg", source: "DC Comics" },
    { name: "Green Arrow", source: "DC Comics" },
    { name: "Batgirl", source: "DC Comics" },
    { name: "The Joker", source: "DC Comics" },
    { name: "Lex Luthor", source: "DC Comics" },
    { name: "Two-Face", source: "DC Comics" },
    { name: "Thanos", source: "Marvel Comics" },
    { name: "Loki", source: "Marvel Comics" },
    { name: "Red Skull", source: "Marvel Comics" },
    { name: "Ultron", source: "Marvel Comics" },
    { name: "Venom", source: "Marvel Comics" },
    { name: "Carnage", source: "Marvel Comics" },
    { name: "Black Panther", source: "Marvel Comics" },
    { name: "Captain Marvel", source: "Marvel Comics" },
    { name: "Rocket Raccoon", source: "Marvel Comics" },
    { name: "Groot", source: "Marvel Comics" },
    { name: "Gamora", source: "Marvel Comics" },
    { name: "Drax", source: "Marvel Comics" },
    { name: "Star-Lord", source: "Marvel Comics" },
    { name: "Nebula", source: "Marvel Comics" },
    { name: "Jax Teller", source: "Sons of Anarchy - Série TV" },
    { name: "Walter White", source: "Breaking Bad - Série TV" },
    { name: "Jesse Pinkman", source: "Breaking Bad - Série TV" },
    { name: "Saul Goodman", source: "Better Call Saul - Série TV" },
    { name: "Hank Schrader", source: "Breaking Bad - Série TV" },
    { name: "Gus Fring", source: "Breaking Bad - Série TV" },
    { name: "Dexter Morgan", source: "Dexter - Série TV" },
    { name: "Sherlock Holmes", source: "Sherlock - Série TV" },
    { name: "John Watson", source: "Sherlock - Série TV" },
    { name: "Jim Hopper", source: "Stranger Things - Série TV" },
    { name: "Dustin Henderson", source: "Stranger Things - Série TV" },
    { name: "Eleven", source: "Stranger Things - Série TV" }
  ],
  places: [
    { name: "dans les Terre du Milieu", source: "Le Seigneur des Anneaux - J.R.R. Tolkien" },
    { name: "dans Poudlard", source: "Harry Potter - J.K. Rowling" },
    { name: "sur Tatooine", source: "Star Wars - George Lucas" },
    { name: "dans la Forêt d'Endor", source: "Star Wars - George Lucas" },
    { name: "dans le Royaume Champignon", source: "Super Mario Bros. - Jeu vidéo" },
    { name: "dans le Monde des Merveilles", source: "Alice au pays des merveilles - Lewis Carroll" },
    { name: "sur Narnia", source: "Le Monde de Narnia - C.S. Lewis" },
    { name: "dans le Mordor", source: "Le Seigneur des Anneaux - J.R.R. Tolkien" },
    { name: "dans Gotham City", source: "Batman - DC Comics" },
    { name: "sur Asgard", source: "Thor - Marvel Comics" },
    { name: "dans le Monde des Ombres", source: "Shadowhunters - Cassandra Clare" },
    { name: "sur Rapture (BioShock)", source: "BioShock - Jeu vidéo" },
    { name: "sur la Planète Pandora", source: "Avatar - Film" },
    { name: "dans la Cité d'Émeraude", source: "Les Chevaliers d'Émeraude - Anne Robillard" },
    { name: "dans la Zone 51", source: "Réel - Zone militaire secrète aux États-Unis" },
    { name: "dans la Forteresse de Solitude", source: "Superman - DC Comics" },
    { name: "dans Rivendell", source: "Le Seigneur des Anneaux - J.R.R. Tolkien" },
    { name: "dans la Matrice", source: "Matrix - Film" },
    { name: "sur Jurassic Park", source: "Jurassic Park - Michael Crichton" },
    { name: "dans la Dimension X", source: "Les Tortues Ninja - Comics/Animation" },
    { name: "dans la Ville de Coruscant", source: "Star Wars - George Lucas" },
    { name: "dans la Cité d'Os", source: "The Mortal Instruments - Cassandra Clare" },
    { name: "dans le Labyrinthe", source: "Labyrinthe - Film" },
    { name: "dans la Grande Bibliothèque de Poudlard", source: "Harry Potter - J.K. Rowling" },
    { name: "dans la Ville de Krypton", source: "Superman - DC Comics" },
    { name: "dans la Station spatiale internationale", source: "Réel - Espace" },
    { name: "dans la Ville de Zion", source: "Matrix - Film" },
    { name: "dans la Vallée des Jedi", source: "Jeu vidéo - Jedi Knight: Dark Forces II" },
    { name: "dans la Vallée d'Emond", source: "La Roue du Temps - Robert Jordan" },
    { name: "dans le Château de Hurle", source: "Le Château de Hurle - Diana Wynne Jones" },
    { name: "sur l'Île d'Asgard", source: "Thor - Marvel Comics" },
    { name: "dans la Bibliothèque du Congrès", source: "Réel - Washington, D.C." },
    { name: "dans la Ville de Metropolis", source: "Superman - DC Comics" },
    { name: "sur l'Étoile Noire", source: "Star Wars - George Lucas" },
    { name: "dans la Ville de Silent Hill", source: "Silent Hill - Jeu vidéo/Film" },
    { name: "dans le Pays d'Oz", source: "Le Magicien d'Oz - L. Frank Baum" },
    { name: "dans le Monde Inversé", source: "Stranger Things - Série TV" },
    { name: "sur l'Île de la Tortue", source: "Pirates des Caraïbes - Film" },
    { name: "dans le Vaisseau Spatial Serenity", source: "Firefly - Série TV" },
    { name: "dans la Ville de Kowloon Walled", source: "Réel - Ancienne cité chinoise" },
    { name: "dans la Forteresse du Donjon", source: "Donjons et Dragons - Jeu de rôle" },
    { name: "dans la Zone Interdite", source: "Stalker - Film" },
    { name: "dans la Grotte de la Gueule du Dragon", source: "Game of Thrones - Série TV" },
    { name: "sur le Pont de l'Arc-en-Ciel", source: "Thor - Marvel Comics" },
    { name: "dans une forêt", source: "" },
    { name: "dans l'océan", source: "" },
    { name: "en France", source: "" },
    { name: "dans une montagne", source: "" },
    { name: "au Japon", source: "" },
    { name: "dans la campagne Bretonne", source: "" },
    { name: "dans sa chambre", source: "" },
    { name: "dans le desert", source: "" },
    { name: "sur la plage", source: "" },
    { name: "en pleine ville", source: "" },
    { name: "dans la Ville de Rapture", source: "BioShock - Jeu vidéo" }
  ],
  actions: [
    { action: "explore un donjon", description: "Explorer un donjon dangereux et trouver des trésors cachés." },
    { action: "affronte un dragon", description: "Se battre contre un dragon féroce pour sauver le royaume." },
    { action: "résout une énigme", description: "Utiliser son intelligence pour résoudre une énigme complexe." },
    { action: "conduit un véhicule de course", description: "Participer à une course palpitante avec un véhicule rapide." },
    { action: "apprend une nouvelle compétence", description: "Acquérir une nouvelle compétence ou un pouvoir spécial." },
    { action: "négocie avec un ennemi", description: "Tenter de convaincre un ennemi de rejoindre sa cause." },
    { action: "explore un monde inconnu", description: "Découvrir et cartographier un monde encore inexploré." },
    { action: "participe à un tournoi", description: "Combattre dans un tournoi pour prouver sa valeur." },
    { action: "sauve un allié", description: "Porter secours à un allié en danger." },
    { action: "infiltre une base ennemie", description: "S'introduire discrètement dans une base ennemie pour recueillir des informations." },
    { action: "fabrique une arme", description: "Assembler et améliorer une arme puissante pour se préparer à un combat." },
    { action: "fait un discours", description: "Prononcer un discours inspirant devant une foule." },
    { action: "découvre un secret ancien", description: "Trouver des indices menant à un secret oublié de longue date." },
    { action: "survit dans la nature", description: "Utiliser ses compétences de survie pour rester en vie dans un environnement hostile." },
    { action: "répare un vaisseau spatial", description: "Effectuer des réparations sur un vaisseau spatial endommagé." },
    { action: "déjoue un complot", description: "Découvrir et empêcher un complot avant qu'il ne soit trop tard." },
    { action: "forme une alliance", description: "Créer une alliance avec un groupe ou un personnage puissant." },
    { action: "chante une chanson", description: "Interpréter une chanson pour divertir ou inspirer." },
    { action: "crée une œuvre d'art", description: "Utiliser son talent artistique pour créer quelque chose de beau." },
    { action: "lit un livre ancien", description: "Étudier un livre ancien pour acquérir de nouvelles connaissances." },
    { action: "se bat dans une arène", description: "Combattre dans une arène devant un public." },
    { action: "pilote un avion", description: "Prendre les commandes d'un avion et le piloter à travers les cieux." },
    { action: "explore un temple abandonné", description: "S'aventurer dans un temple oublié et découvrir ses mystères." },
    { action: "cuisine un repas", description: "Préparer un repas délicieux pour soi ou pour d'autres." },
    { action: "médite", description: "Prendre du temps pour méditer et se recentrer." },
    { action: "fait de la magie", description: "Utiliser des sorts et des incantations pour accomplir des actes magiques." },
    { action: "se déguise", description: "Changer d'apparence pour se fondre dans la foule ou éviter d'être reconnu." },
    { action: "crée une potion", description: "Mélanger des ingrédients pour créer une potion aux effets spéciaux." },
    { action: "traverse un portail", description: "Passer à travers un portail pour voyager vers un autre monde ou une autre dimension." },
    { action: "se bat contre des zombies", description: "Affronter une horde de zombies pour survivre." },
    { action: "organise une fête", description: "Préparer et organiser une grande fête ou célébration." },
    { action: "joue aux échecs", description: "Participer à une partie d'échecs stratégique." },
    { action: "découvre un artefact", description: "Trouver un artefact ancien aux pouvoirs mystérieux." },
    { action: "navigue en mer", description: "Prendre la mer et naviguer vers de nouvelles aventures." },
    { action: "participe à un casse", description: "Planifier et exécuter un cambriolage audacieux." },
    { action: "explore une forêt enchantée", description: "Parcourir une forêt magique remplie de créatures fantastiques." },
    { action: "rencontre une créature mythique", description: "Faire la connaissance d'une créature légendaire ou mythologique." },
    { action: "s'entraîne au combat", description: "S'entraîner intensivement pour améliorer ses compétences de combat." },
    { action: "voyage dans le temps", description: "Utiliser une machine à voyager dans le temps pour explorer différentes époques." },
    { action: "organise une rébellion", description: "Rassembler des alliés et mener une rébellion contre un oppresseur." },
    { action: "explore une ville futuriste", description: "Découvrir les merveilles technologiques d'une ville du futur." },
    { action: "se cache", description: "Trouver un endroit sûr pour se cacher des ennemis." },
    { action: "lance un sort", description: "Utiliser un sort pour accomplir une tâche spécifique." },
    { action: "fait un saut en parachute", description: "Sauter d'un avion et atterrir en toute sécurité avec un parachute." },
    { action: "dirige une équipe", description: "Prendre les commandes d'une équipe et la mener à la victoire." },
    { action: "résout un mystère", description: "Utiliser ses talents de détective pour résoudre un mystère intrigant." },
    { action: "défend un fort", description: "Protéger un fort contre des envahisseurs." },
    { action: "construit un abri", description: "Assembler un abri pour se protéger des éléments." }
  ]
};

export default data;
