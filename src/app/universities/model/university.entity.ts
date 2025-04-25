export class University {
  id: string;
  name: string;
  country: string;
  alpha_two_code: string;
  domains: string[];
  web_pages: string[];
  logoUrl: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.country = '';
    this.alpha_two_code = '';
    this.domains = [];
    this.web_pages = [];
    this.logoUrl = '';
  }
}
