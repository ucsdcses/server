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
                    githubUrl: 'github.com/rahulsabnis',
                    mailToUrl: 'mailto:rssabnis@ucsd.edu',
                    imageUrl: null,
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
                    imageUrl: null
                }
            }
        ),
        new Bio( // Joanne
            {
                name: 'Joanne Son',
                title: 'Outreach Chair',
                smallQuote: '"Will code for food"',
                links: {
                    githubUrl: 'github.com/joannegaeunson',
                    mailToUrl: 'mailto:jos047@ucsd.edu',
                    imageUrl: null
                }
            }
        ),
        new Bio(
            {
                name: 'Niral Patel',
                title: 'Design Chair',
                smallQuote: '"I overthink things like this quote."',
                links: {
                    githubUrl: 'github.com/niral-patel',
                    mailToUrl: 'mailto: ndp002@ucsd.edu',
                    imageUrl: null,
                }
            }
        ),
        new Bio(
            {
                name: 'Sean',
                title: 'VP Internal',
                smallQuote: '"Lover of all things linear."',
                links: {
                    githubUrl: null,
                    mailToUrl: 'mailto:smcentee@ucsd.edu',
                    imageUrl: null,
                }
            }
        ),
        new Bio( // Nicholas
            {
                name: 'Nicolas Lama-Solet',
                title: 'Student Satisfaction Chair ',
                smallQuote: '"Are you happy yet?"',
                links: {
                    githubUrl: 'https://github.com/nlamasol',
                    mailToUrl: 'mailto:nlamasol@ucsd.edu',
                    imageUrl: null
                }
            }
        ),
        new Bio( // Sandra
            {
                name: "Sandra Luo",
                title: "Professional Development Chair",
                smallQuote: '"Live life less out of habit and more out of intent."',
                links: {
                    githubUrl: "https://github.com/sandrahluo",
                    mailToUrl: "mailto:hello@sandraluo.com",
                    imageUrl: null // Don't worry about this one yet.
                }
            }
        ),
        new Bio(
            {
                name: 'Emily',
                title: 'Social Chair',
                smallQuote: '"Excited to meet you guys at all our events!"',
                links: {
                    githubUrl: 'github.com/heejungemily',
                    mailToUrl: 'mailto:hes018@ucsd.edu',
                    imageUrl: null,
                }
            }
        ),
        // new Bio( // Purag
        //
        // ),
        new Bio(
            {
                name: 'Megan',
                title: 'ProDev Co- Chair',
                smallQuote: '“Photographer and Board Game Enthusiast “',
                links: {
                    githubUrl: 'github.com/megan-m-wang',
                    mailToUrl: 'mailto:mmw022@ucsd.edu',
                    imageUrl: null,
                }
            }
        ),
        new Bio(
            {
                name: 'Maxwell Bland',
                title: 'Technologies Chair',
                smallQuote: '"Here to do things for free."',
                links: {
                    githubUrl: 'github.com/maxwell-bland',
                    mailToUrl: 'mailto:mbland@ucsd.edu',
                    imageUrl: null
                }
            }
        ),
        new Bio(
            {
                name: 'Purag Moumdjian',
                title: 'Projects Chair',
                smallQuote: '"Resident open source slacktivist."',
                links: {
                    githubUrl: 'github.com/purag',
                    mailToUrl: 'mailto:purag@ucsd.edu',
                    imageUrl: null
                }
            }
        ),
        new Bio(
            {
                name: 'Anthony Lu',
                title: 'VP External',
                smallQuote: '"I\'m a ghost."',
        links: {
                githubUrl: 'github.com/anl176',
                mailToUrl: 'mailto:anl176@ucsd.edu',
                imageUrl: null
            }
      }
    )

  ];
}

export { BioSet }
