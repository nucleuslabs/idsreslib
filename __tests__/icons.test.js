import React from 'react';
import { render, cleanup } from '@testing-library/react';

const {
    Aardvark,
    Acorn,
    Albatross,
    Alligator,
    Ant,
    Antelope,
    Armadillo,
    BagSeedling,
    Bat,
    Bear,
    Beaver,
    Bee,
    BenchTree,
    Binoculars,
    Boar,
    Buffalo,
    Bug,
    Bugs,
    Bull,
    Butterfly,
    Cactus,
    Camel,
    Cardinal,
    Cat,
    Chestnut,
    CloudSun,
    Clover,
    Cougar,
    Crow,
    Deer,
    Dog,
    Dolphin,
    Dove,
    Dragon,
    Dragonfly,
    Eagle,
    Elephant,
    Elk,
    Feather,
    FeatherPointed,
    Fire,
    FireSmoke,
    Fish,
    Flamingo,
    Flower,
    FlowerDaffodil,
    FlowerTulip,
    Fox,
    Frog,
    Gazelle,
    Giraffe,
    Goat,
    Goose,
    Grasshopper,
    Heron,
    Hippopotamus,
    Horse,
    HouseTree,
    Hummingbird,
    Icicles,
    Jellyfish,
    Kiwi,
    Koala,
    Ladybug,
    Leaf,
    LeafMaple,
    LeafOak,
    Lion,
    Lizard,
    Llama,
    Lobster,
    Locust,
    Loon,
    Manta,
    Monkey,
    Moose,
    Mosquito,
    Mound,
    Mountain,
    Mountains,
    Mouse,
    Mushroom,
    Narwhal,
    Octopus,
    Otter,
    Owl,
    Panda,
    Peacock,
    Pelican,
    Penguin,
    PersonHiking,
    Pompebled,
    Porcupine,
    Pterodactyl,
    Rabbit,
    Raccoon,
    Raindrops,
    Ram,
    Rhinoceros,
    Rooster,
    Seahorse,
    Seal,
    Seedling,
    Shark,
    Sheep,
    SignsPost,
    Snail,
    Snake,
    Spider,
    SpiderBlackWidow,
    SpiderWeb,
    Squirrel,
    Stegosaurus,
    Swan,
    Tiger,
    TreeDeciduous,
    TreeLarge,
    TreePalm,
    Triceratops,
    Trillium,
    Turkey,
    Turtle,
    Tyrannosaurus,
    Unicorn,
    Volcano,
    Vulture,
    Water,
    Wave,
    Whale,
    Wind,
    Wolf,
    Woodpecker,
    Worm
} = require("../dist").icons;

afterEach(cleanup);

describe('Aardvark Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Aardvark data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Albatross Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Albatross data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Alligator Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Alligator data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Ant Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Ant data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Antelope Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Antelope data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Armadillo Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Armadillo data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Bat Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Bat data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Bear Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Bear data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Beaver Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Beaver data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Bee Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Bee data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Boar Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Boar data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Buffalo Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Buffalo data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Bull Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Bull data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Butterfly Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Butterfly data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Camel Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Camel data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Cardinal Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Cardinal data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Cat Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Cat data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Cougar Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Cougar data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Crow Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Crow data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Deer Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Deer data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Dog Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Dog data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Dolphin Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Dolphin data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Dove Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Dove data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Dragon Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Dragon data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Dragonfly Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Dragonfly data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Eagle Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Eagle data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Elephant Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Elephant data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Elk Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Elk data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Fish Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Fish data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Flamingo Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Flamingo data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Fox Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Fox data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Frog Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Frog data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Gazelle Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Gazelle data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Giraffe Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Giraffe data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Goat Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Goat data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Goose Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Goose data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Grasshopper Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Grasshopper data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Heron Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Heron data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Hippopotamus Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Hippopotamus data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Horse Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Horse data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Hummingbird Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Hummingbird data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Jellyfish Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Jellyfish data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Kiwi Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Kiwi data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Koala Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Koala data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Ladybug Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Ladybug data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Lion Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Lion data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Lizard Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Lizard data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Llama Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Llama data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Lobster Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Lobster data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Loon Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Loon data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Manta Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Manta data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Monkey Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Monkey data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Moose Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Moose data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Mosquito Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Mosquito data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Mouse Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Mouse data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Narwhal Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Narwhal data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Octopus Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Octopus data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Otter Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Otter data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Owl Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Owl data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Panda Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Panda data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Peacock Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Peacock data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Pelican Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Pelican data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Penguin Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Penguin data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Porcupine Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Porcupine data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Pterodactyl Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Pterodactyl data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Rabbit Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Rabbit data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Raccoon Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Raccoon data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Ram Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Ram data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Rhinoceros Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Rhinoceros data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Rooster Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Rooster data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Seahorse Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Seahorse data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Seal Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Seal data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Shark Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Shark data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Sheep Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Sheep data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Snail Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Snail data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Snake Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Snake data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Spider Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Spider data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Squirrel Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Squirrel data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Stegosaurus Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Stegosaurus data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Swan Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Swan data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Tyrannosaurus Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Tyrannosaurus data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Tiger Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Tiger data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Triceratops Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Triceratops data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Turkey Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Turkey data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Turtle Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Turtle data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Unicorn Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Unicorn data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Vulture Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Vulture data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Whale Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Whale data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Wolf Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Wolf data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Woodpecker Icon', () => {
    it('should render an svg', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <Woodpecker data-testid="icon" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});

describe('Fire Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Fire data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Binoculars Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Binoculars data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Feather Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Feather data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Bug Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Bug data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Water Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Water data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Leaf Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Leaf data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Flower Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Flower data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Seedling Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Seedling data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Wind Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Wind data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('FlowerTulip Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><FlowerTulip data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Raindrops Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Raindrops data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Worm Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Worm data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Wave Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Wave data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Volcano Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Volcano data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Trillium Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Trillium data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('TreePalm Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><TreePalm data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('TreeLarge Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><TreeLarge data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('TreeDeciduous Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><TreeDeciduous data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('SpiderWeb Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><SpiderWeb data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('SpiderBlackWidow Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><SpiderBlackWidow data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('SignsPost Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><SignsPost data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Pompebled Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Pompebled data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('PersonHiking Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><PersonHiking data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Mushroom Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Mushroom data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Mountains Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Mountains data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Mountain Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Mountain data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Mound Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Mound data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Locust Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Locust data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('LeafOak Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><LeafOak data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('LeafMaple Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><LeafMaple data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Icicles Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Icicles data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('HouseTree Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><HouseTree data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('FlowerDaffodil Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><FlowerDaffodil data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('FireSmoke Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><FireSmoke data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('FeatherPointed Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><FeatherPointed data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Clover Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Clover data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('CloudSun Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><CloudSun data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Chestnut Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Chestnut data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Cactus Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Cactus data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Bugs Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Bugs data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('BenchTree Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><BenchTree data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('BagSeedling Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><BagSeedling data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
describe('Acorn Icon', () => {
    it('should render an svg', async() => {
        const {getByTestId} = render(<button data-testid={"test-container"}><Acorn data-testid="icon" width={50} height={50}/></button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});
