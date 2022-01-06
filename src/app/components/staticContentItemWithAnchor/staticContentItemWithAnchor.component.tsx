import React from 'react';
import { StaticContentItem } from '../../modules/config/config.state';
import './staticContentItemWithAnchor.component.scss';

export interface StaticContentItemWithAnchorProps {
    staticContentItem: StaticContentItem;
}

export function StaticContentItemWithAnchor({ staticContentItem }: StaticContentItemWithAnchorProps) {

    return (
        <li>
            <a
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
