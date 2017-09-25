import { Bio } from "./bio";

/**
 * Static class for holding the array of Bios for the team section component.
 */
class BioSet {
  public static BIO_SET: Array<Bio> = [
    // Work around to get the getImage when serializing from JSON. Creates a
    // parent class type and casts it to a regular Bio object.
    new Bio({
      name: 'Maxwell Bland',
      title: 'Technologies Chair',
      smallQuote: '"Here to do things for free."',
      links: {
        githubUrl: 'github.com/maxwell-bland',
        mailToUrl: 'mailto:mbland@ucsd.edu',
        imageUrl: null
      }
    })
  ];
}

export { BioSet }
