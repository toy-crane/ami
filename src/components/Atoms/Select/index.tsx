import {
	Select as ThemeUISelect,
	BoxOwnProps,
	SelectProps as ThemeUISelectProps,
} from "theme-ui";
import React, { forwardRef } from "react";

type BoxPropsWithRef<
	T extends React.ElementType,
	P extends BoxOwnProps = BoxOwnProps
> = React.ComponentPropsWithRef<T> & P;

type option = {
	key: string;
	value: string;
};

export type SelectProps = BoxPropsWithRef<
	"select",
	ThemeUISelectProps & {
		defaultValue: string;
		options: option[];
		name: string;
	}
>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ defaultValue, options, name }: SelectProps, ref) => {
		return (
			<ThemeUISelect defaultValue={defaultValue} ref={ref} name={name}>
				{options.map((option) => (
					<option key={option.key}>{option.value}</option>
				))}
			</ThemeUISelect>
		);
	}
);

export default Select;
