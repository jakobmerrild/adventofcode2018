export class DayTwo {

    public getCheckSum(inputText: string): number {
        let exactlyTwo = 0;
        let exactlyThree = 0;
        for(let boxId of inputText.split('\n')) {
            const histogram = this.getHistogram(boxId);
            if (histogram.hasExactlyTwo())
                exactlyTwo++;
            if (histogram.hasExactlyTree())
                exactlyThree++;
        }
        return exactlyTwo * exactlyThree;
    }

    private getHistogram(boxId: string): Histogram {
        return new Histogram(boxId);
    }
}

class Histogram {
    values: {[key: string]: number };

    constructor(s: string) {
        this.values = {};
        const chars = [... s];
        chars.forEach(s =>  {
            if (this.values.hasOwnProperty(s)) {
                this.values[s] = this.values[s] + 1;
            } else {
                this.values[s] = 1;
            }
        });
    }
    public hasExactlyTwo(): boolean {
        for (const value in this.values) {
            if(this.values[value] === 2)
                return true;
        }
        return false;
    }
    public hasExactlyTree(): boolean {
        for (const value in this.values) {
            if(this.values[value] === 3)
                return true;
        }
        return false;
    }
}