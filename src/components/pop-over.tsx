import * as PrimitivPopover from "@radix-ui/react-popover";

export default () => (
    <PrimitivPopover.Root>
        <PrimitivPopover.Trigger />
        <PrimitivPopover.Anchor />
        <PrimitivPopover.Portal>
            <PrimitivPopover.Content>
                <PrimitivPopover.Close />
                <PrimitivPopover.Arrow />
            </PrimitivPopover.Content>
        </PrimitivPopover.Portal>
    </PrimitivPopover.Root>
);
