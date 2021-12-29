import React from 'react';
import './contentTile.component.scss';
import { ContentItem, ContentLabel } from '../../modules/content/content.state';

export interface ContentTileProps {
    item: ContentItem;
    label: ContentLabel;
    specifiedLength: number;
}

export function ContentTile({ item, label, specifiedLength }: ContentTileProps) {
    const summaryLength = item.summary.length;
    const usedLength = specifiedLength > summaryLength ? summaryLength : specifiedLength;

    return (
        <section
            className="content-tile"
            onClick={() => window.open(item.url, '_blank')}
        >
            <div className="for-small-screens">
                <div className="content-tile-title">
                    <h3 className={ContentLabel[label].toLowerCase()}>
                        {item.title}
                    </h3>
                </div>
                <div className="content-tile-img-and-container">
                    <div className="content-tile-img">
                        <img alt="content item pic" src={`${item.imageUrl}`} />
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
                            <p>{`${item.summary.slice(0, usedLength)}...`}</p>
                        </div>
                        <div className="content-tile-newssite-and-date">
                            <span>{`${item.newsSite}, ${
                                item.updatedAt
                                    ? item.updatedAt.slice(0, 10)
                                    : item.publishedAt.slice(0, 10)
                            }`}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="for-medium-and-large-screens">
                <div className="content-tile-img">
                    <img alt="content item pic" src={`${item.imageUrl}`} />
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
                        <p>{`${item.summary.slice(0, usedLength)}...`}</p>
                    </div>
                    <div className="content-tile-newssite-and-date">
                        <span>{`${item.newsSite}, ${
                            item.updatedAt
                                ? item.updatedAt.slice(0, 10)
                                : item.publishedAt.slice(0, 10)
                        }`}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
