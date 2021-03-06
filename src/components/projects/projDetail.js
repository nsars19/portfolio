import facespace from "./assets/facespace1.png";
import atphotos from "./assets/atphotos.png";
import knight from "./assets/knight.png";
import bst from "./assets/bst.png";
import chess from "./assets/chess.png";
import waldo from "./assets/waldo.png";
import todo from "./assets/todo.png";
import list from "./assets/list.png";
import battleship from "./assets/battleship.png";
import unscrambler from "./assets/unscrambler.png";
import trie from "./assets/trie.gif";
import compressy from "./assets/compressy.png";

export const detail = [
  {
    title: "Compressy",
    src: compressy,
    desc: "A user interface for an image compression application built in Express. This project was initially a Node app built to process the hundreds of image assets used in my AT Photos application. The prospect of compressing the images manually via TinyJPG was not appealing to me, so I created tooling to handle the task for me. The server for this project is integrated with this image handling tooling, and sends a zipped file containing all the processed images to the UI.",
    tags: [
      "node",
      "express",
      "react",
      "asset handling",
      "form data",
      "file uploading",
    ],
    code: "https://github.com/nsars19/shrinkifier-ui",
    live: "https://nsars19.github.io/shrinkifier-ui/",
  },
  {
    title: "Search Trie",
    src: trie,
    desc: "A search trie implementation created for the user-searching functionality in the Facespace app. It is directly integrated with the react ui to populate search results in real time.",
    tags: ["node", "react", "data structures", "npm"],
    code: "https://github.com/nsars19/Trie-Search",
    live: "https://nsars19.github.io/facebookish",
  },
  {
    title: "Unscrambler",
    src: unscrambler,
    desc: "Unscrambler takes a word and lists all English-language words that can be made with the letters of that word. To do this a tree is created. Each node of the tree holds a combination of letters, the length of which is the same as the level of the node. First level nodes (direct children of the root) have a single letter. The children of first level nodes (second level nodes) each have two letters. This continues until all letter combinations are created. Each node is placed in a queue, and its value is checked against a list of English words to determine whether it is valid, and if so it is added to the final list of words to be presented. This was a very fun project to set up, and was the reason for publishing my first ever package on the npm registry. At the time of this writing that package currently sees just shy of 300 weekly downloads. The user interface consumes json payloads served from an express app that is integrated with the unscrambler package.",
    tags: ["react", "node", "heroku", "npm", "data structures"],
    code: "https://github.com/nsars19/unscrambler-app-ui",
    live: "https://nsars19.github.io/unscrambler-app-ui/",
  },
  {
    title: "Facespace",
    src: facespace,
    desc: "Facespace was the most enjoyable project I've worked on to date. This was the first big app I built with Express shortly after switching over from Rails. This was also the first app I used S3 and MongoDB with as well. The integration of both of those services was remarkably simple, and has only gotten smoother since incorporating them into other projects.",
    tags: ["react", "express", "node", "heroku", "mongoDB", "s3"],
    code: "https://github.com/nsars19/facebookish",
    live: "https://nsars19.github.io/facebookish",
  },
  {
    title: "AT Photos",
    src: atphotos,
    desc: "This project has long been in the making. This was something I wanted to do even before I ventured into web development. In 2019 I hiked 1200 miles of the Appalachian Trail before getting off due to a pretty severe infection. The aim of this project was to have all of my favorite photos from the trip be readily available for sharing with friends and family. This app uses S3 to store the image assets, and MongoDB to store references to the images, as well as their like count. This is probably excessive for the scope of this project, but I welcomed the further experience integrating these services.",
    tags: ["react", "express", "node", "heroku", "mongoDB", "s3"],
    code: "https://github.com/nsars19/at-photos",
    live: "https://nsars19.github.io/at-photos",
  },
  {
    title: "Knight's Travails",
    src: knight,
    desc: "Knight's Travails is a shortest-path finding ruby app. It uses a breadth-first search of a binary tree to find the shortest path between two tiles for a knight (the chess piece). This was part of The Odin Project's computer science curriculum. I was absolutely blown away by this project. It was incredibly rewarding seeing the output print out, and knowing the commands I gave to the computer were what did it. This project showed me just how important data structures and algorithms are to computer science.",
    tags: ["ruby", "data structures", "algorithms"],
    code: "https://github.com/nsars19/knight-s-travails",
  },
  {
    title: "Binary Search Trees",
    src: bst,
    desc: "This is a ruby app that provides several methods for traversing BST's. This is part of The Odin Project's curriculum. This was another one of those projects that showed me just how powerful data structures can be.",
    tags: ["ruby", "data structures", "algorithms"],
    code: "https://github.com/nsars19/Binary-Search-Trees",
  },
  {
    title: "Chess",
    src: chess,
    desc: "The game of chess, in ruby. This was the first large-scale app I built, and it was incredibly intimidating starting it. Chipping away at the functionality piece by piece, and seeing the application come together really showed me how rewarding development can be. It also helped that writing ruby is just so incredibly enjoyable!",
    tags: ["ruby", "chess", "oop"],
    code: "https://github.com/nsars19/Chess",
  },
  {
    title: "Linked List",
    src: list,
    desc: "A linked list implementation in ruby. Part of The Odin Project's computer science curriculum. It was a lot of fun working on this one.",
    tags: ["ruby", "data structures"],
    code: "https://github.com/nsars19/linked_list",
  },
  {
    title: "Todoer",
    src: todo,
    tags: ["vanillaJS", "javascript", "webpack", "local storage"],
    desc: "A todo list. Build to spec as per the guidelines on The Odin Project's curriculum. This is built with plain-old javascript. No frameworks required. This is the app that gave me an appreciation for the component-based frameworks. In order to build this I ended up making helper objects to perform CRUD operations on the DOM. A rudimentary React, of sorts.",
    code: "https://github.com/nsars19/todo-list",
    live: "https://nsars19.github.io/todo-list/",
  },
  {
    title: "Image Tagger",
    src: waldo,
    desc: "One of my first apps integrating a React UI with a Rails backend. This is the app that taught me how to have React consume JSON payloads, and it was a blast seeing how the two applications communicated with each other to create a slick user experience.",
    tags: ["react", "rails", "heroku", "sql"],
    code: "https://github.com/nsars19/Image-Tagger",
    live: "https://nsars19.github.io/Image-Tagger/",
  },
  {
    title: "Battleship",
    src: battleship,
    desc: "One of the first apps I made with React. This app makes heavy use of object-oriented programming to control the behaviour and state of the game, while displaying that state in a clean React UI. Integrating the game functionality with React proved to be quite a formidable process for me at first.",
    tags: ["react", "oop"],
    code: "https://github.com/nsars19/Battleship",
    live: "https://nsars19.github.io/Battleship/",
  },
];
