'use client';

import React, { useEffect, useState } from 'react';
import PromptCard from './PromptCard';
import { EventType } from 'next-auth';


const PromptCardList = ({ data }: any) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post: any) => (
        <PromptCard key={post._id} post={post} handleDelete={async () => {}} handleTagClick={async () => {}} handleEdit={async () => {}}/>
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [])
  const andleSearchChange = (e: EventType) => {

  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          className='search_input peer'
          type='text'
          placeholder='Search for a tag or username'
          value={searchText}
          // onChange={}
          required
        />
      </form>
      <PromptCardList
        data={posts}
        // handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed