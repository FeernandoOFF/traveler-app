class Site {
  constructor(
    name,
    url,
    description,
    price,
    category,
    rating,
    images,
    latitude,
    longitude
  ) {
    this.name = name;
    this.url = url;
    this.images = images;
    this.description = description;
    this.price = price;
    this.category = category;
    this.rating = rating;

    this.latitude = latitude;
    this.longitude = longitude;

    this.isFavorite = false;
  }
  addToFavorites() {
    // Use hook to save in local storage and favorite sites
  }
}
