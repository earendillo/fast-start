import React from 'react';
import './contentTile.component.scss';
import { ContentItem } from '../../modules/content/content.state';

export interface ContentTileProps {
    contentItem: ContentItem;
}

export function ContentTile({ contentItem }: ContentTileProps) {
    const backgroundImage = {
        background: `url('${contentItem.imageUrl}') no-repeat`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <section
            style={backgroundImage}
            className="content-tile"
            onClick={() => window.open(contentItem.url, '_blank')}
        >
            <h3>{contentItem.title}</h3>
            <p>{contentItem.summary}</p>

            <span>{`Published by ${contentItem.newsSite} on ${
                contentItem.updatedAt
                    ? contentItem.updatedAt
                    : contentItem.publishedAt
            }`}</span>
        </section>
    );
}