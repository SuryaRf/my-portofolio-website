"use client";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-100 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Surya Rahmat Fatahillah
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="text-xs text-zinc-400 hover:text-zinc-800 transition-colors"
          >
            Back to top ↑
          </a>
          <a
            href="https://github.com/SuryaRf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-emerald-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/surya-rahmat-fatahillah/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-emerald-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
