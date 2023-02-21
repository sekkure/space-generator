import { question } from "readline-sync";
import symbols from "./symbols.json";

class SpaceGenerator {
  private symbolsWeight = symbols;

  public generateSpace(width: number, height: number) {
    const space: string[] = [];

    const centerY = Math.floor(height / 2);
    const centerX = Math.floor(width / 2);

    for (let h = 0; h < height; h++) {
      let line = "";

      for (let w = 0; w < width; w++) {
        const symbol =
          h === centerY && w === centerX ? "☽" : this.getSymbolByWeight();

        line += symbol;
      }

      space.push(line);
    }

    return space.join("\n");
  }

  private getWeight(max: number) {
    return Math.floor(Math.random() * (max - 1) + 1);
  }

  /*
    Using recursive method just for fun :xdd:
  */
  private getSymbolByWeight(symbol?: string): string {
    if (symbol) return symbol;

    const randomWeight = this.getWeight(this.getSumWeight());
    const foundSymbolWeight = Object.keys(this.symbolsWeight).find(
      (symbolWeight) => +symbolWeight >= randomWeight
    );

    return this.getSymbolByWeight(
      foundSymbolWeight
        ? this.symbolsWeight[foundSymbolWeight as keyof typeof symbols]
        : undefined
    );
  }

  private getSumWeight() {
    return Object.keys(this.symbolsWeight).reduce<number>((prev, curr) => {
      return prev + +curr;
    }, 0);
  }
}

const spaceGenerator = new SpaceGenerator();

const height = question("Height\n > ", { defaultInput: "6" });
const width = question("Width\n > ", { defaultInput: "30" });

const generatedSpace = spaceGenerator.generateSpace(+width, +height);

console.log(generatedSpace);
