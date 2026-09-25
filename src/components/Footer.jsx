export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-gray-300 px-6 md:px-20 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Company</h2>
          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Resources</h2>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Docs</li>
            <li>Videos</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Subjects</h2>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>Data Science</li>
            <li>AI & ML</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Languages</h2>
          <ul className="space-y-2">
            <li>JavaScript</li>
            <li>Python</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <div className="flex gap-4 mb-4 md:mb-0">
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Terms</span>
        </div>
        <p>
          Made with <span className="text-red-500">♥</span> Farhan © Studynotion
        </p>
      </div>
    </footer>
  );
}
