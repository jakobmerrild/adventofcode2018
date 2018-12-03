import { InputReader } from "./inputReader";
import { DayOne } from "./day01/dayone";

let inputReader = new InputReader('day01');
const dayOne = new DayOne();
console.log('Day 1:')
console.log(`Frequency calibrated to: ${dayOne.calibrateFrequency(inputReader.readInput1())}`);
console.log(`Frequency visited twice: ${dayOne.fineTuneFrequency(inputReader.readInput1())}`);