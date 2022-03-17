import React from 'react';
import {render, cleanup, getByTestId} from '@testing-library/react';
import { IdsIcon } from "../dist";
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Aardvark Icon', () => {
    it('should render a svg icon', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <IdsIcon data-testid="icon" icon="Aardvark" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
    });
});

describe('Alligator Icon', () => {
    it('should render an svg that is 50 pixels wide', async () => {
        const {getByTestId} = render(<button data-testid={"test-container"}>
            <IdsIcon data-testid="icon" icon="Alligator" width={50} height={50}/>
        </button>);
        expect(getByTestId("icon")).toBeDefined();
        expect(getByTestId("icon")).toHaveStyle("width: 50");
    });
});

describe('Invalid Icon', () => {
    it('should throw an error', async () => {
        try {
            render(<button data-testid={"test-container"}>
                <IdsIcon role="svg" width={50} height={50}/>
            </button>);
        } catch(err) {
            expect(err.message).toBe("'icon' property is invalid. The icon strings are case sensitive; try 'Aardvark'.");
        }
    });
});