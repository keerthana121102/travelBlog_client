import React, { useEffect, useState } from 'react';
import DiaryItem from './DiaryItem';
import { Box } from "@mui/system";
import { getAllPosts } from '../api-helpers/helpers';


const Diaries = () => {
  const [posts, setPosts] = useState();
  const [activateTab, setActivateTab] = React.useState(false);

  setTimeout(()=>{
      setActivateTab(true)
  },100)
  useEffect(() =>{
      getAllPosts()
        .then((data) => setPosts(data?.posts))
        .catch((err) => console.log(err));
  }, []);
  console.log(posts)

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
      >
        {" "}
        {posts && posts.map((item,index) => (
          <DiaryItem date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            title={item.title}
            key={index}
            user={item.user._id}
            name={item.user.name}
            />
        ))}
      <DiaryItem />
    </Box>
  );
}

export default Diaries
