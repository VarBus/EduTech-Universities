import { LogoApiService } from '../../shared/services/logo-api.service';
import {UniversityResource, UniversitiesResponse} from './university.response';
import { University } from '../model/university.entity';

/**
 * Assembler class to transform university data from API responses to entity objects
 * @author U202319668
 */
export class UniversityAssembler {
  static logoApiService: LogoApiService;

  static withLogoApiService(logoApiService: LogoApiService) {
    this.logoApiService = logoApiService;
    return this;
  }

  static toEntityFromResource(resource: UniversityResource): University {
    const university = new University();
    university.id = resource.id;
    university.name = resource.name;
    university.country = resource.country;
    university.alpha_two_code = resource.alpha_two_code;
    university.domains = resource.domains || [];
    university.web_pages = resource.web_pages || [];

    if (university.domains.length > 0) {
      university.logoUrl = this.logoApiService.getUrlToLogo(university);
    }

    return university;
  }

  static toEntitiesFromResponse(response: UniversitiesResponse): University[] {
    return response.map(resource => this.toEntityFromResource(resource));
  }
}
