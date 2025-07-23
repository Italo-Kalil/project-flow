import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSectionView() {
    return (<>
    
        <section className="justify-center flex items-center">
            <div className="flex flex-col justify-center w-xl">
                <h1 className="text-dark font-bold text-4xl mb-4">Gerencie Seus Projetos com Inteligência</h1>
                
                <p className="text-left w-100 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet voluptatum in, modi vitae perferendis nisi placeat, quas doloribus accusamus consequatur neque minima voluptatibus, maxime est nobis sed dolore corrupti?</p>
                        <Button className="bg-yellow-500 w-50">Comece Agora</Button>
            </div>
        <Image src="/assets/heroSectionImage-removebg-preview.png" alt="heroSectionImagedashboard" width={400} height={500}/>
    </section>
    </>);
}
