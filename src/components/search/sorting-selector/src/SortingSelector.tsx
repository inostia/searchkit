import * as React from "react";
import * as _ from "lodash";
import "../styles/index.scss";

import {
	SearchkitComponent,
	SortingAccessor,
	FastClick,
	SortingOptions,
	SearchkitComponentProps,
	SortingOption
} from "../../../../core"

export interface SortingProps extends SearchkitComponentProps {
	options:Array<SortingOption>
}


export class SortingSelector extends SearchkitComponent<SortingProps, any> {
	accessor:SortingAccessor

	defineAccessor() {
    return new SortingAccessor("sort", {options:this.props.options})
	}

	defineBEMBlocks() {
		return {
			container: (this.props.mod || "sorting-selector")
		}
	}

	renderOption(option) {
		return (
			<option key={option.label} value={option.label}>{option.label}</option>
		)
	}

	updateSorting(e) {
		let val:string = e.target.value;
		this.accessor.state = this.accessor.state.setValue(val);
		this.searchkit.performSearch();
	}

	getSelectedValue():string {
		return `${this.accessor.state.getValue()}`
	}

  render() {
    return (
      <div className={this.bemBlocks.container()}>
      	<select onChange={this.updateSorting.bind(this)} value={this.getSelectedValue()}>
					{_.map(this.props.options, this.renderOption.bind(this))}
				</select>
      </div>
    )
  }
}
