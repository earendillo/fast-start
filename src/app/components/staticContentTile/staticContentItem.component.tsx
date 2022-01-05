import React from 'react';

import './staticContentItem.component.scss';
import { StaticContentItem } from '../../modules/config/config.state';

export interface StaticContentItemProps {
    staticContentItem: StaticContentItem;
}

export function StaticContentItemTile({ staticContentItem }: StaticContentItemProps) {
    return (
        <li>
            <a
                className={staticContentItem.href && 'withLink'}
                href={staticContentItem.href}
                target="_blank"
            >
                <div className="icon-container">
                    <img
                        className={staticContentItem.iconClassName}
                        alt={staticContentItem.alt}
                        src={staticContentItem.icon}
                    />
                </div>
                <div className="text-container">{staticContentItem.content}</div>
            </a>
        </li>
    );
}
