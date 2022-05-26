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
                name: 'Ke Xu',
                title: 'VP Internal',
                links: {
                  mailToUrl: 'mailto:k6xu@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/ke-xu-079351211/',
                  githubUrl: 'https://github.com/lorraineeeee',
                  imageUrl: 'assets/images/board-2021/Ke.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Deepansha Singh',
                title: 'Co-President',
                links: {
                  mailToUrl: 'mailto:d1singh@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/deepansha-singh/',
                  githubUrl: 'https://github.com/Algorithmist-Girl',
                  imageUrl: 'assets/images/board-2021/Deepansha.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Vardhan Agarwal',
                title: 'Co-President',
                links: {
                  mailToUrl: 'mailto:v7agarwa@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/vardhanagarwal/',
                  githubUrl: '',
                  imageUrl: 'assets/images/board-2021/VardhanAgarwal.jpg'
                }
            }
        ),
    ];
}

export { BioSet }
