/**
 * Simple class that holds a team member's bio data.
 */
class BioData {
  name: string;
  title: string;
  smallQuote: string;
  links: Links;
}

interface Links {
  githubUrl: string;
  mailToUrl: string;
  imageUrl: string;
}

/**
 * Simple class that holds a team member's bio. Has methods for getting the
 * image and constructing an object from a pre-existing bioData object.
 */
class Bio extends BioData {
  /**
   * Simple constructor; allows you to initialize object from a parent object.
   * @param  {BioData} bioData the parent object to initialize from.
   */
  constructor(bioData?: BioData) {
    super();

    if (bioData) {
      this.name = bioData.name;
      this.title = bioData.title;
      this.smallQuote = bioData.smallQuote;
      this.links = bioData.links;
    }
  }

  /**
   * Gets the image url for this bio object. If there is none, it returns a
   * placeholder.
   * @return {string} The image url
   */
  public getImage(): string {
    if (this.links.imageUrl) {
      return this.links.imageUrl;
    }

    // TODO: Make this a constant in the application
    return "assets/images/team-placeholder.jpg";
  }
}

export { Bio }
