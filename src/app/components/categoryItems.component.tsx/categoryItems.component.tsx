import { ContentItem, ContentLabel } from '../../modules/content/content.state';
import { ContentTile } from '../contentTile/contentTile.component';
import './categoryItems.component.scss';

interface CategoryItemsProps {
    categoryItems: Array<ContentItem>;
    label: ContentLabel;
    summaryLength: number;
}

export function CategoryItems({
    categoryItems,
    label,
    summaryLength
}: CategoryItemsProps): JSX.Element {
    return (
        <div className="category-items">
            {categoryItems.map((categoryItem: ContentItem) => (
                <ContentTile item={categoryItem} label={label} summaryLength={summaryLength}/>
            ))}
        </div>
    );
}
