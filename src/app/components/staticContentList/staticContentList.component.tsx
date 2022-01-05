import React from 'react';
import { StaticContentItem } from '../../modules/config/config.state';
import { StaticContentItemTile } from '../staticContentItem/staticContentItem.component';

interface StaticContentListProps {
    staticContentListItems: Array<StaticContentItem>;
}

export function StaticContentList({ staticContentListItems }: StaticContentListProps): JSX.Element {
    return (
        <ul className="static-content-list">
            {staticContentListItems.map((staticContentItem: StaticContentItem) => (
                <StaticContentItemTile staticContentItem={staticContentItem} />
            ))}
        </ul>
    );
}
