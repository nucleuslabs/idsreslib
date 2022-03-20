import React from 'react';
import {render, cleanup, getByTestId} from '@testing-library/react';
import { localizedIcons } from "../dist";
import { en, fr } from "../locales";
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('English Icons', () => {
    it('should render a svg icon', async () => {
        const icons = localizedIcons('en');
        const {getByTestId} = render(<button data-testid={"test-container"}>
            {icons.map(([key, Icon, name]) => <div key={key} data-testid={key}><Icon data-testid={`${key}-icon`}/> - <div data-testid={`${key}-name`}>{name}</div></div> )}
        </button>);
        Object.entries(en.icons).map(([iconKey, iconName]) => {
            expect(getByTestId(iconKey)).toBeDefined();
            expect(getByTestId(`${iconKey}-icon`)).toBeDefined();
            expect(getByTestId(`${iconKey}-name`).innerHTML).toContain(iconName);
        });
    });
});

describe('French Icons', () => {
    it('should render a svg icon', async () => {
        const icons = localizedIcons('fr');
        const {getByTestId} = render(<button data-testid={"test-container"}>
            {icons.map(([key, Icon, name]) => <div key={key} data-testid={key}><Icon data-testid={`${key}-icon`}/> - <div data-testid={`${key}-name`}>{name}</div></div> )}
         </button>);
         Object.entries(fr.icons).map(([iconKey, iconName]) => {
             expect(getByTestId(iconKey)).toBeDefined();
             expect(getByTestId(`${iconKey}-icon`)).toBeDefined();
             expect(getByTestId(`${iconKey}-name`).innerHTML).toContain(iconName);
        });
    });
});
