import { Component, inject, OnInit, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'; // Import from rxjs-interop
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, startWith, switchMap, tap } from 'rxjs/operators';
import { Users, UsersService } from '../../Services/UsersService/users';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-lookup-box',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatProgressSpinnerModule 
],
  templateUrl: './user-lookup-box.html',
  styleUrl: './user-lookup-box.scss',
})
export class UserLookupBox implements OnInit {
  //@Output() selectedUser:OutputRef<Users>;
  //private selectedUserSubject = new Subject<Users>();
  userSelected = output<Users>();

  loading = false;
  searchUser = new FormControl<string | Users>('', {
    nonNullable: true,
    validators: [Validators.required, 
                Validators.minLength(3)],
  });
  
  _userService = inject(UsersService);

  // Define and initialize the observable directly as a class property
  filteredUsers$: Observable<Users[]> = this.searchUser.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged(),
    filter(value =>{
      const searchTerm = typeof value === 'string' ? value : value.fullName;
      return searchTerm.length === 0 || searchTerm.length >= 3
    }),
    tap(()=>{
      this.loading = true
    }),
    switchMap(value => {
      const searchTerm = typeof value === 'string' ? value : value.fullName;
      if(searchTerm.length === 0) return EMPTY;
      return this._userService.getUserByFullName(searchTerm).pipe(
        finalize(()=>{
          this.loading = false;
        })        
      );
    }),
    takeUntilDestroyed()
  );
  
  ngOnInit(): void {
    // ngOnInit is now empty because the observable is already set up.
  }

  displayUserFullName(user: Users): string {
    return user?.fullName || '';
  }
  onUserSelected(user: Users): void {
   this.userSelected.emit(user);
  }
}
