import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function FooterBar() {
  return (
    <footer>
    <div className="text-2xl flex justify-center gap-10 py-3 text-gray-800">
        <a href="https://github.com/BillyLangdown">
            <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/billy-l-263072142/">
            <AiFillLinkedin />
        </a>
    </div>
    <div>
        <p className="text-slate-200 text-center text-sm opacity-75">billylangdownsoftware@gmail.com</p>
    </div>
</footer>
  );
}
