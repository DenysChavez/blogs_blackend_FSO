const dummy = (blogs) => {
  return 1
};

const totalLikes = (blogs) => {
  return blogs.reduce((total, currentObject) => {
    return total + (currentObject.likes || 0)
  }, 0)
}



module.exports = {
  dummy, totalLikes
};
