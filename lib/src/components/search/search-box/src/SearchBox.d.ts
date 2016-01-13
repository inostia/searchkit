import { SearchAccessor, SearchkitComponent, SearchkitComponentProps } from "../../../../core";
export interface SearchBoxProps extends SearchkitComponentProps {
    searchOnChange?: boolean;
    queryFields?: Array<string>;
    mod?: string;
    autofocus?: boolean;
    queryOptions?: any;
    prefixQueryFields?: Array<string>;
}
export declare class SearchBox extends SearchkitComponent<SearchBoxProps, any> {
    accessor: SearchAccessor;
    lastSearchMs: number;
    constructor(props: SearchBoxProps);
    translations: {
        "searchbox.placeholder": string;
    };
    componentWillMount(): void;
    defineBEMBlocks(): {
        container: string;
    };
    defineAccessor(): SearchAccessor;
    onSubmit(event: any): void;
    searchQuery(query: any): void;
    getValue(): string;
    onChange(e: any): void;
    setFocusState(focused: boolean): void;
    render(): JSX.Element;
}
