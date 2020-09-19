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
                name: 'Carleen Li',
                title: 'Co-President',
                links: {
                    mailToUrl: 'mailto:cyli@ucsd.edu',
                    linkedinUrl: 'https://www.linkedin.com/in/carleen-li/',
                    githubUrl: 'https://github.com/carleenli',
                    imageUrl: 'assets/images/board-2020/Carleen.jpg'
                }
            }
        ),
        new Bio (
            {
              name: 'Chen Meng',
              title: 'Co-President',
              links: {
                  mailToUrl: 'mailto:c5meng@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/chenmeng98/',
                  githubUrl: 'https://github.com/MCharming98',
                  imageUrl: 'assets/images/board-2020/Chen.jpg'
              }
            }
      ),
        new Bio (
            {
                name: 'Pawan Paleja',
                title: 'VP External',
                links: {
                  mailToUrl: 'mailto:ppaleja@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/pawanpaleja',
                  githubUrl: 'https://github.com/ppaleja',
                  imageUrl: 'assets/images/board-2020/Pawan.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Nour Yehia',
                title: 'VP Internal',
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
                name: 'Tae Kwang(Jason) Chung',
                title: 'VP Finance',
                links: {
                  mailToUrl: 'mailto:tkc016@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/tae-kwang-jason-chung/',
                  githubUrl: 'https://github.com/jatotheson',
                  imageUrl: 'assets/images/board-2020/Jason.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Yuling Shi',
                title: 'Pro-Dev Chair',
                links: {
                  mailToUrl: 'mailto:yus252@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/yulingshi/',
                  githubUrl: 'https://github.com/yus252',
                  imageUrl: 'assets/images/board-2020/Yuling.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Eric Kang',
                title: 'Pro-Dev Chair',
                links: {
                  mailToUrl: 'mailto:ekang@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/eric-kang-3589b1144/',
                  githubUrl: 'https://github.com/eric-h-kang',
                  imageUrl: 'assets/images/board-2020/Eric.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Yuzi LYu',
                title: 'Projects Chair',
                links: {
                  mailToUrl: 'mailto:yul134@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/yuzi-lyu-13658a1a3/',
                  githubUrl: 'https://github.com/yuzilyu',
                  imageUrl: 'assets/images/board-2020/Yuzi.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Anshul Singh',
                title: 'Projects Chair',
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
                name: 'Eunice Lin',
                title: 'Design Chair',
                links: {
                  // TODO: update email address + urls
                  mailToUrl: 'mailto:silin@ucsd.edu',
                  linkedinUrl: 'http://linkedin.com/in/eunice-lin-54aa921a2',
                  githubUrl: '',
                  imageUrl: 'assets/images/board-2020/Eunice.jpg'
                }
            }
        ),
        new Bio (
            {
                name: 'Dennis Luc',
                title: 'PR Chair',
                links: {
                  mailToUrl: 'mailto:dluc@ucsd.edu',
                  linkedinUrl: 'https://www.linkedin.com/in/dennisluc/',
                  githubUrl: 'https://github.com/denniskluc',
                  imageUrl: 'assets/images/board-2020/Dennis.jpg'
                }
            }
        ),
    ];
}

export { BioSet }
