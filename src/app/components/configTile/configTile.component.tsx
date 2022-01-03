import React from 'react';

// import './configtTile.component.scss';
import { ConfigItem, ConfigLabel } from '../../modules/config/config.state';
import blog from '../../images/blog.svg';
import fact from '../../images/fact.svg';
import heart from '../../images/heart.svg';
import interesting from '../../images/interesting.svg';
import news from '../../images/news.svg';
import programmer from '../../images/programmer.svg';
import quality from '../../images/quality.svg';
import reports from '../../images/reports.svg';
import rocket from '../../images/rocket.svg';
import teamMember from '../../images/teamMember.svg';
import tracking from '../../images/tracking.svg';

export interface ConfigTileProps {
    item: ConfigItem;
    label: ConfigLabel;
}

export function ConfigTile({ item, label }: ConfigTileProps) {
    // const handleClick = () => window.open(item.url, '_blank');

    return (
        <section className="about-page-item-title">
            <img alt="White rocket that moves on hover" src={rocket} />
            <h3>{item.headerContent}</h3>
            <ul className="about-page-list">
                {item.data.map((dataElement) => (
                    <li>
                        <a href={dataElement.href} target="_blank">
                            <div className="icon-container">
                                <img
                                    className={dataElement.iconClassName}
                                    alt={dataElement.alt}
                                    src={dataElement.iconName}
                                />
                            </div>
                            <div className="text-container">
                                {dataElement.content}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
