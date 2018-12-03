import { InputReader } from "./inputReader";
import { DayOne } from "./day01/dayone";
import { DayTwo } from "./day02/daytwo";

let inputReader = new InputReader('day01');
/*const dayOne = new DayOne();
console.log('Day 1:');
console.log(`Frequency calibrated to: ${dayOne.calibrateFrequency(inputReader.readInput1())}`);
console.log(`Frequency visited twice: ${dayOne.fineTuneFrequency(inputReader.readInput1())}`);
*/

const dayTwo = new DayTwo();
inputReader = new InputReader('day02');
console.log('Day 2:');
console.log(`Checksum: ${dayTwo.getCheckSum(inputReader.readInput1())}`);