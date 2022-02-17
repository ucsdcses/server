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
                name: 'Yuzi Lyu',
                title: 'President',
                links: {
                    mailToUrl: 'mailto:yul134@ucsd.edu',
                    linkedinUrl: 'https://www.linkedin.com/in/yuzi-lyu/',
                    githubUrl: 'https://github.com/yuzilyu',
                    imageUrl: 'assets/images/board-2021/YuziLyu.jpg'
                }
            }
        ),
        new Bio (
            {
              name: 'Anshul Singh',
              title: 'VP-External',
              links: {
                mailToUrl: 'mailto:a2singh@ucsd.edu',
                linkedinUrl: 'https://www.linkedin.com/in/anshul-singh4/',
                githubUrl: 'https://github.com/anshulsinghh',
                imageUrl: 'assets/images/board-2020/Anshul.jpg'
              }
            }
      ),
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
                name: 'Dennis Luc',
                title: 'VP Finance',
                links: {
                    mailToUrl: 'mailto:dluc@ucsd.edu',
                    linkedinUrl: 'https://www.linkedin.com/in/dennisluc/',
                    githubUrl: 'https://github.com/denniskluc',
                    imageUrl: 'assets/images/board-2020/Dennis.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Deepansha Singh',
                title: 'Pro-Dev Chair',
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
                name: 'Tony Tang',
                title: 'Pro-Dev Chair',
                links: {
                  mailToUrl: 'mailto:zit001@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/zixuan-tony-tang',
                  githubUrl: 'https://github.com/TonyTang2001',
                  imageUrl: 'assets/images/board-2021/TonyTang.JPG'
                }
            }
        ),
        new Bio (
            {
                name: 'Nour Yehia',
                title: 'Projects Chair',
                links: {
                  mailToUrl: 'mailto:nyehia@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/nyehia/',
                  githubUrl: 'https://github.com/nouryehia',
                  imageUrl: 'assets/images/board-2020/Nour.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Stephen Boussarov',
                title: 'Projects Chair',
                links: {
                  mailToUrl: 'mailto:sboussar@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/stephen-boussarov/',
                  githubUrl: 'https://github.com/stephenbusi',
                  imageUrl: 'assets/images/board-2021/Stephen.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Vardhan Agarwal',
                title: 'PR Chair',
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
