// import { useStoreon } from 'storeon/react';
import './loadingIndicator.component.scss';

export function LoadingIndicator(): JSX.Element {
    // const { pending } = useStoreon('pending');

    // if (!pending) return null;
    return (<div className="loading-indicator-container">
        <div id="floatingCirclesG">
            <div className="f_circleG" id="frotateG_01"></div>
            <div className="f_circleG" id="frotateG_02"></div>
            <div className="f_circleG" id="frotateG_03"></div>
            <div className="f_circleG" id="frotateG_04"></div>
            <div className="f_circleG" id="frotateG_05"></div>
            <div className="f_circleG" id="frotateG_06"></div>
            <div className="f_circleG" id="frotateG_07"></div>
            <div className="f_circleG" id="frotateG_08"></div>
        </div>
    </div>);
    
}