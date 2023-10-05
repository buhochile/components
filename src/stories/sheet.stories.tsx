import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { type Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sheet> = {
  component: Sheet,
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Primary: Story = {
  render: () => (
    <div className="w-full min-h-screen">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sint
            deserunt obcaecati pariatur sapiente, molestiae distinctio rem illum
            eum hic tempore doloremque dolorem quia eaque nihil reiciendis
            eveniet asperiores totam?
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
};
