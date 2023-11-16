const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Les questions à venir concernent cette array:", books);

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let areRented = true;
for (let i = 0; i < books.lenght; i++) {
  var book = books[i];
  if (book.rented === 0) {
    areRented = fasle;
    break;
  }
}

console.log("Le statut rented de chaque livres est '", areRented,"' les livres ont donc été au moins empruntés une fois")

console.log("Quel est livre le plus emprunté ?");
const livrePlusEmprunte = books.reduce((max, livre) => (livre.rented > max.rented) ? livre : max);
console.log("Le livre le plus emprunté est :", livrePlusEmprunte);


console.log("Quel est le livre le moins emprunté ?");
const livreMoinsEmprunte = books.reduce((min, livre) => (livre.rented < min.rented) ? livre : min);
console.log("Le livre le moins emprunté est :", livreMoinsEmprunte);

console.log("Trouve le livre avec l'ID: 873495 ;");
const livreID873495 = books.find(livre => livre.id === 873495);
console.log("Le livre avec l'ID 873495 est :", livreID873495);

console.log("Supprime le livre avec l'ID: 133712 ;");
const livresSansID133712 = books.filter(livre => livre.id !== 133712);
console.log("Livres après suppression du livre avec l'ID 133712 :", livresSansID133712);

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
const livresTries = livresSansID133712.sort((a, b) => a.title.localeCompare(b.title));
console.log("Livres triés par ordre alphabétique :", livresTries);
