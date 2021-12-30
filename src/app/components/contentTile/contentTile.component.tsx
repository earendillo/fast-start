import './contentTile.component.scss';
import { ContentItem, ContentLabel } from '../../modules/content/content.state';
import { trimDate, trimSummary } from '../../utils/utils';
import React from 'react';

export interface ContentTileProps {
    item: ContentItem;
    label: ContentLabel;
    length: number;
}

export function ContentTile({ item, label, length }: ContentTileProps) {
    const handleClick = () => window.open(item.url, '_blank');

    return (
        <section
            className="content-tile"
            onClick={handleClick}
        >
            <div className="for-small-screens">
                <div className="content-tile-title">
                    <h3 className={ContentLabel[label].toLowerCase()}>
                        {item.title}
                    </h3>
                </div>
                <div className="content-tile-img-and-container">
                    <div className="content-tile-img">
                        <img alt="Image illustrating current content" src={`${item.imageUrl}`} />
                        <div
                            className={`content-tile-label ${ContentLabel[
                                label
                            ].toLowerCase()}-label`}
                        >
                            {ContentLabel[label]}
                        </div>
                    </div>
                    <div className="content-tile-container">
                        <div className="content-tile-summary">
                            <p>{trimSummary(item.summary, length)}</p>
                        </div>
                        <div className="content-tile-newssite-and-date">
                            <span>{`${item.newsSite}, ${
                                item.updatedAt
                                    ? trimDate(item.updatedAt)
                                    : trimDate(item.publishedAt)
                            }`}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="for-medium-and-large-screens">
                <div className="content-tile-img">
                    <img alt="Image illustrating current content" src={`${item.imageUrl}`} />
                    <div
                        className={`content-tile-label ${ContentLabel[
                            label
                        ].toLowerCase()}-label`}
                    >
                        {ContentLabel[label]}
                    </div>
                </div>
                <div className="content-tile-container">
                    <div className="content-tile-summary">
                        <div className="content-tile-title">
                            <h3 className={ContentLabel[label].toLowerCase()}>
                                {item.title}
                            </h3>
                        </div>
                        <p>{trimSummary(item.summary, length)}</p>
                    </div>
                    <div className="content-tile-newssite-and-date">
                        <span>{`${item.newsSite}, ${
                            item.updatedAt
                                ? trimDate(item.updatedAt)
                                : trimDate(item.publishedAt)
                        }`}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
