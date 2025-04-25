// src/app/shared/services/logo-api.service.ts
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {University} from '../../universities/model/university.entity';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = environment.logoProviderApiBaseUrl;

  constructor() {
  }

  getUrlToLogo(university: University): string {
    if (university.domains && university.domains.length > 0) {
      return `${this.baseUrl}${university.domains[0]}`;
    }
    return 'assets/images/university-placeholder.png';
  }
}

