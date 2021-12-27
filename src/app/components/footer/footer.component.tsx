import './footer.component.scss';

interface FooterProps {
    aboutPageInfo: string;
}

export function Footer({ aboutPageInfo }: FooterProps): JSX.Element {
    function renderAPIInfo(): JSX.Element {
        return (
            <p>
                This page relies on data provided by
                <a
                    href="https://api.spaceflightnewsapi.net/v3/documentation"
                    target="_blank"
                >
                     Spaceflight News API
                </a>
            </p>
        );
    }

    return (
        <div className="footer-container">
            <div className="info-container">{aboutPageInfo}</div>
            <div className="used-api-container">{renderAPIInfo()}</div>
        </div>
    );
}
