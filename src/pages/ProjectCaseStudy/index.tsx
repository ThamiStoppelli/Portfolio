import { useParams } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";
import * as S from "./styles";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const study = caseStudies[slug as keyof typeof caseStudies];

  if (!study) {
    return (
        <S.Page>
            <S.PageEmpathy>
                <S.BackLink to="/">← Back to portfolio</S.BackLink>
                <p>I'm on it and this project's page will be available soon! ☺️</p>
                <div>
                    <S.FooterButton to="/" state={{ scrollTo: "contact" }} variant="primary">
                    Let's Work Together
                    </S.FooterButton>
                    <S.FooterButton to="/" state={{ scrollTo: "projects" }}variant="secondary">
                    View more projects
                    </S.FooterButton>
                </div>
            </S.PageEmpathy>
        </S.Page>
    )
  }

  return (
    <S.Page>
      <S.BackLink to="/">← Back to portfolio</S.BackLink>

      <S.Hero>
        <S.HeroContent>
            <p>{study.hero.role}</p>
            <h1>{study.hero.title}</h1>
            <S.Description>
              {study.hero.description}
            </S.Description>
            <span>
              {study.hero.year} • {study.hero.duration}
            </span>
        </S.HeroContent>

        <S.HeroVisual>
            <img
            src={study.hero.heroImage}
            alt={study.hero.title}
            />
        </S.HeroVisual>
      </S.Hero>

      <S.Layout>
        <S.SideNav>
          <a href="#overview">Overview</a>
          <a href="#key-metrics">Key Metrics</a>

          {study.sections.map((section) => {
            const id = section.title.toLowerCase().replaceAll(" ", "-");

            return (
              <a key={section.title} href={`#${id}`}>
                {section.title}
              </a>
            );
          })}
        </S.SideNav>

        <S.Content>
          <S.Section id="overview">
            <h2>Overview</h2>
            <p>{study.overview.challenge}</p>
            <p>{study.overview.goal}</p>
          </S.Section>

          <S.Section id="key-metrics">
            <h2>Key Metrics</h2>

            <S.MetricsGrid>
              {study.metrics.map((metric) => (
                <S.MetricCard key={metric}>
                  <h3>{metric}</h3>
                </S.MetricCard>
              ))}
            </S.MetricsGrid>
          </S.Section>

          {study.sections.map((section) => {
            const id = section.title.toLowerCase().replaceAll(" ", "-");

            return (
              <S.Section key={section.title} id={id}>
                <h2>{section.title}</h2>
                
                {section.blocks ? (
                    <S.Blocks>
                        {section.blocks?.map((block, index) => (
                            <S.Block key={index}>

                            {block.text && <p>{block.text}</p>}

                            {block.image && (
                                <S.Image>
                                <img src={block.image} alt={section.title} />
                                </S.Image>
                            )}

                            </S.Block>
                        ))}
                    </S.Blocks>
                    ) : (
                    <>
                        {section.video && (
                          <>
                            <S.Video>
                              <video
                                src={section.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                              />
                            </S.Video>
                          </>
                        )}

                        {section.text && <p>{section.text}</p>}

                        {section.image && (
                        <S.Image>
                            <img src={section.image} alt={section.title} />
                        </S.Image>
                        )}
                    </>
                )}
              </S.Section>
            );
          })}

          {study.behanceUrl ? (
            <S.ExternalLink 
                href={study.behanceUrl}
                target="_blank"
            >
                View full case study on Behance →
            </S.ExternalLink>
          ) : (
            <p></p>
          )}
        </S.Content>
      </S.Layout>
      <S.CaseFooter>
        <h3>Let's build thoughtful products together</h3>
        <div>
            <S.FooterButton to="/" state={{ scrollTo: "contact" }} variant="primary">
              Let's Work Together
            </S.FooterButton>

            <S.FooterButton to="/" state={{ scrollTo: "projects" }}variant="secondary">
              View more projects
            </S.FooterButton>
        </div>
      </S.CaseFooter>
    </S.Page>
  );
}