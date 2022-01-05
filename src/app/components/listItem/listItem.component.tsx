import React from 'react';

import './listItem.component.scss';
import { ListItem } from '../../modules/config/config.state';

export interface ListItemProps {
    listItem: ListItem;
}

export function ListItemTile({ listItem }: ListItemProps) {
    return (
        <li>
            <a
                className={listItem.href && 'withLink'}
                href={listItem.href}
                target="_blank"
            >
                <div className="icon-container">
                    <img
                        className={listItem.iconClassName}
                        alt={listItem.alt}
                        src={listItem.icon}
                    />
                </div>
                <div className="text-container">{listItem.content}</div>
            </a>
        </li>
    );
}
