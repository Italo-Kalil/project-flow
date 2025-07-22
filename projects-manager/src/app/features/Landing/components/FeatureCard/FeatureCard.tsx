import {
  faCircleCheck,
  faFilter,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeatureCardView() {
  return (
    <section className="flex flex-row gap-5 mt-5 justify-center">
      <div className="text-center justify-items-center">
        <h2 className="font-bold text-2xl mb-4 mt-4">Cadastro de Projetos</h2>
        <FontAwesomeIcon
          height={50}
          width={50}
          className="text-yellow-600"
          icon={faSquarePlus}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          inventore sint illum sit sed consectetur perspiciatis pariatur ad!
          Inventore ipsa eius non aspernatur officiis eos iste enim! Quia, vel
          laudantium?
        </p>
      </div>
      <div className="text-center justify-items-center">
        <h2 className="font-bold text-2xl mb-4 mt-4">Listagem Interativa</h2>
        <FontAwesomeIcon
          height={50}
          width={50}
          className="text-blue-600"
          icon={faFilter}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed
          corrupti quod, sapiente quibusdam consequuntur inventore illum
          laudantium, culpa odio quas error non modi, voluptas similique
          numquam. Repellendus, provident id.
        </p>
      </div>
      <div className="text-center justify-items-center">
        <h2 className="font-bold text-2xl mb-4 mt-4">Detalhes do Projeto</h2>
        <FontAwesomeIcon
          height={50}
          width={50}
          className="text-green-600"
          icon={faCircleCheck}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          molestiae voluptate odit aliquid non quidem maiores facilis, expedita
          soluta, commodi doloribus sunt quia cupiditate itaque quasi aut dolor
          laudantium minus!
        </p>
      </div>
    </section>
  );
}
