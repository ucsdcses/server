import { Bio } from "./bio";

/**
 * Static class for holding the array of Bios for the team section component.
 */
class BioSet {
    public static BIO_SET: Array<Bio> = [
        // Work around to get the getImage when serializing from JSON. Creates a
        // parent class type and casts it to a regular Bio object.
        new Bio(
            {
                name: 'Rahul Sabnis',
                title: 'President',
                smallQuote: '"I can touch my nose with my tongue!"',
                links: {
                    githubUrl: 'https://github.com/rahulsabnis',
                    mailToUrl: 'mailto:rssabnis@ucsd.edu',
                    imageUrl: "",
                }
            }
        ),
        new Bio(
            {
                name: 'Anthony Lu',
                title: 'VP External',
                smallQuote: '"I\'m a ghost."',
                links: {
                    githubUrl: 'https://github.com/anl176',
                    mailToUrl: 'mailto:anl176@ucsd.edu',
                    imageUrl: ""
                }
            }
        ),
        new Bio(
            {
                name: 'Sean',
                title: 'VP Internal',
                smallQuote: '"Lover of all things linear."',
                links: {
                    githubUrl: "",
                    mailToUrl: 'mailto:smcentee@ucsd.edu',
                    imageUrl: "",
                }
            }
        ),
        new Bio(
            {
                name: "Jacob Davis",
                title: "VP Finance",
                smallQuote: '"Pretending to know what\'s going on since 1996"',
                links: {
                    githubUrl: "https://github.com/jsdavis",
                    mailToUrl: "mailto:jsd006@ucsd.edu",
                    imageUrl: ""
                }
            }
        ),
        new Bio(
            {
                name: 'Megan',
                title: 'ProDev Chair',
                smallQuote: '“Photographer and Board Game Enthusiast “',
                links: {
                    githubUrl: 'https://github.com/megan-m-wang',
                    mailToUrl: 'mailto:mmw022@ucsd.edu',
                    imageUrl: "",
                }
            }
        ),
        new Bio( // Sandra
            {
                name: "Sandra Luo",
                title: "ProDev Chair",
                smallQuote: '"Live life less out of habit and more out of intent."',
                links: {
                    githubUrl: "https://github.com/sandrahluo",
                    mailToUrl: "mailto:hello@sandraluo.com",
                    imageUrl: "" // Don't worry about this one yet.
                }
            }
        ),
        new Bio(
            {
                name: 'Niral Patel',
                title: 'Design Chair',
                smallQuote: '"I overthink things like this quote."',
                links: {
                    githubUrl: 'https://github.com/niral-patel',
                    mailToUrl: 'mailto: ndp002@ucsd.edu',
                    imageUrl: "",
                }
            }
        ),
        new Bio(
            {
                name: 'Maxwell Bland',
                title: 'Technologies Chair',
                smallQuote: '"Here to do things for free."',
                links: {
                    githubUrl: 'https://github.com/maxwell-bland',
                    mailToUrl: 'mailto:mbland@ucsd.edu',
                    imageUrl: ""
                }
            }
        ),
        new Bio(
            {
                name: 'Emily',
                title: 'Social Chair',
                smallQuote: '"Excited to meet you guys at all our events!"',
                links: {
                    githubUrl: 'https://github.com/heejungemily',
                    mailToUrl: 'mailto:hes018@ucsd.edu',
                    imageUrl: "",
                }
            }
        ),
        new Bio( // Stanley
            {
                name: 'Stanley Tan',
                title: 'Outreach Chair',
                smallQuote: '"Tabs or spaces?"',
                links: {
                    githubUrl: 'https://github.com/stanleytan',
                    mailToUrl: 'mailto:stt010@ucsd.edu',
                    imageUrl: ''
                }
            }
        )
    ];
}

export { BioSet }
