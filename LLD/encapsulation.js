class Movie {
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
  }
  // Setters & Getters
  setTitle(title) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
  printDetails() {
    console.log(this.title);
    console.log(this.year);
    console.log(this.genre);
  }
}

const m1 = new Movie("Titanic", 1997, "Romance");
m1.printDetails();
