# Space Generator

Very simple and basic script that generates space landscape for you.

# How to start

1. Clone repo
2. Run `yarn` or `npm i`
3. Run "dev" script `yarn dev` or `npm run dev`
4. Follow console questions. Here is values by default for height (6) and width (30).

# How to manage symbols

You can simply open `src/symbols.json` file and add new symbols

- You must provide number as key, it's using as "weight" for your symbol.
- If you want to add "rare" symbol, place it higher in the list. See example in json code

Just play with weight for symbols and launch script again and again to get your cool looking space landscape 🐋

⠀⠀⠀⠀⠀⠀⠀✦⠀⠀⠀✧⠀⠀⠀⠀⠀⠀⠀⠠⠠⠀⠀⠀✧⠀⠀⠀⠀⠀⠀⠀⠀⠀˚˚⠀⠀⠀⠀˚⠀⠀⠁⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀‧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀˚⠀⠀˚⠀⠀⠀⠀✦⠀⠁⠀⠀⠠⠀˚⠀✦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠁⠀⠀⠀‧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀˚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀‧⠀⠀‧⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠁⠀⠀˚‧⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀˚⠀⠀⠀⠀⠀⠀⠀✦⠀⠀
⠀⠀⠀⠀✦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠠˚⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀✦⠀⠀⠀⠀⠀‧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀✦‧⠀˚⠀
⠀⠀⠀⠀⠀⠀⠀˚⠀⠀⠀⠀⠀⠁⠀⠀‧⠀˚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀‧⠀⠀‧⠀⠀⠀⠀⠀⠀⠀⠀⠀‧⠀⠀⠀⠀⠠⠠˚★⠀☽⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀‧⠀⠁⠠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀˚⠀⠀⠀⠀˚˚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀✧⠀⠀⠀⠀‧‧⠀⠀⠀⠀✦⠀⠀⠀⠀⠠⠀⠀✧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀✧⠀⠀‧⠀⠀⠀˚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀˚⠀⠀⠠‧⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀✦⠀✦⠀⠀⠠⠀⠀⠀⠀⠠⠀⠀˚⠀⠀⠀⠀⠀⠠⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀✦⠀⠀⠀⠀˚⠀⠀⠀★⠀⠀⠀✧⠀⠀★⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠁⠀⠀⠀‧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀‧
