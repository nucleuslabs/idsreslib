import React from 'react';
import {render, cleanup, getByTestId} from '@testing-library/react';
import {localizedGroups} from "../dist";
import {en, fr} from "../locales";
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('English groups with english icons', () => {
	it('should render divs with words for groups', async() => {
		const groups = localizedGroups('en');
		const {getByTestId} = render(<button data-testid={"test-container"}>
			{groups.map(([key, groupIcons, translated]) => {
				return <div key={key} data-testid={key}>
					{groupIcons.map(([key, Icon, name]) => <div key={key} data-testid={key}><Icon data-testid={`${key}-icon`}/> - <div data-testid={`${key}-name`}>{name}</div></div>)}
					- <div data-testid={`${key}-name`}>{translated}</div></div>
			})}
		</button>);

		// Ensure all groups are accounted for
		Object.entries(en.groups).map(([groupKey, groupName]) => {
			console.log({groupKey, groupName});
			expect(getByTestId(groupKey)).toBeDefined();
			expect(getByTestId(`${groupKey}-name`).innerHTML).toContain(groupName);
		});
		// Ensure all icons are accounted for
		Object.entries(en.icons).map(([iconKey, iconName]) => {
			expect(getByTestId(iconKey)).toBeDefined();
			expect(getByTestId(`${iconKey}-icon`)).toBeDefined();
			expect(getByTestId(`${iconKey}-name`).innerHTML).toContain(iconName);
		});
	});
});

describe('French groups with english icons', () => {
	it('should render divs with words for groups', async() => {
		const groups = localizedGroups('fr');
		const {getByTestId} = render(<button data-testid={"test-container"}>
			{groups.map(([key, groupIcons, translated]) => {
				return <div key={key} data-testid={key}>
					{groupIcons.map(([key, Icon, name]) => <div key={key} data-testid={key}><Icon data-testid={`${key}-icon`}/> - <div data-testid={`${key}-name`}>{name}</div></div>)}
					- <div data-testid={`${key}-name`}>{translated}</div></div>
			})}
		</button>);

		// Ensure all groups are accounted for
		Object.entries(fr.groups).map(([groupKey, groupName]) => {
			console.log({groupKey, groupName});
			expect(getByTestId(groupKey)).toBeDefined();
			expect(getByTestId(`${groupKey}-name`).innerHTML).toContain(groupName);
		});
		// Ensure all icons are accounted for
		Object.entries(fr.icons).map(([iconKey, iconName]) => {
			expect(getByTestId(iconKey)).toBeDefined();
			expect(getByTestId(`${iconKey}-icon`)).toBeDefined();
			expect(getByTestId(`${iconKey}-name`).innerHTML).toContain(iconName);
		});
	});
});
