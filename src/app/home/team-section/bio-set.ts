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
                name: 'Vardhan Agarwal',
                title: 'President',
                links: {
                  mailToUrl: 'mailto:v7agarwa@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/vardhanagarwal/',
                  githubUrl: 'https://github.com/vardhan08',
                  imageUrl: 'assets/images/board-2022/Vardhan_Agarwal.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Deepansha Singh',
                title: 'President',
                links: {
                  mailToUrl: 'mailto:d1singh@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/deepansha-singh/',
                  githubUrl: 'https://github.com/Algorithmist-Girl',
                  imageUrl: 'assets/images/board-2022/Deepansha.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Anuj Jain',
                title: 'VP Finance',
                links: {
                  mailToUrl: 'mailto:anj008@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/anuj-jain-92207121b/',
                  githubUrl: 'https://github.com/ucsdcses/',
                  imageUrl: 'assets/images/board-2022/bear.png' // FIX ME
                }
            }
        ),
        new Bio (
            {
                name: 'Amit Namburi',
                title: 'VP Internal',
                links: {
                  mailToUrl: 'mailto:anamburi@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/amit-namburi/',
                  githubUrl: 'https://github.com/namburiamit/',
                  imageUrl: 'assets/images/board-2022/Amit.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Joshua Villanueva',
                title: 'VP External',
                links: {
                  mailToUrl: 'mailto:j6villanueva@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/joshua-villanueva-professional/', 
                  githubUrl: 'https://github.com/ucsdcses/',
                  imageUrl: 'assets/images/board-2022/bear.png' // FIX ME
                }
            }
        ),
        new Bio (
            {
                name: 'Gabriel Diaz',
                title: 'Projects Chair',
                links: {
                  mailToUrl: 'mailto:lgdiaz@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/gabriel-diaz-57815118b/',
                  githubUrl: 'https://github.com/gabriel-diaz-ucsd',
                  imageUrl: 'assets/images/board-2022/Gabriel.png'
                }
            }
        ),
        new Bio (
            {
                name: 'Bryan Lee',
                title: 'Projects Chair',
                links: {
                  mailToUrl: 'mailto:bhlee@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/cses-ucsd-809737190/',
                  githubUrl: 'https://github.com/ucsdcses/',
                  imageUrl: 'assets/images/board-2022/bear.png' //FIX ME
                }
            }
        ),
        new Bio (
            {
                name: 'Ishika Agrawal',
                title: 'DEI Chair',
                links: {
                  mailToUrl: 'mailto:iagrawal@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/ishikaagrawal2504/',
                  githubUrl: 'https://github.com/ucsdcses/',
                  imageUrl: 'assets/images/board-2022/Ishika.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Saman Khadivar',
                title: 'Pro-Dev Chair',
                links: {
                  mailToUrl: 'mailto:skhadivar@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/samankhadivar/',
                  githubUrl: 'https://github.com/ucsdcses/',
                  imageUrl: 'assets/images/board-2022/Saman.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Saathvik Dirisala',
                title: 'Pro-Dev Chair',
                links: {
                  mailToUrl: 'mailto:sdirisala@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/mwlite/in/saathvik-dirisala-4a1817197',
                  githubUrl: 'https://github.com/saathvikpd',
                  imageUrl: 'assets/images/board-2022/Saathvik.png'
                }
            }
        ),
        new Bio (
            {
                name: 'Raina Song',
                title: 'Design Chair',
                links: {
                  mailToUrl: 'mailto:yus083@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/rainasong/',
                  githubUrl: 'https://rainasong.com/',
                  imageUrl: 'assets/images/board-2022/Raina_Song.png'
                }
            }
        ),
        new Bio (
            {
                name: 'Nabil Khoury',
                title: 'PR Chair',
                links: {
                  mailToUrl: 'mailto:nkhoury@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/nabil-khoury-5b49a2220/',
                  githubUrl: 'https://github.com/ucsdcses/',
                  imageUrl: 'assets/images/board-2022/Nabil.png'
                }
            }
        ),
        new Bio (
            {
                name: 'Varun Parekh',
                title: 'PR Chair',
                links: {
                  mailToUrl: 'mailto:vparekh@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/varun-devang-parekh-223627212',
                  githubUrl: 'https://github.com/ucsdcses/',
                  imageUrl: 'assets/images/board-2022/Varun.png'
                }
            }
        )
    ];
}

export { BioSet }
