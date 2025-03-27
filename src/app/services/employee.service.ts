import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) {}

  saveEmployee(employee: any): Observable<any> {
    const formData = new FormData();
    
    Object.keys(employee).forEach(key => {
      if (employee[key] !== null) {
        formData.append(key, employee[key]);
      }
    });

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`  // 🔹 Ensure token is included
    });

    return this.http.post<any>(this.apiUrl, formData, { headers });
  }
}
