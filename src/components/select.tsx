import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";

interface Props {
    items: {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
    defaultValue?: string;
    width?: number;
}

const Select = (props: Props) => {
    return (
        <SelectPrimitive.Root defaultValue={props.defaultValue}>
            <SelectPrimitive.Trigger asChild aria-label="Item">
                <button
                    className="flex items-center justify-between py-2"
                    style={{ width: props.width ? props.width : 121 }}
                >
                    <SelectPrimitive.Value />
                    <SelectPrimitive.Icon className="ml-2">
                        <ChevronDownIcon />
                    </SelectPrimitive.Icon>
                </button>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Content>
                <SelectPrimitive.ScrollUpButton className="flex items-center justify-center">
                    <ChevronUpIcon />
                </SelectPrimitive.ScrollUpButton>
                <SelectPrimitive.Viewport className="bg-black1 p-2 rounded-lg shadow-lg">
                    <SelectPrimitive.Group>
                        {props.items.map((i, idx) => (
                            <SelectPrimitive.Item
                                disabled={i.disabled}
                                key={`${idx}-${i.label}`}
                                value={i.value}
                                className="relative flex items-center px-8 py-2 rounded-md text-sm text-white font-medium focus:bg-white/10 radix-disabled:opacity-50 focus:outline-none select-none cursor-pointer"
                            >
                                <SelectPrimitive.ItemText>
                                    {i.label}
                                </SelectPrimitive.ItemText>
                                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                                    <CheckIcon />
                                </SelectPrimitive.ItemIndicator>
                            </SelectPrimitive.Item>
                        ))}
                    </SelectPrimitive.Group>
                </SelectPrimitive.Viewport>
                <SelectPrimitive.ScrollDownButton className="flex items-center justify-center">
                    <ChevronDownIcon />
                </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
        </SelectPrimitive.Root>
    );
};

export default Select;
