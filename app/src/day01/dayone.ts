export class DayOne {

    /**
     * calibrateFrequency
     * 
     */
    public calibrateFrequency(inputText: string): number {
        return DayOne.inputToNumbers(inputText).reduce((x, y) => Number(x) + Number(y), 0);
    }

    public fineTuneFrequency(inputText: string): number {
        const visitedFrequencies: {[key: number]: boolean} = {};
        const numbers = DayOne.inputToNumbers(inputText);
        let foundFrequency = this.findDuplicateFrequency(numbers, 0, visitedFrequencies);
        while(!foundFrequency[0]) {
            foundFrequency = this.findDuplicateFrequency(numbers, foundFrequency[1], visitedFrequencies);
        }
        return foundFrequency[1];
    }

    public findDuplicateFrequency(numbers: number[], frequency: number,  visitedFrequencies: {[key: number]: boolean}): [boolean, number] {
        for (let number of numbers) {
            frequency = frequency + number;
            if(visitedFrequencies[frequency]) {
                return [true, frequency];
            }
            else {
                visitedFrequencies[frequency] = true;
            }
        }
        return [false, frequency]
    }
    
    private static inputToNumbers(inputText: string): number[] {
        return inputText.split('\n').map(Number);
    }

}