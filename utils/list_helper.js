const dummy = (blogs) => {
  return 1
};

const totalLikes = (blogs) => {
  return blogs.reduce((total, currentObject) => {
    return total + (currentObject.likes || 0)
  }, 0)
}

const favoriteBlog = (blogs) => {
  const mostLikedBlog = blogs.reduce((maxLikesBlog, currentObject) => {
    return (currentObject.likes > (maxLikesBlog.likes || 0)) ? currentObject : maxLikesBlog;
  }, {});

  return {
    title: mostLikedBlog.title,
    author: mostLikedBlog.author,
    likes: mostLikedBlog.likes
  }
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
