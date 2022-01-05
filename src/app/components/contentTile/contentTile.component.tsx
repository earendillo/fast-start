import React from 'react';
import { ContentItem, ContentLabel } from '../../modules/content/content.state';
import { trimDate, trimSummary } from '../../utils/utils';
import './contentTile.component.scss';

export interface ContentTileProps {
    item: ContentItem;
    label: ContentLabel;
    length: number;
}

export function ContentTile({ item, label, length }: ContentTileProps) {
    const handleClick = () => window.open(item.url, '_blank');

    return (
        <section className="tile" onClick={handleClick}>
            <div className="tile-img-container">
                <img
                    className="tile-img"
                    alt="Illustration of current content"
                    src={`${item.imageUrl}`}
                />
                <div
                    className={`label-${ContentLabel[
                        label
                    ].toLowerCase()}`}
                >
                    {ContentLabel[label]}
                </div>
            </div>
            <div className="tile-text-container">
                <div className="summary">
                        <h3 className={`tile-title-${ContentLabel[label].toLowerCase()}`}>
                            {item.title}
                        </h3>
                    <p>{trimSummary(item.summary, length)}</p>
                </div>
                <div className="newssite-and-date">
                    <span>{`${item.newsSite}, ${
                        item.updatedAt
                            ? trimDate(item.updatedAt)
                            : trimDate(item.publishedAt)
                    }`}</span>
                </div>
            </div>
        </section>
    );
}
