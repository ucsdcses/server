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
                smallQuote: '"You can probably find me at Regents Pizzeria!"',
                links: {
                    githubUrl: 'https://github.com/rahulsabnis',
                    mailToUrl: 'mailto:rssabnis@ucsd.edu',
                    imageUrl: 'assets/images/board/rahul.JPG',
                }
            }
        ),
        new Bio(
            {
                name: 'Megan Wang',
                title: 'VP External',
                smallQuote: '"PM if you want to play board games!"',
                links: {
                    githubUrl: 'https://github.com/megan-m-wang',
                    mailToUrl: 'mailto:mmw022@ucsd.edu',
                    imageUrl: 'assets/images/board/megan.JPG',
                }
            }
        ),
        new Bio(
            {
                name: 'Niral Patel',
                title: 'VP Internal',
                smallQuote: '"There\'s so much I can say here...feel free to PM me!"',
                links: {
                    githubUrl: 'https://github.com/niral-patel',
                    mailToUrl: 'mailto: ndp002@ucsd.edu',
                    imageUrl: 'assets/images/board/niral.JPG',
                }
            }
        ),
        new Bio(
            {
                name: 'Sean McEntee',
                title: 'VP Finance',
                smallQuote: '"Every group needs a cranky old man"',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:smcentee@ucsd.edu',
                  imageUrl: 'assets/images/board/sean.JPG',
                }
            }
        ),
        new Bio(
            {
                name: 'Emily Son',
                title: 'Pro-Dev Chair',
                smallQuote: '"Excited to meet you guys at all our events!"',
                links: {
                    githubUrl: 'https://github.com/heejungemily',
                    mailToUrl: 'mailto:hes018@ucsd.edu',
                    imageUrl: '',
                }
            }
        ),
        new Bio(
            {
                name: 'Jaehoon Choi',
                title: 'Pro-Dev Chair',
                smallQuote: '"send help!"',
                links: {
                    githubUrl: 'https://github.com/jhoonchoi',
                    mailToUrl: 'mailto:',
                  imageUrl: 'assets/images/board/jaehoon.JPG',
                }
            }
        ),
        new Bio(
            {
                name: 'Arkin Gupta',
                title: 'Projects Chair External',
                smallQuote: '"from cses import fun"',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:',
                  imageUrl: 'assets/images/board/arkin.JPG',
                }
            }
        ),
        new Bio(
            {
                name: 'Timothy Oh',
                title: 'Social Chair',
                smallQuote: '"I code in google docs"',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:',
                  imageUrl: 'assets/images/board/tim.JPG',
                }
            }
        ),
        new Bio(
            {
                name: 'Bonnie Dai',
                title: 'Design Chair',
                smallQuote: '"hi friend"',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:',
                  imageUrl: 'assets/images/board/bonnie.JPG',
                }
            }
        ),
        new Bio(
            {
                name: 'Wye Mun Chin',
                title: 'PR Chair',
                smallQuote: '"Wye can\'t we be friends\?"',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:',
                    imageUrl: 'assets/images/board/wye.JPG',
                }
            }
        ),
        new Bio(
            {
                name: 'Stanley Tan',
                title: 'Outreach Chair',
                smallQuote: '"Technical or behavioral?"',
                links: {
                    githubUrl: 'https://github.com/stanleytan',
                    mailToUrl: 'mailto:stt010@ucsd.edu',
                    imageUrl: 'assets/images/board/stanley.JPG',

                }
            }
        )
    ];
}

export { BioSet }
