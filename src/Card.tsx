import SocialCard from './SocialCard';

import linkedin_logo from './assets/linkedin.png';
import youtube_logo from './assets/youtube.png';
import instagram_logo from './assets/instagram.jpg';


const platforms = [
    {
        platform: 'linkedin',
        logo: linkedin_logo,
        alt:'Linkedin Logo (2025)',
        title:'LinkedIn',
        description:'Quick updates about my professional and academic journey as well as any project conception or deployment.',
        color: '#0077B5',
        link: 'https://www.linkedin.com/in/aayanh06'
    },
    {
        platform:'youtube',
        logo:youtube_logo,
        alt:'YouTube Logo (2025)',
        title:'YouTube',
        description:'In-depth videos about the inner-workings of my projects. I may also post tutorials or deep-dives!',
        color: '#FF0000',
        link: 'https://www.youtube.com/@aayanhamdani'
    },
    {
        platform:'instagram',
        logo:instagram_logo,
        alt:'Instagram Logo (2025)',
        title:'Instagram',
        description:'My personal page for those interested in getting to know me as a person outside of my academics.',
        color: 'linear-gradient(135deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
        link: 'https://www.instagram.com/aayanhamdani'
    },
];

function Card() {
  return (
    <div className='card-container'>
      {platforms.map((data, index) => (
        <SocialCard
          key={index}
          platform={data.platform}
          logo={data.logo}
          alt={data.alt}
          title={data.title}
          description={data.description}
          color={data.color}
          link={data.link}
        />
      ))}
    </div>
  );
}


export default Card