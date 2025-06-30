type SocialCardProps = {
    platform: string;
    logo: string;
    alt: string;
    title: string;
    description: string;
    color: string;
    link: string;
};

function SocialCard({ platform, logo, alt, title, description, color, link }: SocialCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <div className="social-card">
      <div className="card-header" style={{ background: color }} />
      <img src={logo} alt={alt} className={`${platform}-logo`} />
      <h1 className={`${platform}-title`}>{title}</h1>
      <p className={`${platform}-desc`}>{description}</p>
    </div>
    </a>
  );
}

export default SocialCard;