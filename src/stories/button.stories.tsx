import { Button } from "@/lib";
import { type Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <>
      <div className="grid gap-2 grid-cols-3 w-fit">
        <div>
          <h2>primary</h2>
          <Button variant={"primary"}>¡Quiero ahorrar dinero!</Button>
        </div>
        <div>
          <h2>outline</h2>
          <Button variant={"outline"}>¡Quiero ahorrar dinero!</Button>
        </div>
        <div>
          <h2>ghost</h2>
          <Button variant={"ghost"}>¡Quiero ahorrar dinero!</Button>
        </div>
        <div>
          <h2>success</h2>
          <Button variant={"success"}>¡Quiero ahorrar dinero!</Button>
        </div>
        <div>
          <h2>danger</h2>
          <Button variant={"danger"}>¡Quiero ahorrar dinero!</Button>
        </div>
      </div>
    </>
  ),
};
