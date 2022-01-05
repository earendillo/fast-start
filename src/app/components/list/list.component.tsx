import React from 'react';

import { ListItem } from '../../modules/config/config.state';
import { ListItemTile } from '../listItem/listItem.component';

interface ListProps {
    listItems: Array<ListItem>;
}

export function List({ listItems }: ListProps): JSX.Element {
    return (
        <ul className="about-page-list">
            {listItems.map((listItem: ListItem) => (
                <ListItemTile listItem={listItem} />
            ))}
        </ul>
    );
}
