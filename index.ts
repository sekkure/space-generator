import { question } from "readline-sync";

class SpaceGenerator {
  private symbolsWeight: { [k: number]: string } = {
    500: "✧",
    1000: "★",
    2000: "✦",
    5000: "˚",
    10000: "⠠",
    12500: "⠁",
    15000: "‧",
    100000: "⠀",
  };

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

    const weight = this.getWeight(this.getSumWeight());
    const index = Object.keys(this.symbolsWeight).find(
      (element) => +element >= weight
    );

    return this.getSymbolByWeight(
      index ? this.symbolsWeight[+index] : undefined
    );
  }

  private getSumWeight() {
    return Object.keys(this.symbolsWeight).reduce<number>((prev, curr) => {
      return prev + Number(curr);
    }, 0);
  }
}

const spaceGenerator = new SpaceGenerator();

const height = question("Height\n > ", { defaultInput: "6" });
const width = question("Width\n > ", { defaultInput: "30" });

const generatedSpace = spaceGenerator.generateSpace(+width, +height);

console.log(generatedSpace);
