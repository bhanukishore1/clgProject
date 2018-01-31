import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FooterComponent } from './footer/footer.component';

import { TitactoeComponent } from './main-view/titactoe/titactoe.component';
import { ChessComponent } from './main-view/chess/chess.component';
import { SudokuComponent } from './main-view/sudoku/sudoku.component';
import { CheckersComponent } from './main-view/checkers/checkers.component';
import { TetrisComponent } from './main-view/tetris/tetris.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';
import {GmailService} from './gmail.service';

const appRoutes: Routes = [{path: 'tictactoe', component: TitactoeComponent},
  {path: 'chess', component: ChessComponent}, {path: 'sudoku', component: SudokuComponent},
  {path: 'checkers', component: CheckersComponent}, {path: 'tetris', component: TetrisComponent},
  {path: '', pathMatch: 'full', component: MainViewComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainViewComponent,
    FooterComponent,
    TitactoeComponent,
    ChessComponent,
    SudokuComponent,
    CheckersComponent,
    TetrisComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [GmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
