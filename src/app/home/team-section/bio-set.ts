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
                title: 'President, VP Finance',
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
                name: 'Ke Xu',
                title: 'VP External',
                links: {
                  mailToUrl: 'mailto:k6xu@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/ke-xu-079351211/',
                  githubUrl: 'https://github.com/lorraineeeee',
                  imageUrl: 'assets/images/board-2022/Ke.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Gabriel Leif Diaz',
                title: 'Projects Chair',
                links: {
                  mailToUrl: 'mailto:lgdiaz@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/gabriel-diaz-57815118b/',
                  githubUrl: 'https://github.com/gabriel-diaz-ucsd',
                  imageUrl: 'assets/images/board-2022/Gabriel.jpg'
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
                name: 'Saatvhik Dirisala',
                title: 'Pro-Dev Chair',
                links: {
                  mailToUrl: 'mailto:sdirisala@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/mwlite/in/saathvik-dirisala-4a1817197',
                  githubUrl: 'https://github.com/saathvikpd',
                  imageUrl: 'assets/images/board-2022/Saathvik.jpg'
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
