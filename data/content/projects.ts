import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    title: "Automated Attendance Tracker",
    desc: "Automatically tracks appearances using facial recognition.",
    img: "/sebytremblay/static/projects/attendance-assistant.png",
    github: "https://github.com/sebytremblay/attendance-assistant",
    tags: ["Python", "Azure", "Google Cloud Platform", "OpenCV"],
  },
  {
    title: "Financial Data Scraper",
    desc: "Scrapes data from Twitter and uses fine-tuned RoBERTA model to classify financial information.",
    img: "/sebytremblay/static/projects/twitter-scraper.png",
    github: "https://github.com/sebytremblay/twitter_scraper",
    tags: ["Python", "PyTorch", "Twscrape", "RoBERTA", "Pandas"],
  },
  {
    title: "Twitter Stock Predictions",
    desc: "Predicts stock prices by analyzing tweets from financial influencers.",
    img: "/sebytremblay/static/projects/stock-predictions.png",
    github: "https://github.com/sebytremblay/tweet-stock-prediction",
    tags: ["Python", "sklearn", "NLTK", "Pandas", "Numpy"],
  },
  {
    title: "Job Description Analyzer",
    desc: "Analyzes job descriptions to provide insights on the most desired skills.",
    img: "/sebytremblay/static/projects/resume-skills.png",
    github: "https://github.com/hugh-parker/JobAssist",
    tags: ["Python", "sklearn", "NLTK", "Pandas", "Numpy"],
  },
  {
    title: "Open-Source Game Platform",
    desc: "Battleship extension for an open-source game platform.",
    img: "/sebytremblay/static/projects/covey-town.png",
    github: "https://github.com/neu-cs4530/spring-23-team-208",
    tags: ["React", "Typescript", "Node", "Jest"],
  },
  {
    title: "2048 Game",
    desc: "A simple 2048 game built with React.",
    img: "/sebytremblay/static/projects/2048-game.png",
    github: "https://github.com/sebytremblay/2048Game",
    tags: ["React", "Typescript", "MongoDB", "REST API"],
  },
  {
    title: "Student Organization Portal",
    desc: "A portal for student organizations to manage their members and events.",
    img: "/sebytremblay/static/projects/student-org-manager.png",
    github: "https://github.com/sebytremblay/student-org-manager",
    tags: ["Python", "MySQL", "Flask", "Appsmith"],
  }
].map((project, index) => ({ ...project, id: index }));

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
