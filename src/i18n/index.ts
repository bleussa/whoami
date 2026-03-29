export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const ui = {
  es: {
    'nav.about':    'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.work':     'Trabajo',
    'nav.studies':  'Estudios',
    'nav.blog':     'Blog',

    'section.about.title':    'Sobre mí',
    'section.about.description': '',

    'section.projects.title': 'Mis proyectos',
    'section.projects.description': '',

    'section.work.title':     'Experiencia laboral',
    'section.work.present':   'Presente',
    'section.studies.title':  'Estudios y certificados',
    'section.blog.title':     'Blog',
  },
  en: {
    'nav.about':    'About',
    'nav.projects': 'Projects',
    'nav.work':     'Work',
    'nav.studies':  'Studies',
    'nav.blog':     'Blog',

    'section.about.title':    'About',
    'section.projects.title': 'Projects',
    'section.work.title':     'Work',
    'section.work.present':   'Present',
    'section.studies.title':  'Studies',
    'section.blog.title':     'Blog',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
