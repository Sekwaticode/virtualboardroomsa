import { FC } from "react";

const navItems = [
  {
    href: '#',
    label: 'Home'
  },
  {
    href: '#',
    label: 'Projects'
  },
  {
    href: '#',
    label: 'Testimonials'
  },
  {
    href: '#',
    label: 'FAQS'
  },
  {
    href: '#',
    label: 'Contact'
  },
]

const Footer: FC = () => {
  return <footer>
    <div className="container">
      <div>One spot available for next month</div>
    <h2>Enough talk. Let&apos;s make something great together</h2>
    <button>info@alextaylor.com</button>
    <nav>
{}
    </nav>
    </div>
  </footer>;
};

export default Footer;
