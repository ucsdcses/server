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
                name: 'Megan',
                title: 'VP External',
                smallQuote: '“Photographer and Board Game Enthusiast “',
                links: {
                    githubUrl: 'https://github.com/megan-m-wang',
                    mailToUrl: 'mailto:mmw022@ucsd.edu',
                    imageUrl: "",
                }
            }
        ),
        new Bio(
            {
                name: 'Niral Patel',
                title: 'VP Internal',
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
                name: 'Sean',
                title: 'VP Finance',
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
                name: 'Emily',
                title: 'Pro-Dev Chair',
                smallQuote: '"Excited to meet you guys at all our events!"',
                links: {
                    githubUrl: 'https://github.com/heejungemily',
                    mailToUrl: 'mailto:hes018@ucsd.edu',
                    imageUrl: "",
                }
            }
        ),
	new Bio( 
            {
                name: 'Jaehoon Choi',
                title: 'Pro-Dev Chair',
                smallQuote: '""',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:',
                    imageUrl: ""
                }
            }
        ),
        new Bio(
            {
                name: 'Pushpak',
                title: 'Projects Chair Internal',
                smallQuote: '"We do some really cool stuff here!"',
                links: {
                    githubUrl: 'https://github.com/pushpakrajgautam',
                    mailToUrl: 'mailto:p1gautam@ucsd.edu',
                    imageUrl: ""
                }
            }
        ),
        new Bio(
            {
                name: 'Arkin Gupta',
                title: 'Projects Chair External',
                smallQuote: '""',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:',
                    imageUrl: ""
                }
            }
        ),
        new Bio(
            {
                name: 'Timothy Oh',
                title: 'Social Chair',
                smallQuote: '""',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:',
                    imageUrl: ""
                }
            }
        ),
        new Bio(
            {
                name: 'Bonnie Dai',
                title: 'Design Chair',
                smallQuote: '""',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:',
                    imageUrl: ""
                }
            }
        ),
        new Bio(
            {
                name: 'Wye Mun Chin',
                title: 'PR Chair',
                smallQuote: '""',
                links: {
                    githubUrl: '',
                    mailToUrl: 'mailto:',
                    imageUrl: ""
                }
            }
        ),
        new Bio(
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
