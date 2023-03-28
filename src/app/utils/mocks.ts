import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { RepoGameService } from '../services/game/game.services.service';
import { Game, LoggedUser, User } from '../types/types';

export const mockPass = 'pass';

export const mockUser1: User = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: mockPass,
  img: '',
  id: '123'
};

export const mockGame: Game = {
  gameName: 'test',
  category: 'MMO',
  description: 'test',
  img: '',
  price: 20,
  releaseDate: 'test',
  owner: mockUser1,
  id: '12345678',
};
export const mockGame1: Game = {
  gameName: 'test',
  category: 'MMO',
  description: 'test',
  img: '',
  price: 20,
  releaseDate: 'test',
  owner: mockUser1,
  id: '123',
};

export const mockUser: User = {
  id: '12345',
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: mockPass,
  img: '',
  shopList: [mockGame, mockGame1],
};

export const mockLogged: LoggedUser = {
  id: '2132454',
  email: 'johndoe@example.com',
  role: 'admin',
};

export const mockRoute = {
  url: { path: '/login' },
};
export const mockRouteParam = {
  url: { path: '/users/' },
  params: { id: '12345' },
};

export const mockToken =
  'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IiIsImVtYWlsIjoiIiwicm9sZSI6IiIsImlhdCI6MTY3OTA0ODgwNH0.U8s8UMTJddjfXH_qbxiJJ5GuJeEhryxFmv8d8DBMsycVTt-k1sdAFEq9yRUXbawo';

export const mockUserService = {
  loginUser: () => {
    return new BehaviorSubject<string>('TestToken');
  },
  initialToken: () => {
    return;
  },
  registerUser: () => {
    return new Observable<User>();
  },
  getCurrentUser: () => {
    return new Observable<User>();
  },
  updateUser: (id: string, user: User) => {
    return new Observable<User>()
  },
  deleteUser: () => {
    return of({});
  },
  userLogged$: new BehaviorSubject<LoggedUser>(mockLogged),
  token$: new BehaviorSubject<string>('TestToken'),
  currentUser$: new BehaviorSubject<User>(mockUser),
};

export const mockGameService = {
  createGame: () => {
    return of({});
  },

  updateGame: () => {
    return of({
      gameName: 'Test Game',
      releaseDate: '2022-01-01',
      category: 'Action',
      price: 59.99,
      description: 'Test description',
      img: 'test.png',
    });
  },

  deleteGame: () => {
    return of({});
  },

  queryGame: (category: string) => {
    return of([{} as Game])
  },

  gameInfo$: new BehaviorSubject<Game>(mockGame),
  token: { results: { token: '' } },
};

export const mockGametoUp = {
  gameName: 'Test Game',
  releaseDate: '2022-01-01',
  category: 'Action',
  price: 59.99,
  description: 'Test description',
  img: 'test.png',
} as unknown as Game;