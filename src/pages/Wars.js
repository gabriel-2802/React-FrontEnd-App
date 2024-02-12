import React from 'react'
import Photo from '../assets/war-photo.jpg'
import WarInfo from '../components/WarInfo';
import '../styles/Wars.css'

const WarsList = [
    {
        title: "The Wars of the First Coalition",
        image: Photo,
        description: "A series of military campaigns that marked the beginning of the revolutionary wars in Europe, involving France against several European powers including Austria, Prussia, Great Britain, and Spain.",
        years: "1792-1797"
    },
    {
        title: "The Wars of the Second Coalition",
        image: Photo,
        description: "Following the success of France in the first coalition, this series saw renewed efforts by a new coalition including Austria, Russia, the Ottoman Empire, and Great Britain to contain the French expansion.",
        years: "1798-1802"
    },
    {
        title: "The War of the Third Coalition",
        image: Photo,
        description: "Characterized by the Battle of Austerlitz, also known as the Battle of the Three Emperors, this conflict saw Napoleon's significant victory against the Austro-Russian army.",
        years: "1803-1806"
    },
    {
        title: "The War of the Fourth Coalition",
        image: Photo,
        description: "This coalition, formed by Prussia, Russia, Saxony, Sweden, and Great Britain, aimed to dislodge France from its control over much of Western Europe.",
        years: "1806-1807"
    },
    {
        title: "The Peninsular War",
        image: Photo,
        description: "A prolonged conflict in Spain and Portugal, this war saw British and Portuguese forces fighting against the French occupation under Napoleon. It significantly weakened the French Empire.",
        years: "1808-1814"
    },
    {
        title: "The War of the Fifth Coalition",
        image: Photo,
        description: "Featuring Austria's attempt to break the French dominance, this war is notable for the Battle of Wagram, one of the largest battles of the Napoleonic Wars, resulting in a French victory.",
        years: "1809"
    },
    {
        title: "The War of the Sixth Coalition",
        image: Photo,
        description: "This coalition included major powers like Russia, Prussia, Austria, Sweden, Great Britain, and others against France. It culminated in the Battle of Leipzig, also known as the Battle of Nations.",
        years: "1812-1814"
    },
    {
        title: "The War of the Seventh Coalition",
        image: Photo,
        description: "Also known as the Hundred Days, this conflict followed Napoleon's escape from Elba and his temporary restoration to power. It ended with his defeat at the Battle of Waterloo.",
        years: "1815"
    }
];



function Wars() {
  return (
    <div className='wars'>
        <h1 className='warsTitle'> Napolenic Wars </h1>
        <div className='warsList'>
            {WarsList.map((warsItem, key) => {
               return <WarInfo key={key} image={warsItem.image} title={warsItem.title} description={warsItem.description} years={warsItem.years}/>

            } )}

        </div>
      
    </div>
  )
}

export default Wars
