interface InfoTooltipProps {
    text: string;
}

/** A small info icon that reveals explanatory text in a tooltip on hover/focus. */
export function InfoTooltip({ text }: InfoTooltipProps) {
    return (
        <span className='info-tooltip' tabIndex={0}>
            <svg
                className='info-tooltip__icon'
                viewBox='0 0 20 20'
                width='16'
                height='16'
                aria-hidden='true'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.6'
                strokeLinecap='round'>
                <circle cx='10' cy='10' r='8.2' />
                <line x1='10' y1='9' x2='10' y2='14' />
                <circle cx='10' cy='6' r='0.6' fill='currentColor' />
            </svg>
            <span className='info-tooltip__bubble' role='tooltip'>
                {text}
            </span>
        </span>
    );
}
