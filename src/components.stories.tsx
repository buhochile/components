import { Drawer } from "@lib/Drawer";
import { Button } from "@/components/ui/button";

export const button = () => (
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
);

export const drawer = () => (
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
);
