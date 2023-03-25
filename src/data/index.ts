import { Project } from "./types";
import sudokuBuster from "./sudoku-buster";
import shazizzle from "./shazizzle";
import dlxlibDemos from "./dlxlib-demos";
import solidLightWorks from "./solid-light-works";
import slidingPuzzle from "./sliding-puzzle";
import rubiksCube from "./rubiks-cube";
import repoTraffic from "./repo-traffic";

const projects: Project[] = [
  sudokuBuster,
  shazizzle,
  dlxlibDemos,
  solidLightWorks,
  slidingPuzzle,
  rubiksCube,
  repoTraffic,
];

export default projects;
export * from "./types";
