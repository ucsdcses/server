import { Bio } from "./bio";

/**
 * Static class for holding the array of Bios for the team section component.
 */
class BioSet {
    public static BIO_SET: Array<Bio> = [
        // Work around to get the getImage when serializing from JSON. Creates a
        // parent class type and casts it to a regular Bio object.
        new Bio (
            {
                name: 'Wye Mun Chin',
                title: 'President',
                links: {
                    mailToUrl: 'mailto:wmchin@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Emily Son',
                title: 'VP External',
                links: {
                    mailToUrl: 'mailto:hes018@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Bonnie Dai',
                title: 'VP Internal',
                links: {
                    mailToUrl: 'mailto:tydai@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Timothy Oh',
                title: 'VP Finance',
                links: {
                    mailToUrl: 'mailto:t8oh@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Tae Kwang (Jason) Chung',
                title: 'Pro-Dev Chair',
                links: {
                    mailToUrl: 'mailto:tkc016@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Pawan Paleja',
                title: 'Pro-Dev Chair',
                links: {
                    mailToUrl: 'mailto:ppaleja@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Saurabh Kanhegaonkar',
                title: 'Projects Chair Internal',
                links: {
                    mailToUrl: 'mailto:skanhega@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Alex Ruber',
                title: 'Quarterly Projects Chair',
                links: {
                    mailToUrl: 'mailto:mruber@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Nabi Ozberkman',
                title: 'Quarterly Projects Chair',
                links: {
                    mailToUrl: 'mailto:nozberkm@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Samarth Arora',
                title: 'Social Chair',
                links: {
                    mailToUrl: 'mailto:saarora@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Anh D. Nguyen',
                title: 'Design Chair',
                links: {
                    mailToUrl: 'mailto:adn034@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Carleen Li',
                title: 'PR Chair',
                links: {
                    mailToUrl: 'mailto:cyli@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
        new Bio (
            {
                name: 'Chen Meng',
                title: 'Outreach Chair',
                links: {
                    mailToUrl: 'mailto:c5meng@ucsd.edu',
                    imageUrl: ''
                }
            }
        ),
    ];
}

export { BioSet }
