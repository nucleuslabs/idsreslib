# IDS Resource Library

This is a React friendly collection of SVG icons for use in the Smrt1 Health IDS Project. The package consists of 90 svg icons and 13 colors pre-bundled via webpack and has a size of about 260K.

## Dependencies

This package has a peer dependency of `react` and `react-dom` version 16.

## Install

In the project directory, you can run `npm install idsreslib` or `yarn add idsreslib` to add the resource library to your project.

## Usage

The package provides the following exports:

### colors

A key value object the keys are the names of the colors and the values are the hex color codes for example:

~~~
{
  "Blue": "#0000FF"
}
~~~ 

Usage:

~~~
import {colors} from 'idsreslib';

function ColorTable() {
    return Object.entries(colors).map(([color, colorCode]) => <span style={{margin: 10, padding: 20,width: "120px", height: "120px", backgroundColor: colorCode, color: color === "Black" ? "white" : "black", border: "solid 1px black"}}>
        {color}
    </span>);
}
~~~

### icons

A key value object where the keys are the icon names and the values are React Components wrap an svg icon.

Usage:

~~~
import {icons} from 'idsreslib';

function Icons({width, height}) {
    return <div>
        {Object.values(icons).map(([Icon]) => <Icon key={iconName} width={width} height={height}/>)}
    </div>
}
~~~

### IdsIcon Component

A React Component that accepts an icon prop which is the string name for which icon to display.

Usage in a React Component:

~~~
import {IdsIcon} from 'idsreslib';

export default function AardvarkIcon({width, height}) {
    return <IdsIcon icon="Aardvark" width={width} height={height}/>;
}
~~~

### localizedColors(lang)

A function that you pass a language string then it returns a 2 dimensional array of colors with localized names.

~~~
[["Blue", "#0000FF", "Blue"]]
~~~ 

Usage:

~~~
import {localizedColors} from 'idsreslib';

function ColorTable() {
    return localizedColors('fr').map(([colorKey, color, colorName]) => <span style={{margin: 10, padding: 20,width: "120px", height: "120px", backgroundColor: color, color: colorKey === "Black" ? "white" : "black", border: "solid 1px black"}}>
        {colorName}
    </span>);
}
~~~

### localizedIcons(lang)

A function that you pass a language string then it returns a 2 dimensional array of icons with localized names.

Usage:

~~~
import {localizedIcons} from 'idsreslib';

function Icons({width, height}) {
    return <div>
        {localizedIcons(en).map(([iconKey, Icon, iconName]) => <Icon key={iconKey} width={width} height={height}/> - {iconName})}
    </div>
}
~~~

## Full create-react-app Demo Code

Open up a terminal and run the following to test this out using create-react-app:

~~~
npx create-react-app myApp
cd myApp
npm install styled-components idsreslib
~~~

Then replace `App.js` and `App.css` with the contents below using your favourite IDE and run:

~~~
npm start
~~~


>App.js
~~~
import './App.css';
import {colors, icons, IdsIcon} from './idsreslib';
import styled from 'styled-components';

//Let's Add French names for the icons
const frenchIconNames = {Aardvark: 'Aardvark', Acorn: 'Bellota', Albatross: 'Albatros', Alligator: 'Alligator', Ant: 'Fourmi', Antelope: 'Antilope', Armadillo: 'Tatou roux', BagSeedling: 'Plántula de Bolsa', Bat: 'Chauve-souris', Bear: 'Ours', Beaver: 'Castor', Bee: 'Abeille', BenchTree: 'Árbol de banco', Binoculars: 'Prismáticos', Boar: 'Sanglier', Buffalo: 'Buffle', Bug: 'Bicho', Bugs: 'Insectos', Bull: 'Taureau', Butterfly: 'Papillon', Cactus: 'Cactus', Camel: 'Chameau', Cardinal: 'Cardinal', Cat: 'Chat', Chestnut: 'Castaña', CloudSun: 'Nube Sol', Clover: 'Trébol', Cougar: 'Cougar', Crow: 'Corbeau', Deer: 'Cerf', Dog: 'Chien', Dolphin: 'Dauphin', Dove: 'Colombe', Dragon: 'Dragon', Dragonfly: 'Libellule', Eagle: 'Aigle', Elephant: 'Éléphant', Elk: 'Elan', Feather: 'Pluma', FeatherPointed: 'Pluma Puntiaguda', Fire: 'Fuego', FireSmoke: 'Humo de Fuego', Fish: 'Poisson', Flamingo: 'Flamant rose', Flower: 'Flor', FlowerDaffodil: 'Flor Narciso', FlowerTulip: 'Flor Tulipán', Fox: 'Renard', Frog: 'Grenouille', Gazelle: 'Gazelle', Giraffe: 'Girafe', Goat: 'Chèvre', Goose: 'Oie', Grasshopper: 'Sauterelle', Heron: 'Héron', Hippopotamus: 'Hippopotame', Horse: 'Cheval', HouseTree: 'Árbol de la Casa', Hummingbird: 'Colibri', Icicles: 'Carámbanos', Jellyfish: 'Méduse', Kiwi: 'Kiwi', Koala: 'Koala', Ladybug: 'Coccinelle', Leaf: 'Hoja', LeafMaple: 'Hoja de Arce', LeafOak: 'Roble Hoja', Lion: 'Lion', Lizard: 'Lézard', Llama: 'Llama', Lobster: 'Homard', Locust: 'Langosta', Loon: 'Loon', Manta: 'Manta', Monkey: 'Singe', Moose: 'Orignal', Mosquito: 'Moustique', Mound: 'Montículo', Mountain: 'Montaña', Mountains: 'Montañas', Mouse: 'Souris', Mushroom: 'Champiñón', Narwhal: 'Narval', Octopus: 'Pieuvre', Otter: 'Loutre', Owl: 'Hibou', Panda: 'Panda', Peacock: 'Paon', Pelican: 'Pélican', Penguin: 'Pingouin', PersonHiking: 'Persona Caminando', Pompebled: 'Pompeble', Porcupine: 'Porc-épic', Pterodactyl: 'Ptérodactyle', Rabbit: 'Lapin', Raccoon: 'Raton laveur', Raindrops: 'Gotas de lluvia', Ram: 'Bélier', Rhinoceros: 'Rhinocéros', Rooster: 'Coq', Seahorse: 'Hippocampe', Seal: 'Phoque', Seedling: 'Planta de semillero', Shark: 'Requin', Sheep: 'Mouton', SignsPost: 'Publicación de señales', Snail: 'Escargot', Snake: 'Serpent', Spider: 'Araignée', SpiderBlackWidow: 'Araña Viuda Negra', SpiderWeb: 'Telaraña', Squirrel: 'Écureuil', Stegosaurus: 'Stegosaurus', Swan: 'Cygne', Tiger: 'Tigre', TreeDeciduous: 'Árbol caducifolio', TreeLarge: 'Árbol grande', TreePalm: 'Palmera de arbol', Triceratops: 'Triceratops', Trillium: 'Trilio', Turkey: 'Dinde', Turtle: 'Tortue', Tyrannosaurus: 'Tyrannosaure', Unicorn: 'Licorne', Volcano: 'Volcán', Vulture: 'Vautour', Water: 'Agua', Wave: 'La onda', Whale: 'Baleine', Wind: 'Viento', Wolf: 'Loup', Woodpecker: 'Pivert', Worm: 'Gusano'};

