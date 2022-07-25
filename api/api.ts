export * from './sRE.service';
import { SREService } from './sRE.service';
export * from './team.service';
import { TeamService } from './team.service';
export * from './tentative.service';
import { TentativeService } from './tentative.service';
export * from './tournament.service';
import { TournamentService } from './tournament.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [SREService, TeamService, TentativeService, TournamentService, UserService];
