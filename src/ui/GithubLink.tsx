import { FaGithub } from "react-icons/fa";

const GithubLink = () => {
  return (
    <a
      href="https://github.com/Kyu0z"
      target="_blank"
      rel="noopener noreferrer"
      className=" text2xl hover:text-blue-500 hover:scale-105 transition-all"
    >
      <FaGithub />
    </a>
  );
};

export default GithubLink;
