import React from 'react';
import {render, cleanup, getByTestId} from '@testing-library/react';
import { localizedColors } from "../dist";
import { en, fr, es } from "../locales";
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('English Colors', () => {
    it('should render divs with words for colors', async () => {
        const colors = localizedColors('en');
        const {getByTestId} = render(<button data-testid={"test-container"}>
            {colors.map(([key, color, name]) => <div key={key} data-testid={key}><div data-testid={`${key}-color`}>{color}</div> - <div data-testid={`${key}-name`}>{name}</div></div> )}
        </button>);
        Object.entries(en.colors).map(([colorKey, colorName]) => {
            expect(getByTestId(colorKey)).toBeDefined();
            expect(getByTestId(`${colorKey}-color`)).toBeDefined();
            expect(getByTestId(`${colorKey}-name`).innerHTML).toContain(colorName);
        });
    });
});

describe('French Colors', () => {
    it('should render divs with words for colors', async () => {
        const colors = localizedColors('fr');
        const {getByTestId} = render(<button data-testid={"test-container"}>
            {colors.map(([key, color, name]) => <div key={key} data-testid={key}><div data-testid={`${key}-color`}>{color}</div> - <div data-testid={`${key}-name`}>{name}</div></div> )}
        </button>);
        Object.entries(fr.colors).map(([colorKey, colorName]) => {
            expect(getByTestId(colorKey)).toBeDefined();
            expect(getByTestId(`${colorKey}-color`)).toBeDefined();
            expect(getByTestId(`${colorKey}-name`).innerHTML).toContain(colorName);
        });
    });
});

describe('Spanish Colors', () => {
    it('should render divs with words for colors', async () => {
        const colors = localizedColors('es');
        const {getByTestId} = render(<button data-testid={"test-container"}>
            {colors.map(([key, color, name]) => <div key={key} data-testid={key}><div data-testid={`${key}-color`}>{color}</div> - <div data-testid={`${key}-name`}>{name}</div></div> )}
        </button>);
        Object.entries(es.colors).map(([colorKey, colorName]) => {
            expect(getByTestId(colorKey)).toBeDefined();
            expect(getByTestId(`${colorKey}-color`)).toBeDefined();
            expect(getByTestId(`${colorKey}-name`).innerHTML).toContain(colorName);
        });
    });
});
