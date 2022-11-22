import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';
import { SortColumn, SortDirection } from '../_directives/sortable.directive';
import { State } from '../_models/State';
import { Gallery } from '../_models/PlIntGallery';

interface SearchGalleryResult {
  data: Gallery[];
  total: number;
}
const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(data: Gallery[], column: SortColumn, direction: string): Gallery[] {
  if (direction === '' || column === '') {
    return data;
  } else {
    return [...data].sort((a, b) => {
      const res = compare(`${a[column]}`, `${b[column]}`);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(data: Gallery, term: string) {

  return data.title.toLowerCase().includes(term.toLowerCase())
}

@Injectable({
  providedIn: 'root'
})

export class HrCntGalleryService {

  constructor(private http: HttpClient) {
  }
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _allData$ = new BehaviorSubject<Gallery[]>([]);
  private _data$ = new BehaviorSubject<Gallery[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  public newsevent: Gallery[];
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }
  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: any) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }
  get data$() {
    return this._data$.asObservable();
  }
  get allData$() {
    return this._allData$.asObservable();
  }
  getById(id) {
    return this.http.get<Gallery[]>(`api/harmanocontract/${id}`);
  }

  ExportList() {
    return this.http.get<Gallery[]>(`api/harmanocontract/all`);
  }
  getAllData() {

    const url = `api/harmanocontract/all`;
    console.log(url);
    tap(() => this._loading$.next(true)),
      this.http.get<Gallery[]>(url).subscribe(res => {
        this.newsevent = res;

        this._data$.next(this.newsevent);
        this._allData$.next(this.newsevent);

        this._search$.pipe(
          switchMap(() => this._search()),
          tap(() => this._loading$.next(false))
        ).subscribe(result => {
          this._data$.next(result.data);
          this._total$.next(result.total);
        });

        this._search$.next();
      });
  }
  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchGalleryResult> {

    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let sortedData = sort(this.newsevent, sortColumn, sortDirection);

    //// 2. filter
    sortedData = sortedData.filter(data => matches(data, searchTerm));
    const total = sortedData.length;

    // 3. paginate
    const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ data, total });
  }


  clear() {
    // clear by calling subject.next() without parameters
    this._search$.next();
    this._data$.next(null);
    this._allData$.next(null);
    this._total$.next(null);
    this._loading$.next(null);
    this._state = {
      page: 1,
      pageSize: 10,
      searchTerm: '',
      sortColumn: '',
      sortDirection: ''
    };
  }
  insert(data) {
    debugger
    return this.http.post(`api/harmanocontract/insert`, data)
      .pipe(map(res => {

        console.log(res);
        return res;
      }));
  }

  update(updateData) {
    return this.http.post(`api/harmanocontract/update`, updateData)
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }

  delete(deleteData) {
    debugger
    return this.http.post(`api/harmanocontract/delete`, deleteData);
  }

}
