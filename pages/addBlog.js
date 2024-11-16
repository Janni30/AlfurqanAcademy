'use client';

import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './addBlog.module.css'; 

const Page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: 'Alex Bennett',
    authorImg: '/author_img.png',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('author', data.author);
      formData.append('authorImg', data.authorImg);
      formData.append('image', image);

      const response = await axios.post('/api/blog', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
        setData({
          title: '',
          description: '',
          category: 'Startup',
          author: 'Alex Bennett',
          authorImg: '/author_img.png',
        });
      } else {
        toast.error('Error');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className={`${styles.form} ${styles.formSm}`}>
        <p className={styles.title}>Upload thumbnail</p>
        <label htmlFor="image" className={styles.label}>
          <Image
            className={styles.imageUpload}
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="Thumbnail"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className={styles.title}>Blog title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className={styles.input}
          type="text"
          placeholder="Type here"
          required
        />
        <p className={styles.title}>Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Write content here"
          rows={6}
          required
        />
        <p className={styles.title}>Blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className={styles.select}
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <button type="submit" className={styles.button}>
          ADD
        </button>
      </form>
    </>
  );
};

export default Page;
