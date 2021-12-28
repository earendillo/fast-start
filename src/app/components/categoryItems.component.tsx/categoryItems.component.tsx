import { ContentItem, ContentLabel } from '../../modules/content/content.state';
import { ContentTile } from '../contentTile/contentTile.component';
import { Fragment } from 'react';
import './categoryItems.component.scss';

interface CategoryItemsProps {
    categoryItems: Array<ContentItem>;
    label: ContentLabel;
    specifiedLength: number;
}

export function CategoryItems({
    categoryItems,
    label,
    specifiedLength,
}: CategoryItemsProps): JSX.Element {
    return (
        <Fragment>
            {categoryItems.map((categoryItem: ContentItem) => (
                <ContentTile
                    item={categoryItem}
                    label={label}
                    specifiedLength={specifiedLength}
                />
            ))}
        </Fragment>
    );
}
