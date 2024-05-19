import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({id, title, description, className, imgClassName, titleClassName, spareImg, img}) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    className={className}
                    title={title}
                    titleClassName={titleClassName}
                    description={description}
                    img={img}
                    imgClassName={imgClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid