import './MostPopular.css';
import { Card, SectionHeader, SectionWrapper } from '../../components';
import MostPopularData from '../../Data/MostPopularData';

const MostPopular = () => {

    const Cards = MostPopularData.map(card => {
        return <Card key={card.Id} Image={card.Image} Title={card.Title} Category={card.Category} Rate={card.Rate} Download={card.Download} />
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>
                    Most Popular
                </SectionHeader>
                <div className="most-popular-items">
                    {Cards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default MostPopular