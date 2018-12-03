import * as fs from 'fs';
import * as path from 'path';
export class InputReader {
    constructor(private prefix: string) {}

    public readInput1(): string {
        return fs.readFileSync(path.resolve(__dirname + path.sep + this.prefix, "input1.txt"), "utf8");
    }
}