import "./index.css";
import { Drawer } from "@lib/Drawer";

export const button = () => <></>;

export const drawer = () => (
  <p>
    <Drawer
      triggerElement={<button>CLICK ME</button>}
      content={
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          quisquam perspiciatis voluptate esse enim nobis, aliquid laboriosam
          ut? Vero, tempore! Unde quasi magni ipsa suscipit quam facilis aut
          sequi necessitatibus?
        </>
      }
    />
  </p>
);
