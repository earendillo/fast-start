import React from 'react';
import './contentTile.component.scss';
import { ContentItem } from '../../modules/content/content.state';

export interface ContentTileProps {
    contentItem: ContentItem;
    contentLabel: ContentLabel;
}

export enum ContentLabel {
    'Article',
    'Blog',
    'Report',
}

export function ContentTile({ contentItem, contentLabel }: ContentTileProps) {
    return (
        <section
            className="content-tile"
            onClick={() => window.open(contentItem.url, '_blank')}
        >
            <div className="for-large-screens">
                <div className="content-tile-title">
                    <h3>{contentItem.title}</h3>
                </div>
                <div className="content-tile-img-and-container">
                    <div className="content-tile-img">
                        <img
                            alt="content item pic"
                            src={`${contentItem.imageUrl}`}
                        />
                        <div className="content-tile-label">
                            {ContentLabel[contentLabel]}
                        </div>
                    </div>
                    <div className="content-tile-container">
                        <div className="content-tile-summary">
                            <p>{`${contentItem.summary.slice(0, 120)}...`}</p>
                        </div>
                        <div className="content-tile-newssite-and-date">
                            <span>{`${contentItem.newsSite}, ${
                                contentItem.updatedAt
                                    ? contentItem.updatedAt.slice(0, 10)
                                    : contentItem.publishedAt.slice(0, 10)
                            }`}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="for-small-screens">
                <div className="content-tile-img">
                    <img
                        alt="content item pic"
                        src={`${contentItem.imageUrl}`}
                    />
                    <div className="content-tile-label">
                        {ContentLabel[contentLabel]}
                    </div>
                </div>
                <div className="content-tile-container">
                    <div className="content-tile-summary">
                        <h3>{contentItem.title}</h3>
                        <p>{`${contentItem.summary.slice(0, 120)}...`}</p>
                    </div>
                    <div className="content-tile-newssite-and-date">
                        <span>{`${contentItem.newsSite}, ${
                            contentItem.updatedAt
                                ? contentItem.updatedAt.slice(0, 10)
                                : contentItem.publishedAt.slice(0, 10)
                        }`}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
