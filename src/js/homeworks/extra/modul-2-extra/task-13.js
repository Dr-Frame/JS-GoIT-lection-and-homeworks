function slugify(title) {
  // Пиши код ниже этой строки
  const slug = title.toLowerCase().split(' ').join('-');
  return slug;
  // Пиши код выше этой строки
}
