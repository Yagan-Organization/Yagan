import {Svg, Path } from 'react-native-svg';

/****
 * Renders a static account/user SVG icon with fixed dimensions.
 *
 * @returns A React element displaying an account icon using SVG.
 */
export default function AccountIcon(){
    return(
        <Svg
            width={36}
            height={36}
            viewBox="0 0 268.2 287.82"
            fill={'black'}
        >
            <Path
                fillRule="evenodd"
                d="M81.77,75.23c0-35.31,24.33-62.14,52.33-62.14s52.33,26.83,52.33,62.14-24.33,62.14-52.33,62.14-52.33-26.85-52.33-62.14ZM134.1,0c-37.04,0-65.41,34.67-65.41,75.23,0,19.1,6.28,36.89,16.81,50.37C29.84,151.11,0,219.18,0,281.28v6.54h268.2v-6.54c0-62.44-29.88-130.32-85.5-155.69,10.52-13.48,16.81-31.27,16.81-50.37C199.51,34.67,171.14,0,134.1,0ZM173.07,135.69c-10.78,9.22-24.18,14.76-38.97,14.76s-28.21-5.53-38.99-14.77C45.07,155.99,15.27,215.9,13.2,274.74h241.78c-2.05-59.16-31.91-118.9-81.91-139.04Z"
            />
        </Svg>
    );
};



