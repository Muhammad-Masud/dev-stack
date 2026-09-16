import logo from "../assets/logo-text.png";

const Footer = () => (
  <footer id="contact" className="border-t border-slate-100 bg-white">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:px-10">
      <div id="about">
        <img src={logo} alt="Dev Stack" className="h-9 w-auto" />
        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
          A simple place to explore modern development technologies and build a
          stack that works for you.
        </p>
        <div className="mt-6 flex gap-3">
          {["GitHub", "Twitter", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="rounded-full border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-600 transition hover:border-violet-200 hover:text-violet-600"
            >
              {social}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-900">Product</h3>
        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
          <a href="#technologies" className="hover:text-slate-900">
            Technologies
          </a>
          <a href="#projects" className="hover:text-slate-900">
            Projects
          </a>
          <a href="#signup" className="hover:text-slate-900">
            Sign Up
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-900">Company</h3>
        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
          <a href="#about" className="hover:text-slate-900">
            About
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
          <a href="#careers" className="hover:text-slate-900">
            Careers
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-900">Legal</h3>
        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
          <a href="#privacy" className="hover:text-slate-900">
            Privacy
          </a>
          <a href="#terms" className="hover:text-slate-900">
            Terms
          </a>
          <a href="#cookies" className="hover:text-slate-900">
            Cookies
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#privacy" className="hover:text-slate-700">
            Privacy
          </a>
          <a href="#terms" className="hover:text-slate-700">
            Terms
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
