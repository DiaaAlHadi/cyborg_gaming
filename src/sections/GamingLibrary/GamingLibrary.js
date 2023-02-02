import './GamingLibrary.css'
import { GamingLibraryCard, SectionHeader, SectionWrapper } from '../../components';
import GamingLibraryData from '../../Data/GamingLibraryData';
const GamingLibrary = () => {
    const Cards = GamingLibraryData.map(card => {
        return <GamingLibraryCard key={card.Id} Image={card.Image} Title={card.Title} Category={card.Category} Date_added={card.Date_added} Download={card.Download} />
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>
                    Gaming Library
                </SectionHeader>
                <div className="gaming-library-cards">
                    {Cards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default GamingLibrary