import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import styles from './Home.module.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then(response => {
        setData(response.data.books);
      });
  }, []);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Nav />
      <input
        type="search"
        onChange={handleSearchChange}
        placeholder="Search here"
        className={styles.input}
      />
      <div className={styles.body}>
        {data
          .filter(item => item.title.toLowerCase().includes(search))
          .map((item, index) => (
            <div key={index} className={styles.box}>
              <img src={item.imageLinks.smallThumbnail} alt="" />
              <h1 className={styles.title}>{item.title}</h1>
              <div className={styles.rate}>
                <p>{item.averageRating}⭐</p>
                <p>FREE</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
