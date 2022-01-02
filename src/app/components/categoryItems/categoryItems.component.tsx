import React, { Fragment } from 'react';

import './categoryItems.component.scss';
import { ContentItem, ContentLabel } from '../../modules/content/content.state';
import { ContentTile } from '../contentTile/contentTile.component';


interface CategoryItemsProps {
    categoryItems: Array<ContentItem>;
    label: ContentLabel;
    length: number;
}

export function CategoryItems({
    categoryItems,
    label,
    length,
}: CategoryItemsProps): JSX.Element {
    return (
        <Fragment>
            {categoryItems.map((categoryItem: ContentItem) => (
                <ContentTile
                    item={categoryItem}
                    label={label}
                    length={length}
                />
            ))}
        </Fragment>
    );
}
