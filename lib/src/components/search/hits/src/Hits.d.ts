import { SearchkitComponent, PageSizeAccessor, SearchkitComponentProps } from "../../../../core";
export interface HitsProps extends SearchkitComponentProps {
    hitsPerPage: number;
    highlightFields?: Array<string>;
}
export declare class Hits extends SearchkitComponent<HitsProps, any> {
    componentWillMount(): void;
    defineAccessor(): PageSizeAccessor;
    defineBEMBlocks(): {
        container: string;
        item: string;
    };
    renderResult(result: any): JSX.Element;
    renderInitialView(): JSX.Element;
    renderNoResults(): JSX.Element;
    render(): JSX.Element;
}
