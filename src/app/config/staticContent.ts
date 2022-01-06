import blog from '../images/blog.svg';
import fact from '../images/fact.svg';
import heart from '../images/heart.svg';
import interesting from '../images/interesting.svg';
import news from '../images/news.svg';
import programmer from '../images/programmer.svg';
import quality from '../images/quality.svg';
import reports from '../images/reports.svg';
import teamMember from '../images/teamMember.svg';
import tracking from '../images/tracking.svg';

export const staticContent = {
    aboutPage: {
        facts: [
            {
                icon: fact,
                iconClassName: 'icon-small',
                alt: 'Light bulb icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/%c5%bcar%c3%b3wka-pomys%c5%82-roz%c5%bcarzony-lampa-1294335/',
                href: 'https://www.nasa.gov/feature/facts-and-figures',
                content: 'There were over 140 spaceflight launches last year'
            },
            {
                icon: fact,
                iconClassName: 'icon-small',
                alt: 'Light bulb icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/%c5%bcar%c3%b3wka-pomys%c5%82-roz%c5%bcarzony-lampa-1294335/',
                href: 'https://www.nasa.gov/feature/facts-and-figures',
                content:
                    'There are at least 7 people on space station right now'
            },
            {
                icon: fact,
                iconClassName: 'icon-small',
                alt: 'Light bulb icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/%c5%bcar%c3%b3wka-pomys%c5%82-roz%c5%bcarzony-lampa-1294335/',
                href: 'https://www.nasa.gov/feature/facts-and-figures',
                content:
                    'In 24 hours, the space station is travelling through 16 sunrises and sunsets'
            },
            {
                icon: fact,
                iconClassName: 'icon-small',
                alt: 'Light bulb icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/%c5%bcar%c3%b3wka-pomys%c5%82-roz%c5%bcarzony-lampa-1294335/',
                href: 'https://www.nasa.gov/feature/facts-and-figures',
                content:
                    'The space for living and working on space station is larger than a six-bedroom house'
            }
        ],
        contentTypes: [
            {
                icon: news,
                iconClassName: 'icon-small',
                alt: 'Newspaper icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/gazeta-czyta%c4%87-aktualno%c5%9bci-biznes-311272/',
                href: '',
                content: 'Latest spaceflight news'
            },
            {
                icon: blog,
                iconClassName: 'icon-small',
                alt: 'Sheet of paper with fountain pen icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/pisa%c4%87-list-poczta-d%c5%82ugopis-tekst-1292838/',
                href: '',
                content: 'Detailed blogs about missions and launches'
            },
            {
                icon: reports,
                iconClassName: 'icon-medium',
                alt: 'Graph on monitor icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/p%c5%82aski-projekt-symbol-ikona-www-2126876/',
                href: '',
                content: 'Latest data from space stations and missions'
            }
        ],
        missionAndValues: [
            {
                icon: quality,
                iconClassName: 'icon-medium',
                alt: 'Order of quality icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/nagroda-medal-gwiazda-jako%c5%9b%c4%87-5572089/',
                href: '',
                content: 'To deliver high quality product'
            },
            {
                icon: interesting,
                iconClassName: 'icon-small',
                alt: 'Hand with thumb up icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/r%c4%99ka-palec-kciuk-kciuk-w-g%c3%b3r%c4%99-159474/',
                href: '',
                content: 'To deliver interesting content'
            },
            {
                icon: tracking,
                iconClassName: 'icon-small',
                alt: 'Magnifier glass icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/szukaj-znajdowa%c4%87-lupa-powi%c4%99kszenie-6699087/',
                href: '',
                content: 'To make tracking spaceflight information easier'
            },
            {
                icon: programmer,
                iconClassName: 'icon-medium-large',
                alt: 'Programmer working at the computer icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/facet-programista-komputer-post%c4%99p-6070329/',
                href: '',
                content: 'To develop our programming skills'
            },
            {
                icon: heart,
                iconClassName: 'icon-small',
                alt: 'Heart icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/czarny-serce-mi%c5%82o%c5%9b%c4%87-czarna-mi%c5%82o%c5%9b%c4%87-152877/',
                href: '',
                content: 'To do what we love, to love what we do'
            }
        ],
        team: [
            {
                icon: teamMember,
                iconClassName: 'icon-medium',
                alt: 'Team member icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/u%c5%bcytkownik-osoba-ludzie-profil-1633249/',
                href: 'https://github.com/magmat88',
                content: 'Magda'
            },
            {
                icon: teamMember,
                iconClassName: 'icon-medium',
                alt: 'Team member icon',
                iconSource:
                    'https://pixabay.com/pl/vectors/u%c5%bcytkownik-osoba-ludzie-profil-1633249/',
                href: 'https://github.com/earendillo',
                content: 'Mateusz'
            }
        ]
    }
};
