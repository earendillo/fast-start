import React from 'react';
import { StaticContentItem } from '../../modules/config/config.state';
import { StaticContentItemWithAnchor } from '../staticContentItemWithAnchor/staticContentItemWithAnchor.component';


interface StaticContentListWithAnchorProps {
    staticContentListWithAnchorItems: Array<StaticContentItem>;
}

export function StaticContentListWithAnchor({ staticContentListWithAnchorItems }: StaticContentListWithAnchorProps): JSX.Element {
    return (
        <ul className="static-content-list">
            {staticContentListWithAnchorItems.map((staticContentItem: StaticContentItem) => (
                <StaticContentItemWithAnchor staticContentItem={staticContentItem} />
            ))}
        </ul>
    );
}
