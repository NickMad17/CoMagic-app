import './Preview.scss'
import cn from 'classnames';

interface PreviewProps {
    className?: string | undefined
}

export const Preview = ({ className }:PreviewProps) => {
    return (
        <span className={cn('loader', className)}></span>
    );
};
