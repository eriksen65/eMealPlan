interface InfoTooltipProps {
    text: string;
}

/** A small info icon that reveals explanatory text in a tooltip on hover/focus. */
export function InfoTooltip({ text }: InfoTooltipProps) {
    return (
        <span className='info-tooltip' tabIndex={0}>
            <span className='info-tooltip__icon' aria-hidden='true'>
                ⓘ
            </span>
            <span className='info-tooltip__bubble' role='tooltip'>
                {text}
            </span>
        </span>
    );
}
