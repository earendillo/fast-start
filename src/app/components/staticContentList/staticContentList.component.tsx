import React from 'react';
import { StaticContentItem } from '../../modules/config/config.state';
import { StaticContentItemTile } from '../staticContentItem/staticContentItem.component';
import { StaticContentItemWithAnchor } from '../staticContentItemWithAnchor/staticContentItemWithAnchor.component';

interface StaticContentListProps {
    staticContentListItems: Array<StaticContentItem>;
}

export function StaticContentList({
    staticContentListItems
}: StaticContentListProps): JSX.Element {
    
    function determineIfStaticContentItemWithAnchor(
        staticContentItem: StaticContentItem
    ): JSX.Element {
        return staticContentItem.href ? (
            <StaticContentItemWithAnchor
                staticContentItem={staticContentItem}
            />
        ) : (
            <StaticContentItemTile staticContentItem={staticContentItem} />
        );
    }

    return (
        <ul className="static-content-list">
            {staticContentListItems.map(determineIfStaticContentItemWithAnchor)}
        </ul>
    );
}
