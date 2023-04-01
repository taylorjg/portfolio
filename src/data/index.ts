import { Project } from "./types";
import sudokuBuster from "./sudoku-buster-react";
import shazizzle from "./shazizzle";
import dlxlibDemos from "./dlxlib-demos";
import solidLightWorks from "./solid-light-works";
import slidingPuzzle from "./sliding-puzzle-react";
import rubiksCube from "./rubiks-cube";
import repoTraffic from "./repo-traffic-react";
import pegSolitaire from "./solitaire-rl-web";
import mastermind from "./mastermind-svg-vue";
import basketcase from "./basketcase";
import versionindfo from "./dotnet-versioninfo";

const projects: Project[] = [
  sudokuBuster,
  shazizzle,
  dlxlibDemos,
  solidLightWorks,
  slidingPuzzle,
  rubiksCube,
  repoTraffic,
  pegSolitaire,
  mastermind,
  basketcase,
  versionindfo,
];

export default projects;
export * from "./types";
