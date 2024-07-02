interface SectionProps {
    title: string;
    className: string;
    bgUrl: string;
}

const Section = ({ title, className, bgUrl }: SectionProps) => {
    return (
        <section className={`section ${className}`}>
            <div className='wrapper-outer'>
                <div className='wrapper-inner'>
                    <div
                        className='background'
                        style={{ backgroundImage: `url(${bgUrl})` }}
                    >
                        <h2 className='section-title'>{title}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
