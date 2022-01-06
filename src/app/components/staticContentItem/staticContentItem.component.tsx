import React from 'react';
import { StaticContentItem } from '../../modules/config/config.state';
import './staticContentItem.component.scss';

export interface StaticContentItemProps {
    staticContentItem: StaticContentItem;
}

export function StaticContentItemTile({
    staticContentItem
}: StaticContentItemProps) {
    return (
        <li>
            <div className="icon-container">
                <img
                    className={staticContentItem.iconClassName}
                    alt={staticContentItem.alt}
                    src={staticContentItem.icon}
                />
            </div>
            <div className="text-container">{staticContentItem.content}</div>
        </li>
    );
}
