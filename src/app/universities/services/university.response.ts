export interface UniversityResource {
  id: string;
  name: string;
  country: string;
  alpha_two_code: string;
  domains: string[];
  web_pages: string[];
}

export type UniversitiesResponse = UniversityResource[];
