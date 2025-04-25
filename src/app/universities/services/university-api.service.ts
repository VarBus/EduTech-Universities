import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogoApiService } from '../../shared/services/logo-api.service';
import { map, Observable } from 'rxjs';
import { University } from '../model/university.entity';
import {UniversitiesResponse} from './university.response';
import { environment } from '../../../environments/environment';
import { UniversityAssembler } from './university.assembler';

/**
 * Service for fetching university data from the universities API
 * @author U202212345 John Doe
 */
@Injectable({
  providedIn: 'root'
})
export class UniversitiesApiService {
  private baseUrl = environment.universitiesApiBaseUrl;
  private searchEndpoint = environment.universitiesSearchEndpoint;

  constructor(
    private http: HttpClient,
    private logoApiService: LogoApiService
  ) {}

  /**
   * Gets universities with "ciencias" in their name
   * @returns Observable with array of University entities
   */
  getScienceUniversities(): Observable<University[]> {
    return this.http.get<UniversitiesResponse>(
      `${this.baseUrl}${this.searchEndpoint}?name=ciencias`
    ).pipe(
      map(response =>
        UniversityAssembler.withLogoApiService(this.logoApiService).toEntitiesFromResponse(response)
      )
    );
  }
}
