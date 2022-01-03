import React, { Fragment } from 'react';

import './aboutPageItems.component.scss';
import { ConfigItem, ConfigLabel } from '../../modules/config/config.state';
import { ConfigTile } from '../configTile/configTile.component';

interface AboutPageItemsProps {
    items: Array<ConfigItem>;
    label: ConfigLabel;
}

export function AboutPageItems({
    items,
    label,
}: AboutPageItemsProps): JSX.Element {
    return (
        <Fragment>
            {items.map((AboutPageItem: ConfigItem) => (
                <ConfigTile
                    item={AboutPageItem}
                    label={label}
                />
            ))}
        </Fragment>
    );
}
