import {Svg, Path } from 'react-native-svg';

/**
 * Renders the "Dev Notes" SVG icon as a React Native component.
 *
 * The icon is displayed at a fixed size of 36x36 units with a black fill and a complex path forming the "Dev Notes" design.
 *
 * @returns The SVG element representing the "Dev Notes" icon.
 */
export default function DevNotesIcon(){
    return(
            <Svg
                width={36}
                height={36}
                viewBox="0 0 387.27 461.43"
                fill={'black'}
            >
                <Path
                    fillRule="evenodd"
                    d="M193.64,0c-20.12,0-32,7.04-38.58,15.57-2.47,3.2-4.04,6.43-5.01,9.15h-51.17v24.72H0v411.99h387.27V49.44h-98.88v-24.72h-51.17c-1.17-3.3-2.87-6.38-5.01-9.15-6.59-8.54-18.46-15.57-38.58-15.57ZM288.39,65.92v24.72H98.88v-24.72H16.48v379.03h354.31V65.92h-82.4ZM164.83,33.09l-.05.33-.33,7.78h-49.09v32.96h156.56v-32.96h-49.11l-.33-7.79-.03-.33c-.48-2.72-1.61-5.28-3.3-7.47-2.93-3.79-9.59-9.13-25.51-9.13s-22.58,5.32-25.54,9.15c-1.67,2.19-2.79,4.75-3.26,7.47ZM70.04,148.32v16.48h247.19v-16.48H70.04ZM317.23,222.47v16.48H70.04v-16.48h247.19ZM70.04,296.63v16.48h247.19v-16.48H70.04ZM193.64,387.27h-123.6v-16.48h123.6v16.48Z"
                />
            </Svg>


    )
}
