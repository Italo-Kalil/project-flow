import { Button } from "@/components/ui/button";

export default function HeaderLanding() {
  return (
    <header className="w-full bg-white flex justify-between items-center  pb-4 mb-4 pt-4">
      <h1 className="font-poppins font-bold text-blue-600 text-4xl ml-3">Projeto Flow</h1>
      
      <div className="flex gap-4 mr-3">
        <Button variant={"outlineBlue"} className="text-blue-600">
          Register
        </Button>
        <Button variant={"outlineBlue"} className="text-blue-600">
          Sign In
        </Button>
      </div>
    </header>
  );
}
