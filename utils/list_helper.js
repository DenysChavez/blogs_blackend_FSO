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

const mostBlogs = (blogs) => {
  const authorCounts = blogs.reduce((counts, currentObject) => {
    counts[currentObject.author] = (counts[currentObject.author] || 0) + 1;
    return counts
  }, {})

  const mostMentioned = Object.keys(authorCounts).reduce((maxAuthor, author) => {
    return authorCounts[author] > (authorCounts[maxAuthor] || 0) ? author : maxAuthor;
  }, '')

  return {
    author: mostMentioned,
    blogs: authorCounts[mostMentioned]
  }
}

const mostLikes = (blogs) => {
  const likesCounts = blogs.reduce((counts, currentObject) => {
    counts[currentObject.author] =
      (counts[currentObject.author] || 0) + currentObject.likes;
    return counts;
  }, {});

  const mostLikedAuthor = Object.keys(likesCounts).reduce(
    (maxAuthor, author) => {
      return likesCounts[author] > (likesCounts[maxAuthor] || 0)
        ? author
        : maxAuthor;
    },
    ""
  );

  return {
    author: mostLikedAuthor,
    likes: likesCounts[mostLikedAuthor],
  };
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};
