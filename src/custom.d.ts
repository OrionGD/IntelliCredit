declare module '@splinetool/react-spline' {
    import { HTMLAttributes, Ref } from 'react';

    export interface SplineProps extends HTMLAttributes<HTMLDivElement> {
        scene: string;
        onLoad?: (e: any) => void;
    }

    const Spline: React.ForwardRefExoticComponent<SplineProps & React.RefAttributes<HTMLDivElement>>;
    export default Spline;
}
