import { type Meta, StoryObj } from "@storybook/react";
import { Drawer } from "@/lib/Drawer";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  render: () => (
    <>
      <Drawer
        triggerElement={<button>OPEN DRAWER</button>}
        content={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quisquam perspiciatis voluptate esse enim nobis, aliquid laboriosam
            ut? Vero, tempore! Unde quasi magni ipsa suscipit quam facilis aut
            sequi necessitatibus?
          </>
        }
      />
    </>
  ),
};
