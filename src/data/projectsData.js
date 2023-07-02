import movie from '../assets/png/movie.jpg';
import book from '../assets/png/book.jpg';
import eshop from '../assets/png/eshop.jpg';

export const projectsData = [
  {
    id: 1,
    projectName: 'Book Store',
    projectDesc:
      'Book store is an online web application where customer can purchase books online. Through a web browser the customers can search for a book by its title or author, later can add to the shopping cart and finally purchase the books.',
    tags: ['React', 'CSS', 'Material Ui'],
    code: 'https://github.com/Smit-2001/Book-Store',
    demo: 'https://book-store-qe87.onrender.com/',
    image: book,
  },
  {
    id: 2,
    projectName: 'Eshop',
    projectDesc: 'Eshop website is a web application where customer can purchase products. Here, user can register, login, search for products, apply filters, add products to cart, checkout and place the order..',
    tags: ['React', 'Express', 'Node JS', 'MongoDB', 'PayPal'],
    code: 'https://github.com/Smit-2001/Eshop',
    demo: 'https://github.com/Smit-2001/Eshop',
    image: eshop,
  },
  {
    id: 3,
    projectName: 'Movie Recommendation System',
    projectDesc:
      'This project about recommending the movies based on the similarity of movie attributes.',
    tags: ['Python', 'Machine Learning', 'Flask'],
    code: 'https://github.com/Smit-2001/Movie-Recommendation-System',
    demo: 'https://github.com/Smit-2001/Movie-Recommendation-System/blob/master/README.md',
    image: movie,
  },
];
