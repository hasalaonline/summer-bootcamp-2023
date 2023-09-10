import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Project from "./models/Project.js";

const app = express();
app.use(express.json());
app.use(cors());

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "nextjs",
    image: "/assets/portfolioweb.png",
    likes: 34,
    description:
      "A dynamic showcase of my web development skills and projects, highlighting seamless user experiences and captivating designs.",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "reactjs",
    image: "/assets/ecomweb.png",
    likes: 25,
    description:
      "An immersive and user-friendly e-commerce platform designed to streamline the online shopping experience and drive sales.",
  },
  {
    id: 3,
    title: "Image API",
    category: "express",
    image: "/assets/imageapiweb.png",
    likes: 18,
    description:
      "A  Image API that empowers developers to effortlessly integrate image processing, and storage functionalities into their applications.       ",
  },
  {
    id: 4,
    title: "RESTfull API",
    category: "express",
    image: "/assets/imageapiweb.png",
    likes: 43,
    description:
      "A  Image API that empowers developers to effortlessly integrate image processing, and storage functionalities into their applications.       ",
  },
  {
    id: 5,
    title: "CMS Website",
    category: "nextjs",
    image: "/assets/portfolioweb.png",
    likes: 54,
    description:
      "A dynamic showcase of my web development skills and projects, highlighting seamless user experiences and captivating designs.",
  },
  {
    id: 6,
    title: "Admin Dashboard",
    category: "reactjs",
    image: "/assets/ecomweb.png",
    likes: 21,
    description:
      "An immersive and user-friendly e-commerce platform designed to streamline the online shopping experience and drive sales.",
  },
];

app.get("/api/projects", async (request, response) => {
  const projects = await Project.find();
  response.status(200).json(projects);
});

app.post("/api/projects", async (request, response) => {
  const newProject = request.body;
  const createdProject = await Project.create(newProject);
  response.status(201).send(createdProject);
});

mongoose
  .connect(
    "mongodb+srv://manupadev:ae7SeksVmwI2k54X@portfolio-api-db.xstzleu.mongodb.net/portfolio-api-db?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connections successful");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(8000, () => {
  console.log("Web service is listening on port 8000 to requests.");
});
