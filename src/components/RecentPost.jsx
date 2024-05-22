// RecentPost.js
import React from 'react';
import './RecentPost.css';

const RecentPost = () => {
  const posts = [
    {
      id: 1,
      title: 'As a veterinarian and lover of animals',
      date: 'FEBRUARY 09, 2020',
      description: 'Lorem Ipsum available, but the majority have suffered alteration in some words which look.',
      imageUrl: 'https://via.placeholder.com/300'  // Replace with actual image URL
    },
    {
      id: 2,
      title: 'As a veterinarian and lover of animals',
      date: 'FEBRUARY 10, 2020',
      description: 'Lorem Ipsum available, but the majority have suffered alteration in some words which look.',
      imageUrl: 'https://via.placeholder.com/300'  // Replace with actual image URL
    },
    {
      id: 3,
      title: 'As a veterinarian and lover of animals',
      date: 'FEBRUARY 11, 2020',
      description: 'Lorem Ipsum available, but the majority have suffered alteration in some words which look.',
      imageUrl: 'https://via.placeholder.com/300'  // Replace with actual image URL
    }
  ];

  return (
    <section className="recent-posts">
      <div className="container">
        <h2>Recent Posts</h2>
        <p>Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div className="posts">
          {posts.map(post => (
            <div key={post.id} className="post">
              <img src={post.imageUrl} alt={post.title} />
              <div className="post-content">
                <h3>{post.title}</h3>
                <p className="date">{post.date}</p>
                <p>{post.description}</p>
                <a href="#" className="read-more">Read More+</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
