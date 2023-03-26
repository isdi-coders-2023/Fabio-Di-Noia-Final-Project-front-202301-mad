import { Component, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { RepoUserService } from 'src/app/services/user/user.service';
import { Game, User } from 'src/app/types/types';
import { Router } from '@angular/router';
import { RepoGameService } from 'src/app/services/game/game.services.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class UserDetailComponent {
  currentUser$: Observable<User>;

  constructor(private srv: RepoUserService, private router: Router, public gamesrv: RepoGameService, public zone: NgZone ) {

    this.currentUser$ = this.srv.getCurrentUser(this.srv.userLogged$.value.id);
  }

  editGame(game: Game) {
    const gameJson = JSON.stringify(game);
    this.router.navigate(['create', { gameToUpdate: gameJson }]);
  }
  editUser(user: User) {
    const userJson = JSON.stringify(user);
    this.router.navigate(['edit', { userToUpdate: userJson }]);
  }

  deleteGame(game: Partial<Game>) {
    this.gamesrv.deleteGame(game.id as string).subscribe(() => {
      // perform any necessary action upon successful deletion, such as refreshing the user's game list
      this.currentUser$ = this.srv.getCurrentUser(
        this.srv.userLogged$.value.id
      );
    });
  }
  deleteUser(user: Partial<User>) {
    this.srv.deleteUser(user.id as string).subscribe(() => {
      this.zone.run(() => {
        this.router.navigate(['/home/']);
      });

    });
  }
}