//You can use a styled-components pattern to color icons
const ColoredIcon = styled(IdsIcon)`
 path {
   fill: ${(props) => props.color}
 }
`;

//A nice function to split an array into chunks by Fernando Leal from https://stackoverflow.com/a/71483760
function splitChunks(sourceArray, chunkSize) {
    if (chunkSize <= 0)
        throw new Error("chunkSize must be greater than 0");
    let result = [];
    for (let i = 0; i < sourceArray.length; i += chunkSize) {
        result[i / chunkSize] = sourceArray.slice(i, i + chunkSize);
    }
    return result;
}

function App() {
    return (
        <div className="App">
            <h1>Create React App Demo of the IDS Resource Library (idsreslib)</h1>
            <div>
                To test the <strong>idsreslib</strong> project Open a terminal to run the following commands:
                <ol>
                    <li>`npx create-react-app myApp` to setup a react app more info can be found at <a href="https://create-react-app.dev/">https://create-react-app.dev</a>.</li>
                    <li>`cd myApp`</li>
                    <li>`npm install styled-components idsreslib` to install styled components and the IDS Resource Library</li>
                    <li>replace App.js with the contents of this file in your favourite IDE</li>
                    <li>`npm start`</li>
                </ol>
            </div>
            <h1>Colours</h1>
            <br/>
            <br/>
            <ColorTree colors={colors}/>
            <br/>
            <br/>
            <h1>Icon Table</h1>
            <IconTable icons={icons}/>
            <h1>Icon Table French</h1>
            <IconTableFrench icons={icons}/>
            <h1>Icons Green</h1>
            <IconTree icons={icons} className={"green"}/>
            <h1>Icons Red</h1>
            <IconTree icons={icons} className={"red"}/>
            <h1>Icon Rainbow</h1>
            <IconRainbow icon={"Aardvark"} colors={colors} className={"white"}/>
        </div>
    );
}

function ColorTree({colors}) {
    return Object.entries(colors).map(([color, colorCode]) => <span
        style={{margin: 10, padding: 20,width: "120px", height: "120px", backgroundColor: colorCode, color: color === "Black" ? "white" : "black", border: "solid 1px black"}}>{color}</span>);
}

function IconRainbow({icon, colors}) {
    return Object.values(colors).map(colorCode => <ColoredIcon icon={icon} color={colorCode} width="50" height="50"/>);
}

function IconTree({icons, className}) {
    return <div>
        {Object.entries(icons).map(([iconName, Icon]) => <Icon key={iconName} class={className} width="50" height="50" alt={iconName}/>)}
    </div>
}

function IconTable({icons, className}) {
    const rows = splitChunks(Object.entries(icons), 18);
    return <table align="center">
        {rows.map((columns, rowIdx) => <tr key={rowIdx}>{columns.map(([iconName, Icon]) => <td key={iconName}>
            <div><Icon class={className} width="70" height="70" alt={iconName}/></div>
            <div>{iconName}</div>
        </td>)}</tr>)}
    </table>
}

function IconTableFrench({icons, className}) {
    const rows = splitChunks(Object.entries(icons), 18);
    return <table align="center">
        {rows.map((columns, rowIdx) => <tr key={rowIdx}>{columns.map(([iconName, Icon]) => <td key={iconName}>
            <div><Icon class={className} width="70" height="70" alt={iconName}/></div>
            <div>{frenchIconNames[iconName]}</div>
        </td>)}</tr>)}
    </table>
}

export default App;
~~~

>App.css

~~~
body {
  font-family: Roboto,Verdana,Geneva,Arial,Helvetica,sans-serif;
  font-size: 12pt;
  font-weight: normal;
  height: auto;
}


.App {
  text-align: center;
  width: 100%;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #fefefe;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
}

.App-link {
  color: #61dafb;
}

.green > path{
  fill: green;
}

.red > path{
  fill: red;
}

.white > path{
  fill: white;
}

.white {
  background-color: black;
  border: 1px solid black;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
~~~
