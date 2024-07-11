const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

describe("favorite blog", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0,
    },

    {
      _id: "5a422aa71b54f485uu234d17f8",
      title: "Micho Bonito",
      author: "Denys Quinn",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 98,
      __v: 0,
    },

    {
      _id: "5a422a435897a676234d17f8",
      title: "Pinche Pinche",
      author: "Dan Quinn",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 3,
      __v: 0,
    },

    {
      _id: "5a422aa71b9759217f8",
      title: "Baby Bonito",
      author: "Micho Quinn",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 927845,
      __v: 0,
    },
  ];

  test("which one is the favorite blog by likes", () => {
    const result = listHelper.favoriteBlog(listWithOneBlog);
    assert.deepEqual(result, {
      title: "Baby Bonito",
      author: "Micho Quinn",
      likes: 927845,
    });
  });
});
