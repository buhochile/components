import { type Meta, StoryObj } from "@storybook/react";
import { Carousel } from "@/lib/Carousel";

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const image =
  "https://cdn.thenewstack.io/media/2018/09/55df6525-terry-davis-gods-lonely-programmer.png";

const image2 = "https://i.redd.it/2syl7wv01l461.jpg";

export const Primary: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="w-[38rem]">
        <Carousel fit={2} gap={48} images={[image, image, image, image]} />
      </div>
      <div className="h-96 w-96">
        <Carousel
          images={[
            { image: image2, alt: "happy terry" },
            { image, alt: "terry debugging" },
            { image, alt: "terry still debugging" },
            { image: image2, alt: "terry found the bug" },
          ]}
        />
      </div>
    </div>
  ),
};
