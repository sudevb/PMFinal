import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './users.service';
import { of } from 'rxjs';

describe('UserService', () => {
  let usersService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers: [HttpClientModule, UserService]
    }).compileComponents();

    usersService = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          First_Name: 'Sudev',
          Last_Name: 'Balannair',
          Employee_ID: 234502
        },
        {
          First_Name: 'Subi',
          Last_Name: 'Haridas',
          Employee_ID: 152507
        }
      ];
      let response;
      spyOn(usersService, 'getUsersList').and.returnValue(of(userResponse));

      usersService.getUsersList().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = {
        First_Name: 'Sudev',
        Last_Name: 'Balannair',
        Employee_ID: 234502
      };
      let response;
      spyOn(usersService, 'getUser').and.returnValue(of(userResponse));

      usersService.getUser(2).subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
});
