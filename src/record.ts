type PageInfo = {
  title: string;
  thumbnail: string;
}

type AllowedPages = 'home' | 'about' | 'contact';

const pages: Record<AllowedPages, PageInfo> = {
  home: { title: 'Home', thumbnail: 'https://example.com/home.jpg' },
  about: { title: 'About', thumbnail: 'https://example.com/about.jpg' },
  contact: { title: 'Contact', thumbnail: 'https://example.com/contact.jpg' },
};

console.log(pages.home); // { title: 'Home', thumbnail: 'https://example.com/home.jpg' }

export {};